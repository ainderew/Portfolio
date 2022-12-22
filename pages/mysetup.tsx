import React from 'react';
import Installation, { CopyArea } from '../components/pages/mysetup/installation';
import ShowCase from '../components/pages/mysetup/showcase';
import WebNav from '../components/web-nav';

const MySetup: React.FC = () => {
	return (
		<div className='setup h-full'>
			<WebNav />
			<div className='min-h-[100vh] py-[10rem] w-full'>
				<div className='w-[90%] xl:w-[70%] m-auto flex flex-col justify-center items-center gap-6'>
					<h3 className='transition-all duration-1000 text-3xl lg:text-5xl xl:text-6xl font-bold text-center '>
						THIS IS MY HOW I SETUP MY{' '}
						<span className='text-accent'>
							WORKING <br /> ENVIRONMENT
						</span>
					</h3>
					<div className='w-full flex justify-center gap-2'>
						<button className='bg-lightAccent rounded-3xl px-4 h-11 group text-white flex items-center hover:bg-accent justify-center duration-500'>
							Desk Setup
							<svg
								className='stroke mt-0.5 ml-2 -mr-1 h-3 stroke-current stroke-2'
								viewBox='0 0 10 10'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
							>
								<path className='transition opacity-0  group-hover:opacity-100' d='M0 5h7' />
								<path className='transition group-hover:translate-x-[3px]' d='M1 1l4 4-4 4' />
							</svg>
						</button>
						<button className='bg-lightAccent rounded-3xl px-4 h-11 text-white duration-500 group flex items-center justify-center gap-[0.3rem] hover:bg-accent'>
							Video installation
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									className='group-hover:opacity-100 opacity-0'
									d='M8.48 13.14H9.21V16.75H9.91V13.14H10.64V12.53H8.48V13.14ZM12.17 16C12.05 16.14 11.64 16.42 11.64 16.02V13.63H11.02V16.24C11.02 17.03 11.81 16.82 12.18 16.41V16.75H12.8V13.63H12.18V16H12.17V16ZM14.48 13.61C14.12 13.61 13.89 13.88 13.89 13.88V12.52H13.26V16.75H13.89V16.51C13.89 16.51 14.1 16.79 14.48 16.79C14.81 16.79 15.06 16.5 15.06 16.1V14.37C15.06 13.9 14.84 13.61 14.48 13.61V13.61ZM14.41 16.02C14.41 16.25 14.25 16.36 14.04 16.27C13.9833 16.2435 13.9323 16.2061 13.89 16.16V14.22C13.93 14.18 13.98 14.15 14.02 14.12C14.24 14.01 14.41 14.18 14.41 14.41V16.02V16.02ZM16.72 15.86C16.72 16.1 16.59 16.26 16.44 16.27C16.28 16.28 16.12 16.15 16.12 15.86V15.27H17.31V14.47C17.3131 14.3482 17.2916 14.227 17.247 14.1136C17.2023 14.0002 17.1353 13.897 17.05 13.81C16.878 13.6531 16.6528 13.5673 16.42 13.57C16.2 13.57 15.97 13.64 15.79 13.78C15.6 13.93 15.48 14.16 15.48 14.47V15.87C15.48 16.15 15.57 16.37 15.71 16.53C15.88 16.71 16.11 16.81 16.35 16.82C16.64 16.83 16.95 16.71 17.13 16.46C17.24 16.31 17.31 16.11 17.31 15.87V15.71H16.72V15.86V15.86ZM16.12 14.47C16.12 14.3 16.22 14.1 16.41 14.1C16.6 14.1 16.72 14.28 16.72 14.47V14.79H16.12V14.47V14.47Z'
									fill='white'
								/>
								<path
									className='group-hover:opacity-100 opacity-0'
									d='M12.97 3C11.788 3.00007 10.6177 3.23294 9.5257 3.68531C8.43373 4.13769 7.44156 4.80072 6.60583 5.63654C5.77011 6.47236 5.10719 7.4646 4.65493 8.55662C4.20268 9.64864 3.96994 10.819 3.97 12.001C3.97007 13.183 4.20294 14.3533 4.65531 15.4453C5.10769 16.5373 5.77072 17.5294 6.60654 18.3652C7.44236 19.2009 8.43461 19.8638 9.52662 20.3161C10.6186 20.7683 11.789 21.0011 12.971 21.001C15.3581 21.0009 17.6473 20.0525 19.3352 18.3645C21.023 16.6764 21.9711 14.3871 21.971 12C21.9709 9.61292 21.0225 7.32366 19.3345 5.63583C17.6464 3.948 15.3571 2.99987 12.97 3V3ZM14.55 6.37H15.35V9.05C15.35 9.22 15.43 9.22 15.46 9.22C15.58 9.22 15.76 9.09 15.85 9V6.36H16.65V9.9H15.85V9.59C15.74 9.69 15.63 9.77 15.52 9.83C15.37 9.91 15.23 9.94 15.09 9.94C15.0134 9.94367 14.9368 9.93033 14.866 9.90094C14.7951 9.87155 14.7316 9.82683 14.68 9.77C14.59 9.66 14.55 9.49 14.55 9.28V6.37ZM12 7.3C12 6.75 12.45 6.3 13 6.3C13.55 6.3 14 6.75 14 7.3V9C14 9.55 13.55 10 13 10C12.45 10 12 9.55 12 9V7.3ZM9.92 5.15L10.4 6.91L10.89 5.15H11.8L10.86 7.93V9.9H9.97V7.93L9.01 5.15H9.92V5.15ZM17.82 17.69C17.31 18.19 12.99 18.2 12.99 18.2C12.99 18.2 8.68 18.19 8.16 17.69C7.65 17.19 7.65 14.7 7.65 14.68C7.65 14.67 7.65 12.18 8.16 11.67C8.67 11.17 12.99 11.16 12.99 11.16C12.99 11.16 17.3 11.17 17.82 11.67C18.33 12.17 18.34 14.66 18.34 14.68C18.34 14.68 18.34 17.18 17.82 17.69Z'
									fill='white'
								/>
								<path
									className='group-hover:opacity-100 opacity-0'
									d='M12.98 9.35001C13.15 9.35001 13.23 9.25001 13.24 9.09001V7.19001C13.24 7.06001 13.11 6.95001 12.99 6.95001C12.87 6.95001 12.74 7.05001 12.74 7.19001V9.09001C12.74 9.24001 12.81 9.34001 12.98 9.35001Z'
									fill='white'
								/>

								<path
									className='transition opacity-100 group-hover:opacity-0'
									d='M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17V7.17Z'
									fill='white'
								/>
							</svg>
						</button>
					</div>
					{/* <CopyArea command='Download NeoVim Setup'/> */}

					<ShowCase />
					<Installation />
				</div>
			</div>
		</div>
	);
};

export default MySetup;
