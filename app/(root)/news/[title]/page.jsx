import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import PortableTextRenderer from "@/components/PortableTextRenderer";
import ResponsiveImage from "@/components/ResponsiveImage";
import FloatUp from "@/components/FloatUp";
import { ParallaxProviders } from "@/app/ParallaxProviders";

const query = `*[_type == "news" && slug.current == $slug][0]{
  _id,
  title,
  date,
  "slug": slug.current,
  photo_cover,
  video_trailer,
  sections[] {
    section_title,
    contents,
    section_photos[]
  }
}`;

const page = async ({ params }) => {
  const slug = await params.title;
  const data = await client.fetch(query, { slug });

  if (!data) {
    return <div>News not found</div>;
  }

  const publishedDate = data.date
    ? new Date(data.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  return (
    <ParallaxProviders>
      <section id="news">
        <div className="news-title">
          <p>{publishedDate}</p>
          <h1>{data.title}</h1>

          {data.photo_cover && (
            <div>
              <ResponsiveImage
                src={urlFor(data.photo_cover).auto("format").url()}
                parallaxSpeed={-10}
                className="size-full"
              />
            </div>
          )}
        </div>
        <div className="news-content">
          {data.sections?.map((section, idx) => (
            <article key={idx} className="mb-8">
              {section.section_title && <h5>{section.section_title}</h5>}

              {section.contents && (
                <PortableTextRenderer value={section.contents} />
              )}

              {section.section_photos?.length > 0 && (
                <div className="mt-4 grid gap-4">
                  {section.section_photos.map((img, i) => {
                    // urlFor expects an image object or reference
                    const src = urlFor(img).auto("format").url();
                    return (
                      <div key={i}>
                        <ResponsiveImage
                          src={src}
                          parallaxSpeed={-5}
                          className="size-full"
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </article>
          ))}

          {/* Example of Additional Highlights if you want them in a single section:
              Create a section with title "Additional Highlights" and its contents
              as Portable Text with a list inside Studio. */}
        </div>
      </section>
    </ParallaxProviders>
  );
};

export default page;
