import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";
import WaveDivider from "../components/WaveDivider";

export const metadata: Metadata = {
  title: "サービス | Lincqord",
  description:
    "Lincqordのサービス一覧。「現状を知る→対話する→変える→成果につなげる」の4ステップで、組織文化診断・経営チームの対話・リーダーシップ開発・組織開発コンサルティングなどを、課題起点で組み合わせて提供します。",
};

type Service = {
  id: string;
  name: string;
  desc: string;
  tools?: string[];
  themes?: string[];
};

type Step = {
  no: string;
  name: string;
  lead: string;
  services: Service[];
  note?: string;
  subdued?: boolean;
};

const STEPS: Step[] = [
  {
    no: "STEP 1",
    name: "現状を知る",
    lead: "組織と人の現在地を可視化する",
    services: [
      {
        id: "s1",
        name: "組織文化診断",
        desc: "組織文化と課題構造を定量×定性で可視化し、5段階モデルの現在地と優先課題を特定する。",
        tools: [
          "社員アンケート",
          "インタビュー",
          "座談会",
          "ホフステード6次元",
          "IDI",
        ],
      },
      {
        id: "s2",
        name: "リーダー・個人アセスメント",
        desc: "リーダー・個人の意識構造や強みを可視化し、育成・登用・コーチングの起点にする。",
        tools: [
          "LCP（Leadership Circle Profile）",
          "ストレングスファインダー",
          "IDI",
          "360度サーベイ",
        ],
      },
    ],
  },
  {
    no: "STEP 2",
    name: "対話する",
    lead: "違いを扱える関係をつくる",
    services: [
      {
        id: "s3",
        name: "経営チーム・組織長ダイアログ",
        desc: "経営層・組織長が本音で向き合い、認識を揃え、変革のリーダーシップを起動する対話セッション。",
        tools: ["システムコーチング", "2on2"],
      },
      {
        id: "s4",
        name: "「違いをチカラに変える」ワークショップ",
        desc: "違いを「認識→理解→活かす」へ転換する対話型ワークショップ。テーマ別に展開。",
        themes: [
          "アンコンシャスバイアス",
          "マジョリティのインクルージョン",
          "世代間・部門間の相互理解",
        ],
      },
      {
        id: "s5",
        name: "対話の場の設計・ファシリテーション",
        desc: "声を集め、聴き合い、動き出す「場」を設計・運営。組織の中に対話の文化を根づかせる。",
        tools: ["タウンホール", "座談会", "2on2"],
      },
    ],
  },
  {
    no: "STEP 3",
    name: "変える",
    lead: "人と組織の変化を定着させる",
    services: [
      {
        id: "s6",
        name: "リーダーシップ開発プログラム",
        desc: "階層・対象別に設計する研修プログラム。知識・感情・メタ認知・行動（CQの4つの力）を一気通貫で扱う。",
        themes: ["次世代経営層", "管理職", "女性リーダー", "若手・中堅"],
        tools: ["ファシリテーション・会議運営モジュール"],
      },
      {
        id: "s7",
        name: "エグゼクティブ／チームコーチング",
        desc: "経営層個人の内省・メタ認知と、経営チーム・部門の「関係性そのもの」への働きかけを、プロコーチが伴走。",
        tools: [
          "エグゼクティブ1on1",
          "関係性システムコーチング（ORSC）",
          "LCP",
          "360度FB",
        ],
      },
      {
        id: "s8",
        name: "組織開発コンサルティング（変革伴走）",
        desc: "診断・対話・育成を組み合わせ、変革テーマの方針策定から現場の定着まで中長期で伴走する。",
        themes: ["DE&I戦略", "ビジョン策定・浸透", "DX・働き方のカルチャー変革"],
      },
    ],
  },
  {
    no: "STEP 4",
    name: "成果につなげる",
    lead: "変化を事業の成果に結びつける",
    subdued: true,
    services: [
      {
        id: "s9",
        name: "成果の見える化・定着レビュー",
        desc: "変革の効果を定点観測し、行動変容→組織指標（エンゲージメント・離職率・登用率など）→事業成果への接続を可視化する。再診断とセットで「Before / After」を示し、次の一手につなげる。",
        tools: ["パルスサーベイ・再診断", "効果測定レポート", "経営報告会"],
      },
    ],
    note: "新設のステップとして設計を進めています。詳細はお気軽にご相談ください。",
  },
];

