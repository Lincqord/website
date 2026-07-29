/** ー・ー 区切り: 中央のみオレンジの点、左右に罫線 */
export default function DotDivider({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`flex items-center gap-4 ${className}`}>
      <span className="h-px flex-1 bg-border" />
      <span className="h-2 w-2 rounded-full bg-brand-orange shrink-0" />
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
