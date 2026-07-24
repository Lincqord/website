import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import { DIAGNOSIS_THEMES } from "./data";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "組織の現在地診断 | Lincqord",
  description:
    "貴社の組織課題は今、どの段階にあるのか。いくつかの質問に答えるだけで、組織の現在地を5段階で確かめられる無料の簡易診断です。6つの組織課題からお選びいただけます",
};

export default function DiagnosisIndexPage() {
  return (
    <main className="flex-1">
      <PageHero eyebrow="DIAGNOSIS"
        title="組織の現在地診断"
      />

      <section className="bg-white pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
            どの課題で診断しますか？
          </h2>
          <p className="mt-4 max-w-2xl text-muted leading-relaxed">
            6つの組織課題すべての診断を公開しています。いま一番気になる課題からお試しください
          </p>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIAGNOSIS_THEMES.map((t) =>
              t.slug ? (
                <Link key={t.challenge}
                  href={`/diagnosis/${t.slug}`}
                  className="group bg-surface rounded-2xl border-2 border-brand-teal/50 p-8 hover:border-brand-teal hover:shadow-lg transition-all flex flex-col"
                >
                  <span className="self-start text-xs font-700 text-white bg-brand-teal rounded-full px-3 py-1">
                    診断できます
                  </span>
                  <h3 className="mt-4 text-lg font-700 leading-snug">
                    {t.challenge}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted flex-1">
                    {t.body}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-700 text-brand-teal group-hover:gap-2 transition-all">
                    診断をはじめる →
                  </span>
                </Link>
              ) : (
                <div key={t.challenge}
                  className="bg-surface/50 rounded-2xl border border-border p-8 flex flex-col"
                  aria-disabled
                >
                  <span className="self-start text-xs font-500 text-muted bg-white border border-border rounded-full px-3 py-1">
                    準備中
                  </span>
                  <h3 className="mt-4 text-lg font-700 leading-snug text-foreground/60">
                    {t.challenge}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted/70 flex-1">
                    {t.body}
                  </p>
                </div>
              ),
            )}
          </div>

          <p className="mt-10 text-sm text-muted text-center">
            診断を待たずにご相談いただくことも可能です。
            <Link href="/contact"
              className="ml-1 font-500 text-brand-teal hover:underline"
            >
              無料で相談する →
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
