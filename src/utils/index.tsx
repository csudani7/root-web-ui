import { RichText } from 'prismic-reactjs';
import { LinkProps, SocialMediaIconsItemProps } from '../types/common';
import { prismicLinkResolver } from '../prisimic-configuration';

export function getSocialMediaLinksFromSlice(
  items: Array<any>
): Array<SocialMediaIconsItemProps> {
  const links: Array<SocialMediaIconsItemProps> = items.map((item) => {
    const { icon_type, social_media_url, social_media_icon } = item;
    const prismicLinkResolverResult = prismicLinkResolver(social_media_url);
    const { url: ImageSrc, alt: ImageAlt } = social_media_icon;
    const iconImage = {
      src: ImageSrc,
      alt: ImageAlt,
    };
    return {
      type: RichText.asText(icon_type),
      url: prismicLinkResolverResult.href,
      iconImage: iconImage,
    };
  });
  return links;
}

export function getLinksFromSlice(items: Array<any>): Array<LinkProps> {
  const links: Array<LinkProps> = items.map(({ label, link }) => {
    const prismicLinkResolverResult = prismicLinkResolver(link);
    return {
      label: RichText.asText(label),
      link: prismicLinkResolverResult?.href || '/',
    };
  });
  return links;
}
