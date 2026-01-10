import { Variants } from 'framer-motion';

export const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

export const fadeIn = (direction: 'up' | 'down'): Variants => {
	return {
		initial: {
			y: direction === 'up' ? 60 : -60,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: [0.6, 0.05, -0.01, 0.9],
			},
		},
	};
};

export const wordReveal: Variants = {
	initial: {
		y: '100%',
	},
	animate: {
		y: 0,
		transition: {
			duration: 1,
			ease: [0.76, 0, 0.24, 1],
		},
	},
};

export const staggerContainer: Variants = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.3,
		},
	},
};

export const works: Variants = {
	initial: {
		y: 20,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: [0.76, 0, 0.24, 1],
		},
	},
	exit: {
		y: -20,
		opacity: 0,
		transition: {
			duration: 0.3,
		},
	},
};

export const scaleLine: Variants = {
	initial: {
		scaleY: 0,
		originY: 0,
	},
	animate: {
		scaleY: 1,
		transition: {
			duration: 0.3,
			ease: 'easeIn',
		},
	},
};
