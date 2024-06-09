"use client";
import { FC, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black py-2 w-full h-auto font-mono">
      <div className="grid grid-cols-[1fr_max-content_1fr]  place-items-center px-4">
        <Link href="/" className="text-white">
          <img src="/portfolio.png" className="w-20 h-20 container_anim" alt="Logo" />
        </Link>
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <Menu />
          </button>
        </div>
        <div className="hidden lg:flex space-x-12 text-2xl text-white">
          <Link href="/pages/about" className="underline_anim">
            About Me
          </Link>
          <Link href="/pages/projects" className="underline_anim">
            Projects
          </Link>
          <Link href="/pages/contact" className="underline_anim">
            Contact
          </Link>
          <Link href="/pages/other" className="underline_anim">
            Other
          </Link>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-black text-white flex flex-col items-center space-y-4 mt-4 text-xl">
          <Link href="/pages/about" className="underline_anim" onClick={toggleMenu}>
            About Me
          </Link>
          <Link href="/pages/projects" className="underline_anim" onClick={toggleMenu}>
            Projects
          </Link>
          <Link href="/pages/contact" className="underline_anim" onClick={toggleMenu}>
            Contact
          </Link>
          <Link href="/pages/other" className="underline_anim">
            Other
          </Link>
        </div>
      )}
    </div>
  );
};
