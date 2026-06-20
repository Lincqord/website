import type { Metadata } from "next";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "お問い合わせ | Lincqord",
  description:
    "Lincqordへのお問い合わせ。サービスのご相談・ご質問など、お気軽にお問い合わせください。初回相談は無料です。",
};

export default function ContactPage() {
  return (
    <main className="flex-1 pt-16 lg:pt-20">
      <Contact />
    </main>
  );
}
