const COLORS: Record<string, string> = {
  white: "#ffffff",
  surface: "#f5f7f8",
};

/**
 * Large flowing wave between sections.
 * `from` = color of the section above, `to` = color of the section below.
 */
export default function WaveDivider({
  from,
  to,
  flip = false,
}: {
  from: "white" | "surface";
  to: "white" | "surface";
  flip?: boolean;
}) {
  const path = flip
    ? "M0,60 C 420,0 1020,100 1440,40 L1440,100 L0,100 Z"
    : "M0,40 C 420,100 1020,0 1440,60 L1440,100 L0,100 Z";

  return (
    <div
      aria-hidden
      style={{ backgroundColor: COLORS[from], lineHeight: 0 }}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="block w-full h-12 lg:h-24"
      >
        <path d={path} fill={COLORS[to]} />
      </svg>
    </div>
  );
}
