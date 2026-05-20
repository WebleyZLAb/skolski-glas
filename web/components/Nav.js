"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/uvodna-rijec", label: "Уводна ријеч", color: "#E5217E" },
  { href: "/projekat-tesla", label: 'Пројекат „Тесла"', color: "#2563EB" },
  { href: "/aktivnosti", label: "Активности", color: "#F47C2C" },
  { href: "/zanimljivosti", label: "Занимљивости", color: "#D4611A" },
  { href: "/zakljucak", label: "Закључак", color: "#1A2851" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF6EF]/95 backdrop-blur-sm border-b border-[#1A2851]/10 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <span
            className="text-xl font-extrabold tracking-tight text-[#1A2851] group-hover:text-[#2BB8BC] transition-colors"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            ШКОЛСКИ ГЛАС
          </span>
          <span className="hidden sm:block h-5 w-px bg-[#1A2851]/20" />
          <span
            className="hidden sm:block text-xs font-bold tracking-widest text-[#7A8499] uppercase"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Број 18
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-full text-sm font-bold text-[#3D4B73] hover:text-white transition-all duration-200"
              style={{
                fontFamily: "var(--font-manrope)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = link.color;
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "";
                e.currentTarget.style.color = "";
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-[#1A2851]/5 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Мени"
          aria-expanded={open}
        >
          <span
            className={`block h-0.5 w-6 bg-[#1A2851] transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#1A2851] transition-all duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#1A2851] transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="lg:hidden border-t border-[#1A2851]/10 bg-[#FAF6EF] px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-[#1A2851] hover:text-white transition-all duration-200"
              style={{ fontFamily: "var(--font-manrope)" }}
              onClick={() => setOpen(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = link.color;
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "";
                e.currentTarget.style.color = "#1A2851";
              }}
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: link.color }}
              />
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
