import React from "react";
import Keywords from "../data/Keywords";
import Keyword from "./Keyword";
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

      matchedKeywords.forEach((keyword: string, i: number) => {
        if (newHeadline.length === 0) {
          const index = headline.indexOf(keyword);
          const before = headline.slice(0, index);
          const after = headline.slice(index + keyword.length);
          newHeadline.push(<React.Fragment key={`before-${i}`}>{before}</React.Fragment>);
          newHeadline.push(<Keyword key={i}>{keyword}</Keyword>);
          newHeadline.push(<React.Fragment key={`after-${i}`}>{after}</React.Fragment>);
        } else {
          newHeadline.forEach((headlineItem, index) => {
            const headlineItemStr = ReactDOMServer.renderToString(headlineItem);
              if (headlineItemStr.indexOf(keyword) > 0) {
                const indexKeyword = headlineItemStr.indexOf(keyword);
                const before = headlineItemStr.slice(0, indexKeyword);
                const after = headlineItemStr.slice(indexKeyword + keyword.length);
                newHeadline.splice(index, 1, <React.Fragment key={`before-${i}`}>{before}</React.Fragment>);
                newHeadline.splice(index + 1, 0, <Keyword key={i}>{keyword}</Keyword>);
                newHeadline.splice(index + 2, 0, <React.Fragment key={`after-${i}`}>{after}</React.Fragment>);
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
