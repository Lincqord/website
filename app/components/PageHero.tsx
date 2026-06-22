import WaveDivider from "./WaveDivider";

export default function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-surface pt-16 lg:pt-20 flex items-center min-h-[20rem] lg:min-h-[26rem]">
<div className="relative mx-auto max-w-7xl w-full px-5 lg:px-8 py-12 lg:py-16">
          <p className="font-display tracking-[0.2em] text-brand-orange text-sm mb-4">
            {eyebrow}
          </p>
          <h1 className="text-4xl lg:text-5xl font-900 leading-tight tracking-tight">
            {title}
          </h1>
          {lead && (
            <p className="mt-6 max-w-2xl text-base lg:text-lg leading-relaxed text-muted">
              {lead}
            </p>
          )}
        </div>
      </section>
      <WaveDivider from="surface" to="white" />
    </>
  );
}
