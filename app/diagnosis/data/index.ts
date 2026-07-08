/**
 * 診断テーマの一覧（課題選択ページ用レジストリ）。
 * 新しい課題別診断を追加するときは、data/ 配下に DiagnosisData を作成し、
 * ここに { slug, available: true } のエントリを追加するだけでよい。
 */
export interface DiagnosisTheme {
  /** 課題タイル名（TOPの6課題と同一の言葉） */
  challenge: string;
  /** 課題の説明 */
  body: string;
  /** 診断ページのslug（/diagnosis/[slug]）。準備中は null */
  slug: string | null;
  /** 診断名（公開済みのもののみ） */
  label?: string;
}

export const DIAGNOSIS_THEMES: DiagnosisTheme[] = [
  {
    challenge: "中間管理職が疲弊している",
    body: "経営と若手の板挟み。調整・確認業務に追われ、変革の起点になれない。",
    slug: null,
  },
  {
    challenge: "女性活躍が「形だけ」になっている",
    body: "比率目標はあるが実態が伴わない。善意の配慮（慈悲的バイアス）が壁に。",
    slug: "women",
    label: "女性活躍編",
  },
  {
    challenge: "優秀な若手ほど辞めていく・育たない",
    body: "指示待ち・チャレンジしない。若手の価値観と組織文化のギャップ。",
    slug: null,
  },
  {
    challenge: "経営チーム・組織長がバラバラ",
    body: "部門間の相互不可侵。対話の不在。次世代経営者も育っていない。",
    slug: null,
  },
  {
    challenge: "制度を変えても現場が変わらない",
    body: "ハード施策だけでソフト（意識・言動）が置き去り。施策が定着しない。",
    slug: null,
  },
  {
    challenge: "部門・世代・立場の間に壁がある",
    body: "一体感がない。対立、あるいは遠慮。「私たちのやり方」同士の衝突。",
    slug: null,
  },
];
