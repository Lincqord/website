const NEWS = [
  {
    date: "2026.06.01",
    category: "お知らせ",
    title: "コーポレートサイトをリニューアルしました",
  },
  {
    date: "2026.05.20",
    category: "コラム",
    title: "CQ（文化知性）が組織にもたらす3つの変化とは",
  },
  {
    date: "2026.05.08",
    category: "セミナー",
    title: "【無料ウェビナー】多様性を成果に変える組織づくり",
  },
];

export default function News() {
  return (
    <section id="news" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="font-display tracking-[0.2em] text-brand-teal text-lg mb-4">
              INSIGHTS
            </p>
            <h2 className="text-3xl lg:text-4xl font-700 leading-snug tracking-tight">
              知見・ノウハウ
            </h2>
          </div>
          <a
            href="/news"
            className="text-sm font-500 text-brand-teal hover:underline shrink-0"
          >
            すべて見る →
          </a>
        </div>

        <ul className="mt-10 divide-y divide-border border-t border-border">
          {NEWS.map((n) => (
            <li key={n.title}>
              <a
                href="/news"
                className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-6 hover:bg-surface -mx-4 px-4 rounded-lg transition-colors"
              >
                <time className="text-sm text-muted font-display tracking-wide shrink-0">
                  {n.date}
                </time>
                <span className="text-xs font-500 text-brand-orange border border-brand-orange/30 rounded-full px-3 py-0.5 shrink-0 w-fit">
                  {n.category}
                </span>
                <span className="text-base font-500 group-hover:text-brand-teal transition-colors">
                  {n.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
