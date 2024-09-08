import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "../env";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlFor = (source: Image) => {
  try {
    return imageBuilder?.image(source).auto("format").fit("max");
  } catch (error) {
    console.error("Error generating image URL:", error);
    return ""; // Fallback URL or handling logic
  }
};