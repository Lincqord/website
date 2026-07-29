const STEPS = [
  {
    title: "自分たちを知る",
    body: "客観的に組織と個人の現在地を可視化し、自分たちへの認識を進化、深化させていきます",
  },
  {
    title: "他者と対話する",
    body: "組織文化、事業課題への認識や個人の就業観、キャリア観を対話し、チームにある違いをどう生かしていくのか自分たちで答えを導きます",
  },
  {
    title: "個人が育つ",
    body: "一人ひとりが自分、そして組織の未来のためにビジネススキルを磨き、リーダーの意識を高めることで行動の質と量に変化を起こします",
  },
  {
    title: "組織が育つ",
    body: "更に事業を推進させる、新たな組織文化を自分たちで定義し、その文化醸成に組織全体が邁進します",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-display tracking-[0.2em] text-brand-teal text-lg mb-4">
            SERVICES
          </p>
          <h2 className="text-3xl lg:text-4xl font-700 leading-snug tracking-tight">
            課題起点で伴走する、4つのアプローチ
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s) => (
            <div key={s.title}
              className="group bg-white rounded-2xl p-8 transition-all duration-200 ease-out hover:-translate-y-1.5 hover:shadow-[0_16px_34px_rgba(3,52,55,0.14)] flex flex-col"
            >
              <span className="block h-1 w-10 rounded-full bg-brand-teal/40 transition-all duration-200 group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-brand-teal group-hover:to-brand-orange" />
              <h3 className="mt-5 text-xl font-700 leading-snug">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted flex-1">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-20 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/services"
            className="inline-block btn-primary text-center font-medium px-8 py-3.5 rounded-2xl shadow-sm"
          >
            サービスの詳細を見る
          </a>
          <a href="#contact"
            className="inline-block btn-outline text-center font-medium px-8 py-3.5 rounded-2xl bg-white"
          >
            サービスについて相談する
          </a>
        </div>
      </div>
    </section>
  );
}
