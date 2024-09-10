import Keywords from "../data/Keywords";
import Keyword from "./Keyword";
import React from "react";
import ReactDOMServer from "react-dom/server";

interface IHeadline {
  className?: string;
  data: string[];
}

function Headline({ className, data }: IHeadline) {
  // check if data contain the keyword from the array
  function renderHeadline(headline: string) {
    // split the headline into words based on space and comma and fullstop
    const words = headline.split(/[\s,.]+/);
    const matchedKeywords = words.filter((word: string) => Keywords.includes(word));
    if (matchedKeywords.length > 0) {
      
      const newHeadline: JSX.Element[] = [];

      matchedKeywords.forEach((keyword: string) => {
        if (newHeadline.length === 0) {
          const index = headline.indexOf(keyword);
          const before = headline.slice(0, index);
          const after = headline.slice(index + keyword.length);
          newHeadline.push(<>{before}</>);
          newHeadline.push(<Keyword>{keyword}</Keyword>);
          newHeadline.push(<>{after}</>);
        } else {
          newHeadline.forEach((headlineItem, index) => {
            const headlineItemStr = ReactDOMServer.renderToString(headlineItem);
              if (headlineItemStr.indexOf(keyword) > 0) {
                const indexKeyword = headlineItemStr.indexOf(keyword);
                const before = headlineItemStr.slice(0, indexKeyword);
                const after = headlineItemStr.slice(indexKeyword + keyword.length);
                newHeadline.splice(index, 1, <>{before}</>);
                newHeadline.splice(index + 1, 0, <Keyword>{keyword}</Keyword>);
                newHeadline.splice(index + 2, 0, <>{after}</>);
              }
          });
        }
        
      });
      return <>{newHeadline}</>;
    } else {
      return headline;
    }
  }

  return (
    <>
      <section id="headline" className={className}>
        {data.map((headline, index) => {
          return (
            <p
              key={index}
              className={"text-left " && index !== 0 ? "mt-2" : ""}
            >
              {renderHeadline(headline)}
            </p>
          );
        })}
      </section>
    </>
  );
}

export default Headline;
