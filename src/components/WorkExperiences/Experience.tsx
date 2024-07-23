import Highlights from "./Highlights";
import Skills from "./Skills";

interface ExperienceProps {
  jobTitle: string
  companyName: string
  companyWebsite: string
  className?: string,
  highlights: string[],
  skills: string[]
}

function Experience({
  jobTitle,
  companyName,
  companyWebsite,
  className,
  highlights,
  skills
}: ExperienceProps) {

  return (
    <>
      <section className={`${className}`}>
        <section className="flex justify-between text-slate-900 dark:text-slate-100 font-medium">
          <h3>{jobTitle}</h3>
          <h3>{companyName}</h3>
        </section>
        <section className="text-start">
            <Highlights highlights={highlights} />
        </section>
        <section>
          <ul className="list-disc list-inside text-sm">
            <Skills skills={skills} />
          </ul>
        </section>
      </section>
    </>
  )
}

export default Experience
