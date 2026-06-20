import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";

export const metadata: Metadata = {
  title: "導入事例 | Lincqord",
  description:
    "Lincqordの導入事例。製造業・エネルギー・サービス業・商社など、各業界でのDE&I推進、CQの高い組織づくり、グローバルリーダー育成などの課題・施策・成果をご紹介します。",
};

const CONSULTING_CASES = [
  {
    tag: "製造業 / DE&I戦略策定・推進",
    issue: "強い企業文化の副作用で、女性やキャリア入社など少数派社員の活躍が阻害されていた。",
    action: "マイノリティリスニング、経営陣との対話、タウンホール、ロールモデル定義・発信。",
    result: "経営陣が自社を新しい視点で理解。多様な声を受容し、評価制度等の継続的改善が実行されるように。",
  },
  {
    tag: "エネルギー / 経営チーム一枚岩化",
    issue: "業界自由化による環境変化。分業主義の暗黙のタブーが意思決定を阻害していた。",
    action: "経営会議の運営改革、役員へのインタビューと個別コーチング、複数回の対話セッション。",
    result: "管理会計・評価・採用基準を抜本的に変更。複数の新規ビジネスへの挑戦が継続中。",
  },
  {
    tag: "サービス業 / 女性活躍推進",
    issue: "女性社員の高い離職率、管理職の95%以上が男性という状況が常態化。",
    action: "アンケート・インタビュー・座談会で本音を把握し、男性管理職へアプローチ。",
    result: "女性の9割以上が管理職増加を期待。評価制度・勤務体系・教育体系の見直しを開始。",
  },
  {
    tag: "インフラ / 組織文化診断・改善",
    issue: "「冒険しない、他人の仕事に入り込まない」文化が業界構造の変化への対応を阻んでいた。",
    action: "全社組織診断、部門別の結果共有と内省、部門長・管理職によるアクションプラン策定。",
    result: "仕組み・リーダーシップ・主体性の課題が明確化。各部門でアクション実行フェーズへ。",
  },
  {
    tag: "製造業 / CQの高い組織づくり",
    issue: "グローバル経営を全社に浸透させるため、CQ向上が必要だった。",
    action: "CQリーダー選抜・育成、CQブートキャンプ、CQマネジメント実践、CQサミット開催。",
    result: "10部署100名以上がCQを理解。社内共通言語に発展し、経営トップが全社展開を宣言。",
  },
  {
    tag: "製造業 / クロスカルチャーマネジメント",
    issue: "日本本社中心の意思決定で欧州・北米拠点の意見が活かされず、摩擦が深刻化。",
    action: "欧州拠点と日本本社の合同ワークショップ。前半は相互理解の対話に注力。",
    result: "異なる文化が交差し統一チームが形成。経営課題を遠慮なく議論できる環境が整備。",
  },
  {
    tag: "専門商社 / ビジョン策定・浸透",
    issue: "「顧客主義」により若手が人生を優先できず、離職率が高かった。",
    action: "若手からベテランまでのビジョン策定PJ、全ステークホルダーの幸福を掲げたビジョン策定。",
    result: "メンバーの意識変容が顕著。社員が自分の仕事の社会的価値を認識。全国で浸透中。",
  },
  {
    tag: "インフラ / DXカルチャー醸成",
    issue: "DX施策が各現場で定着せず、「変化へのアレルギー」が根深く存在した。",
    action: "現場DXリーダーへのリーダーシップ開発・パーパス議論、移行プロセスの短縮化。",
    result: "部門関係性が改善、30〜40代ミドル層のリーダーシップが向上。DX推進が新ステージへ。",
  },
];

