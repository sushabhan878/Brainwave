import React from "react";
import Tagline from "./Tagline";

const BenifitsHeading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${
        className || ""
      } max-w-[50rem] mx-auto mb-12 md:text-center lg:mb-20 font-code font-semibold`}
    >
      {tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}
      {title && <h2 className="h2 lg:justify-center">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default BenifitsHeading;
