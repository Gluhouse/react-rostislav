import styled from "styled-components";
import { Home, Search, Settings } from "assets";
import { spaces } from "styles";

export const StyledPresentationPage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// export const HomeIcon = styled(Home)`
// width: ${`Calc(${({size}) => size}/2)`} height: `calc(${size} / 2)`
// `;

export const NavigationLinkWrapper = styled.div`
  display: flex;

  a {
    margin-left: ${spaces.SPACES_16};
  }
`;
