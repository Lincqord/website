import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "採用情報 | Lincqord",
  description:
    "Lincqordの採用情報。CQ（文化知性）を軸に、違いをチカラに変える組織づくりに共に挑む仲間を募集しています。",
};

// TODO: 実際の募集職種・条件に差し替え
const POSITIONS = [
  { title: "組織開発コンサルタント", type: "正社員 / 業務委託", desc: "組織課題の可視化から戦略・実装まで、クライアントに伴走します。" },
  { title: "コーチ / ファシリテーター", type: "正社員 / 業務委託", desc: "経営層・リーダー向けのコーチングやワークショップを担います。" },
];

export default function CareersPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="CAREERS"
        title="採用情報"
        lead="“違い”をチカラに変える挑戦を、共に。多様なバックグラウンドを歓迎します。"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">募集職種</h2>
          <div className="mt-8 space-y-5">
            {POSITIONS.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="text-lg font-700">{p.title}</h3>
                  <p className="text-xs text-brand-teal mt-1">{p.type}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.desc}</p>
                </div>
                <Link
                  href="/contact"
                  className="btn-primary text-center font-medium px-7 py-3 rounded-full shrink-0"
                >
                  応募・問い合わせ
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm leading-relaxed text-muted">
            上記以外のポジションにご関心のある方も、お気軽に
            <Link href="/contact" className="text-brand-teal underline">
              お問い合わせ
            </Link>
            ください。
          </p>
        </div>
      </section>
    </main>
  );
}
