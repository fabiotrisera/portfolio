import { MdDarkMode } from "react-icons/md"
import "./App.css"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Headline from "./components/Headline"
import WorkExperience from "./components/WorkExperiences"
import ThemeToggler from "./components/ThemeToggler"

function App() {
  return (
    <>
      <ThemeToggler className="absolute top-3 right-3" />
      <div className="flex justify-between md:px-24 md:gap-4">
        <header className="md:sticky md:top-0 md:w-1/2 md:max-h-screen md:py-20 text-center md:text-left sticky top-0">
          <h1 className="font-bold dark:text-slate-100">Fabio Trisera</h1>
          <h3 className="text-slate-900 dark:text-slate-100">
            Senior Software Engineer
          </h3>
          <h4 className="text-slate-700 dark:text-slate-400 mt-6">
            Full-Stack Development
          </h4>
          <ul>
            <li>
              <a href="#headline">Headline</a>
            </li>
            <li>
              <a href="#work-experiences">Work Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
          <div className="flex mt-6 gap-x-4 justify-center md:justify-start">
            <FaGithub className="size-8" />
            <FaLinkedin className="size-8" />
          </div>
        </header>
        <div className="md:flex-grow-1 md:w-1/2 md:py-20 flex flex-col">
          <Headline className="mb-12" />
          <WorkExperience className="mb-12" />
        </div>
      </div>
    </>
  )
}

export default App