const TRAINING_CASES = [
  {
    tag: "商社 / 次世代経営層育成",
    issue: "出身企業による視座・価値観の相違で部門間協調が課題。経営陣間の対話不足。",
    action: "経営知識研修（前半は知識習得、後半は自社への引き寄せと課題議論）。",
    result: "短期視点からの脱却、顧客への向き合い、経営陣の共同意思決定などの気づきを獲得。",
  },
  {
    tag: "製造業 / グローバルリーダー育成",
    issue: "海外現法トップの駐在期間が限られ、戦略実行の時間が確保できなかった。",
    action: "「ヒトとカネを使いこなす」をテーマにした半年強のプログラム。英語ロールプレイ重視。",
    result: "現法トップとしての判断・意思決定力、発信力を獲得。英語対応能力の自己理解を実現。",
  },
  {
    tag: "製造業 / 女性リーダー育成",
    issue: "各種支援を行っても女性リーダー層が形成されず、効果が限定的だった。",
    action: "「女性への足し算から組織からの引き算へ」転換。男性上司層への集中的トレーニング。",
    result: "女性励まし型施策を見直し、新しい企業文化の芽生えへ。上司層向けセッションは継続中。",
  },
  {
    tag: "設備工事 / 幹部層リテラシー開発",
    issue: "人手不足・株主圧力・ガバナンス要求など経営環境の急変への対応が必要だった。",
    action: "戦略・ファイナンス・会計・ガバナンス・HRMなどの包括的リテラシー開発。",
    result: "経営トップ発言の理解向上、高関心層の特定、現場での顧客・部下関係性の変化。",
  },
  {
    tag: "製造業 / リーダーシップ開発",
    issue: "保守的な企業文化と前例踏襲のリーダーシップで新規事業が進展しなかった。",
    action: "企業文化・メンタルモデルの紐解き、アセスメント、新規テーマの設定と実装。",
    result: "メンバー全員が新規テーマ（協業・M&A・評価制度刷新など）で並行実行中。",
  },
  {
    tag: "商社 / 駐在員セレクション・能力開発",
    issue: "海外志向の低下で駐在員候補の選定が機能不全。不適切な配置が増加していた。",
    action: "CQドライブ測定、国民文化フィット測定とトレーニング、赴任前トレーニング。",
    result: "適切な駐在員選定メカニズムの構築と、駐在員のプリパレーション強化を実現。",
  },
  {
    tag: "サービス業 / マインドセット開発",
    issue: "世代間の価値観ギャップとコミュニケーション不足で、ノウハウ伝承に支障の懸念。",
    action: "混世代ワークショップで価値観を可視化し、丁寧な対話で補完性を認識。",
    result: "統一理念を全員で共有。社員が前向きに業務に取り組む環境へ転換。",
  },
  {
    tag: "サービス業 / 外国人・日本人社員のCQ力開発",
    issue: "外国人社員の定着率が低く、既存サポートも十分に機能していなかった。",
    action: "合同ワークショップ（国民文化フレームワーク理解、各国文化特性、企業文化フィット分析）。",
    result: "双方の文化理解で業務がスムーズ化。CQトレーニングを全階層・職種に拡大。",
  },
];

function CaseCard({
  tag,
  issue,
  action,
  result,
}: {
  tag: string;
  issue: string;
  action: string;
  result: string;
}) {
  return (
    <article className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-2 bg-brand-gradient" />
      <div className="p-7">
        <span className="text-xs font-500 text-brand-teal">{tag}</span>
        <dl className="mt-4 space-y-3 text-sm leading-relaxed">
          <div>
            <dt className="font-700 text-foreground/80">課題</dt>
            <dd className="text-muted">{issue}</dd>
          </div>
          <div>
            <dt className="font-700 text-foreground/80">施策</dt>
            <dd className="text-muted">{action}</dd>
          </div>
          <div>
            <dt className="font-700 text-brand-orange">成果</dt>
            <dd className="text-muted">{result}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export default function CaseStudyPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="CASE STUDY"
        title="導入事例"
        lead="製造業・エネルギー・サービス業・商社など、業界を問わず多くの企業の変革を支援してきました。代表的な事例の課題・施策・成果をご紹介します。"
      />

      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-16">
          <div>
            <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
              コンサルティング・組織開発
            </h2>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {CONSULTING_CASES.map((c) => (
                <CaseCard key={c.tag} {...c} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
              トレーニング・人材開発
            </h2>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {TRAINING_CASES.map((c) => (
                <CaseCard key={c.tag} {...c} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageCTA />
    </main>
  );
}
