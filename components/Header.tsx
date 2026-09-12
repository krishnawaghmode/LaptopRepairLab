'use client';
import { useState } from 'react';
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-3"
          aria-label="Laptop Repair Lab home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-500 text-xl shadow-lg shadow-sky-500/20">
            💻
          </span>

          <div>
            <p className="text-sm font-extrabold tracking-wide text-white sm:text-base">
              LAPTOP REPAIR LAB
            </p>

            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Wagholi, Pune</p>
          </div>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a className="transition hover:text-white" href="#services">
            Services
          </a>

          <a className="transition hover:text-white" href="#why-us">
            Why Us
          </a>

          <a className="transition hover:text-white" href="#reviews">
            Reviews
          </a>

          <a className="transition hover:text-white" href="#contact">
            Contact
          </a>
        </nav>

        {/* Desktop call button */}
        <a
          href="tel:+919960526832"
          className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-sky-100 sm:inline-flex"
        >
          Call Now
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(currentState => !currentState)}
          className="rounded-lg border border-white/10 p-2 text-slate-300 md:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile navigation */}
      <nav
        className={`border-t border-white/10 bg-slate-950 px-5 py-4 md:hidden ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col gap-4 text-sm text-slate-300">
          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#why-us" onClick={closeMenu}>
            Why Us
          </a>

          <a href="#reviews" onClick={closeMenu}>
            Reviews
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a href="tel:+919960526832" onClick={closeMenu} className="font-bold text-sky-400">
            Call 99605 26832
          </a>
        </div>
      </nav>
    </header>
  );
}
