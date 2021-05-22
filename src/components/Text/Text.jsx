// h1 / h2 / h3 / h4 / p / description;
import React from "react";
import { TextH1, TextH2, TextH3, TextH4, TextP } from "./TextStyles";

const Text = ({ type = "p", children }) => {
  switch (type) {
    case "h1":
      return <TextH1>{children}</TextH1>;
    case "h2":
      return <TextH2>{children}</TextH2>;
    case "h3":
      return <TextH3>{children}</TextH3>;
    case "h4":
      return <TextH4>{children}</TextH4>;
    case "desc":
      return <TextP size="12px">{children}</TextP>;
    default:
      return <TextP>{children}</TextP>;
  }
};

export default Text;
// function Text({ type = "p", children }) {
//   return <StyledText type={type}>{children}</StyledText>;
//   // return React.createElement(type === "desc" ? "p" : type, null, children);
// }

// function Text({ Type = "p", children }) {
//     return Type === "Desc" ? (
//       <p className="desc">{children}</p>
//     ) : (
//       <Type className={Type}>{children}</Type>
//     );
// }
