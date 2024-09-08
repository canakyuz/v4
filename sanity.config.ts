/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { codeInput } from "@sanity/code-input";
import { table } from "@sanity/table";
import { markdownSchema } from "sanity-plugin-milkdown";
import { latexInput } from "sanity-plugin-latex-input";

export default defineConfig({
  schema,
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  plugins: [
    codeInput(),
    structureTool(),
    markdownSchema({}),
    visionTool({ defaultApiVersion: apiVersion }),
    table(),
    latexInput()
  ],
});
