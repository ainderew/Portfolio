import type { MutableRefObject } from 'react';
import { useLayoutEffect, useRef, useState, useEffect } from 'react';

export const useRefScrollProgress = (watch?: unknown): [MutableRefObject<HTMLDivElement>, number, number] => {
	const ref = useRef<HTMLDivElement>(null!);
	const [start, setStart] = useState(0);
	const [end, setEnd] = useState(0);

	useLayoutEffect(() => {
		if (!ref.current) return;

		const updateValues = () => {
			const rect = ref.current.getBoundingClientRect();
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			const offsetTop = rect.top + scrollTop;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;

			if (docHeight <= 0) return;

			setStart(Math.max(0, (offsetTop - 50) / docHeight));
			setEnd((offsetTop + rect.height - window.innerHeight) / docHeight);
		};

		updateValues();

		const resizeObserver = new ResizeObserver(() => {
			updateValues();
		});

		resizeObserver.observe(document.body);
		window.addEventListener('scroll', updateValues, { passive: true });
		window.addEventListener('resize', updateValues);

		const timers = [100, 500, 1000].map(delay => setTimeout(updateValues, delay));

		return () => {
			resizeObserver.disconnect();
			window.removeEventListener('scroll', updateValues);
			window.removeEventListener('resize', updateValues);
			timers.forEach(clearTimeout);
		};
	}, [watch]);

	return [ref, start, end];
};
