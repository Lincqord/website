import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";

export const metadata: Metadata = {
  title: "サービス | Lincqord",
  description:
    "Lincqordのサービス一覧。DE&I戦略策定、組織文化診断、CQ向上プログラム、グローバルリーダー育成など、コンサルティングとトレーニングで多様性を組織のチカラに変えます。",
};

const CONSULTING = [
  {
    title: "DE&I戦略策定・推進",
    body: "マイノリティのインタビューやワークショップから始め、経営層との認識ギャップを埋めながら、実効性あるDE&I戦略を策定・推進します。",
  },
  {
    title: "経営チーム一枚岩化",
    body: "役員層の関係性構築を目的とした対話会を開催。意思決定と同時に信頼関係を醸成し、経営の推進力を高めます。",
  },
  {
    title: "女性活躍推進",
    body: "「組織からの引き算」のアプローチで、女性が活躍を阻まれる構造やマイクロマネジメント文化そのものを改善します。",
  },
  {
    title: "組織文化診断・改善",
    body: "ホフステード理論に基づく定量測定で現状を可視化し、目指すべき文化を定義。改善のアクションへつなげます。",
  },
  {
    title: "CQ向上プログラム",
    body: "文化知性（CQ）の組織浸透を支援。リーダー育成やサミット開催を通じて、CQを共通言語として根づかせます。",
  },
  {
    title: "グローバル経営",
    body: "本社と海外拠点の文化差を言語化し、戦略検討における相互理解を深め、グローバルでの意思決定を支えます。",
  },
  {
    title: "ビジョン策定・浸透",
    body: "内部経営資源に焦点を当てた戦略構想で、社員の求心力を高めるビジョンを策定し、全社に浸透させます。",
  },
  {
    title: "DXカルチャー醸成",
    body: "組織文化の見える化を通じて変化への抵抗を減らし、DXが定着する土壌をつくります。",
  },
];

const TRAINING = [
  {
    title: "次世代経営層育成",
    body: "経営リテラシーの強化と並行し、リーダーとしての発信力を高めるプログラムを提供します。",
  },
  {
    title: "グローバルリーダー育成",
    body: "海外拠点経営の疑似体験を通じ、「ヒトと組織を作り上げる力」を養成します。",
  },
  {
    title: "女性リーダー育成",
    body: "男女混成で組織課題を議論し、多様な視点を認識。女性リーダーが育つ環境づくりを支援します。",
  },
  {
    title: "リテラシー開発",
    body: "戦略・財務・マネジメントなどMBA領域の知識を、実務で活用できるレベルまで開発します。",
  },
  {
    title: "リーダーシップ開発",
    body: "反応的から創造的リーダーシップへの転換を、アセスメントとコーチングで支援します。",
  },
  {
    title: "駐在員セレクション・能力開発",
    body: "CQの観点からDrive・Knowledge・Strategy・Actionの4能力を評価・育成します。",
  },
  {
    title: "若手・中堅人材マインドセット開発",
    body: "個人の価値観を見える化し、管理職層との認識ギャップを埋める施策を実施します。",
  },
  {
    title: "外国人・日本人社員のCQ力開発",
    body: "国民文化の6次元モデルで相互理解を促進し、多文化職場での効果的な人事施策を支援します。",
  },
];

function ServiceGrid({
  no,
  category,
  lead,
  items,
}: {
  no: string;
  category: string;
  lead: string;
  items: { title: string; body: string }[];
}) {
  return (
    <div>
      <div className="flex items-baseline gap-3">
        <span className="font-display text-2xl font-700 text-brand-gradient">
          {no}
        </span>
        <h2 className="text-2xl lg:text-3xl font-700 tracking-tight">
          {category}
        </h2>
      </div>
      <p className="mt-4 max-w-3xl text-muted leading-relaxed">{lead}</p>
      <div className="mt-8 grid md:grid-cols-2 gap-5">
        {items.map((it) => (
          <div
            key={it.title}
            className="bg-white rounded-2xl border border-border p-7 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-700 flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0" />
              {it.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted pl-4">
              {it.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="SERVICES"
        title="サービス"
        lead="組織のフェーズや課題に合わせて、コンサルティング（組織開発）とトレーニング（人材開発）を組み合わせて提供します。すべての起点にあるのは、CQ（文化知性）です。"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-20">
          <ServiceGrid
            no="01"
            category="コンサルティング・組織開発ソリューション"
            lead="現状の可視化から戦略・仕組みの実装まで伴走し、多様性が活きる組織文化を築きます。"
            items={CONSULTING}
          />
          <ServiceGrid
            no="02"
            category="トレーニング・人材開発ソリューション"
            lead="CQを軸に、経営層から現場まで、実務で成果を出す力を体系的に開発します。"
            items={TRAINING}
          />
        </div>
      </section>

      <PageCTA />
    </main>
  );
}
