"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

type HeaderMenuProps = {
  isScrolledAndImmutable?: boolean;
};

export default function HeaderMenu({
  isScrolledAndImmutable = false,
}: HeaderMenuProps) {
  const [isScrolled, setIsScrolled] = useState(isScrolledAndImmutable);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const handleMouseEnter = (element: HTMLDivElement, menuId: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Close any other open submenus
    document.querySelectorAll('.submenu').forEach(menu => {
      if (menu.parentElement !== element) {
        menu.classList.add('hidden');
      }
    });
    
    element.querySelector(".submenu")?.classList.remove("hidden");
    setActiveSubmenu(menuId);
  };

  const handleMouseLeave = (element: HTMLDivElement) => {
    timeoutRef.current = setTimeout(() => {
      element.querySelector(".submenu")?.classList.add("hidden");
      setActiveSubmenu(null);
    }, 100);
  };

  useEffect(() => {
    if (!isScrolledAndImmutable) {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
      };
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-20 px-4 md:px-8 h-24 flex justify-between items-center transition-all duration-500 ${
        isScrolled ? "bg-white shadow-md" : ""
      }`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="hover:scale-105 transition-transform duration-300"
      >
        <Image
          src={isScrolled ? "/images/logo.png" : "/images/logo_white.png"}
          alt="TOM MEDLOG Logo"
          width={120}
          height={40}
          className="object-contain hover:scale-105 transition-all duration-500 hover:cursor-pointer"
        />
      </Link>

      {/* Hamburger Menu Button (Mobile) */}
      <button
        className="md:hidden text-4xl z-50 transition-transform duration-300 hover:scale-110 text-white md:text-black"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {/* Navigation Links */}
      <div
        className={`
          md:flex md:items-center md:gap-8
          fixed md:static top-0 right-0 h-screen md:h-auto w-64 md:w-auto
          flex flex-col md:flex-row items-center justify-center gap-8
          ${isScrolled ? "bg-white" : "bg-transparent"} 
          transition-all duration-500
          ${isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
          ${isMenuOpen ? "bg-white/95" : ""}
        `}
      >
        {/* About */}
        <div
          className="relative group"
          onMouseEnter={(e) => handleMouseEnter(e.currentTarget, 'about')}
          onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
        >
          <div
            className={`${
              isScrolled || isMenuOpen ? "text-black" : "text-white"
            } hover:text-[var(--primary)] transition-all duration-300 hover:scale-105 flex items-center gap-1 cursor-pointer`}
          >
            <Link href="/about">À propos</Link>
            <svg
              className="w-4 h-4 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {pathname === "/about" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F3DFA2]"></div>
          )}

          <div className="submenu absolute hidden mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
            <Link
              href="/about#mission"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[var(--primary)] hover:text-white"
            >
              Notre mission
            </Link>
            <Link
              href="/about#objectif"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[var(--primary)] hover:text-white"
            >
              Notre objectif
            </Link>
            <Link
              href="/about#vision"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[var(--primary)] hover:text-white"
            >
              Notre vision
            </Link>
            <Link
              href="/about#valeurs"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[var(--primary)] hover:text-white"
            >
              Nos valeurs
            </Link>
            <Link
              href="/about#team"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[var(--primary)] hover:text-white"
            >
              Une équipe d'experts
            </Link>
          </div>
        </div>
        {/* Services */}
        <div
          className="relative group"
          onMouseEnter={(e) => handleMouseEnter(e.currentTarget, 'services')}
          onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
        >
          <div
            className={`${
              isScrolled || isMenuOpen ? "text-black" : "text-white"
            } hover:text-[var(--primary)] transition-all duration-300 hover:scale-105 flex items-center gap-1 cursor-pointer`}
          >
            <Link href="/services">Services</Link>
            <svg
              className="w-4 h-4 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {pathname === "/services" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F3DFA2]"></div>
          )}

          <div className="submenu absolute hidden mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
            <Link
              href="/services#transport"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[var(--primary)] hover:text-white"
            >
              Transport
            </Link>
            <Link
              href="/services#depot"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[var(--primary)] hover:text-white"
            >
              Dépôt conteneurs
            </Link>
            <Link
              href="/services#entreprosage"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[var(--primary)] hover:text-white"
            >
              Entreposage / Distribution marchandises
            </Link>
            <Link
              href="/services#solutions"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[var(--primary)] hover:text-white"
            >
              Solutions logistiques à valeurs ajoutées
            </Link>
          </div>
        </div>
        {/* Blog */}
        <div className="relative">
          <Link
            href="/blog"
            className={`${
              isScrolled || isMenuOpen ? "text-black" : "text-white"
            } hover:text-[var(--primary)] transition-all duration-300 hover:scale-105`}
          >
            Actualités
          </Link>
          {pathname === "/blog" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F3DFA2]"></div>
          )}
        </div>
        {/* Why Join Us */}
        <div
          className="relative group"
          onMouseEnter={(e) => handleMouseEnter(e.currentTarget, 'why-join-us')}
          onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
        >
          <div
            className={`${
              isScrolled || isMenuOpen ? "text-black" : "text-white"
            } hover:text-[var(--primary)] transition-all duration-300 hover:scale-105 flex items-center gap-1 cursor-pointer`}
          >
            <Link href="/why-join-us">Pourquoi nous rejoindre</Link>
          </div>
          {pathname === "/why-join-us" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F3DFA2]"></div>
          )}
        </div>
        <Link
          href="/contact"
          className="bg-[var(--primary)] text-black px-4 py-2 hover:brightness-95 transition-all duration-300 rounded-full hover:scale-105 hover:shadow-lg"
        >
          Nous contacter
        </Link>
      </div>
    </nav>
  );
}
