import React from "react";
import Logo from "./Logo";
const FeatureCard = ({
  className,
  Path,
  HeadingClass,
  HeadingTitle,
  ParagraphClass,
  ParagraphText,
}) => {
  return (
    <div className={className}>
      <Logo className="Logo" Path={Path} />
      <div>
        <h1 className={HeadingClass}>{HeadingTitle}</h1>
        <p className={ParagraphClass}>{ParagraphText}</p>
      </div>
    </div>
  );
};
export default FeatureCard;
