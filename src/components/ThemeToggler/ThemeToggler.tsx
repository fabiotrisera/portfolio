import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { UseTheme, UseThemeDispatch } from "./ThemeContext";

interface IThemeToggler {
  className?: string;
}

function ThemeToggler({ className }: IThemeToggler) {
    const theme = UseTheme();
    const dispatch = UseThemeDispatch();

    function handleDarkMode() {
        const html = document.querySelector("html");
        html?.classList.toggle("dark");
        dispatch!({ type: "toggle" });
    }

    return (
        <>  
            <button
                className={`bg-transparent focus:border-transparent hover:border-transparent focus:outline-none ${className}`}
                onClick={handleDarkMode}
            >
                {theme.mode === 'dark' ? (
                    <MdOutlineDarkMode className="size-6" />
                ) : (
                    <MdDarkMode className="size-6" />
                )}
            </button>
        </>
    );
}

export default ThemeToggler;
