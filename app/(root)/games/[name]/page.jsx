import React from "react";

const page = async ({ params }) => {
  const { name } = await params;
  // return <div className="bg-red-500 text-3xl text-white">name: {name}</div>;
  return (
    <div className="pt-56">
      <div className="px-72 flex flex-row w-full items-start gap-10">
        <h3 className="w-[20%] text-xl font-neueMachina-bold flex flex-row items-center gap-3">
          <div className="rounded-full bg-text-primary size-3" />
          2025
        </h3>
        <h1 className="text-[11rem] leading-40 font-neueMachina-bold">Battlefield 6</h1>
      </div>

      <div className="max-w-[1760px] overflow-hidden relative my-24">
        <video
          autoPlay
          loop
          muted
          controls={false}
          src="/videos/trailer_battlefield6.mp4"
          className="size-full object-cover"
        />
      </div>
    </div>
  );
};

export default page;
