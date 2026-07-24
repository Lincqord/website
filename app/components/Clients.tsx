// h: 実際の表示高さ(px)。transform不使用のため画質劣化なし。
const CLIENTS = [
  { name: "JT",                    file: "jt.png",                    h: 48 },
  { name: "豊田通商",              file: "toyota-tsusho.png",          h: 48 },
  { name: "旭化成ホームズ",        file: "asahikasei-homes.png",       h: 48 },
  { name: "SEKISUI",               file: "sekisui.png",                h: 48 },
  { name: "東北電力",              file: "tohoku-denryoku.png",        h: 48 },
  { name: "東急リゾーツ&ステイ",  file: "tokyu-resorts&stay.png",     h: 72 },
  { name: "日本山村硝子",          file: "nihon-yamamura-glass.png",   h: 48 },
  { name: "豊通マシナリー",        file: "toyotsu-machinery.png",      h: 48 },
  { name: "アポプラスステーション",file: "apo-plus-station.png",       h: 48 },
  { name: "elematec",              file: "elematec.png",               h: 48 },
  { name: "日本電技",              file: "nihon-dengi.png",            h: 48 },
  { name: "大阪ガス",              file: "osaka-gas.png",              h: 60 },
  { name: "T-NET JAPAN",           file: "t-net-japan.png",            h: 48 },
];

export default function Clients() {
  const loop = [...CLIENTS, ...CLIENTS];

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-display tracking-[0.2em] text-brand-teal text-lg mb-4">
            OUR CLIENTS
          </p>
          <h2 className="text-2xl lg:text-3xl font-700 leading-snug tracking-tight">
            多くの企業に選ばれています
          </h2>
        </div>
      </div>

      <div className="mt-12 overflow-hidden marquee-mask">
        <div className="flex w-max marquee-anim items-center">
          {loop.map((client, i) => (
            <div key={`${client.name}-${i}`}
              className="flex items-center justify-center shrink-0 px-10"
              style={{ height: "160px" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/clients-processed/${client.file}`}
                alt={client.name}
                style={{ height: `${client.h}px`, width: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
