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
        {/* subtle decorative arcs */}
        <svg
          aria-hidden
          viewBox="0 0 1200 400"
          className="absolute inset-0 w-full h-full pointer-events-none"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="1050" cy="120" r="220" stroke="var(--color-teal)" strokeOpacity="0.25" strokeWidth="1.5" />
          <circle cx="1120" cy="200" r="160" stroke="var(--color-orange)" strokeOpacity="0.25" strokeWidth="1.5" />
        </svg>

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
