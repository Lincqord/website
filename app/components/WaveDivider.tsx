const COLORS: Record<string, string> = {
  white: "#ffffff",
  surface: "#f5f7f8",
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
      className="relative h-14 lg:h-24"
      style={{
        background: `linear-gradient(to bottom, ${COLORS[from]} 0%, ${COLORS[to]} 100%)`,
      }}
    >
      <div
        className="absolute inset-x-0 top-1/2"
        style={{ height: "1px", background: "rgba(0,0,0,0.05)" }}
      />
    </div>
  );
}
