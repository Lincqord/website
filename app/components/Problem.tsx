import Link from "next/link";

const PROBLEMS = [
  {
    title: "経営チームで議論が尽くされず、意思決定ができない",
    body: "役員間に本音の対話がなく、本質的な議論に踏み込めないまま経営会議が終わっていく",
  },
  {
    title: "組織を変革するリーダーシップが育っていない",
    body: "役職者はいても、変革を牽引するリーダーが現れない。次の経営を担う人材も見えてこない",
  },
  {
    title: "「DEI」という言葉だけが独り歩きし、社員は戸惑っている",
    body: "施策や研修は増えていくのに「なぜやるのか」が腹落ちせず、現場に戸惑いが広がっている",
  },
  {
    title: "何をすれば、社員のエンゲージメントが上がるのかわからない",
    body: "サーベイと打ち手を繰り返しても数字は動かず、次の一手の根拠が見えない",
  },
  {
    title: "「心理的安全性」が遠慮につながり、対話が深まらない",
    body: "傷つけないことを優先するあまり、本音や違和感をぶつけ合う深い対話が生まれない",
  },
  {
    title: "制度を変えても、社員の意識と行動が変わらない",
    body: "仕組みは新しくなったのに現場が置き去りのまま、変化が定着しない",
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
          で解決できます
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
