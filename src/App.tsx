import "./App.css"
import Headline from "./components/Headline"
import WorkExperience from "./components/WorkExperiences/WorkExperiences"
import ThemeToggler from "./components/ThemeToggler/ThemeToggler"
import Header from "./components/Header/Header"
import { ThemeProvider } from "./components/ThemeToggler/ThemeContext"
import * as resume from './data/resume.json';
import Projects from "./components/Projects/Projects"

function App() {

  return (
    <>
      <ThemeProvider>
        <ThemeToggler className="absolute top-3 right-3"/>
        <div className="flex flex-col ml-5 mr-5 md:flex-row justify-between md:px-24 md:gap-4">
          <Header className="mb-5" data={resume} />
          <div id="content" className="md:flex-grow-1 md:w-1/2 md:py-20 flex flex-col">
            <Headline className="mb-12" data={resume.headline} />
            <WorkExperience className="mb-12 ml-5 mr-5 md:ml-0 md:mr-5" data={resume.workExperiences} />
            <Projects data={resume.projects} />
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
