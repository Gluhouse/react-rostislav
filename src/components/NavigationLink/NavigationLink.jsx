import { InternalLink, ExternalLink } from "./NavigationLinkStyles";

const NavigationLink = ({
  children,
  externalLink = false,
  openInNewTab = false,
  onClick,
  href,
}) => {
  return externalLink ? (
    <ExternalLink
      // eslint-disable-next-line no-script-url

      href={href || "javascript:void(0)"}
      onClick={onClick}
      role="link"
      target={openInNewTab ? "_blank" : "_self"}
    >
      {children}
    </ExternalLink>
  ) : (
    <InternalLink
      onClick={onClick}
      role="link"
      target={openInNewTab ? "_blank" : "_self"}
      to={href}
    >
      {children}
    </InternalLink>
  );
};

export default NavigationLink;
