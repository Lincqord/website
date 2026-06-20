"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "UNIQUENESS", href: "/uniqueness" },
  { label: "CASE STUDY", href: "/case-study" },
  { label: "TEAM", href: "/team" },
  { label: "NEWS", href: "/news" },
  { label: "CAREERS", href: "/careers" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-2xl lg:text-3xl font-700 tracking-tight text-foreground"
        >
          Lincqord
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-display text-sm tracking-wide text-foreground/80 hover:text-brand-teal transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA (desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="btn-primary font-display text-sm tracking-wide px-6 py-2.5 rounded-full"
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="メニュー"
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block w-6 h-0.5 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden bg-white border-t border-border px-5 py-6 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-base tracking-wide text-foreground/85"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary text-center font-display tracking-wide px-6 py-3 rounded-full mt-2"
          >
            CONTACT
          </Link>
        </nav>
      )}
    </header>
  );
}
