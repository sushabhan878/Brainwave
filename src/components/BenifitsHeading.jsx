import React from "react";

const BenifitsHeading = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } max-w-[50rem] mx-auto mb-12 lg:mb-20 font-code font-semibold`}
    >
      {title && <h2 className="h2">{title}</h2>}
    </div>
  );
};

export default BenifitsHeading;
