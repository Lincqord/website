export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Aurora background: drifting brand-color blobs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {/* teal: top-left */}
        <div
          className="aurora-blob aurora-1"
          style={{
            top: "-14%",
            left: "-6%",
            width: "44rem",
            height: "44rem",
            background:
              "radial-gradient(circle at 50% 50%, var(--color-teal), transparent 70%)",
          }}
        />
        {/* orange: top-right (brought into view) */}
        <div
          className="aurora-blob aurora-2"
          style={{
            top: "-10%",
            right: "-2%",
            width: "42rem",
            height: "42rem",
            background:
              "radial-gradient(circle at 50% 50%, var(--color-orange), transparent 68%)",
          }}
        />
        {/* orange-soft: bottom-left */}
        <div
          className="aurora-blob aurora-3"
          style={{
            bottom: "-16%",
            left: "8%",
            width: "38rem",
            height: "38rem",
            background:
              "radial-gradient(circle at 50% 50%, var(--color-orange-soft), transparent 70%)",
          }}
        />
        {/* teal-soft: bottom-right */}
        <div
          className="aurora-blob aurora-4"
          style={{
            bottom: "-18%",
            right: "6%",
            width: "40rem",
            height: "40rem",
            background:
              "radial-gradient(circle at 50% 50%, var(--color-teal-soft), transparent 70%)",
          }}
        />
        {/* soft white veil so text stays readable over the aurora */}
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-center text-center min-h-[42rem] lg:min-h-[46rem] justify-center pt-24 lg:pt-28 pb-16">
          <p className="font-display tracking-[0.25em] text-brand-teal text-sm lg:text-base mb-7">
            DIFFERENCE IS POWER
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.8rem] font-900 leading-[1.22] tracking-tight text-foreground">
            <span className="text-brand-gradient">&ldquo;違い&rdquo;</span>を
            チカラにする
            <br />
            組織をつくる
          </h1>

          <p className="mt-8 max-w-2xl text-base lg:text-lg leading-relaxed text-muted">
            国籍・世代・経験——あらゆる&ldquo;違い&rdquo;を組織の推進力に。
            <br className="hidden sm:block" />
            CQ（文化知性）を軸に、多様な人材が力を発揮できる組織づくりを支援します。
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="btn-primary text-center font-medium px-8 py-3.5 rounded-full shadow-sm"
            >
              無料で相談する
            </a>
            <a
              href="#services"
              className="btn-outline text-center font-medium px-8 py-3.5 rounded-full bg-white/70 backdrop-blur-sm"
            >
              サービスを見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
