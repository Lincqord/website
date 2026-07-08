import type { DiagnosisQuestion, StageId } from "./types";

export interface DiagnosisResult {
  /** 現在地の段階 */
  current: StageId;
  /** サブ段階（現在地以外で最も強い兆候。50%未満なら null） */
  sub: StageId | null;
  /** 段階別スコア（0〜1に正規化） */
  rates: Record<StageId, number>;
}

const ALL_STAGES: StageId[] = [1, 2, 3, 4, 5];

/**
 * 回答（各設問 0〜3 の4件法）から現在地の段階を判定する。
 * ロジックは簡易診断プロトタイプ（07_簡易診断_女性活躍_プロトタイプ.html）を移植:
 * - 成熟側(4,5)が十分高く、問題側(1,2,3)が低ければ上位段階
 * - そうでなければ問題側で最も強い段階が現在地
 */
export function evaluateDiagnosis(
  questions: DiagnosisQuestion[],
  answers: number[],
): DiagnosisResult {
  const score: Record<StageId, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  const max: Record<StageId, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  questions.forEach((q, i) => {
    score[q.stage] += answers[i] ?? 0;
    max[q.stage] += 3;
  });
  const rates: Record<StageId, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (const s of ALL_STAGES) {
    rates[s] = max[s] ? score[s] / max[s] : 0;
  }

  const problemMax = Math.max(rates[1], rates[2], rates[3]);
  let current: StageId;
  if (rates[5] >= 0.67 && problemMax < 0.4) {
    current = 5;
  } else if (rates[4] >= 0.5 && problemMax < 0.5) {
    current = 4;
  } else {
    current = ([1, 2, 3] as StageId[]).reduce((a, b) =>
      rates[b] >= rates[a] ? b : a,
    );
    // 問題兆候ゼロなら成熟側
    if (problemMax === 0) {
      current = rates[4] >= rates[5] ? 4 : 5;
    }
  }

  let sub: StageId | null = null;
  let subRate = 0;
  for (const s of ALL_STAGES) {
    if (s !== current && rates[s] > subRate && rates[s] >= 0.5) {
      sub = s;
      subRate = rates[s];
    }
  }

  return { current, sub, rates };
}
