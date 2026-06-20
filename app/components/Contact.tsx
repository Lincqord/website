export default function Contact() {
  return (
    <section id="contact" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center">
          <p className="font-display tracking-[0.2em] text-brand-orange text-sm mb-4">
            CONTACT
          </p>
          <h2 className="text-3xl lg:text-4xl font-700 leading-snug tracking-tight">
            お問い合わせ
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            サービスのご相談・ご質問など、お気軽にお問い合わせください。
            <br className="hidden sm:block" />
            担当者より2営業日以内にご返信いたします。
          </p>
        </div>

        {/* TODO: 送信先(フォームバックエンド/メール)を接続 */}
        <form className="mt-12 bg-white rounded-2xl border border-border p-7 lg:p-10 space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-500 mb-2">
                お名前 <span className="text-brand-orange">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline-none focus:border-brand-teal"
                placeholder="山田 太郎"
              />
            </div>
            <div>
              <label className="block text-sm font-500 mb-2">会社名</label>
              <input
                type="text"
                className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline-none focus:border-brand-teal"
                placeholder="株式会社○○"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-500 mb-2">
              メールアドレス <span className="text-brand-orange">*</span>
            </label>
            <input
              type="email"
              required
              className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline-none focus:border-brand-teal"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-500 mb-2">
              お問い合わせ内容 <span className="text-brand-orange">*</span>
            </label>
            <textarea
              required
              rows={5}
              className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline-none focus:border-brand-teal resize-y"
              placeholder="ご相談内容をご記入ください"
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full font-medium py-4 rounded-full"
          >
            送信する
          </button>
        </form>
      </div>
    </section>
  );
}
