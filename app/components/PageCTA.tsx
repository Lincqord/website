import Link from "next/link";

export default function PageCTA({
  title = "組織の“違い”を、チカラに変えませんか",
  body = "現状の課題整理から、最適なアプローチのご提案まで。まずはお気軽にご相談ください。初回相談は無料です。",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-brand-teal px-8 py-14 lg:px-16 lg:py-20 text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -right-16 w-80 h-80 rounded-full bg-brand-orange/25 blur-2xl"
          />
          <div className="relative">
            <h2 className="text-2xl lg:text-4xl font-700 leading-snug tracking-tight text-white">
              {title}
            </h2>
            <p className="mt-5 text-base lg:text-lg leading-relaxed text-white/85 max-w-2xl mx-auto">
              {body}
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-accent font-medium px-9 py-3.5 rounded-full shadow-sm"
              >
                無料で相談する
              </Link>
              <Link
                href="/services"
                className="font-medium px-9 py-3.5 rounded-full border border-white/40 text-white hover:bg-white/10 transition-colors"
              >
                サービスを見る
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
