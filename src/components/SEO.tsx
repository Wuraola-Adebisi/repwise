import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
};

const SITE_NAME = "Repwise";
const SITE_URL = "https://repwise-pearl.vercel.app";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export default function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (
      attribute: "name" | "property",
      key: string,
      content: string,
    ) => {
      let element = document.head.querySelector<HTMLMetaElement>(
        `meta[${attribute}="${key}"]`,
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    setMeta("name", "description", description);

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", `${SITE_URL}${window.location.pathname}`);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:image", OG_IMAGE);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", OG_IMAGE);
  }, [title, description]);

  return null;
}