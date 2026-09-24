interface TagListProps {
  items: readonly string[];
  label: string;
}

export function TagList({ items, label }: TagListProps) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted">
          {item}
        </li>
      ))}
    </ul>
  );
}
