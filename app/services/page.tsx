import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";
import WaveDivider from "../components/WaveDivider";

export const metadata: Metadata = {
  title: "サービス | Lincqord",
  description:
    "Lincqordのサービス一覧。「自分たちを知る→他者と対話する→個人と組織が変わる→成果を産む」の4つのステップで、組織文化診断・アセスメント・対話の場づくり・研修・コーチング・変革プロジェクトを課題起点で組み合わせて提供します。",
};

type Group = {
  /** ページ内アンカー */
  id: string;
  /** 旧サービス体系(s1〜s9)からのリンク互換用エイリアス */
  aliases?: string[];
  name: string;
  desc: string;
  methods: string[];
};

type Layer = {
  no: string;
  name: string;
  lead: string;
  groups: Group[];
};

const LAYERS: Layer[] = [
  {
    no: "01",
    name: "自分たちを知る",
    lead: "組織と個人の現在地を、データと対話で可視化する",
    groups: [
      {
        id: "know-org",
        aliases: ["s1"],
        name: "組織を知る",
        desc: "組織文化と課題の構造を可視化する。",
        methods: ["組織文化診断", "社員アンケート", "インタビュー"],
      },
      {
        id: "know-self",
        aliases: ["s2"],
        name: "個人を知る",
        desc: "リーダー・個人の強みと意識の構造を可視化する。",
        methods: [
          "アセスメント（LCP／ストレングスファインダー®）",
          "コーチング",
        ],
      },
    ],
  },
  {
    no: "02",
    name: "他者と対話する",
    lead: "違いを扱える対話を、学び・実践し・深める",
    groups: [
      {
        id: "dialogue-skill",
        name: "対話の作法を知る",
        desc: "対話の質を決める技術を身につける。",
        methods: [
          "クリティカルシンキング研修",
          "ファシリテーション研修",
          "質問力研修",
          "コーチング研修",
        ],
      },
      {
        id: "dialogue-do",
        aliases: ["s3", "s4", "s5"],
        name: "対話をする",
        desc: "立場や世代を越えて、本音を安全に扱う場を実践する。",
        methods: ["座談会", "システムコーチング®", "2on2コーチング"],
      },
      {
        id: "dialogue-reflect",
        name: "対話を内省する",
        desc: "対話で得た気づきを、自分の変化に落とし込む。",
        methods: ["コーチング", "ジャーナリング"],
      },
    ],
  },
  {
    no: "03",
    name: "個人と組織が変わる",
    lead: "能力・意識・文化——3つの次元で変化を起こす",
    groups: [
      {
        id: "grow-skill",
        name: "自分の能力を高める",
        desc: "成果を出すためのビジネススキルを鍛える。",
        methods: [
          "クリティカルシンキング研修",
          "ファシリテーション研修",
          "経営戦略研修",
          "マーケティング研修",
          "営業力強化",
          "マネジメント力強化",
          "コーチング研修",
        ],
      },
      {
        id: "grow-mindset",
        aliases: ["s6", "s7"],
        name: "自分の意識を変える",
        desc: "ものの見方と、リーダーとしてのあり方を変える。",
        methods: ["コーチング", "2on2コーチング", "リーダーシップ研修"],
      },
      {
        id: "culture-change",
        aliases: ["s8"],
        name: "組織の文化が変わる",
        desc: "「私たちのやり方」を、未来に向けてつくり直す。",
        methods: ["ビジョン策定・浸透プロジェクト", "組織変革プロジェクト組成"],
      },
    ],
  },
  {
    no: "04",
    name: "成果を産む",
    lead: "変化を一過性で終わらせず、個人と組織の成果へつなげる",
    groups: [
      {
        id: "results-individual",
        name: "個人が成果を産む",
        desc: "現実の業務テーマで、成果を出し切るまで伴走する。",
        methods: ["業務テーマ推進アドバイス", "進捗フォロー", "コーチング"],
      },
      {
        id: "results-org",
        aliases: ["s9"],
        name: "組織が成果を産む",
        desc: "組織の変化を定点で確かめ、次の一手につなげる。",
        methods: ["定点観測", "システムコーチング®", "2on2コーチング"],
      },
    ],
  },
];

