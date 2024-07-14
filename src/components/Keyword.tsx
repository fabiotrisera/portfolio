function Keyword({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <>
            <span className="dark:text-slate-300 font-semibold">
                {children}
            </span>
        </>
    );
}

export default Keyword