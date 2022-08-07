import { Variants } from 'framer-motion';

export const fadeIn = (direction: 'up' | 'down'): Variants => {
	return {
		initial: {
			y: direction === 'up' ? 40 : -60,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.3,
				ease: 'easeInOut',
			},
		},
	};
};

export const fadeOut: Variants = {
	initial:{
		opacity: 1,
		y:0,
	},
	animate:{
		opacity: 0,
		y:40,
	}
};

export const works: Variants = {
	initial:{
		
		y: 1000,
		opacity: 0
	},
	animate: {
		// zIndex: 1,
		y: 0,
		opacity: 1,
		transition:{
			delay: .2,
			duration: .2,
			bounce: 0,
		}
	},
	exit: {
		// zIndex: 0,
		y:  -1000,
		opacity: 0,
		transition:{
			duration: .2,
		}
	}
};

export const scaleLine: Variants = {
	initial: {
		scaleY: 0,
		originY: 0,
	},
	animate: {
		scaleY: 1,
		transition: {
			duration: .3,
			ease: 'easeIn'
		},
	},
};
export const staggerContainer: Variants = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};
