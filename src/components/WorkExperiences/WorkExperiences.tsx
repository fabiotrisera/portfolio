import { IWorkExperience } from "../../data/IResume";
import Experience from "./Experience"

interface IWorkExperiences {
  className?: string;
  data: IWorkExperience[];
}

function WorkExperiences({ className, data }: IWorkExperiences) {
  return (
    <>
      <section id="work-experiences" className={className}>
        <section>
          {
            data.map((experience, index) => {
              return <Experience
                key={index}
                jobTitle={experience.jobTitle}
                jobLength={experience.jobLength}
                companyName={experience.companyName}
                companyWebsite={experience.companyUrl}
                className="mb-8"
                highlights={experience.highlights}
                skills={experience.skills}
              >
              </Experience>
            })
          }
        </section>
      </section>
    </>
  )
}

export default WorkExperiences
