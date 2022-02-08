import React from "react";
import Marquee from "react-fast-marquee";

type SectionHeaderProps = {
  children: React.ReactNode;
}

const SectionHeader = ({children}: SectionHeaderProps) => {
  return (
    <div className="section-header">
      <Marquee gradient={false}>
        <h2 className="section-header-title">
          {children}
        </h2>
      </Marquee>
    </div>
  );
};

export default SectionHeader;