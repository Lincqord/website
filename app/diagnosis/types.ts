/**
 * 簡易診断（組織の現在地診断）の共通型定義。
 * 女性活躍編を第1弾とし、将来の課題別（C1〜C6）展開でも
 * 同じデータ構造・判定ロジック・UIコンポーネントを再利用する。
 */

/** 5段階モデルの段階ID（1=無知・無関心 〜 5=適応） */
export type StageId = 1 | 2 | 3 | 4 | 5;

/** 設問。各設問は5段階モデルのいずれかの段階の「兆候」を測る */
export interface DiagnosisQuestion {
  /** この設問が兆候として示す段階 */
  stage: StageId;
  /** 設問文（職場で聞こえる「リアルな発言」ベース） */
  text: string;
}

/** 段階の定義と結果表示コンテンツ */
export interface StageDefinition {
  id: StageId;
  /** 丸数字マーカー（①〜⑤） */
  marker: string;
  /** 段階名（例: 無知・無関心） */
  name: string;
  /** 英語名（例: Denial） */
  en: string;
  /** 一言サマリ */
  sum: string;
  /** 状態の説明文 */
  desc: string;
  /** 象徴的な「声」（引用） */
  voice: string;
  /** 次の一手（処方箋） */
  rx: string[];
}

/** 診断1テーマ分のデータ一式 */
export interface DiagnosisData {
  /** 診断テーマの識別子（例: "women"） */
  slug: string;
  /** ヘッダーの小見出し（例: 組織の現在地診断） */
  brand: string;
  /** 診断タイトル */
  title: string;
  /** リード文 */
  lead: string;
  /** 開始画面の導入文（強調文＋本文） */
  intro: { headline: string; body: string };
  /** 開始画面のチェックリスト */
  checklist: string[];
  /** 設問（4件法: 3=よくあてはまる 〜 0=あてはまらない） */
  questions: DiagnosisQuestion[];
  /** 段階定義（結果コンテンツ） */
  stages: Record<StageId, StageDefinition>;
  /** 免責事項 */
  disclaimer: string;
}
