import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {
  motion,
  easeInOut,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import type { MotionValue } from 'framer-motion';

// Kling 3.0 Pro clip: assembled desk (first frame) → exploded desk (last frame).
// H.264 with a keyframe every 6 frames: ~60% smaller than all-keyframe, same scrub speed.
// Files are served with an immutable cache header, so bump the folder version when they change.
const ASSETS = '/about/v1';
const VIDEO_WIDE = `${ASSETS}/float-apart-1600.mp4`;
const VIDEO_NARROW = `${ASSETS}/float-apart-960.mp4`;
const VIDEO_LOW = `${ASSETS}/float-apart-720.mp4`;
const ASSEMBLED = `${ASSETS}/assembled.webp`;
const EXPLODED = `${ASSETS}/exploded.webp`;
const ASPECT = 16 / 9;

declare global {
  interface Window {
    __aboutVideo?: Promise<Blob>;
  }
}

// Runs inline while the HTML is still parsing, so the download starts before the JS bundle boots.
// Data Saver or 2G gets the lightest file; a '3g' estimate steps down one size. Chrome's estimate
// leans on latency, so far-away visitors on fast lines can read as '3g': they still get 960px, never 720px.
// Reduced-motion users skip the download entirely.
const START_VIDEO_FETCH = `(function(){try{
if(window.__aboutVideo||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var c=navigator.connection||{};
var t=c.effectiveType||'';
var wide=window.matchMedia('(min-width: 768px)').matches;
var src=(c.saveData||/2g/.test(t))?'${VIDEO_LOW}':t==='3g'?(wide?'${VIDEO_NARROW}':'${VIDEO_LOW}'):(wide?'${VIDEO_WIDE}':'${VIDEO_NARROW}');
window.__aboutVideo=fetch(src).then(function(r){if(!r.ok)throw new Error('Video request failed: '+r.status);return r.blob();});
window.__aboutVideo.catch(function(){});
}catch(e){}})();`;

// Same script, for client-side navigations where the server-rendered copy never ran
const getVideo = (): Promise<Blob> => {
  if (!window.__aboutVideo) {
    const script = document.createElement('script');
    script.textContent = START_VIDEO_FETCH;
    document.head.appendChild(script);
    script.remove();
  }
  return window.__aboutVideo ?? Promise.reject(new Error('Video download did not start'));
};

interface Callout {
  title: string;
  text: string;
  // Point on the exploded frame and label position, both as fractions of the frame.
  // Labels may sit outside 0–1, in the side margins.
  anchor: [number, number];
  label: [number, number];
  side: 'left' | 'right' | 'top';
}

const callouts: Callout[] = [
  { title: 'Andrew', text: 'Senior engineer at Expertise.com', anchor: [0.36, 0.17], label: [-0.02, 0.12], side: 'left' },
  { title: 'Plant', text: 'Still alive. Mostly.', anchor: [0.08, 0.5], label: [-0.02, 0.46], side: 'left' },
  { title: 'Toolchain', text: 'Neovim, 75+ plugins · tmux · Kitty', anchor: [0.5, 0.58], label: [-0.02, 0.8], side: 'left' },
  { title: 'Fuel', text: 'Coffee. A lot.', anchor: [0.65, 0.33], label: [0.6, 0.1], side: 'top' },
  { title: 'Rubber duck', text: 'Senior debugger.', anchor: [0.93, 0.07], label: [1.02, 0.06], side: 'right' },
  { title: 'Interface', text: 'React · Next.js · TypeScript', anchor: [0.85, 0.34], label: [1.02, 0.32], side: 'right' },
  { title: 'Backend', text: 'Node.js · GraphQL · PostgreSQL', anchor: [0.64, 0.64], label: [1.02, 0.62], side: 'right' },
];

// Scroll timeline, as fractions of the pinned section
const VIDEO_RANGE: [number, number] = [0.1, 0.62];
const CALLOUTS_IN = 0.64;
const CALLOUTS_OUT: [number, number] = [0.86, 0.89];

// Page-load entrance, using the same easing as the rest of the site
const EASE_OUT: [number, number, number, number] = [0.6, 0.05, 0.01, 0.9];
const enter = (delay: number, y = 24) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE_OUT, delay },
});

