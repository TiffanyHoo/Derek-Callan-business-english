interface VocabularyItemProps {
  item: { id: string; word: string; definition: string; examples: string[] }
}

export default function VocabularyItem({ item }: VocabularyItemProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
      <h4 className="text-lg font-bold text-gray-900">{item.word}</h4>
      <p className="mt-1 text-sm text-gray-600">{item.definition}</p>
      {item.examples.length > 0 && (
        <div className="mt-3 space-y-1.5">
          {item.examples.map((example, index) => (
            <p key={index} className="text-sm text-gray-500 italic">
              &ldquo;{example}&rdquo;
            </p>
          ))}
        </div>
      )}
    </div>
  )
}
