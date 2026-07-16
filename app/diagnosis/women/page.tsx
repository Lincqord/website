import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import DiagnosisTool from "../DiagnosisTool";
import { WOMEN_DIAGNOSIS } from "../data/women";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "女性活躍、うちの会社はどの段階？｜組織の現在地診断",
  description:
    "12の質問に答えるだけで、貴社の「女性活躍」の現在地が5段階（無知・無関心→二極化→最小化→受容→適応）でわかる無料の簡易診断。約3分で、段階ごとの「次の一手」までわかります。",
};

export default function WomenDiagnosisPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="DIAGNOSIS"
        title={WOMEN_DIAGNOSIS.title}
        lead={WOMEN_DIAGNOSIS.lead}
      />

      <section className="bg-white pb-20 lg:pb-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <DiagnosisTool data={WOMEN_DIAGNOSIS} />
        </div>
      </section>
    </main>
  );
}
