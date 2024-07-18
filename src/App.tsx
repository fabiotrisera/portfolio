import "./App.css"
import Headline from "./components/Headline"
import WorkExperience from "./components/WorkExperiences"
import ThemeToggler from "./components/ThemeToggler/ThemeToggler"
import Header from "./components/Header"
import { ThemeProvider } from "./components/ThemeToggler/ThemeContext"

function App() {
  return (
    <>
      <ThemeProvider>
        <ThemeToggler className="absolute top-3 right-3" />
        <div className="flex justify-between md:px-24 md:gap-4">
          <Header />
          <div className="md:flex-grow-1 md:w-1/2 md:py-20 flex flex-col">
            <Headline className="mb-12" />
            <WorkExperience className="mb-12" />
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
