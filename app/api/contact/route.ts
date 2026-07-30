import { NextResponse } from "next/server";
import { Resend } from "resend";

// お問い合わせフォーム → hello@lincqord.com へメール通知
// 必要な環境変数（Vercel > Settings > Environment Variables）:
//   RESEND_API_KEY      … ResendのAPIキー（必須）
//   CONTACT_TO_EMAIL    … 受信先（省略時 hello@lincqord.com）
//   CONTACT_FROM_EMAIL  … 差出人（省略時 onboarding@resend.dev。
//                          lincqord.comをResendでドメイン認証後に
//                          "Lincqord <contact@lincqord.com>" 等へ変更）

const MAX = { name: 100, company: 150, email: 200, message: 5000 };

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid request" }, { status: 400 });
  }

  const name = String(data.name ?? "").trim();
  const company = String(data.company ?? "").trim();
  const email = String(data.email ?? "").trim();
  const message = String(data.message ?? "").trim();
  // ハニーポット（botはこの不可視フィールドを埋める）
  const website = String(data.website ?? "");

  if (website) {
    // botとみなし、成功したふりをして破棄
    return NextResponse.json({ ok: true });
  }
  if (!name || !email || !message) {
    return NextResponse.json({ error: "必須項目が未入力です" }, { status: 400 });
  }
  if (
    name.length > MAX.name ||
    company.length > MAX.company ||
    email.length > MAX.email ||
    message.length > MAX.message ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return NextResponse.json({ error: "入力内容をご確認ください" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "送信環境が未設定です。恐れ入りますがメールでお問い合わせください" },
      { status: 500 }
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || "hello@lincqord.com";
  const from =
    process.env.CONTACT_FROM_EMAIL || "Lincqord Web <onboarding@resend.dev>";

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `【サイトお問い合わせ】${name}様${company ? `（${company}）` : ""}`,
    text: [
      "Lincqordウェブサイトのお問い合わせフォームから送信されました。",
      "",
      `お名前: ${name}`,
      `会社名: ${company || "（未記入）"}`,
      `メールアドレス: ${email}`,
      "",
      "----- お問い合わせ内容 -----",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "送信に失敗しました。時間をおいて再度お試しください" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
