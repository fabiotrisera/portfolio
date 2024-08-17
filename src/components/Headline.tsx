interface IHeadline {
  className?: string;
  data: string[];
}

function Headline({ className, data }: IHeadline) {
    return (
        <>
            <section id="headline" className={className}>
            {data.map((headline, index) => {
              return <p key={index} className={"text-left " && index !== 0 ? "mt-2" : ""}>{headline}</p>
            })}
          </section>
        </>
    )
}

export default Headline