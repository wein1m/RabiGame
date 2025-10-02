import { ParallaxProviders } from "@/app/ParallaxProviders";
import Grid from "@/components/Grid/Grid";
import ParallaxImage from "@/components/ParallaxImage";

const page = async ({ params }) => {
  const { name } = await params;

  // return <div className="bg-red-500 text-3xl text-white">name: {name}</div>;
  return (
    <ParallaxProviders>
      <div className="pt-56">
        <div className="px-72 flex flex-row w-full items-start gap-10">
          <h3 className="w-[20%] text-xl font-neueMachina-bold flex flex-row items-center gap-3">
            <div className="rounded-full bg-text-primary size-3" />
            2025
          </h3>
          <h1 className="text-[11rem] leading-40 font-neueMachina-bold">
            Battlefield 6
          </h1>
        </div>

        <div className="max-w-[1760px] overflow-hidden relative my-24 bg-secondary/80">
          <ParallaxImage
            src="/videos/trailer_battlefield6_2.mp4"
            isImage={false}
          />
        </div>

        <div className="px-72 flex flex-row w-full items-start">
          <h3 className="w-[20%] text-xl text-secondary font-neueMachina-bold flex flex-row items-center gap-3">
            <div className="rounded-full bg-secondary size-3" />
            About
          </h3>
          <p className="font-hk-grotesk font-medium text-2xl text-text-primary max-w-3xl text-justify">
            The ultimate all-out warfare experience. Fight in high-intensity
            infantry combat. Rip through the skies in aerial dogfights. Demolish
            your environment for a strategic advantage. Harness complete control
            over every action and movement using the Kinesthetic Combat System.
            In a war of tanks, fighter jets, and massive combat arsenals, the
            deadliest weapon is your squad. This is Battlefield 6.
          </p>
        </div>

        <div className="w-full flex-col">
          <div className="relative mb-96">
            <div className="absolute -z-30 mt-52">
              <Grid rows={6} cols={16} size="7.485rem" />
            </div>
            <div className="max-w-[1440px] overflow-hidden my-24 mx-auto">
              <ParallaxImage
                src="/images/battlefield/battlefield-6-all-out-warfare-16x9.avif"
                isImage={true}
                parallaxSpeed={-8}
              />
            </div>
          </div>

          <h3 className="font-neueMachina-bold text-9xl text-center mb-14">Previews</h3>

          <div className="max-w-screen px-32 grid grid-cols-2 gap-10 ">
            <ParallaxImage
              src="/images/battlefield/battlefield6-preview1.jpg"
              isImage={true}
              parallaxSpeed={1}
            />
            <ParallaxImage
              src="/images/battlefield/battlefield6-preview2.jpg"
              isImage={true}
              parallaxSpeed={1}
            />
            <ParallaxImage
              src="/images/battlefield/battlefield6-preview4.jpg"
              isImage={true}
              parallaxSpeed={1}
            />
            <ParallaxImage
              src="/images/battlefield/battlefield6-preview3.jpg"
              isImage={true}
              parallaxSpeed={1}
            />
          </div>
          {/* <div className="flex flex-col w-full gap-40 justify-between px-28">
            <div className="flex flex-row w-full justify-between">
              <ParallaxImage
                src="/images/battlefield/battlefield6-preview1.jpg"
                isImage={true}
                parallaxSpeed={1}
                className="w-[50rem] h-[50rem]"
              />
              <ParallaxImage
                src="/images/battlefield/battlefield6-preview2.jpg"
                isImage={true}
                parallaxSpeed={1}
                className="object-left w-[50rem] h-[40rem]"
              />
            </div>

            <div className="flex flex-row w-full justify-between">
              <ParallaxImage
                src="/images/battlefield/battlefield6-preview4.jpg"
                isImage={true}
                parallaxSpeed={1}
                className="w-[55rem] h-[60rem]"
              />
              <ParallaxImage
                src="/images/battlefield/battlefield6-preview3.jpg"
                isImage={true}
                parallaxSpeed={1}
                className="w-[50rem] h-[50rem] -mt-32"
              />
            </div>
          </div> */}

          {/* <div className="max-w-[1080px] overflow-hidden my-24 mx-auto">
              <ParallaxImage
                src="/images/battlefield/battlefield6-preview1.jpg"
                isImage={true}
                parallaxSpeed={-8}
                className={"my-32"}
              />
              <ParallaxImage
                src="/images/battlefield/battlefield6-preview2.jpg"
                isImage={true}
                parallaxSpeed={-8}
                className={"my-32"}
              />
              <ParallaxImage
                src="/images/battlefield/battlefield6-preview3.jpg"
                isImage={true}
                parallaxSpeed={-8}
                className={"my-32"}
              />
              <ParallaxImage
                src="/images/battlefield/battlefield6-preview4.jpg"
                isImage={true}
                parallaxSpeed={-8}
                className={"my-32"}
              />
          </div> */}

          <div className="max-w-[1760px] overflow-hidden my-24 mx-auto"></div>
        </div>
      </div>
    </ParallaxProviders>
  );
};

export default page;
