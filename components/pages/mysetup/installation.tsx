/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

interface ICopyArea {
	label?: string;
	command: string;
	instructions?: string;
}

export const CopyArea: React.FC<ICopyArea> = ({ label, command, instructions }) => {
  const [copied, setCopied] = useState(false);

  const copyText = () => {
    navigator.clipboard.writeText(command).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
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
        className='bg-[#008cff30] px-[1rem] py-[0.5rem] rounded-md border-lightAccent border-2 font-light text-lightAccent flex gap-2 shrink items-center transition-all duration-300 hover:bg-[#008cff50]'
      >
        <span className="font-mono">{copied ? 'Copied!' : command}</span>
        {!copied && (
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
        )}
      </button>
    </div>
  );
};

const Installation: React.FC = () => {
  return (
    <div className='installation w-[100%] xl:w-[70vw] flex flex-col gap-8 items-start my-14'>
      <div className='flex flex-col gap-2'>
        <h2 className='text-3xl font-semibold text-lightAccent'>Automated Setup</h2>
        <p className='text-gray-400'>
          Follow these steps to replicate my development environment on a new machine.
        </p>
      </div>

      <CopyArea
        label="Install Homebrew"
        command='/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'
        instructions="First, install Homebrew if you haven't already. It's required for installing packages."
      />
      <CopyArea
        label="Add Brew To $PATH"
        instructions="You need to add brew to your $PATH to use the command in your terminal."
        command='(echo; echo "eval \"$(/opt/homebrew/bin/brew shellenv)\"") >> ~/.zprofile && eval "$(/opt/homebrew/bin/brew shellenv)"'
      />
      <CopyArea
        label="One-Line Quick Setup"
        instructions="Run this command to clone only the necessary dotfiles and run the setup script automatically."
        command='/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/ainderew/Portfolio/main/public/install.sh)"'
      />
    </div>
  );
};

export default Installation;
