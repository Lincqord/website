"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          company: fd.get("company"),
          email: fd.get("email"),
          message: fd.get("message"),
          website: fd.get("website"),
        }),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        const data = await res.json().catch(() => null);
        setErrorMsg(
          data?.error || "送信に失敗しました。時間をおいて再度お試しください"
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg("送信に失敗しました。通信環境をご確認ください");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center">
          <p className="font-display tracking-[0.2em] text-brand-orange text-lg mb-4">
            CONTACT
          </p>
          <h2 className="text-3xl lg:text-4xl font-700 leading-snug tracking-tight">
            お問い合わせ
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            サービスのご相談・ご質問など、お気軽にお問い合わせください。
            <br className="hidden sm:block" />
            担当者より2営業日以内にご返信いたします
          </p>
        </div>

        {status === "sent" ? (
          <div className="mt-14 text-center">
            <p className="text-lg font-700">送信が完了しました</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              お問い合わせありがとうございます。担当者より2営業日以内にご返信いたします
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-7">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-500 mb-2">
                  お名前 <span className="text-brand-orange">*</span>
                </label>
                <input type="text"
                  name="name"
                  required className="w-full border-b border-border bg-transparent px-1 py-3 text-sm focus:outline-none focus:border-brand-teal"
                  placeholder="山田 太郎"
                />
              </div>
              <div>
                <label className="block text-sm font-500 mb-2">会社名</label>
                <input type="text"
                  name="company"
                  className="w-full border-b border-border bg-transparent px-1 py-3 text-sm focus:outline-none focus:border-brand-teal"
                  placeholder="株式会社○○"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-500 mb-2">
                メールアドレス <span className="text-brand-orange">*</span>
              </label>
              <input type="email"
                name="email"
                required className="w-full border-b border-border bg-transparent px-1 py-3 text-sm focus:outline-none focus:border-brand-teal"
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-500 mb-2">
                お問い合わせ内容 <span className="text-brand-orange">*</span>
              </label>
              <textarea required rows={5}
                name="message"
                className="w-full border-b border-border bg-transparent px-1 py-3 text-sm focus:outline-none focus:border-brand-teal resize-y"
                placeholder="ご相談内容をご記入ください"
              />
            </div>

            {/* honeypot: 画面には表示されない。botが値を入れたらAPI側で破棄 */}
            <input type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            {status === "error" && (
              <p className="text-sm text-red-600">{errorMsg}</p>
            )}

            <button type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full font-medium py-4 rounded-2xl !mt-14 disabled:opacity-60"
            >
              {status === "sending" ? "送信中…" : "送信する"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
