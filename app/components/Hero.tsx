export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 items-center pt-24 lg:pt-28 pb-12 lg:pb-16">
          {/* Left: copy */}
          <div className="max-w-xl">
            <p className="font-display tracking-[0.2em] text-brand-teal text-sm mb-6">
              DIFFERENCE IS POWER
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-900 leading-[1.25] tracking-tight text-foreground">
              <span className="text-brand-gradient">&ldquo;違い&rdquo;</span>を
              <br className="hidden sm:block" />
              チカラにする
              <br />
              組織をつくる
            </h1>

            <p className="mt-7 text-base lg:text-lg leading-relaxed text-muted">
              国籍・世代・経験——あらゆる&ldquo;違い&rdquo;を組織の推進力に。
              <br className="hidden sm:block" />
              CQ（文化知性）を軸に、多様な人材が力を発揮できる組織づくりを支援します。
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-primary text-center font-medium px-8 py-3.5 rounded-full shadow-sm"
              >
                無料で相談する
              </a>
              <a
                href="#services"
                className="btn-outline text-center font-medium px-8 py-3.5 rounded-full"
              >
                サービスを見る
              </a>
            </div>
          </div>

          {/* Right: visual with flowing decorations */}
          <div className="relative">
            {/* decorative flowing lines (v1-inspired) */}
            <svg
              aria-hidden
              viewBox="0 0 600 600"
              className="absolute inset-0 w-full h-full pointer-events-none"
              fill="none"
            >
              <circle cx="300" cy="300" r="240" stroke="var(--color-teal)" strokeOpacity="0.12" strokeWidth="1.5" />
              <circle cx="300" cy="300" r="185" stroke="var(--color-orange)" strokeOpacity="0.12" strokeWidth="1.5" />
              <path
                d="M40 380 C 160 300, 220 460, 360 380 S 560 300, 580 360"
                stroke="var(--color-teal)"
                strokeOpacity="0.3"
                strokeWidth="2"
              />
              <path
                d="M30 430 C 180 360, 260 500, 400 420 S 560 360, 590 410"
                stroke="var(--color-orange)"
                strokeOpacity="0.3"
                strokeWidth="2"
              />
            </svg>

            <div className="relative aspect-square w-full max-w-md lg:max-w-lg mx-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero-people-v3.png"
                alt="多様な人々が集う組織のイメージ"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
