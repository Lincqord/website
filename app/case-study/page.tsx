import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";
import WaveDivider from "../components/WaveDivider";

export const metadata: Metadata = {
  title: "支援実績 | Lincqord",
  description:
    "Lincqordの支援実績。女性活躍の風土改革、経営チームの対話、若手の離職・育成、組織文化の変革など、各業界の組織課題に「現状を知る→対話する→変える→成果につなげる」のステップで伴走した事例をご紹介します。",
};

type Case = {
  industry: string;
  theme: string;
  challenge: string;
  issue: string;
  action: string;
  change: string;
};

const CASES: Case[] = [
  // ---- ピックアップ ----
  {
    industry: "消費財メーカー",
    theme: "「組織からの引き算」で進める女性活躍",
    challenge: "女性活躍が「形だけ」になっている",
    issue:
      "制度や女性向け研修を重ねても女性管理職が増えず、「結局、形だけでは」という声が社内から出ていた。",
    action:
      "意識調査で実態と構造を可視化（現状を知る）。男性管理職を中心とした意識改革ワークショップ（対話する）と、女性リーダー育成プログラム（変える）を組み合わせて実施。",
    change:
      "「変わるべきは女性ではなく組織の側かもしれない」という認識が管理職に広がり、仕事のアサインや登用基準を見直す動きが始まった。",
  },
  {
    industry: "エネルギー系事業会社",
    theme: "組織長の対話から始める風土改革",
    challenge: "制度を変えても現場が変わらない",
    issue:
      "制度や方針を変えても現場の行動が変わらず、改革が掛け声で終わることが繰り返されていた。",
    action:
      "組織文化診断で課題の構造を可視化（現状を知る）。組織長同士が本音で語り合う対話セッションを重ね（対話する）、各職場での行動の変化に伴走（変える）。",
    change:
      "組織長の間で部門を越えた本音の対話が生まれ、現場でも新しい行動を試す動きが出てきた。",
  },
  {
    industry: "エネルギー",
    theme: "経営チームの一枚岩化",
    challenge: "経営チーム・組織長がバラバラ",
    issue:
      "業界自由化による環境変化のなか、分業主義の暗黙のタブーが経営の意思決定を阻害していた。",
    action:
      "役員へのインタビューで現状を可視化し、経営会議の運営改革・個別コーチング・複数回の対話セッションを実施。",
    change:
      "管理会計・評価・採用基準を抜本的に変更。複数の新規ビジネスへの挑戦が続いている。",
  },
  {
    industry: "専門商社",
    theme: "若手が誇りを持てるビジョンづくり",
    challenge: "優秀な若手ほど辞めていく・育たない",
    issue:
      "「顧客最優先」の文化のもとで若手が自分の人生を後回しにし、離職が続いていた。",
    action:
      "若手からベテランまでが参加するビジョン策定プロジェクトを設計。対話を重ね、全ステークホルダーの幸福を掲げるビジョンをまとめ、浸透まで伴走。",
    change:
      "社員が自分の仕事の社会的価値を語れるようになり、ビジョンの浸透が全国の拠点で進んでいる。",
  },
  // ---- 一覧のみ ----
  {
    industry: "サービス業",
    theme: "女性社員の本音から始める風土改革",
    challenge: "女性活躍が「形だけ」になっている",
    issue: "女性社員の離職率が高く、管理職の多くが男性という状況が常態化していた。",
    action:
      "アンケート・インタビュー・座談会で本音を集めて現状を可視化し、男性管理職側への働きかけを実施。",
    change: "評価制度・勤務体系・教育体系の見直しが始まった。",
  },
  {
    industry: "インフラ",
    theme: "変革が定着する土壌づくり",
    challenge: "制度を変えても現場が変わらない",
    issue: "DX施策が各現場で定着せず、「変化へのアレルギー」が根深く存在した。",
    action:
      "現場の変革リーダーへのリーダーシップ開発とパーパスの対話を実施し、移行プロセスを再設計。",
    change:
      "部門間の関係性が改善し、ミドル層のリーダーシップが向上。変革が次の段階へ進んだ。",
  },
  {
    industry: "インフラ",
    theme: "組織文化の可視化と対話",
    challenge: "制度を変えても現場が変わらない",
    issue: "「冒険しない」文化が、業界構造の変化への対応を阻んでいた。",
    action:
      "全社の組織文化診断で現状を可視化し、部門別の結果共有と内省の場、アクションプラン策定を支援。",
    change:
      "仕組み・リーダーシップ・主体性の課題が明確になり、各部門でアクションの実行が始まった。",
  },
  {
    industry: "製造業",
    theme: "違いを扱う「共通言語」づくり",
    challenge: "部門・世代・立場の間に壁がある",
    issue:
      "多様なメンバーの協働に向けて、違いを前向きに扱うための共通言語が必要だった。",
    action:
      "CQ（文化知性）を学ぶリーダーの選抜・育成、実践プログラム、全社イベントの開催を支援。",
    change:
      "多数の部署・メンバーがCQを理解して社内の共通言語に発展し、経営トップが全社展開を宣言した。",
  },
  {
    industry: "製造業",
    theme: "少数派の声が届く組織へ",
    challenge: "部門・世代・立場の間に壁がある",
    issue:
      "強い企業文化の副作用で、女性やキャリア入社など少数派社員の活躍が阻まれていた。",
    action:
      "少数派社員の声を聴くインタビュー、経営陣との対話、タウンホール、ロールモデルの定義・発信を実施。",
    change:
      "経営陣が自社を新しい視点で捉え直し、評価制度などの継続的な改善が実行されるようになった。",
  },
  {
    industry: "製造業",
    theme: "本社と海外拠点の相互理解",
    challenge: "部門・世代・立場の間に壁がある",
    issue: "本社中心の意思決定で拠点の意見が活かされず、摩擦が深刻化していた。",
    action:
      "本社と海外拠点の合同ワークショップを設計。前半は相互理解の対話に注力し、共通の課題議論へ。",
    change:
      "異なる文化が交わる統一チームが形成され、経営課題を遠慮なく議論できる関係が育った。",
  },
  {
    industry: "商社",
    theme: "次世代経営チームの土台づくり",
    challenge: "経営チーム・組織長がバラバラ",
    issue:
      "出身企業による視座・価値観の違いで部門間の協調が難しく、経営陣の対話も不足していた。",
    action:
      "経営知識の習得と、自社課題への引き寄せ・対話を組み合わせたプログラムを実施。",
    change:
      "短期視点からの脱却、経営陣で共に意思決定することの大切さなど、行動につながる気づきが生まれた。",
  },
  {
    industry: "製造業",
    theme: "女性リーダーが育つ環境づくり",
    challenge: "女性活躍が「形だけ」になっている",
    issue: "各種支援を行っても女性リーダー層が形成されず、施策の効果が限定的だった。",
    action:
      "「女性への足し算」から「組織からの引き算」へ発想を転換し、男性上司層への集中的な働きかけを実施。",
    change: "女性を励ますだけの施策が見直され、新しい企業文化の芽生えにつながった。",
  },
  {
    industry: "製造業",
    theme: "前例踏襲を越えるリーダーシップ開発",
    challenge: "制度を変えても現場が変わらない",
    issue: "保守的な企業文化と前例踏襲のリーダーシップで、新規事業が進展しなかった。",
    action:
      "企業文化・思い込みの紐解きとアセスメントで現状を知り、新規テーマの設定と実装に伴走。",
    change:
      "メンバー全員が新しいテーマ（協業・提携・評価制度の刷新など）を並行して進めるようになった。",
  },
  {
    industry: "サービス業",
    theme: "世代を越えた価値観の相互理解",
    challenge: "部門・世代・立場の間に壁がある",
    issue:
      "世代間の価値観ギャップとコミュニケーション不足で、技能・ノウハウの伝承に支障が出かねなかった。",
    action:
      "世代の異なるメンバーが混ざるワークショップで価値観を可視化し、丁寧な対話でお互いの補完性を確認。",
    change: "全員で共有できる理念がまとまり、社員が前向きに業務へ取り組む環境に変わった。",
  },
];

