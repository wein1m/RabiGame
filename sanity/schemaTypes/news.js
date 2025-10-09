import { defineType, defineField } from "sanity";

export const news = defineType({
  name: "news",
  title: "News",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "photo_cover",
      title: "Photo Cover",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        defineType({
          name: "section",
          title: "Section",
          type: "object",
          fields: [
            defineField({
              name: "section_title",
              title: "Section Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "contents",
              title: "Contents",
              type: "array",
              of: [{ type: "block" }],
            }),
            defineField({
              name: "section_photos",
              title: "Section Photos",
              type: "array",
              of: [
                {
                  type: "image",
                  options: { hotspot: true },
                },
              ],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "photo_cover",
    },
  },
});
