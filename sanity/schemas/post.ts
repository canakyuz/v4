import { Rule } from "sanity";
import { tag } from "./tags";

export const post = {
  name: "post",
  title: "Post",
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
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "span",
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "External link",
                fields: [
                  {
                    name: "href",
                    title: "URL",
                    type: "url",
                    validation: (Rule: Rule) =>
                      Rule.uri({
                        scheme: ["http", "https", "mailto", "tel"],
                      }),
                  },
                ],
              },
              {
                name: "highlight",
                type: "object",
                title: "Highlight",
                fields: [
                  {
                    name: "style",
                    title: "Style",
                    type: "string",
                    options: {
                      list: [
                        { title: "Yellow", value: "yellow" },
                        { title: "Green", value: "green" },
                        { title: "Blue", value: "blue" },
                        { title: "Red", value: "red" },
                      ],
                    },
                  },
                ],
              },
              {
                name: "horizontalRule",
                type: "object",
                title: "Horizontal Rule",
                fields: [
                  {
                    name: "style",
                    title: "Style",
                    type: "array",
                    of: [{ type: "block" }],
                    options: {
                      list: [
                        { title: "Dotted", value: "dotted" },
                        { title: "Dashed", value: "dashed" },
                        { title: "Solid", value: "solid" },
                        { title: "Double", value: "double" },
                        { title: "Groove", value: "groove" },
                        { title: "Ridge", value: "ridge" },
                        { title: "Inset", value: "inset" },
                        { title: "Outset", value: "outset" },
                      ],
                    },
                  },
                ],
              },
              {
                name: "internalLink",
                type: "object",
                title: "Internal link",
                fields: [
                  {
                    name: "reference",
                    title: "Reference",
                    type: "reference",
                    to: [{ type: "post" }],
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          fields: [{ type: "text", name: "alt", title: "Alt" }],
        },
        {
          type: "code",
          name: "myCodeField",
          title: "Code with all options",
          options: {
            languageAlternatives: [
              { title: "Javascript", value: "javascript" },
              { title: "HTML", value: "html" },
              { title: "CSS", value: "css" },
              { title: "TypeScript", value: "typescript" },
              { title: "Python", value: "python" }
            ],
            theme: "duotoneDark",
            withFilename: true,
          },
        },
      ],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
    },
  ],
};
