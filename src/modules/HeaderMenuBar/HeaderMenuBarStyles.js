import styled from "styled-components";
import colors from "styles/colors";

export const StyledHeaderMenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 10px 0;
  text-align: center;

  width: 700px;

  & svg {
    width: 40px;
    height: 40px;
  }
`;

export const HeaderMenuWrapper = styled.div`
  background-color: ${colors.SECONDARY};
  width: 100vw;
`;
