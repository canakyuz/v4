import { Rule } from "sanity";
import { tag } from "./tags";

export const project = {
  name: "project",
  title: "Project",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: Rule) => Rule.max(140).error("Max 140 characters"),
    },
    {
      name: "code",
      title: "Code Block",
      type: "code",
      options: {
        withFilename: true, // optional
        highlightedLines: true, // optional
      },
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skill" }] }],
    },
    {
      name: "style",
      title: "ClassNames",
      type: "string",
      description: "Add class names for styling",
    },
  ],
};
