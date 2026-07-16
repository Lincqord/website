"use client";

import { useState } from "react";
import Link from "next/link";
import { CASES, CHALLENGES, SERVICE_LINKS } from "./data";

export default function CaseExplorer() {
  const [challenge, setChallenge] = useState<string | null>(null);
  const [service, setService] = useState<string | null>(null);

  const filtered = CASES.filter(
    (c) =>
      (!challenge || c.challenge === challenge) &&
      (!service || c.services.includes(service)),
  );

  return (
    <div>
      {/* 課題で絞り込み */}
      <div className="mt-10">
        <p className="text-xs font-700 tracking-wide text-muted">
          課題から探す
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <FilterChip
            label="すべて"
            active={challenge === null}
            onClick={() => setChallenge(null)}
          />
          {CHALLENGES.map((c) => (
            <FilterChip
              key={c}
              label={c}
              active={challenge === c}
              onClick={() => setChallenge(challenge === c ? null : c)}
            />
          ))}
        </div>
      </div>

      {/* サービスで絞り込み */}
      <div className="mt-5">
        <p className="text-xs font-700 tracking-wide text-muted">
          サービスから探す
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <FilterChip
            label="すべて"
            active={service === null}
            onClick={() => setService(null)}
          />
          {Object.entries(SERVICE_LINKS).map(([id, s]) => (
            <FilterChip
              key={id}
              label={s.name}
              active={service === id}
              onClick={() => setService(service === id ? null : id)}
            />
          ))}
        </div>
      </div>

      {/* 一覧 */}
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((c) => (
          <div
            key={c.theme + c.industry}
            className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-500 text-white bg-foreground/70 rounded-full px-2.5 py-0.5">
                {c.industry}
              </span>
              <button
                onClick={() =>
                  setChallenge(challenge === c.challenge ? null : c.challenge)
                }
                className="text-[11px] font-500 text-brand-teal hover:underline"
              >
                {c.challenge}
              </button>
            </div>
            <h3 className="mt-3 text-base font-700 leading-snug">{c.theme}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted line-clamp-3 flex-1">
              {c.change}
            </p>
            <div className="mt-4 pt-3 border-t border-border flex flex-wrap gap-1.5">
              {c.services.map((id) => (
                <Link
                  key={id}
                  href={SERVICE_LINKS[id].href}
                  className="text-[11px] px-2.5 py-0.5 rounded-full border border-brand-teal/30 bg-brand-teal/5 text-brand-teal-deep hover:bg-brand-teal/10 transition-colors"
                >
                  {SERVICE_LINKS[id].name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-sm text-muted">
          この組み合わせの事例は準備中です。近い課題の事例をご紹介できますので、お気軽にお問い合わせください
        </p>
      )}
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-xs px-3.5 py-1.5 rounded-full border transition-colors ${
        active
          ? "bg-brand-teal text-white border-brand-teal"
          : "bg-white text-foreground/75 border-border hover:border-brand-teal/50"
      }`}
    >
      {label}
    </button>
  );
}
