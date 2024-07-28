import IResume from "../../data/IResume"
import Navigation from "./Navigation"
import ProfileIcon from "./ProfileIcon"

function Header({ className, data }: { className?: string, data:IResume }) {

  return (
    <>
      <header className={`static md:sticky md:top-0 md:w-1/2 md:max-h-screen md:py-20 text-center md:text-left top-0 ${className}`}>
        <h1 className="text-6xl font-bold dark:text-slate-100">
          {data.fullName}
        </h1>
        <h3 className="text-xl text-slate-900 dark:text-slate-100 mb-6">
          {data.jobTitle}
        </h3>
        <Navigation />
        <div className="flex mt-6 gap-x-4 justify-center md:justify-start">
          <ProfileIcon icon="github" link="https://github.com/fabiotrisera" />
          <ProfileIcon icon="linkedin" link="https://www.linkedin.com/in/ftrisera" />
        </div>
      </header>
    </>
  )
}

export default Header
