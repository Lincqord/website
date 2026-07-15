"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "私たちについて", href: "/about" },
  { label: "CQとは", href: "/uniqueness" },
  { label: "サービス", href: "/services" },
  { label: "組織診断", href: "/diagnosis" },
  { label: "支援実績", href: "/case-study" },
  { label: "知見・ノウハウ", href: "/news" },
  { label: "採用情報", href: "/careers" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Lincqord"
            width={1647}
            height={370}
            className="h-7 lg:h-9 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-500 text-foreground/80 hover:text-brand-teal transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTAs (desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/download"
            className="btn-outline text-sm font-500 px-5 py-2.5 rounded-full whitespace-nowrap"
          >
            資料ダウンロード
          </Link>
          <Link
            href="/contact"
            className="btn-primary text-sm font-500 px-5 py-2.5 rounded-full whitespace-nowrap"
          >
            お問い合わせ
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
              className="text-base font-500 text-foreground/85"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/download"
            onClick={() => setOpen(false)}
            className="btn-outline text-center font-500 px-6 py-3 rounded-full mt-2"
          >
            資料ダウンロード
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary text-center font-500 px-6 py-3 rounded-full"
          >
            お問い合わせ
          </Link>
        </nav>
      )}
    </header>
  );
}
