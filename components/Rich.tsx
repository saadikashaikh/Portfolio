// Renders "Ship *React* apps" with the starred words highlighted.
export default function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split("*").map((part, i) =>
        i % 2 ? (
          <strong key={i} className="marker font-bold">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}
