import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "資料ダウンロード | Lincqord",
  description:
    "Lincqordの会社案内・サービス資料・CQ（文化知性）に関するホワイトペーパーのダウンロードページ。準備が整い次第、順次公開します",
};

export default function DownloadPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="DOWNLOAD"
        title="資料ダウンロード"
        lead="会社案内・サービス資料・CQ（文化知性）に関するホワイトペーパーをご用意します"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 text-center">
          <div className="rounded-2xl border border-border bg-surface px-8 py-14 lg:py-16">
            <h2 className="text-xl lg:text-2xl font-700 tracking-tight">
              資料を準備中です
            </h2>
            <p className="mt-5 text-sm lg:text-base leading-relaxed text-muted">
              近日中に、ダウンロード資料を公開予定です。
              <br className="hidden sm:block" />
              お急ぎの場合は、お問い合わせフォームよりご連絡ください。
              ご要望に応じて個別に資料をお送りします
            </p>
            <Link
              href="/contact"
              className="inline-block mt-8 btn-primary font-medium px-8 py-3.5 rounded-2xl"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
