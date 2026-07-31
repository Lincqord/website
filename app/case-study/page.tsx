import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";
import { SERVICE_LINKS } from "./data";

export const metadata: Metadata = {
  title: "支援実績 | Lincqord",
  description:
    "Lincqordの支援実績。経営チームの意思決定、変革リーダーシップ、DEI、エンゲージメント、対話の深まり——よくある組織課題別に、代表的な支援事例をご紹介します",
};

/* TOP「こんな組織課題はありませんか？」の課題別ピックアップ（2026-07-30 代表決定・5件）
   challenge内の「／」は折り返してよい位置 */
const PICKUPS = [
  {
    challenge: "経営チームで議論が尽くされず、／未来を見据えた経営判断がされない",
    industry: "エネルギー",
    theme: "経営チームの一枚岩化",
    issue:
      "業界自由化による環境変化のなか、分業主義による暗黙の遠慮が、経営としての意思決定を難しくしていた",
    action:
      "役員へのインタビューで現状を可視化し、経営会議の運営の見直し・個別コーチング・複数回の対話セッションを実施",
    change:
      "管理会計・評価・採用の基準の見直しが進み、複数の新規ビジネスへの挑戦が続いている",
    services: ["know-org", "dialogue-do", "grow-mindset"],
  },
  {
    challenge: "組織を変革するリーダーシップが／育っていない",
    industry: "インフラ",
    theme: "変革が定着する土壌づくり",
    issue:
      "DX施策が各現場になかなか定着せず、変革を担うミドル層には変化への戸惑いが残っていた",
    action:
      "現場の変革リーダーへのリーダーシップ開発とパーパスをめぐる対話を行い、変革の進め方を共に見直した",
    change:
      "部門間の関係性が少しずつ良くなり、30〜40代ミドル層のリーダーシップが育ってきた。変革が次の段階へ進みつつある",
    services: ["dialogue-do", "grow-mindset"],
  },
  {
    challenge:
      "「DEI」という言葉が独り歩きし、／社員はどう対応すればよいか戸惑いがある",
    industry: "消費財メーカー",
    theme: "「組織からの引き算」で進める女性活躍",
    issue:
      "制度や女性向け研修を重ねても女性管理職がなかなか増えず、「結局、形だけでは」という声が社内から聞こえていた",
    action:
      "意識調査で実態を丁寧に可視化。男性管理職を中心に意識を見つめ直すワークショップと、女性リーダー育成プログラムを組み合わせて実施",
    change:
      "「変わるべきは女性ではなく、組織の側かもしれない」という気づきが管理職に広がり、仕事のアサインや登用基準を見直す動きが生まれた",
    services: ["know-org", "dialogue-do", "grow-mindset"],
  },
  {
    challenge: "社員のエンゲージメントが低く、／キーパーソンの退職が続いている",
    industry: "専門商社",
    theme: "若手が誇りを持てるビジョンづくり",
    issue:
      "「顧客最優先」の文化のもとで、若手が自分自身のことを後回しにしがちになり、離職が続いていた",
    action:
      "若手からベテランまでが参加するビジョン策定プロジェクトを設計。対話を重ね、全ステークホルダーの幸福を掲げるビジョンをまとめ、浸透まで伴走",
    change:
      "社員が自分の仕事の社会的な価値を、自分の言葉で語れるようになり、ビジョンの浸透が全国の拠点で少しずつ進んでいる",
    services: ["dialogue-do", "culture-change"],
  },
  {
    challenge:
      "「心理的安全性」を気にし過ぎて、／社員同士が遠慮し合い、／対話が深まらない",
    industry: "サービス業",
    theme: "世代を越えた価値観の相互理解",
    issue:
      "世代間の価値観の違いとコミュニケーション不足から対話が深まりにくく、技能やノウハウの伝承に影響が出かねない状況だった",
    action:
      "世代の異なるメンバーが混ざるワークショップで互いの価値観を見える化し、丁寧な対話を重ねて、お互いに補い合える関係を確認",
    change:
      "全員で共有できる理念がまとまり、社員が前向きに業務へ取り組める環境へと変わっていった",
    services: ["dialogue-do"],
  },
];

export default function CaseStudyPage() {
  return (
    <main className="flex-1">
      <PageHero eyebrow="CASE STUDY"
        title="支援実績"
      />

      <section className="bg-white pt-8 lg:pt-12 pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* 2・2・1 の2列グリッド（モバイルは縦積み） */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-7">
            {PICKUPS.map((p, i) => (
              <div key={p.theme}
                className="rounded-2xl bg-surface p-7 lg:p-9 flex flex-col"
              >
                <p className="font-display tracking-[0.2em] text-brand-orange text-base">
                  CHALLENGE 0{i + 1}
                </p>
                <h2 className="mt-2 text-lg lg:text-xl font-700 leading-snug tracking-tight text-brand-teal">
                  {p.challenge.split("／").map((seg) => (
                    <span key={seg} className="inline-block">
                      {seg}
                    </span>
                  ))}
                </h2>

                <div className="mt-6 flex items-center gap-3 flex-wrap">
                  <span className="text-xs font-500 text-white bg-brand-teal rounded-full px-3 py-1">
                    {p.industry}
                  </span>
                  <h3 className="text-base lg:text-lg font-700 leading-snug">
                    {p.theme}
                  </h3>
                </div>

                <dl className="mt-5 space-y-3 text-sm leading-relaxed">
                  <div>
                    <dt className="font-700 text-foreground/80">課題</dt>
                    <dd className="text-muted">{p.issue}</dd>
                  </div>
                  <div>
                    <dt className="font-700 text-foreground/80">支援内容</dt>
                    <dd className="text-muted">{p.action}</dd>
                  </div>
                  <div>
                    <dt className="font-700 text-brand-orange">変化</dt>
                    <dd className="text-muted">{p.change}</dd>
                  </div>
                </dl>

                <div className="mt-auto pt-6 flex flex-wrap gap-1.5">
                  {p.services.map((id) => (
                    <Link key={id}
                      href={SERVICE_LINKS[id].href}
                      className="text-xs px-3 py-1 rounded-full bg-white text-brand-teal-deep hover:bg-brand-teal/10 transition-colors"
                    >
                      {SERVICE_LINKS[id].name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-xs leading-relaxed text-muted">
            ※ 掲載企業の特定を避けるため、業種のみを記載し、内容を一部一般化しています
          </p>
        </div>
      </section>

      <PageCTA title="貴社の課題に近い事例をご紹介します"
        body="業界・テーマに応じた具体的な支援事例を、個別にご説明します。まずはお気軽にご相談ください"
      />
    </main>
  );
}
