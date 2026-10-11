import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const PDF = '/resume/Andrew-Pinon-Resume.pdf';
const FILENAME = 'Andrew-Pinon-Resume.pdf';
// Rendered from the PDF at 1700px wide. Page 2 is cropped below its content.
// Re-render these whenever the PDF changes.
const PAGES = [
  { src: '/resume/page-1.webp', width: 1700, height: 2200 },
  { src: '/resume/page-2.webp', width: 1700, height: 1040 },
];

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

interface Props {
  open: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<Props> = ({ open, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Native <dialog> gives us the top layer, an inert page behind, Esc and focus restore.
  // Closing waits for the exit animation (see onExitComplete).
  useEffect(() => {
    const dialog = dialogRef.current;
    if (open && dialog && !dialog.open) dialog.showModal();
  }, [open, mounted]);

  // Lock the page while open. Lenis ignores events inside the dialog (data-lenis-prevent),
  // so the native scroll lock is all that's needed.
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const scrollbar = window.innerWidth - html.clientWidth;
    html.style.overflow = 'hidden';
    if (scrollbar > 0) html.style.paddingRight = `${scrollbar}px`;
    return () => {
      html.style.overflow = '';
      html.style.paddingRight = '';
    };
  }, [open]);

  if (!mounted) return null;

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-labelledby="resume-dialog-title"
      data-lenis-prevent
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      // Browsers can force-close past a prevented cancel, so keep state in sync
      onClose={() => open && onClose()}
      className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none overflow-hidden bg-transparent p-0 text-white backdrop:bg-transparent"
    >
      <AnimatePresence onExitComplete={() => dialogRef.current?.close()}>
        {open && (
          <motion.div
            key="resume"
            className="absolute inset-0"
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div
              aria-hidden
              onClick={onClose}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              variants={{ closed: { opacity: 0 }, open: { opacity: 1 } }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              className="pointer-events-none relative mx-auto flex h-full max-w-[54rem] flex-col px-4 sm:px-8"
              variants={{ closed: { opacity: 0, y: 32 }, open: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.45, ease: EASE_OUT }}
            >
              <header className="pointer-events-auto flex items-center justify-between gap-4 py-4 sm:py-6">
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/50">Resume</p>
                  <h2 id="resume-dialog-title" className="truncate text-lg font-semibold tracking-tight">
                    Andrew Pinon
                  </h2>
                </div>
                <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                  <a
                    href={PDF}
                    download={FILENAME}
                    className="flex items-center gap-2 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-black transition-colors duration-300 hover:bg-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-6 sm:py-3"
                  >
                    <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 2v8m0 0L4.5 6.5M8 10l3.5-3.5M2.5 13.5h11" strokeLinecap="square" />
                    </svg>
                    <span>
                      Download<span className="hidden sm:inline"> PDF</span>
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close resume"
                    className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition-colors duration-300 hover:border-white/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:h-11 sm:w-11"
                  >
                    <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 3l10 10M13 3L3 13" />
                    </svg>
                  </button>
                </div>
              </header>

              <div className="pointer-events-auto -mx-4 flex-1 overflow-y-auto overscroll-contain px-4 pb-10 sm:-mx-8 sm:px-8">
                <div className="flex flex-col gap-4 sm:gap-6">
                  {PAGES.map((page, i) => (
                    <div
                      key={page.src}
                      className="relative w-full overflow-hidden rounded-sm bg-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]"
                      style={{ aspectRatio: `${page.width} / ${page.height}` }}
                    >
                      <Image
                        src={page.src}
                        alt={`Resume, page ${i + 1} of ${PAGES.length}`}
                        fill
                        unoptimized
                        loading={i === 0 ? 'eager' : 'lazy'}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </dialog>,
    document.body,
  );
};

export default ResumeModal;
