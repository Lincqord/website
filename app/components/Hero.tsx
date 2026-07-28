export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Aurora background: drifting brand-color blobs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {/* teal: top-left */}
        <div className="aurora-blob aurora-1"
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
        <div className="aurora-blob aurora-2"
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
        <div className="aurora-blob aurora-3"
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
        <div className="aurora-blob aurora-4"
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
        <div className="absolute inset-0 bg-white/5" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-center text-center min-h-[42rem] lg:min-h-[46rem] justify-center pt-24 lg:pt-28 pb-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/difference-is-power.png"
            alt="Difference Is Power"
            width={2083}
            height={237}
            className="w-[19rem] sm:w-[26rem] lg:w-[34rem] h-auto mb-8"
          />

          <h1 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-900 leading-[1.3] tracking-tight text-foreground">
            <span className="inline-block">個人と組織が、</span>
            <span className="inline-block">互いの真価を引き出す社会へ</span>
          </h1>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#contact"
              className="btn-primary text-center font-medium px-8 py-3.5 rounded-2xl shadow-sm"
            >
              無料で相談する
            </a>
            <a href="#services"
              className="btn-outline text-center font-medium px-8 py-3.5 rounded-2xl bg-white/70 backdrop-blur-sm"
            >
              サービスを見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
