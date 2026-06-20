export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 lg:pt-20">
      {/* soft brand background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-32 w-[42rem] h-[42rem] rounded-full opacity-15 blur-3xl bg-brand-gradient"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center min-h-[calc(100vh-5rem)] py-16 lg:py-0">
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
                className="bg-brand-gradient text-white text-center font-medium px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-sm"
              >
                無料で相談する
              </a>
              <a
                href="#services"
                className="text-center font-medium px-8 py-3.5 rounded-full border border-border text-foreground hover:border-brand-teal hover:text-brand-teal transition-colors"
              >
                サービスを見る
              </a>
            </div>
          </div>

          {/* Right: visual */}
          <div className="relative">
            <div className="relative aspect-square w-full max-w-xl mx-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero-people.png"
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
