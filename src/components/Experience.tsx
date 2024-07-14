interface ExperienceProps {
  jobTitle: string
  companyName: string
  companyWebsite: string
  className?: string,
  highlights: string[]
}

function Experience({
  jobTitle,
  companyName,
  companyWebsite,
  className,
  highlights
}: ExperienceProps) {

    const highlightsList = highlights.map((highlight, index) => {
        return (
            <li key={index} className="mb-3">
            <p>{highlight}</p>
            </li>
        );
    });

  return (
    <>
      <section className={`${className}`}>
        <section className="flex justify-between text-slate-100 font-medium">
          <h3>{jobTitle}</h3>
          <h3>{companyName}</h3>
        </section>
        <section className="text-start">
            <ul className="list-disc list-outside text-sm">
                {highlightsList}
            </ul>
        </section>
      </section>
    </>
  )
}

export default Experience
