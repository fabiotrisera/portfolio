function Keyword({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <>
            <span className="dark:text-slate-300 font-semibold
                    dark:hover:text-blue-500 hover:text-sky-400">
                {children}
            </span>
        </>
    );
}

export default Keyword