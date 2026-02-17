import { motion } from 'framer-motion';
import { fadeIn, scaleLine } from '../framer-animation/variants';
import { useScrollHider } from '../hooks/scrollHide';

const SocialWidget: React.FC = () => {
  const classValue = useScrollHider();

  return (
    <div
      className={`social-widget-container flex flex-col gap-4 xl:gap-6 justify-between items-center fixed bottom-0 right-14 xl:right-auto left-auto xl:left-14 z-20 ${classValue}`}
    >
      {/* GitHub */}
      <a
        href="https://www.github.com/ainderew"
        target="_blank"
        className="group"
        rel="noreferrer"
        aria-label="GitHub Profile"
      >
        <motion.div
          variants={fadeIn('up')}
          className="w-8 h-8 xl:w-9 xl:h-9 rounded-full border border-white/10 group-hover:border-transparent flex items-center justify-center relative overflow-hidden transition-all duration-300"
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(135deg, #DE682C, #8B5CF6)' }}
          />
          <svg
            className="relative w-4 h-4 xl:w-[18px] xl:h-[18px]"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="github-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#DE682C" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25 0C11.1875 0 0 11.1875 0 25C0 36.0625 7.15625 45.4062 17.0937 48.7187C18.3437 48.9375 18.8125 48.1875 18.8125 47.5312C18.8125 46.9375 18.7812 44.9687 18.7812 42.875C12.5 44.0312 10.875 41.3437 10.375 39.9375C10.0937 39.2187 8.875 37 7.8125 36.4062C6.9375 35.9375 5.6875 34.7812 7.78125 34.75C9.75 34.7187 11.1562 36.5625 11.625 37.3125C13.875 41.0937 17.4687 40.0312 18.9062 39.375C19.125 37.75 19.7812 36.6562 20.5 36.0312C14.9375 35.4062 9.125 33.25 9.125 23.6875C9.125 20.9687 10.0937 18.7188 11.6875 16.9688C11.4375 16.3438 10.5625 13.7812 11.9375 10.3437C11.9375 10.3437 14.0312 9.6875 18.8125 12.9062C20.8125 12.3437 22.9375 12.0625 25.0625 12.0625C27.1875 12.0625 29.3125 12.3437 31.3125 12.9062C36.0937 9.65625 38.1875 10.3437 38.1875 10.3437C39.5625 13.7812 38.6875 16.3438 38.4375 16.9688C40.0313 18.7188 41 20.9375 41 23.6875C41 33.2812 35.1562 35.4062 29.5937 36.0312C30.5 36.8125 31.2812 38.3125 31.2812 40.6562C31.2812 44 31.25 46.6875 31.25 47.5312C31.25 48.1875 31.7187 48.9687 32.9687 48.7187C37.9316 47.0432 42.2441 43.8535 45.2993 39.5987C48.3545 35.3439 49.9985 30.2381 50 25C50 11.1875 38.8125 0 25 0Z"
              fill="url(#github-gradient)"
            />
          </svg>
        </motion.div>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/andrew-pinon-620b4b14a/"
        target="_blank"
        className="group"
        rel="noreferrer"
        aria-label="LinkedIn Profile"
      >
        <motion.div
          variants={fadeIn('up')}
          className="w-8 h-8 xl:w-9 xl:h-9 rounded-full border border-white/10 group-hover:border-transparent flex items-center justify-center relative overflow-hidden transition-all duration-300"
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(135deg, #DE682C, #8B5CF6)' }}
          />
          <svg
            className="relative w-4 h-4 xl:w-[18px] xl:h-[18px]"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="linkedin-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#DE682C" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            <path
              d="M41.3916 5.46875H8.6084C6.875 5.46875 5.46875 6.875 5.46875 8.6084V41.3916C5.46875 43.125 6.875 44.5312 8.6084 44.5312H41.3916C43.125 44.5312 44.5312 43.125 44.5312 41.3916V8.6084C44.5312 6.875 43.125 5.46875 41.3916 5.46875V5.46875ZM41.3916 41.4062C19.5264 41.4014 8.59375 41.3965 8.59375 41.3916C8.59863 19.5264 8.60352 8.59375 8.6084 8.59375C30.4736 8.59863 41.4062 8.60352 41.4062 8.6084C41.4014 30.4736 41.3965 41.4062 41.3916 41.4062ZM11.2598 20.1123H17.0557V38.7549H11.2598V20.1123ZM14.1602 17.5635C16.0107 17.5635 17.5195 16.0596 17.5195 14.2041C17.5195 13.7629 17.4326 13.3261 17.2638 12.9185C17.095 12.5109 16.8475 12.1406 16.5356 11.8287C16.2236 11.5167 15.8533 11.2693 15.4457 11.1004C15.0382 10.9316 14.6013 10.8447 14.1602 10.8447C13.719 10.8447 13.2822 10.9316 12.8746 11.1004C12.467 11.2693 12.0967 11.5167 11.7847 11.8287C11.4728 12.1406 11.2253 12.5109 11.0565 12.9185C10.8877 13.3261 10.8008 13.7629 10.8008 14.2041C10.7959 16.0596 12.2998 17.5635 14.1602 17.5635ZM26.4795 29.5312C26.4795 27.0996 26.9434 24.7461 29.9561 24.7461C32.9248 24.7461 32.9688 27.5244 32.9688 29.6875V38.7549H38.7598V28.5303C38.7598 23.5107 37.6758 19.6484 31.8115 19.6484C28.9941 19.6484 27.1045 21.1963 26.3281 22.6611H26.25V20.1123H20.6885V38.7549H26.4795V29.5312Z"
              fill="url(#linkedin-gradient)"
            />
          </svg>
        </motion.div>
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com/ainderew"
        target="_blank"
        className="group"
        rel="noreferrer"
        aria-label="Twitter Profile"
      >
        <motion.div
          variants={fadeIn('up')}
          className="w-8 h-8 xl:w-9 xl:h-9 rounded-full border border-white/10 group-hover:border-transparent flex items-center justify-center relative overflow-hidden transition-all duration-300"
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(135deg, #DE682C, #8B5CF6)' }}
          />
          <svg
            className="relative w-4 h-4 xl:w-[18px] xl:h-[18px]"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="twitter-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#DE682C" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            <path
              d="M29.4375 21.25L44.0312 4.6875H40.4688L27.8125 19.0625L17.625 4.6875H4.5L19.7812 26.875L4.5 44.375H8.0625L21.375 29.2188L32.0625 44.375H45.1875L29.4375 21.25ZM23.125 27.1875L21.5 24.875L9.375 7.5H15.9375L25.5625 21.125L27.1875 23.4375L40.4688 41.75H33.9062L23.125 27.1875Z"
              fill="url(#twitter-gradient)"
            />
          </svg>
        </motion.div>
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/ainderew"
        target="_blank"
        className="group"
        rel="noreferrer"
        aria-label="Instagram Profile"
      >
        <motion.div
          variants={fadeIn('up')}
          className="w-8 h-8 xl:w-9 xl:h-9 rounded-full border border-white/10 group-hover:border-transparent flex items-center justify-center relative overflow-hidden transition-all duration-300"
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(135deg, #DE682C, #8B5CF6)' }}
          />
          <svg
            className="relative w-4 h-4 xl:w-[18px] xl:h-[18px]"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="instagram-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#DE682C" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            <path
              d="M25 4.375C31.5625 4.375 32.3438 4.40625 34.8438 4.53125C37.1875 4.65625 38.4375 5.03125 39.25 5.34375C40.3438 5.75 41.125 6.25 41.9375 7.0625C42.75 7.875 43.25 8.65625 43.6562 9.75C43.9688 10.5625 44.3438 11.8125 44.4688 14.1562C44.5938 16.6562 44.625 17.4375 44.625 24C44.625 30.5625 44.5938 31.3438 44.4688 33.8438C44.3438 36.1875 43.9688 37.4375 43.6562 38.25C43.25 39.3438 42.75 40.125 41.9375 40.9375C41.125 41.75 40.3438 42.25 39.25 42.6562C38.4375 42.9688 37.1875 43.3438 34.8438 43.4688C32.3438 43.5938 31.5625 43.625 25 43.625C18.4375 43.625 17.6562 43.5938 15.1562 43.4688C12.8125 43.3438 11.5625 42.9688 10.75 42.6562C9.65625 42.25 8.875 41.75 8.0625 40.9375C7.25 40.125 6.75 39.3438 6.34375 38.25C6.03125 37.4375 5.65625 36.1875 5.53125 33.8438C5.40625 31.3438 5.375 30.5625 5.375 24C5.375 17.4375 5.40625 16.6562 5.53125 14.1562C5.65625 11.8125 6.03125 10.5625 6.34375 9.75C6.75 8.65625 7.25 7.875 8.0625 7.0625C8.875 6.25 9.65625 5.75 10.75 5.34375C11.5625 5.03125 12.8125 4.65625 15.1562 4.53125C17.6562 4.40625 18.4375 4.375 25 4.375ZM25 0C18.3125 0 17.4688 0.03125 14.9375 0.15625C12.4375 0.28125 10.6562 0.6875 9.09375 1.28125C7.46875 1.90625 6.0625 2.75 4.6875 4.15625C3.28125 5.53125 2.4375 6.9375 1.8125 8.5625C1.21875 10.125 0.8125 11.9062 0.6875 14.4062C0.5625 16.9062 0.53125 17.7812 0.53125 24.5C0.53125 31.1875 0.5625 32.0312 0.6875 34.5625C0.8125 37.0625 1.21875 38.8438 1.8125 40.4062C2.4375 42.0312 3.28125 43.4375 4.6875 44.8125C6.0625 46.1875 7.46875 47.0625 9.09375 47.6562C10.6562 48.25 12.4375 48.6562 14.9375 48.7812C17.4688 48.9062 18.3125 48.9375 25 48.9375C31.6875 48.9375 32.5312 48.9062 35.0625 48.7812C37.5625 48.6562 39.3438 48.25 40.9062 47.6562C42.5312 47.0625 43.9375 46.1875 45.3125 44.8125C46.6875 43.4375 47.5625 42.0312 48.1562 40.4062C48.75 38.8438 49.1562 37.0625 49.2812 34.5625C49.4062 32.0312 49.4375 31.1875 49.4375 24.5C49.4375 17.7812 49.4062 16.9062 49.2812 14.4062C49.1562 11.9062 48.75 10.125 48.1562 8.5625C47.5625 6.9375 46.6875 5.53125 45.3125 4.15625C43.9375 2.78125 42.5312 1.90625 40.9062 1.3125C39.3438 0.71875 37.5625 0.3125 35.0625 0.1875C32.5312 0.03125 31.6875 0 25 0Z"
              fill="url(#instagram-gradient)"
            />
            <path
              d="M25 12.125C18.0312 12.125 12.375 17.7812 12.375 24.75C12.375 31.7188 18.0312 37.375 25 37.375C31.9688 37.375 37.625 31.7188 37.625 24.75C37.625 17.7812 31.9688 12.125 25 12.125ZM25 32.9688C20.4688 32.9688 16.7812 29.2812 16.7812 24.75C16.7812 20.2188 20.4688 16.5312 25 16.5312C29.5312 16.5312 33.2188 20.2188 33.2188 24.75C33.2188 29.2812 29.5312 32.9688 25 32.9688Z"
              fill="url(#instagram-gradient)"
            />
            <circle
              cx="38.125"
              cy="11.625"
              r="2.8125"
              fill="url(#instagram-gradient)"
            />
          </svg>
        </motion.div>
      </a>

      <motion.div
        variants={scaleLine}
        className="w-[2px] h-24 mt-2 rounded-full"
        style={{ background: 'linear-gradient(180deg, #DE682C, #8B5CF6)' }}
      />
    </div>
  );
};

export default SocialWidget;
