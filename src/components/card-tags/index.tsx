export default function CardTags({
  categories,
}: {
  categories: PericonCategory[];
}) {
  if (categories.length < 1) return <p></p>;

  return (
    <div className="flex gap-2">
      {categories.map((str: PericonCategory, idx: number) => (
        <p
          key={idx}
          className="rounded-full px-2 py-1 text-white text-xs bg-[var(--accent-color)]"
        >
          {str.name}
        </p>
      ))}
    </div>
  );
}
