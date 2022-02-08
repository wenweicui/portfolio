import React, {ReactNode} from "react";
import pdf from '../assets/pdf/resume.pdf';

export interface ScrollBodyProps  { 
  children: React.ReactNode
}

const ScrollBody = ({children}: ScrollBodyProps) => {
  return (
    <main className="scrollbody-container">
      {children}
    </main>
  );
};

export default ScrollBody;