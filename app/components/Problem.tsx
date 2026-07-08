import Link from "next/link";

const PROBLEMS = [
  {
    title: "中間管理職が疲弊している",
    body: "経営と若手の板挟み。調整・確認業務に追われ、変革の起点になれない。",
  },
  {
    title: "女性活躍が「形だけ」になっている",
    body: "比率目標はあるが実態が伴わない。善意の配慮（慈悲的バイアス）が壁に。",
  },
  {
    title: "優秀な若手ほど辞めていく・育たない",
    body: "指示待ち・チャレンジしない。若手の価値観と組織文化のギャップ。",
  },
  {
    title: "経営チーム・組織長がバラバラ",
    body: "部門間の相互不可侵。対話の不在。次世代経営者も育っていない。",
  },
  {
    title: "制度を変えても現場が変わらない",
    body: "ハード施策だけでソフト（意識・言動）が置き去り。施策が定着しない。",
  },
  {
    title: "部門・世代・立場の間に壁がある",
    body: "一体感がない。対立、あるいは遠慮。「私たちのやり方」同士の衝突。",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-display tracking-[0.2em] text-brand-orange text-sm mb-4">
            CHALLENGES
          </p>
          <h2 className="text-3xl lg:text-4xl font-700 leading-snug tracking-tight">
            こんな組織課題は
            <br className="sm:hidden" />
            ありませんか？
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="bg-surface rounded-2xl border border-border p-8 hover:shadow-md transition-shadow"
            >
              <span className="block h-1 w-10 rounded-full bg-brand-teal/40" />
              <h3 className="mt-5 text-lg font-700 leading-snug">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center text-lg lg:text-xl font-500 leading-relaxed">
          その課題、<span className="text-brand-gradient font-700">CQ（文化知性）</span>
          で解決できます。
        </p>

        <div className="mt-8 text-center">
          <Link
            href="/diagnosis"
            className="inline-block btn-accent font-medium px-8 py-3.5 rounded-full shadow-sm"
          >
            うちの会社はどの段階？ 3分でわかる組織診断
          </Link>
          <p className="mt-3 text-xs text-muted">
            いくつかの質問に答えるだけで、組織の現在地を5段階で確かめられます
          </p>
        </div>
      </div>
    </section>
  );
}
