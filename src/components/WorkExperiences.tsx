import Experience from "./Experience"

interface IWorkExperiences {
  className?: string
}

function WorkExperiences({ className }: IWorkExperiences) {
  return (
    <>
      <section id="work-experiences" className={className}>
        <section>
          <Experience
            jobTitle="Senior Developer"
            companyName="ZINC GROUP"
            companyWebsite="https://zincgroup.com"
            className="mb-8"
            highlights={[
              "Planned and migrated existing large-scale supply chain management system monolith to AWS cloud resources such as AWS Lambda, AWS RDS, AWS API Gateway, AWS ELB, AWS CloudFront, AWS CloudWatch, CloudTrail for observability and AWS CloudFormation for IaaS deployment, creating a distributed,scalable system with React, Redux and TypeScript front-end by following best practices.",
              "Defined development team coding standards and best practices,code review process by using Github pull request, and Improving existing CI/CD and automated testing through unit testing and end-to-end testing (Cypress & Playwright) in Github Action, which resulted in a 20% increase in software quality, reliability, and security"
            ]}
          >
          </Experience>
          <Experience
            jobTitle="Web Development Manager"
            companyName="Frontier Software"
            companyWebsite="https://au.frontiersoftware.com"
            className="mb-8"
            highlights={[
              "Helped build a technology culture that embraces the latest web technology, spearheading upgrade of AngularJs application to the latest Angular and building reusable component library and following industry best practices through regular team product and technology showcases, resulting in an average 20% increase in team velocity, 25% improved code quality, and an 80% team retention rate",
              "Provided each team and the board with comprehensive metrics through various static code analysis and performance test tools that allowed each team to create progressive milestones throughout the sprint, which increased product team ownership, a 25% improvement in code quality and a 20% increase in security compliance",
              "Cultivated an agile-driven culture across engineering teams using Azure DevOps by removing roadblocks and technical limitations, resulting in a 30% increase in speed in product delivery.",
              "Help foster test-driven development within each team's agile development practices, resulting in a 25% reduction in software bugs and increased software quality",
              "Hired and mentored five developers, guiding some to become influential team leaders, resulting in improved team culture, satisfaction and retention"]}>
          </Experience>
        </section>
      </section>
    </>
  )
}

export default WorkExperiences
