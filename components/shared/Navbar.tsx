import React from 'react';
import { ModeToggle } from '@/components/ModeToggle';

const navLinks = [
  {
    shrug: 'blog',
    name: 'Blog',
    link: '/blog',
  },
  {
    shrug: 'blog',
    name: 'Components',
    link: '/components',
  },
];

const Navbar = () => {
  return (
    <div className="bg-background fixed top-0 right-0 left-0 z-50 flex justify-center">
      <div className="mt-4 w-full max-w-5xl px-4 lg:px-0">
        <nav className="screen-line-top screen-line-bottom pointer-events-auto flex w-full items-center justify-between border-x px-4 py-3">
          <SectionCorners />
          <h1>harshal.</h1>
          <div className="flex items-center">
            <ul className="flex gap-5">
              {navLinks.map((navLink, idx) => (
                <a key={idx} href={navLink.link}>
                  {navLink.name}
                </a>
              ))}
            </ul>
            <p className="text-muted-foreground ml-3 opacity-80">|</p>
            <ModeToggle />
          </div>
        </nav>
      </div>
    </div>
  );
};

export function SectionCorners() {
  return (
    <>
      <div className="border-foreground absolute -top-px -left-px h-2 w-2 border-t-1 border-l-1" />
      <div className="border-foreground absolute -top-px -right-px h-2 w-2 border-t-1 border-r-1" />
      <div className="border-foreground absolute -bottom-px -left-px h-2 w-2 border-b-1 border-l-1" />
      <div className="border-foreground absolute -right-px -bottom-px h-2 w-2 border-r-1 border-b-1" />
    </>
  );
}

export default Navbar;
