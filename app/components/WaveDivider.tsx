const COLORS: Record<string, string> = {
  white: "#ffffff",
  surface: "#e9eef0",
};

/**
 * Soft transition between sections: a gentle color fade with a very
 * faint hairline so the boundary is *just* perceptible (not a hard line).
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
