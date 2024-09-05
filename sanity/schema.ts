// sanity/schema.ts
import { type SchemaTypeDefinition } from "sanity";
import { tag } from "./schemas/tags";
import { post } from "./schemas/post";
import { project } from "./schemas/project";
import { skill } from "./schemas/skill";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [tag, post, project, skill],
};
