import { client } from "@/sanity/lib/client";
import { ParallaxProviders } from "@/app/ParallaxProviders";
import ParallaxImage from "@/components/ParallaxImage";
import Grid from "@/components/Grid/Grid";
import { urlFor } from "@/sanity/lib/image";

const query = `*[_type == "game" && slug.current == $slug][0]{
  _id,
  title,
  date,
  desc,
  "slug": slug.current,
  trailer { asset->{_id, url, mimeType} },
  photo_cover { asset->{url, _id, mimeType} },
  photo_previews[] {
    asset->{_id, url, mimeType}
  }
}`;

const page = async ({ params }) => {
  const slug = params?.name ?? params?.title;
  const data = await client.fetch(query, { slug });

  if (!data) {
    return <div>Game Not Found.</div>;
  }

  const releasedYear = data.date ? new Date(data.date).getFullYear() : "";

  return (
    <ParallaxProviders>
      <div className="pt-56">
        <div className="px-72 flex flex-row w-full items-start gap-10">
          <h3 className="w-[20%] text-xl font-neueMachina-bold flex flex-row items-center gap-3">
            <div className="rounded-full bg-text-primary size-3" />
            {releasedYear}
          </h3>
          <h1 className="text-[11rem] leading-40 font-neueMachina-bold">
            {data.title}
          </h1>
        </div>

        <div className="max-w-[1760px] overflow-hidden relative my-24 bg-secondary/80">
          <ParallaxImage src={data.trailer?.asset?.url} isImage={false} />
        </div>

        <div className="px-72 flex flex-row w-full items-start">
          <h3 className="w-[20%] text-xl text-secondary font-neueMachina-bold flex flex-row items-center gap-3">
            <div className="rounded-full bg-secondary size-3" />
            About
          </h3>
          <p className="font-hk-grotesk font-medium text-2xl text-text-primary max-w-3xl text-justify">
            {data.desc}
          </p>
        </div>

        <div className="w-full flex-col">
          <div className="relative mb-96">
            <div className="absolute -z-30 mt-52">
              <Grid rows={6} cols={16} size="7.485rem" />
            </div>
            <div className="max-w-[1440px] overflow-hidden my-24 mx-auto">
              <ParallaxImage
                src={data.photo_cover?.asset?.url}
                isImage={true}
                parallaxSpeed={-8}
                className="size-full"
              />
            </div>
          </div>

          <h3 className="font-neueMachina-bold text-9xl text-center mb-14">
            Previews
          </h3>
          <div className="max-w-screen px-32 grid grid-cols-2 gap-10 ">
            {data.photo_previews?.length > 0 ? (
              data.photo_previews.map((img, i) => {
                const src = urlFor(img).auto("format").url();
                return (
                  <div className="overflow-hidden" key={i}>
                    <ParallaxImage
                      src={src}
                      isImage={true}
                      parallaxSpeed={-4}
                      className="size-full"
                    />
                  </div>
                );
              })
            ) : (
              <div className="col-span-2 text-center p-8">
                No previews uploaded
              </div>
            )}
          </div>
        </div>
      </div>
    </ParallaxProviders>
  );
};

export default page;