const ASSESSMENT_NOTES = [
  {
    name: "LCP（The Leadership Circle Profile）",
    desc: "リーダーの意識構造（クリエイティブ／リアクティブ）を360度で可視化する国際的なアセスメント。",
    href: "https://leadershipcircle.com/ja/",
    label: "公式サイト",
  },
  {
    name: "ストレングスファインダー®（現・クリフトンストレングス）",
    desc: "個人の強みを34の資質で可視化する、Gallup社のアセスメント。",
    href: "https://www.gallup.com/cliftonstrengths/ja/home.aspx",
    label: "公式サイト",
  },
];

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block text-xs px-2.5 py-1 rounded-full border bg-brand-teal/5 text-brand-teal-deep border-brand-teal/25 whitespace-nowrap">
      {label}
    </span>
  );
}

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="SERVICES"
        title="サービス"
        lead="Lincqordのサービスは、研修ありきではなく「課題起点」。まず自分たちを知ることから始め、対話で土壌を耕し、個人と組織の変化を起こし、成果につなげる——4つのステップで貴社に伴走します。"
      />

      {/* 導入 */}
      <section className="bg-white pb-4 lg:pb-8">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
              いきなり研修から入らない。まず、自分たちを知ることから
            </h2>
            <p className="mt-5 text-base lg:text-lg leading-relaxed text-muted">
              施策の形骸化・離職・管理職の疲弊——こうした症状の裏には、
              組織の文化、つまり「私たちのやり方」のぶつかり合いが隠れていることが少なくありません。
              だからLincqordは、目に見える症状にすぐ手を打つのではなく、
              課題の構造を明らかにするところから始めます。
              自分たちを知ることから成果の実感まで、4つのステップでご一緒します。
            </p>
          </div>
        </div>
      </section>

      <WaveDivider from="white" to="surface" />

      {/* 4ステップ × 10カテゴリ */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-display tracking-[0.2em] text-brand-orange text-sm mb-4">
              4 STEPS
            </p>
            <h2 className="text-3xl lg:text-4xl font-700 leading-snug tracking-tight">
              自分たちを知る → 他者と対話する →
              <br className="hidden sm:block" />
              個人と組織が変わる → 成果を産む
            </h2>
            <p className="mt-5 text-base lg:text-lg leading-relaxed text-muted">
              課題とフェーズに合わせて、各ステップのメニューを組み合わせて提供します。
            </p>
          </div>

          <div className="mt-14 space-y-8">
            {LAYERS.map((layer) => (
              <div
                key={layer.no}
                className="rounded-2xl border border-border bg-white p-7 lg:p-10"
              >
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-display tracking-widest text-sm text-brand-teal">
                    STEP {layer.no}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-700 tracking-tight">
                    {layer.name}
                    <span className="ml-3 text-sm lg:text-base font-500 text-muted">
                      ― {layer.lead}
                    </span>
                  </h3>
                </div>

                <div
                  className={`mt-6 grid gap-5 ${
                    layer.groups.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"
                  }`}
                >
                  {layer.groups.map((g) => (
                    <div
                      key={g.id}
                      id={g.id}
                      className="scroll-mt-28 rounded-xl border border-border p-6 hover:shadow-md transition-shadow flex flex-col"
                    >
                      {g.aliases?.map((a) => (
                        <span key={a} id={a} className="scroll-mt-28" aria-hidden />
                      ))}
                      <h4 className="text-base lg:text-lg font-700 leading-snug flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0" />
                        {g.name}
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-muted flex-1">
                        {g.desc}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {g.methods.map((m) => (
                          <Tag key={m} label={m} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {layer.no === "01" && (
                  <div className="mt-5 rounded-xl bg-surface/70 border border-border p-5">
                    <p className="text-xs font-700 text-foreground/70 mb-2">
                      アセスメントについて
                    </p>
                    <ul className="space-y-1.5">
                      {ASSESSMENT_NOTES.map((n) => (
                        <li
                          key={n.name}
                          className="text-xs leading-relaxed text-muted"
                        >
                          <span className="font-700 text-foreground/80">
                            {n.name}
                          </span>
                          ：{n.desc}
                          <a
                            href={n.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-1 text-brand-teal underline underline-offset-2 hover:text-brand-teal-deep"
                          >
                            {n.label} ↗
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs leading-relaxed text-muted">
            ※「システムコーチング」はCRR Global Japan合同会社の、「ストレングスファインダー」「クリフトンストレングス」はGallup,
            Inc.の登録商標です。
          </p>
        </div>
      </section>

      <WaveDivider from="surface" to="white" />

      <PageCTA />
    </main>
  );
}
