const NAV = [
  { label: "会社概要", href: "/company" },
  { label: "代表紹介", href: "/founder" },
  { label: "CQとは", href: "/uniqueness" },
  { label: "サービス", href: "/services" },
  { label: "組織診断", href: "/diagnosis" },
  { label: "支援実績", href: "/case-study" },
  { label: "知見・ノウハウ", href: "/news" },
  { label: "採用情報", href: "/careers" },
  { label: "資料ダウンロード", href: "/download" },
  { label: "お問い合わせ", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/85">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Lincqord"
              width={1647}
              height={370}
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-xs">
              CQ（文化知性）を軸に、多様性を組織のチカラへ。
              人と組織に革新をもたらすパートナーです。
            </p>
          </div>

          {/* Nav */}
          <nav className="grid grid-cols-2 gap-3 content-start">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white/75 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Company info */}
          <div className="text-sm leading-relaxed text-white/70 space-y-1">
            <p className="text-white font-500">株式会社リンクォード</p>
            <p>代表取締役　石井 由香梨</p>
            <p>〒104-0041 東京都中央区新富1-7-8 イタクラビル7F</p>
            <p>設立：2022年1月</p>
            <p>適格請求書発行事業者：T3010001223851</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/15 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/55">
          <p>&copy; {2026} Lincqord Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              プライバシーポリシー
            </a>
            <a href="#" className="hover:text-white transition-colors">
              利用規約
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
