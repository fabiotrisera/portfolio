import { FaExternalLinkSquareAlt } from "react-icons/fa";
import Highlights from "./Highlights";
import Skills from "./Skills";
import React from "react";

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
  const linkRef = React.useRef<HTMLElement>(null);

  function handleMouseOver() {
    linkRef.current!.classList.add("animate-pulse");
  }

  function handleMouseOut() {
    linkRef.current!.classList.remove("animate-pulse");
  }

  return (
    <>
        <section className={`${className}`}>
          <section className="flex justify-between text-slate-900 dark:text-slate-100 font-medium">
            <h3>{jobTitle}</h3>
            <a href={companyWebsite} className="flex flex-row" target="_blank" rel="noreferrer" 
              onMouseOver={handleMouseOver} 
              onMouseOut={handleMouseOut}>
              <h3>{companyName}</h3>
              <span ref={linkRef}>
                <FaExternalLinkSquareAlt className="ml-1 mt-1 text-slate-900 dark:text-slate-100"></FaExternalLinkSquareAlt>
              </span>
            </a>
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
