import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";
import WaveDivider from "../components/WaveDivider";
import DotDivider from "../components/DotDivider";

export const metadata: Metadata = {
  title: "代表紹介 | Lincqord",
  description:
    "株式会社リンクォード代表取締役・石井由香梨の紹介。組織開発・人材育成コンサルタントとして、経営チームの意思決定、マネジメント層の育成、多様な人材が働く現場のコミュニケーション変革を支援しています",
};

const CAREER = [
  {
    year: "2001",
    body: "株式会社リクルートスタッフィングに入社。大企業向けの新規・既存営業に5年間従事し、法人営業の基本を学ぶとともに、大企業組織の構造を理解する",
  },
  {
    year: "2006",
    body: "リクルートグループ公募制度に応募し、株式会社リクルートエージェントに出向。経営企画部門マーケティンググループのリーダー職として、市場調査、顧客満足度調査、広報関連業務、リクルートグループ横断のシナリオプランニング策定などに携わる。最後の1年間は新規事業の立ち上げに関わり、事業創造と拡大に取り組むが、リーマンショックと重なり事業閉鎖に至る。新規事業の成否を分けるのは、戦略の精度だけではなく、逆境で人や組織がどう動くかにこそ、事業の行方は左右される——そのことを実感したことが、後の組織開発への関心の起点となる。同時期にリクルートグループの早期退職制度が開始されたことを機に、退職を決意",
  },
  {
    year: "2010",
    body: "株式会社グロービスに入社。大企業向けの組織開発・人材育成コンサルタントとして、経営者から経営課題・組織課題をヒアリングした上で、半年から1年程度のプロジェクトを提案・企画・実施する。7年間で150社以上の日本企業を担当。その間、グロービス経営大学院でMBAを取得（成績優秀者表彰）、コーチングプロフェッショナル資格CPCCを取得",
  },
  {
    year: "2020",
    body: "渡英。ロンドン大学SOASにて「文化」を学ぶ。修士論文のテーマは「日本企業で働くインド人高度人材は日本企業及び日本人ビジネスパーソンをどう見ているのか？」。研究を通じ、日本企業にとって、多様な人材を迎え入れることと、異なる前提を持つ人と共に意思決定することには、まだ埋めるべき距離があると感じるようになる。組織に存在する多様な文化への感度を高めることの重要性を、あらためて認識する",
  },
  {
    year: "2022",
    body: "株式会社リンクォード設立。制度や研修といった施策ありきではなく、組織の本質的な課題に向き合う、組織開発コンサルティングファームを設立する。現在は、幅広い業界の大企業に対し、文化知性（Cultural Intelligence／CQ）を軸に、経営チーム開発、組織文化変革、リーダー育成を支援している。国籍、価値観、経験のみならず、部門間、事業間、本社と現場の間にも文化の違いは存在する。その間に立ち、双方の前提を可視化し、互いの違いを活かす新たな文化を共に創り上げていくことを、リンクォードの提供価値としている",
  },
  {
    year: "2017-2026",
    body: "グロービスのパートナーファカルティとして業務委託契約を締結。日本の大企業を中心に延べ530社での研修登壇実績があり、クリティカルシンキング、ファシリテーション、ネゴシエーション、リーダーシップなどを担当科目として、各社の組織課題・人材課題に合わせた研修を提供",
  },
];

const EDUCATION = [
  "青山学院大学 国際政治経済学部 国際政治経済学科",
  "グロービス経営大学院大学 経営学修士（MBA）／成績優秀者表彰",
  "MA, South Asia Studies, SOAS, University of London（Distinction, Dissertation Paper）",
];

const CERTIFICATIONS = [
  "米国CTI認定プロフェッショナル・コーアクティブ・コーチ（CPCC）",
  "国際コーチング連盟（ICF）認定 Professional Certified Coach（PCC）",
  "CRR 関係性システムコーチング 応用コース修了",
  "ホフステード認定 Culture in the Workplace ファシリテーター",
  "米国リーダーシップサークル社認定 LCPプラクティショナー",
  "ギャラップ社認定 ストレングスコーチ",
];

export default function FounderPage() {
  return (
    <main className="flex-1">
      <PageHero eyebrow="FOUNDER" title="代表紹介" />

      {/* Profile */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-14 items-start max-w-5xl mx-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/founder.jpg"
              alt="株式会社リンクォード 代表取締役 石井由香梨"
              width={900}
              height={1349}
              className="w-64 lg:w-full rounded-2xl"
            />
            <div>
              <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
                石井 由香梨
              </h2>
              <p className="mt-2 text-sm lg:text-base text-brand-teal">
                代表取締役 / Founder
              </p>
              <p className="mt-6 text-base lg:text-lg leading-relaxed text-foreground">
                株式会社リンクォード代表取締役。組織開発・人材育成コンサルタント
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                大企業を中心に、各社の組織課題と向き合い、経営チームの意思決定、マネジメント層の育成、多様な人材が働く現場のコミュニケーション変革などを支援している
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider from="white" to="surface" />

      {/* 経歴 */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight text-center">
            経歴
          </h2>
          <div className="mt-10">
            {CAREER.map((c, i) => (
              <div key={c.year}>
                {i > 0 && <DotDivider className="my-8" />}
                <div className="lg:grid lg:grid-cols-[120px_1fr] lg:gap-6">
                  <p className="font-display tracking-wider text-brand-teal text-lg">
                    {c.year}
                  </p>
                  <p className="mt-2 lg:mt-0 text-sm lg:text-base leading-relaxed text-muted">
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider from="surface" to="white" />

      {/* 学歴・資格 */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl lg:text-2xl font-700 tracking-tight">学歴</h2>
            <ul className="mt-5 space-y-3">
              {EDUCATION.map((e) => (
                <li
                  key={e}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl font-700 tracking-tight">資格</h2>
            <ul className="mt-5 space-y-3">
              {CERTIFICATIONS.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <PageCTA />
    </main>
  );
}
