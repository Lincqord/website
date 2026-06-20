import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";

export const metadata: Metadata = {
  title: "チーム | Lincqord",
  description:
    "Lincqordのチーム紹介。多様なバックグラウンドを持つカルチャーの専門家が、CQ（文化知性）を軸に組織変革を支援します。",
};

// TODO: 実際のメンバー情報（氏名・役職・経歴・写真）に差し替え
const MEMBERS = [
  {
    name: "石井 由香梨",
    role: "代表取締役",
    bio: "Lincqord創業者。CQ（文化知性）を軸に、多様性を組織のチカラへ変える組織・人材開発をリードする。",
  },
  {
    name: "Member",
    role: "コンサルタント",
    bio: "（プロフィール準備中）",
  },
  {
    name: "Member",
    role: "コーチ / ファシリテーター",
    bio: "（プロフィール準備中）",
  },
];

export default function TeamPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="TEAM"
        title="チーム"
        lead="多様なバックグラウンドを持つカルチャーの専門家が集い、CQの知恵で組織変革を支援します。"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MEMBERS.map((m, i) => (
            <div key={i} className="text-center">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-teal/15 to-brand-orange/15" />
              <h2 className="mt-5 text-lg font-700">{m.name}</h2>
              <p className="text-sm text-brand-teal">{m.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <PageCTA />
    </main>
  );
}
