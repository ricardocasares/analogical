// external
import React from "react";

export default ({ theme, children }) => (
  <h4>
    {children}
    <style jsx>{`
      h4 {
        color: ${theme.card.title};
        margin-top: 0;
        font-weight: 400;
        font-size: 1.4rem;
      }
    `}</style>
  </h4>
);