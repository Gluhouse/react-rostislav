import styled from "styled-components";

// export const StyledText = styled.p``;

export const TextH1 = styled.h1`
  font-family: "Montserrat";
  font-size: 48px;
  font-weight: bold;
`;

export const TextH2 = styled.h2`
  font-family: "Montserrat";
  font-size: 32px;
  font-weight: bold;
`;

export const TextH3 = styled.h3`
  font-family: "Montserrat";
  font-size: 20px;
  font-weight: bold;
`;

export const TextH4 = styled.h4`
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: bold;
`;

export const TextP = styled.p`
  font-family: "Roboto";
  font-size: ${({ size }) => (size ? size : "16px")};
  font-weight: normal;
`;
