import React from "react"

interface IProject {
  title: string
  description: string
  link: string
  duration: string
  responsibilities: string[]
}

export default function Projects({ data }: { data: IProject[] }) {
  const linkRef = React.useRef<HTMLHeadingElement>(null)

  function handleMouseOver() {
    linkRef.current!.classList.add("animate-pulse")
  }

  function handleMouseOut() {
    linkRef.current!.classList.remove("animate-pulse")
  }
  return (
    <>
      <section id="projects">
        {data.map((project, index) => {
          return (
            <section key={index} className="mb-8">
              <section className="flex justify-between text-slate-900 dark:text-slate-100 font-medium">
                <a
                  href={project.link}
                  className="flex flex-row"
                  target="_blank"
                  rel="noreferrer"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  <h3 ref={linkRef}>{project.title}</h3>
                </a>
                <h4>{project.duration}</h4>
              </section>
              <section className="text-start">
                <p className="mt-2 text-sm">{project.description}</p>
                <ul className="list-disc list-outside text-sm mt-2">
                  {project.responsibilities.map((responsibility, index) => {
                    return (
                      <li key={index} className="mb-3">
                        <p>{responsibility}</p>
                      </li>
                    )
                  })}
                </ul>
              </section>
            </section>
          )
        })}
      </section>
    </>
  )
}
