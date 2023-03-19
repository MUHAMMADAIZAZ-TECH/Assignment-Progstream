import React from "react";
import { Box, FeatureCard } from "@/Components/UI-Components";
const Section = ({
  Id,
  HeadingTitle,
  HeadingClass,
  SpanTitle,
  SpanClass,
  ParagrahText,
  ParagraphClass,
  BoxClass,
  left,
  right,
  middle,
  SectionClass,
  Content,
  ContentExist,
}) => {
  return (
    <section id={Id} className={SectionClass}>
      {left && !ContentExist ? <div className={left}></div> : null}

      {Content ? (
        <></>
      ) : (
        <div className={middle}>
          <h1 className={HeadingClass}>
            {HeadingTitle}{" "}
            {SpanTitle ? (
              <>
                <br />
                <span className={SpanClass}>INNOVATION</span>
              </>
            ) : (
              ""
            )}{" "}
          </h1>
          <p className={ParagraphClass}>{ParagrahText}</p>
        </div>
      )}
      {BoxClass && !ContentExist ? <Box Class={BoxClass} /> : ""}

      {right && !ContentExist ? <div className={right}></div> : null}

      {Content?.map((data, index) => (
        <FeatureCard
          key={index}
          className={data?.className}
          Path={data?.Path}
          HeadingClass={data?.HeadingClass}
          HeadingTitle={data?.HeadingTitle}
          ParagraphClass={data?.ParagraphClass}
          ParagraphText={data?.ParagraphText}
        />
      ))}
    </section>
  );
};
export default Section;
