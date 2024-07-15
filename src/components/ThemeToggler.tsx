import React from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

interface IThemeToggler {
  className?: string;
}

function ThemeToggler({ className }: IThemeToggler) {
    const [darkMode, setDarkMode] = React.useState(false);


    function handleDarkMode() {
        const html = document.querySelector("html");
        html?.classList.toggle("dark");
        setDarkMode(!darkMode);
    }

    return (
        <>
        <button
            className={`bg-transparent focus:border-transparent hover:border-transparent focus:outline-none ${className}`}
            onClick={handleDarkMode}
        >
            {darkMode ? (
                <MdOutlineDarkMode className="size-6" />
            ) : (
                <MdDarkMode className="size-6" />
            )}
        </button>
        </>
    );
}

export default ThemeToggler;
