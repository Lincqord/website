const CLIENTS = [
  "JT",
  "豊田通商",
  "旭化成ホームズ",
  "SEKISUI",
  "東北電力",
  "東急リゾーツ&ステイ",
  "日本山村硝子",
  "豊通マシナリー",
  "アポプラスステーション",
  "elematec",
];

export default function Clients() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-display tracking-[0.2em] text-brand-teal text-sm mb-4">
            OUR CLIENTS
          </p>
          <h2 className="text-2xl lg:text-3xl font-700 leading-snug tracking-tight">
            多くの企業に選ばれています
          </h2>
        </div>

        {/* TODO: 各社ロゴ画像に差し替え（現状は社名テキスト） */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {CLIENTS.map((name) => (
            <div
              key={name}
              className="bg-white flex items-center justify-center h-24 px-4 text-center text-sm font-500 text-foreground/70"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
