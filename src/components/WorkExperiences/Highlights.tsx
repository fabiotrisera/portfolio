function Highlights({ highlights }: { highlights: string[] }) {
  return (
    <ul className="list-disc list-outside text-sm">
      {highlights.map((highlight, index) => (
        <li key={index} className="mb-3">
          <p>{highlight}</p>
        </li>
      ))}
    </ul>
  )
}

export default Highlights
