"use client";

import { useState } from "react";
import Link from "next/link";
import type { DiagnosisData, StageId } from "./types";
import { evaluateDiagnosis } from "./logic";

const OPTIONS = [
  { label: "よくあてはまる", value: 3 },
  { label: "ややあてはまる", value: 2 },
  { label: "あまりあてはまらない", value: 1 },
  { label: "あてはまらない", value: 0 },
];

const ALL_STAGES: StageId[] = [1, 2, 3, 4, 5];

type Screen = "start" | "question" | "result";

export default function DiagnosisTool({ data }: { data: DiagnosisData }) {
  const [screen, setScreen] = useState<Screen>("start");
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const total = data.questions.length;

  const start = () => {
    setIdx(0);
    setAnswers([]);
    setScreen("question");
  };

  const answer = (value: number) => {
    const next = [...answers];
    next[idx] = value;
    setAnswers(next);
    if (idx + 1 < total) {
      setIdx(idx + 1);
    } else {
      setScreen("result");
    }
  };

  const goBack = () => {
    if (idx > 0) setIdx(idx - 1);
  };

  /* ---------- 開始画面 ---------- */
  if (screen === "start") {
    return (
      <div className="bg-white rounded-2xl border border-border p-7 lg:p-10 shadow-sm">
        <p className="text-base lg:text-lg font-700 leading-relaxed">
          {data.intro.headline}
        </p>
        <p className="mt-2 text-sm lg:text-base leading-relaxed text-muted">
          {data.intro.body}
        </p>
        <ul className="mt-6 space-y-2.5">
          {data.checklist.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm">
              <span className="mt-0.5 font-700 text-brand-teal shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={start}
            className="btn-primary font-700 text-base px-10 py-3.5 rounded-full shadow-sm cursor-pointer"
          >
            診断をはじめる
          </button>
        </div>
      </div>
    );
  }

  /* ---------- 設問画面 ---------- */
  if (screen === "question") {
    const q = data.questions[idx];
    return (
      <div className="bg-white rounded-2xl border border-border p-7 lg:p-10 shadow-sm">
        <div
          className="h-1.5 rounded-full bg-border overflow-hidden"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={idx}
        >
          <div
            className="h-full bg-brand-teal transition-all duration-300"
            style={{ width: `${(idx / total) * 100}%` }}
          />
        </div>
        <p className="mt-4 text-xs text-muted">
          Q{idx + 1} / {total}
        </p>
        <p className="mt-2 text-base lg:text-lg font-700 leading-relaxed">
          {q.text}
        </p>
        <p className="mt-1.5 text-xs text-muted">
          貴社の状況に最も近いものを選んでください
        </p>
        <div className="mt-5 grid gap-2.5">
          {OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => answer(opt.value)}
              className="w-full text-left text-sm lg:text-base px-5 py-3 rounded-xl border border-border bg-white hover:border-brand-teal hover:bg-surface transition-colors cursor-pointer"
            >
              {opt.label}
            </button>
          ))}
        </div>
        {idx > 0 && (
          <button
            type="button"
            onClick={goBack}
            className="mt-5 text-sm text-muted underline underline-offset-2 hover:text-brand-teal transition-colors cursor-pointer"
          >
            ← 前の質問に戻る
          </button>
        )}
      </div>
    );
  }

  /* ---------- 結果画面 ---------- */
  const result = evaluateDiagnosis(data.questions, answers);
  const st = data.stages[result.current];
  const subStage = result.sub ? data.stages[result.sub] : null;

  return (
    <div className="bg-white rounded-2xl border border-border p-7 lg:p-10 shadow-sm">
      <p className="text-xs text-muted">診断結果</p>

      {/* 段階バー */}
      <div className="mt-4 flex gap-1">
        {ALL_STAGES.map((s) => {
          const stage = data.stages[s];
          const isActive = s === result.current;
          const isSub = s === result.sub;
          return (
            <div
              key={s}
              className={`flex-1 pt-1.5 text-center border-t-4 ${
                isActive
                  ? "border-brand-orange"
                  : isSub
                    ? "border-brand-orange/40"
                    : "border-border"
              }`}
            >
              <p
                className={`text-[11px] leading-tight ${
                  isActive ? "font-700 text-foreground" : "text-muted"
                }`}
              >
                {stage.marker}
                <br />
                {stage.name}
              </p>
              <p className="text-[10px] text-muted/70">
                {Math.round(result.rates[s] * 100)}%
              </p>
            </div>
          );
        })}
      </div>

      <h2 className="mt-6 text-xl lg:text-2xl font-700 text-brand-teal-deep tracking-tight">
        現在地: {st.marker} {st.name}（{st.en}）
      </h2>
      <p className="mt-1.5 text-sm text-muted">
        {st.sum}
        {subStage &&
          ` ／ あわせて ${subStage.marker} ${subStage.name} の兆候も見られます`}
      </p>
      <p className="mt-4 text-sm lg:text-base leading-relaxed">{st.desc}</p>

      <blockquote className="mt-5 border-l-4 border-brand-orange bg-surface/60 rounded-r-xl px-4 py-3 text-sm leading-relaxed text-muted">
        {st.voice}
      </blockquote>

      <div className="mt-5 rounded-xl bg-surface px-5 py-4">
        <p className="text-sm font-700 text-brand-teal-deep">
          次の一手（処方箋）
        </p>
        <ul className="mt-2 space-y-1.5">
          {st.rx.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 相談CTA */}
      <div className="mt-7 rounded-2xl border border-brand-teal/40 bg-gradient-to-br from-surface to-white p-6 lg:p-8 text-center">
        <p className="text-sm lg:text-base leading-relaxed">
          <span className="font-700">この見立て、当たっていましたか？</span>
          <br />
          実際の組織はもっと複雑です。Lincqordは診断・対話・変革伴走で
          「違いをチカラにする組織」づくりを支援しています。
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-block btn-accent font-700 px-10 py-3.5 rounded-full shadow-sm"
        >
          無料で相談する
        </Link>
      </div>

      <div className="mt-5 text-center">
        <button
          type="button"
          onClick={start}
          className="text-sm text-muted underline underline-offset-2 hover:text-brand-teal transition-colors cursor-pointer"
        >
          もう一度診断する
        </button>
      </div>

      <p className="mt-6 text-[11px] leading-relaxed text-muted/80 text-center">
        {data.disclaimer}
      </p>
    </div>
  );
}
