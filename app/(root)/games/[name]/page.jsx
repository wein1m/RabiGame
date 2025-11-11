import { client } from "@/sanity/lib/client";
import { ParallaxProviders } from "@/app/ParallaxProviders";
import ParallaxImage from "@/components/ParallaxImage";
import Grid from "@/components/Grid/Grid";
import { urlFor } from "@/sanity/lib/image";
import ScrollVelocity from "@/components/ScrollVelocity";
import ResponsiveVideo from "@/components/ResponsiveVideo";
import ResponsiveImage from "@/components/ResponsiveImage";

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
      <div className="lg:pt-56 pt-32">
        <div className="lg:px-72 px-10 flex flex-col lg:flex-row w-full items-start gap-4 lg:gap-10">
          <h3 className="w-[20%] text-xl font-neueMachina-bold flex flex-row items-center gap-3">
            <div className="rounded-full bg-text-primary size-3 p-0" />
            {releasedYear}
          </h3>
          <h1 className="text-5xl lg:text-[11rem] lg:leading-40 font-neueMachina-bold">
            {data.title}
          </h1>
        </div>

        <div
          className="lg:w-[1760px] overflow-hidden relative my-12 lg:my-24 bg-secondary/80"
          data-big-blob
        >
          <ResponsiveVideo src={data.trailer?.asset?.url} />
        </div>

        <div className="px-4 lg:px-72 flex flex-col lg:flex-row gap-4 lg:gap-0 w-full items-start">
          <h3 className="w-[20%] text-xl text-secondary font-neueMachina-bold flex flex-row items-center gap-3">
            <div className="hidden lg:block rounded-full bg-secondary size-3" />
            About
          </h3>
          <p className="font-hk-grotesk font-medium text-base lg:text-2xl text-text-primary max-w-3xl text-left lg:text-justify">
            {data.desc}
          </p>
        </div>

        <div className="w-full flex-col">
          <div className="relative mb-32 lg:mb-96">
            <div className="block lg:hidden absolute -z-30 mt-10 lg:mt-52">
              <Grid cols={6} rows={3} size="4rem" />
            </div>
            <div className="lg:block hidden absolute -z-30 mt-10 lg:mt-52">
              <Grid rows={6} cols={16} size="7.485rem" />
            </div>
            <div
              className="max-w-[1440px] overflow-hidden my-24 mx-auto"
              data-big-blob
            >
              <div className="block lg:hidden mx-auto object-cover w-[300px] h-[200px]">
                <ResponsiveImage
                  src={data.photo_cover?.asset?.url}
                  isImage={true}
                  parallaxSpeed={-8}
                  className="size-full object-center"
                />
              </div>
              <div className="hidden lg:block">
                <ResponsiveImage
                  src={data.photo_cover?.asset?.url}
                  isImage={true}
                  parallaxSpeed={-8}
                  className="size-full object-center"
                />
              </div>
            </div>
          </div>

          <h3 className="font-neueMachina-bold text-5xl lg:text-9xl text-center mb-14">
            Previews
          </h3>
          <div className="max-w-screen px-4 lg:px-32 flex flex-col items-center lg:grid grid-cols-2 gap-10 ">
            {data.photo_previews?.length > 0 ? (
              data.photo_previews.map((img, i) => {
                const src = urlFor(img).auto("format").url();
                return (
                  <div
                    className="overflow-hidden w-[350px] h-[250px] lg:w-full lg:h-full"
                    key={i}
                    data-big-blob
                  >
                    <ResponsiveImage
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

      <div className="mt-32 lg:mt-52 -rotate-3">
        <ScrollVelocity
          texts={["✦ RABIGAMES ✦"]}
          className="my-2 stroke-text"
          direction="right"
        />
      </div>
    </ParallaxProviders>
  );
};

export default page;
