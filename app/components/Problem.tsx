import Link from "next/link";

const PROBLEMS = [
  { title: "経営チームで議論が尽くされず、未来を見据えた経営判断がされない" },
  { title: "組織を変革するリーダーシップが育っていない" },
  { title: "「DEI」という言葉が独り歩きし、社員はどう対応すればよいか戸惑いがある" },
  { title: "社員のエンゲージメントが低く、キーパーソンの退職が続いている" },
  { title: "「心理的安全性」を気にし過ぎて、社員同士が遠慮し合い、対話が深まらない" },
  { title: "制度を変えても、社員の意識と行動が変わらない" },
];

export default function Problem() {
  return (
    <section id="problem" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-display tracking-[0.2em] text-brand-orange text-lg mb-4">
            CHALLENGES
          </p>
          <h2 className="text-3xl lg:text-4xl font-700 leading-snug tracking-tight">
            こんな組織課題はありませんか？
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="group bg-surface rounded-2xl border border-transparent p-8 transition-all duration-200 ease-out hover:-translate-y-1.5 hover:shadow-[0_16px_34px_rgba(3,52,55,0.14)] hover:border-brand-teal/25"
            >
              <span className="block h-1 w-10 rounded-full bg-brand-teal/40 transition-all duration-200 group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-brand-teal group-hover:to-brand-orange" />
              <h3 className="mt-5 text-lg font-700 leading-relaxed">{p.title}</h3>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center text-lg lg:text-xl font-500 leading-relaxed">
          その課題、<span className="text-brand-gradient font-700">CQ（文化知性）</span>
          で解決できます
        </p>

        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="inline-block btn-accent font-medium px-8 py-3.5 rounded-2xl shadow-sm"
          >
            無料で相談する
          </Link>
          <p className="mt-3 text-xs text-muted">
            現状の課題整理から、最適なアプローチのご提案まで。初回相談は無料です
          </p>
        </div>
      </div>
    </section>
  );
}
