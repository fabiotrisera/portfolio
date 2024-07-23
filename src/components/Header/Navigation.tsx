import NavigationItem from "./NavigationItem"

function Navigation() {
    return(
        <ul>
          <li>
           <NavigationItem title="Headline" href="headline" />
          </li>
          <li>
            <NavigationItem title="Work Experience" href="work-experiences" />
          </li>
          <li>
            <NavigationItem title="Projects" href="projects" />
          </li>
        </ul>
    )
}

export default Navigation