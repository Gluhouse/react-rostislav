import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

import { colors } from "styles";
import { typography } from "styles";

const commonLinkStyles = css`
  text-decoration: none;
  color: ${colors.PRIMARY};
  font-family: ${typography.FONT_FAMILY_PRIMARY};
  font-weight: bold;
`;

export const InternalLink = styled(NavLink)`
  ${commonLinkStyles}

  &.active {
    color: ${colors.ACCENT};
  }
`;

export const ExternalLink = styled.a`
  ${commonLinkStyles}
`;
