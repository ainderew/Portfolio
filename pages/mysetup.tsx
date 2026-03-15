import React from 'react';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import type { GetStaticProps } from 'next';
import type { ConfigFile } from '../core/types/setup';
import WebNav from '../components/web-nav';
import { SetupHero } from '../components/pages/mysetup/hero';
import { ToolStack } from '../components/pages/mysetup/tool-stack';
import { SetupGuide } from '../components/pages/mysetup/setup-guide';
import { ConfigBrowser } from '../components/pages/mysetup/config-browser';
import { CliCheatsheet } from '../components/pages/mysetup/cli-cheatsheet';
import { KeybindingsReference } from '../components/pages/mysetup/keybindings';

interface MySetupProps {
  configs: ConfigFile[];
}

const MySetup: React.FC<MySetupProps> = ({ configs }) => {
  return (
    <div className="setup min-h-screen bg-[#0a0a0a]">
      <Head>
        <title>My Setup | Andrew Pinon</title>
        <meta
          name="description"
          content="Reproducible macOS dev environment — one command to install dotfiles, CLI tools, Neovim, Kitty, Tmux, and more."
        />
      </Head>
      <WebNav />

      <SetupHero />

      <div className="bg-[#050505]">
        <ToolStack />
      </div>

      <div className="bg-[#0a0a0a]">
        <SetupGuide />
      </div>

      <div className="bg-[#050505]">
        <ConfigBrowser configs={configs} />
      </div>

      <div className="bg-[#0a0a0a]">
        <CliCheatsheet />
      </div>

      <div className="bg-[#050505]">
        <KeybindingsReference />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<MySetupProps> = async () => {
  const dotfilesDir = path.join(process.cwd(), 'dotfiles');

  const configSources = [
    {
      id: 'kitty',
      label: 'kitty.conf',
      filename: 'kitty.conf',
      language: 'conf',
      filePath: path.join(dotfilesDir, 'kitty', 'kitty.conf'),
    },
    {
      id: 'tmux',
      label: '.tmux.conf',
      filename: '.tmux.conf',
      language: 'conf',
      filePath: path.join(dotfilesDir, 'tmux', '.tmux.conf'),
    },
    {
      id: 'zshrc',
      label: '.zshrc',
      filename: '.zshrc',
      language: 'bash',
      filePath: path.join(dotfilesDir, 'zsh', '.zshrc'),
    },
    {
      id: 'aliases',
      label: 'aliases.zsh',
      filename: 'aliases.zsh',
      language: 'bash',
      filePath: path.join(dotfilesDir, 'zsh', 'aliases.zsh'),
    },
    {
      id: 'keymaps',
      label: 'keymaps.lua',
      filename: 'keymaps.lua',
      language: 'lua',
      filePath: path.join(dotfilesDir, 'nvim', 'lua', 'config', 'keymaps.lua'),
    },
    {
      id: 'options',
      label: 'options.lua',
      filename: 'options.lua',
      language: 'lua',
      filePath: path.join(dotfilesDir, 'nvim', 'lua', 'config', 'options.lua'),
    },
    {
      id: 'gitconfig',
      label: '.gitconfig',
      filename: '.gitconfig',
      language: 'ini',
      filePath: path.join(dotfilesDir, 'git', '.gitconfig'),
    },
    {
      id: 'bootstrap',
      label: 'bootstrap.sh',
      filename: 'bootstrap.sh',
      language: 'bash',
      filePath: path.join(dotfilesDir, 'scripts', 'bootstrap.sh'),
    },
  ];

  const configs: ConfigFile[] = configSources.map((src) => {
    let content = '';
    try {
      content = fs.readFileSync(src.filePath, 'utf-8');
    } catch {
      content = `# File not found: ${src.filePath}`;
    }
    return {
      id: src.id,
      label: src.label,
      filename: src.filename,
      language: src.language,
      content,
    };
  });

  return { props: { configs } };
};

export default MySetup;
