import { NavigationLink } from "components";
import pageRoutes from "constants/pageRoutes";
import { StyledHeaderMenuBar, HeaderMenuWrapper } from "./HeaderMenuBarStyles";
import { SomeLogo } from "assets";
const HeaderMenuBar = () => {
  return (
    <HeaderMenuWrapper>
      <StyledHeaderMenuBar>
        <NavigationLink href={pageRoutes.HOME}>
          <SomeLogo />
        </NavigationLink>
        <NavigationLink href={pageRoutes.HOME}>HOME</NavigationLink>
        <NavigationLink href={pageRoutes.PRESENTATION}>
          PRESENTATION
        </NavigationLink>

        <NavigationLink href={pageRoutes.PRIVACY_POLICY}>
          PRIVACY POLICY
        </NavigationLink>
        <NavigationLink href={pageRoutes.CONTACT}>CONTACT</NavigationLink>
      </StyledHeaderMenuBar>
    </HeaderMenuWrapper>
  );
};

export default HeaderMenuBar;
