import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";
import WaveDivider from "../components/WaveDivider";
import CaseExplorer from "./CaseExplorer";
import { CASES, SERVICE_LINKS } from "./data";

export const metadata: Metadata = {
  title: "支援実績 | Lincqord",
  description:
    "Lincqordの支援実績。女性活躍の風土改革、経営チームの対話、若手の離職・育成、組織文化の変革など、各業界の組織課題に「現状を知る→対話する→変える→成果につなげる」のステップで伴走した事例をご紹介します。",
};

const FEATURED = CASES.slice(0, 4);

export default function CaseStudyPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="CASE STUDY"
        title="支援実績"
        lead="業界を問わず、多くの企業の組織課題に伴走してきました。「課題 → 支援内容 → 変化」の流れで、代表的な事例をご紹介します。"
      />

      {/* Featured */}
      <section className="bg-white pt-10 lg:pt-16 pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
            ピックアップ実績
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-7">
            {FEATURED.map((c) => (
              <article
                key={c.theme}
                className="rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="h-1.5 bg-brand-gradient" />
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-500 text-white bg-brand-teal rounded-full px-3 py-1">
                      {c.industry}
                    </span>
                    <span className="text-xs font-500 text-brand-teal">
                      {c.challenge}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-700 leading-snug">{c.theme}</h3>
                  <dl className="mt-5 space-y-3 text-sm leading-relaxed">
                    <div>
                      <dt className="font-700 text-foreground/80">課題</dt>
                      <dd className="text-muted">{c.issue}</dd>
                    </div>
                    <div>
                      <dt className="font-700 text-foreground/80">支援内容</dt>
                      <dd className="text-muted">{c.action}</dd>
                    </div>
                    <div>
                      <dt className="font-700 text-brand-orange">変化</dt>
                      <dd className="text-muted">{c.change}</dd>
                    </div>
                  </dl>
                  <div className="mt-5 pt-4 border-t border-border flex flex-wrap gap-1.5">
                    {c.services.map((id) => (
                      <Link
                        key={id}
                        href={SERVICE_LINKS[id].href}
                        className="text-xs px-3 py-1 rounded-full border border-brand-teal/30 bg-brand-teal/5 text-brand-teal-deep hover:bg-brand-teal/10 transition-colors"
                      >
                        {SERVICE_LINKS[id].name}
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider from="white" to="surface" />

      {/* All cases (compact) */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
            すべての支援実績
          </h2>
          <p className="mt-4 max-w-2xl text-muted leading-relaxed">
            業界・テーマを問わず、多様な組織課題に伴走してきました。
            課題やサービスで絞り込んで、貴社に近い事例をお探しいただけます。
          </p>

          <CaseExplorer />

          <p className="mt-8 text-xs text-muted">
            ※ 掲載企業の特定を避けるため、業種のみを記載し、内容を一部一般化しています。
          </p>
        </div>
      </section>

      <WaveDivider from="surface" to="white" />

      <PageCTA
        title="貴社の課題に近い事例をご紹介します"
        body="業界・テーマに応じた具体的な支援事例を、個別にご説明します。まずはお気軽にご相談ください。"
      />
    </main>
  );
}