function Tag({ label, ghost }: { label: string; ghost?: boolean }) {
  return (
    <span
      className={`inline-block text-xs px-2.5 py-0.5 rounded-full border whitespace-nowrap ${
        ghost
          ? "bg-surface/60 text-muted border-border"
          : "bg-brand-orange/10 text-brand-orange border-brand-orange/30"
      }`}
    >
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
        lead="Lincqordのサービスは、研修ありきではなく「課題起点」。まず組織の現状を知ることから始め、対話で土壌を耕し、人と組織の行動を変え、成果につなげる——4つのステップで貴社に伴走します。"
      />

      {/* 導入 */}
      <section className="bg-white pb-4 lg:pb-8">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
              いきなり研修から入らない。まず、現状を知ることから
            </h2>
            <p className="mt-5 text-base lg:text-lg leading-relaxed text-muted">
              施策の形骸化・離職・管理職の疲弊——こうした症状の裏には、
              組織の文化、つまり「私たちのやり方」のぶつかり合いが隠れていることが少なくありません。
              だからLincqordは、目に見える症状にすぐ手を打つのではなく、
              課題の構造を明らかにするところから始めます。
              現状の把握から成果の実感まで、4つのステップでご一緒します。
            </p>
          </div>
        </div>
      </section>

      <WaveDivider from="white" to="surface" />

      {/* 4ステップ */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-display tracking-[0.2em] text-brand-orange text-sm mb-4">
              4 STEPS
            </p>
            <h2 className="text-3xl lg:text-4xl font-700 leading-snug tracking-tight">
              現状を知る → 対話する → 変える →
              <br className="hidden sm:block" />
              成果につなげる
            </h2>
            <p className="mt-5 text-base lg:text-lg leading-relaxed text-muted">
              課題とフェーズに合わせて、9つのサービスを組み合わせて提供します。
            </p>
          </div>

          <div className="mt-14 space-y-8">
            {STEPS.map((step) => (
              <div
                key={step.no}
                className={`rounded-2xl border bg-white p-7 lg:p-10 ${
                  step.subdued ? "border-brand-orange/30" : "border-border"
                }`}
              >
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span
                    className={`font-display tracking-widest text-sm ${
                      step.subdued ? "text-brand-orange" : "text-brand-teal"
                    }`}
                  >
                    {step.no}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-700 tracking-tight">
                    {step.name}
                    <span className="ml-3 text-sm lg:text-base font-500 text-muted">
                      ― {step.lead}
                    </span>
                  </h3>
                </div>

                <div
                  className={`mt-6 grid gap-5 ${
                    step.services.length >= 3
                      ? "md:grid-cols-3"
                      : step.services.length === 2
                        ? "md:grid-cols-2"
                        : ""
                  }`}
                >
                  {step.services.map((svc) => (
                    <div
                      key={svc.name}
                      id={svc.id}
                      className="scroll-mt-28 rounded-xl border border-border p-6 hover:shadow-md transition-shadow flex flex-col"
                    >
                      <h4 className="text-base lg:text-lg font-700 leading-snug flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0" />
                        {svc.name}
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-muted flex-1">
                        {svc.desc}
                      </p>
                      {(svc.tools || svc.themes) && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {svc.themes?.map((t) => (
                            <Tag key={t} label={t} ghost />
                          ))}
                          {svc.tools?.map((t) => (
                            <Tag key={t} label={t} />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {step.note && (
                  <p className="mt-5 text-xs leading-relaxed text-muted">
                    ※ {step.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider from="surface" to="white" />

      <PageCTA />
    </main>
  );
}
