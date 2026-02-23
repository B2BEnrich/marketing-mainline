import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "B2BEnrich",
    short_name: "B2BEnrich",
    description:
      "B2B data enrichment API — enrich contacts and companies with 250+ data points.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