const labelAlign: Record<Callout['side'], string> = {
  left: '-translate-x-full -translate-y-1/2 pr-2.5 text-right',
  right: '-translate-y-1/2 pl-2.5',
  top: '-translate-x-1/2 -translate-y-full pb-2 text-center',
};

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const onChange = () => setMatches(media.matches);
    onChange();
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [query]);

  return matches;
};

const useCalloutProgress = (progress: MotionValue<number>, index: number) => {
  const start = CALLOUTS_IN + index * 0.014;
  const opacity = useTransform(progress, [start, start + 0.04, ...CALLOUTS_OUT], [0, 1, 1, 0]);
  const draw = useTransform(progress, [start, start + 0.03], [0, 1]);
  return { opacity, draw };
};

const CalloutLine: React.FC<{ callout: Callout; index: number; progress: MotionValue<number> }> = ({ callout, index, progress }) => {
  const { opacity, draw } = useCalloutProgress(progress, index);
  const [ax, ay] = callout.anchor;
  const [lx, ly] = callout.label;
  const endX = callout.side === 'left' ? lx + 0.006 : callout.side === 'right' ? lx - 0.006 : lx;
  const endY = callout.side === 'top' ? ly + 0.005 : ly;

  return (
    <>
      <motion.line
        x1={ax * 1000}
        y1={ay * 562.5}
        x2={endX * 1000}
        y2={endY * 562.5}
        stroke="rgba(255,255,255,0.55)"
        strokeWidth={1.2}
        // framer's pathLength draws the line in; opacity keeps it hidden outside the callout window
        style={{ pathLength: draw, opacity }}
      />
      <motion.circle cx={ax * 1000} cy={ay * 562.5} r={3.2} className="fill-accent" style={{ opacity }} />
    </>
  );
};

const CalloutLabel: React.FC<{ callout: Callout; index: number; progress: MotionValue<number> }> = ({ callout, index, progress }) => {
  const { opacity } = useCalloutProgress(progress, index);

  return (
    <motion.div
      style={{ left: `${callout.label[0] * 100}%`, top: `${callout.label[1] * 100}%`, opacity }}
      className={`absolute w-[170px] xl:w-[200px] ${labelAlign[callout.side]}`}
    >
      <p className="text-sm xl:text-[15px] font-semibold text-white">{callout.title}</p>
      <p className="text-xs xl:text-[13px] leading-snug text-white/60">{callout.text}</p>
    </motion.div>
  );
};

