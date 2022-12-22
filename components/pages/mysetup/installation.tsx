/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from 'react';

interface ICopyArea {
	label?: string;
	command: string;
	instructions?: string;
}

export const CopyArea: React.FC<ICopyArea> = ({ label, command, instructions }) => {
	const text = useRef<HTMLButtonElement>(null);
	const copyText = () => {
		if (!text.current) return;
		navigator.clipboard.writeText(text.current.innerText).then(() => {
			if (!text.current) return;
			alert('Copied!');
		});
	};

	return (
		<div className='flex flex-col gap-2'>
			<div className=''>
				<h3 className='text-lg font-semibold text-lightAccent'>{label}</h3>
				<span className='text-sm'>{instructions}</span>
			</div>
			<button
				onClick={copyText}
				ref={text}
				className='bg-[#008cff30] px-[1rem] py-[0.5rem] rounded-md border-lightAccent border-2 font-light text-lightAccent flex gap-2 shrink'
			>
				{command}
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M5 22C4.45 22 3.979 21.8043 3.587 21.413C3.19567 21.021 3 20.55 3 20V6H5V20H16V22H5ZM9 18C8.45 18 7.97933 17.8043 7.588 17.413C7.196 17.021 7 16.55 7 16V4C7 3.45 7.196 2.979 7.588 2.587C7.97933 2.19567 8.45 2 9 2H18C18.55 2 19.021 2.19567 19.413 2.587C19.8043 2.979 20 3.45 20 4V16C20 16.55 19.8043 17.021 19.413 17.413C19.021 17.8043 18.55 18 18 18H9ZM9 16H18V4H9V16ZM9 16V4V16Z'
						fill='#135981'
					/>
				</svg>
			</button>
		</div>
	);
};

const Installation: React.FC = () => {
	return (
		<div className='installation w-[100%] xl:w-[70vw] flex flex-col gap-8 items-start my-14'>
			<div className='flex flex-col gap-2'>
				<h2 className='text-3xl font-semibold text-lightAccent'>My Setup Shortcut</h2>
				<p className=''>
					I've compiled these commands to make life a lot easier when getting a new device ready so
					that I don't forget anything important as well
				</p>
			</div>

			<CopyArea
				label='Install Homebrew'
				command='/bin/bash -c "$(curl -fsSL
				https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'
			/>
			<CopyArea
				label='Add Brew To $PATH'
				instructions='You need to add brew to your $PATH to use the command in your terminal'
				command='export PATH="/opt/homebrew/bin:$PATH" >> ~/.zshrc'
			/>
		</div>
	);
};

export default Installation;
