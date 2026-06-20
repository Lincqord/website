const NAV = [
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "UNIQUENESS", href: "#uniqueness" },
  { label: "CASE STUDY", href: "#case-study" },
  { label: "TEAM", href: "#team" },
  { label: "NEWS", href: "#news" },
  { label: "CAREERS", href: "#careers" },
  { label: "CONTACT", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/85">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="font-display text-3xl font-700 text-white">Lincqord</p>
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
                className="font-display text-sm tracking-wide text-white/75 hover:text-white transition-colors"
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