const Panel: React.FC<{ progress: MotionValue<number>; range: [number, number]; children: React.ReactNode }> = ({ progress, range, children }) => {
  const [from, to] = range;
  const fade = 0.025;
  const input = from <= 0 ? [0, to - fade, to] : to >= 1 ? [from, from + fade, 1] : [from, from + fade, to - fade, to];
  const output = from <= 0 ? [1, 1, 0] : to >= 1 ? [0, 1, 1] : [0, 1, 1, 0];
  const opacity = useTransform(progress, input, output);
  const y = useTransform(opacity, [0, 1], [18, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="pointer-events-none absolute inset-x-0 top-[clamp(72px,12vh,132px)] px-5 text-center"
    >
      {children}
    </motion.div>
  );
};

const AboutMe: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const isPhone = useMediaQuery('(max-width: 639px)');
  const isLg = useMediaQuery('(min-width: 1024px)');
  const isXl = useMediaQuery('(min-width: 1280px)');

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const videoProgress = useTransform(scrollYProgress, VIDEO_RANGE, [0, 1], { ease: easeInOut });
  const camScale = useTransform(scrollYProgress, [0, 0.1], [1.03, 1]);
  const frameOpacity = useTransform(scrollYProgress, [0.88, 0.96], [1, 0.55]);
  const listOpacity = useTransform(scrollYProgress, [CALLOUTS_IN, CALLOUTS_IN + 0.06, ...CALLOUTS_OUT], [0, 1, 1, 0]);
  const fallbackOpacity = useTransform(scrollYProgress, [0.25, 0.55], [0, 1]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.01], [1, 0]);

  const isStatic = mounted && !!prefersReducedMotion;

  useEffect(() => setMounted(true), []);

  // Scrub the clip from scroll. It's held as a blob, which is always fully seekable
  // whatever the host's range-request support.
  useEffect(() => {
    const video = videoRef.current;
    if (isStatic || !video) return;

    let cancelled = false;
    let objectUrl: string | null = null;
    let rafId = 0;
    let seeking = false;
    let pending: number | null = null;
    let current = 0;

    const seek = (time: number) => {
      if (seeking) {
        pending = time;
        return;
      }
      seeking = true;
      video.currentTime = time;
    };

    const onSeeked = () => {
      seeking = false;
      if (pending !== null) {
        const next = pending;
        pending = null;
        seek(next);
      }
    };
    video.addEventListener('seeked', onSeeked);

    getVideo()
      .then((blob) => {
        if (cancelled) return;
        objectUrl = URL.createObjectURL(blob);
        video.src = objectUrl;
      })
      .catch(() => {
        if (!cancelled) setVideoFailed(true);
      });

    const tick = () => {
      const target = videoProgress.get();
      current += (target - current) * 0.2;
      if (Math.abs(target - current) < 0.0005) current = target;

      const duration = video.duration;
      if (Number.isFinite(duration) && duration > 0) {
        const time = Math.min(duration - 0.04, current * duration);
        if (Math.abs(video.currentTime - time) > 0.01) seek(time);
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      video.removeEventListener('seeked', onSeeked);
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [isStatic, videoProgress]);

  if (isStatic) {
    return (
      <section aria-label="About Andrew Pinon" className="w-full bg-black py-24">
        <div className="mx-auto w-[90%] max-w-[1200px] text-center">
          <h1 className="text-5xl xl:text-7xl font-bold tracking-tight">Andrew Pinon.</h1>
          <p className="mt-3 text-lg text-white/60">Senior software engineer · Manila, GMT+8</p>
        </div>
        <div className="relative mx-auto mt-12 aspect-video w-[90%] max-w-[1200px]">
          <Image
            src={EXPLODED}
            alt="Andrew seated in mid-air while his desk setup floats apart around him"
            fill
            sizes="(min-width: 1280px) 1200px, 90vw"
            className="object-cover"
          />
        </div>
        <ul className="mx-auto mt-10 grid w-[90%] max-w-[1200px] grid-cols-2 gap-6 lg:grid-cols-4">
          {callouts.map((callout) => (
            <li key={callout.title}>
              <p className="font-semibold">{callout.title}</p>
              <p className="text-sm text-white/60">{callout.text}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  // Desktop: 16:9 with callouts in the side margins. Tablet: 16:9 with the list overlaid.
  // Phone: a 4:3 crop centred on Andrew, with the list underneath.
  const margin = isXl ? 240 : 190;
  const frameStyle = isPhone
    ? { width: '100vw', aspectRatio: '4 / 3', top: '45%', x: '-50%', y: '-50%' }
    : {
        width: isLg
          ? `min(calc(100vw - ${margin * 2}px), calc(72vh * ${ASPECT}))`
          : `min(calc(100vw - 32px), calc((74vh - 52px) * ${ASPECT}))`,
        aspectRatio: `${ASPECT}`,
        bottom: isLg ? '4vh' : '3vh',
        x: '-50%',
      };

  return (
    <section
      ref={sectionRef}
      aria-label="About Andrew Pinon: his desk floats apart around him as you scroll"
      className="relative w-full bg-black"
      style={{ height: '600vh' }}
    >
      <Head>
        {/* The poster is the first thing painted on the page */}
        <link rel="preload" as="image" href={ASSEMBLED} fetchPriority="high" />
      </Head>
      <script dangerouslySetInnerHTML={{ __html: START_VIDEO_FETCH }} />
      <div className="sticky top-0 h-screen supports-[height:100svh]:h-svh overflow-hidden">
        <motion.div className="absolute left-1/2" style={{ ...frameStyle, opacity: frameOpacity }}>
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: EASE_OUT, delay: 0.45 }}
          >
            <motion.div className="absolute inset-0 origin-[50%_45%]" style={{ scale: camScale }}>
              <video
                ref={videoRef}
                poster={ASSEMBLED}
                muted
                playsInline
                preload="none"
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover object-[45%_50%]"
              />
              {videoFailed && (
                <motion.div className="absolute inset-0" style={{ opacity: fallbackOpacity }}>
                  <Image src={EXPLODED} alt="" fill sizes="100vw" className="object-cover object-[45%_50%]" />
                </motion.div>
              )}
              {/* Feather the frame into the black page */}
              <div
                className="pointer-events-none absolute -inset-px"
                style={{
                  background:
                    'linear-gradient(90deg,#000 0%,rgba(0,0,0,0) 7%,rgba(0,0,0,0) 93%,#000 100%),linear-gradient(180deg,#000 0%,rgba(0,0,0,0) 9%,rgba(0,0,0,0) 90%,#000 100%)',
                }}
              />
            </motion.div>
          </motion.div>

          {isLg ? (
            <>
              <svg
                viewBox="0 0 1000 562.5"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
              >
                {callouts.map((callout, i) => (
                  <CalloutLine key={callout.title} callout={callout} index={i} progress={scrollYProgress} />
                ))}
              </svg>
              <div className="pointer-events-none absolute inset-0">
                {callouts.map((callout, i) => (
                  <CalloutLabel key={callout.title} callout={callout} index={i} progress={scrollYProgress} />
                ))}
              </div>
            </>
          ) : (
            <motion.ul
              style={{ opacity: listOpacity }}
              className={`pointer-events-none absolute inset-x-0 grid grid-cols-2 gap-x-4 gap-y-2 px-4 sm:grid-cols-3 ${
                isPhone ? 'top-full mt-1' : 'bottom-0 bg-gradient-to-b from-transparent via-black/85 to-black/90 pb-2.5 pt-7'
              }`}
            >
              {callouts.map((callout) => (
                <li key={callout.title}>
                  <p className="text-[13px] font-semibold">{callout.title}</p>
                  <p className="text-xs leading-snug text-white/60">{callout.text}</p>
                </li>
              ))}
            </motion.ul>
          )}
        </motion.div>

        <Panel progress={scrollYProgress} range={[0, 0.1]}>
          <motion.p {...enter(0.15)} className="mb-1 text-lg xl:text-xl font-semibold text-white/50">
            About
          </motion.p>
          <h1 className="overflow-hidden pb-1 text-5xl md:text-6xl xl:text-8xl font-bold tracking-tight leading-none">
            <motion.span
              className="block"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
            >
              Andrew Pinon<span className="text-accent">.</span>
            </motion.span>
          </h1>
          <motion.p {...enter(0.7)} className="mx-auto mt-3 max-w-[36ch] text-base xl:text-xl text-white/60">
            Senior software engineer · Manila, GMT+8
          </motion.p>
        </Panel>
        <Panel progress={scrollYProgress} range={[0.16, 0.56]}>
          <p className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
            Every part, <span className="text-accent">considered.</span>
          </p>
        </Panel>
        <Panel progress={scrollYProgress} range={[0.64, 0.84]}>
          <p className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
            Full stack. <span className="text-white/45">Literally.</span>
          </p>
        </Panel>
        <Panel progress={scrollYProgress} range={[0.88, 1]}>
          <p className="text-5xl md:text-6xl xl:text-8xl font-bold tracking-tight leading-none">
            Hi, I&apos;m Andrew<span className="text-accent">.</span>
          </p>
          <p className="mx-auto mt-3 max-w-[36ch] text-base xl:text-xl text-white/60">
            Here&apos;s what I&apos;ve been building.
          </p>
        </Panel>

        <motion.div
          style={{ opacity: hintOpacity }}
          className="pointer-events-none absolute bottom-3.5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 text-xs text-white/50"
        >
          <motion.span {...enter(1.4, 8)} className="flex flex-col items-center gap-1.5">
            Scroll
            <span className="h-5 w-px bg-gradient-to-b from-white/50 to-transparent" />
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
