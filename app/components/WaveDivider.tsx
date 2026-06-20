const COLORS: Record<string, string> = {
  white: "#ffffff",
  surface: "#f5f7f8",
};

/**
 * Soft, blurred transition between sections — no hard line.
 * `from` = color of the section above, `to` = color of the section below.
 * (`flip` kept for call-site compatibility; not used.)
 */
export default function WaveDivider({
  from,
  to,
}: {
  from: "white" | "surface";
  to: "white" | "surface";
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden
      className="h-16 lg:h-28"
      style={{
        background: `linear-gradient(to bottom, ${COLORS[from]} 0%, ${COLORS[to]} 100%)`,
      }}
    />
  );
}
