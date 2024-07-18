import { FaGithub, FaLinkedin } from "react-icons/fa"

function Header() {

  return (
    <>
      <header className="md:sticky md:top-0 md:w-1/2 md:max-h-screen md:py-20 text-center md:text-left sticky top-0">
        <h1 className="text-6xl font-bold dark:text-slate-100">
          Fabio Trisera
        </h1>
        <h3 className="text-xl text-slate-900 dark:text-slate-100 mb-6">
          Senior Software Engineer
        </h3>
        <ul>
          <li>
            <a
              className="font-semibold hover:text-slate-100 hover:bg"
              href="#headline"
            >
              Headline
            </a>
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
    </>
  )
}

export default Header
