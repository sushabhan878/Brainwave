import React from "react";
import Section from "./Section";
import { smallSphere, stars } from "../assets";
import BenifitsHeading from "./BenifitsHeading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
const Pricing = () => {
  return (
    <Section className="overflow-hidden " id="pricing">
      <div className="relative container z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            alt="Sphere"
            className="relative z-1"
            width={355}
            height={255}
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              alt="Stars"
              className="w-full "
              width={590}
              height={400}
            />
          </div>
        </div>
        <BenifitsHeading
          tag="Get started with Brainwave"
          title="Pay once, Use forever"
        />
      </div>
      <div className="relative">
        <LeftLine />
        <PricingList />
        <RightLine />
      </div>
      <div className="flex justify-center mt-10">
        <a
          className="text-xs font-code font-bold tracking-wider uppercase border-b "
          href="/pricing"
        >
          seet the full details
        </a>
      </div>
    </Section>
  );
};

export default Pricing;
