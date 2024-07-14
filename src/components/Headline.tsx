import Keyword from "./Keyword"

interface IHeadline {
  className?: string
}

function Headline({ className }: IHeadline) {
    return (
        <>
            <section id="headline" className={className}>
            <p className="text-left">
              Over 15 years of experience in full-stack development,
              specializing in{" "}
              <Keyword>Angular</Keyword>
              , <Keyword>React</Keyword>
              , and{" "}
              <Keyword>.NET Core</Keyword>
              . Proficient in testing frameworks and methodologies, with
              extensive exposure to microservice with Docker and comprehensive
              cloud technologies, including <Keyword>Azure</Keyword> and <Keyword>AWS</Keyword>.
            </p>
            <p className="text-left mt-2">
              Proven leader in guiding and mentoring global teams to deliver
              scalable software solutions. Expertise in microservices
              architecture, CI/CD. Skilled at driving technology initiatives,
              fostering innovation, and implementing best practices to enhance
              software quality and reliability. Dedicated to continuous
              improvement and cross-functional teamwork to achieve business
              goals.
            </p>
          </section>
        </>
    )
}

export default Headline