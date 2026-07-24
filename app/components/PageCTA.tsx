import Link from "next/link";

export default function PageCTA({
  title = "組織の“違い”を、チカラに変えませんか",
  body = "現状の課題整理から、最適なアプローチのご提案まで。まずはお気軽にご相談ください。初回相談は無料です",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-white border border-border px-8 py-14 lg:px-16 lg:py-20 text-center">
          {/* Heroと同じ動くオーロラグラデーション */}
          <div aria-hidden className="absolute inset-0 pointer-events-none opacity-70">
            <div className="aurora-blob aurora-1" style={{ top: "-30%", left: "-8%", width: "26rem", height: "26rem", background: "radial-gradient(circle at 50% 50%, var(--color-teal), transparent 70%)" }} />
            <div className="aurora-blob aurora-2" style={{ top: "-24%", right: "-4%", width: "24rem", height: "24rem", background: "radial-gradient(circle at 50% 50%, var(--color-orange), transparent 68%)" }} />
            <div className="aurora-blob aurora-3" style={{ bottom: "-34%", left: "16%", width: "22rem", height: "22rem", background: "radial-gradient(circle at 50% 50%, var(--color-orange-soft), transparent 70%)" }} />
            <div className="aurora-blob aurora-4" style={{ bottom: "-36%", right: "10%", width: "24rem", height: "24rem", background: "radial-gradient(circle at 50% 50%, var(--color-teal-soft), transparent 70%)" }} />
          </div>
          <div className="relative">
            <h2 className="text-2xl lg:text-4xl font-700 leading-snug tracking-tight text-foreground">
              {title}
            </h2>
            <p className="mt-5 text-base lg:text-lg leading-relaxed text-muted max-w-2xl mx-auto">
              {body}
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"
                className="btn-accent font-medium px-9 py-3.5 rounded-2xl shadow-sm"
              >
                無料で相談する
              </Link>
              <Link href="/services"
                className="btn-outline font-medium px-9 py-3.5 rounded-2xl bg-white/70 backdrop-blur-sm"
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
