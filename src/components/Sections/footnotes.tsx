
interface FootnotesProps {
  notes: { id: string; text: string }[];
}

export function Footnotes({ notes }: FootnotesProps) {
  return (
    <div className="mt-10 text-sm text-muted-foreground">
      <ol className="list-decimal list-outside pl-5 space-y-2">
        {notes.map((note) => (
          <li key={note.id} id={`footnote-${note.id}`}>
            {note.text}
          </li>
        ))}
      </ol>
    </div>
  );
}