const FEATURED = CASES.slice(0, 4);
const REST = CASES.slice(4);

export default function CaseStudyPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="CASE STUDY"
        title="支援実績"
        lead="業界を問わず、多くの企業の組織課題に伴走してきました。「課題 → 支援内容 → 変化」の流れで、代表的な事例をご紹介します。"
      />

      {/* Featured */}
      <section className="bg-white pt-10 lg:pt-16 pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
            ピックアップ実績
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-7">
            {FEATURED.map((c) => (
              <article
                key={c.theme}
                className="rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="h-1.5 bg-brand-gradient" />
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-500 text-white bg-brand-teal rounded-full px-3 py-1">
                      {c.industry}
                    </span>
                    <span className="text-xs font-500 text-brand-teal">
                      {c.challenge}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-700 leading-snug">{c.theme}</h3>
                  <dl className="mt-5 space-y-3 text-sm leading-relaxed">
                    <div>
                      <dt className="font-700 text-foreground/80">課題</dt>
                      <dd className="text-muted">{c.issue}</dd>
                    </div>
                    <div>
                      <dt className="font-700 text-foreground/80">支援内容</dt>
                      <dd className="text-muted">{c.action}</dd>
                    </div>
                    <div>
                      <dt className="font-700 text-brand-orange">変化</dt>
                      <dd className="text-muted">{c.change}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider from="white" to="surface" />

      {/* All cases (compact) */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
            すべての支援実績
          </h2>
          <p className="mt-4 max-w-2xl text-muted leading-relaxed">
            業界・テーマを問わず、多様な組織課題に伴走してきました。
            貴社に近い事例は、お気軽にお問い合わせください。
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {REST.map((c) => (
              <div
                key={c.theme + c.industry}
                className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-500 text-white bg-foreground/70 rounded-full px-2.5 py-0.5">
                    {c.industry}
                  </span>
                  <span className="text-[11px] font-500 text-brand-teal">
                    {c.challenge}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-700 leading-snug">{c.theme}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted line-clamp-3">
                  {c.change}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-muted">
            ※ 掲載企業の特定を避けるため、業種のみを記載し、内容を一部一般化しています。
          </p>
        </div>
      </section>

      <WaveDivider from="surface" to="white" />

      <PageCTA
        title="貴社の課題に近い事例をご紹介します"
        body="業界・テーマに応じた具体的な支援事例を、個別にご説明します。まずはお気軽にご相談ください。"
      />
    </main>
  );
}
