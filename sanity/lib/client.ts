import { createClient } from "next-sanity";
import type { QueryParams } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);

export const token =
  typeof process === "undefined" ? "" : process.env.SANITY_API_READ_TOKEN!;

const DEFAULT_PARAMS = {} as QueryParams;

// Utility for fetching data on the server, that can toggle between published and preview drafts
export async function sanityFetch<QueryResponse>({
  previewDrafts,
  query,
  params = DEFAULT_PARAMS,
}: {
  previewDrafts?: boolean;
  query: string;
  params?: QueryParams;
}): Promise<QueryResponse> {
  if (previewDrafts && !token) {
    throw new Error(
      "The `SANITY_API_READ_TOKEN` environment variable is required."
    );
  }
  return client.fetch<QueryResponse>(
    query,
    params,
    previewDrafts
      ? {
          token,
          perspective: "previewDrafts",
        }
      : {}
  );
}
