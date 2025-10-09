import { defineField, defineType } from "sanity";

export const game = defineType({
  name: "game",
  title: "Game",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      type: "date",
    }),
    defineField({
      name: "desc",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "trailer",
      title: "Trailer Video",
      type: "file",
      options: {
        accept: "video/*",
      },
    }),
    defineField({
      name: "photo_cover",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "photo_previews",
      title: "Photo Previews",
      type: "array",
      of: [{ type: "image" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "photo_cover",
    },
  },
});
