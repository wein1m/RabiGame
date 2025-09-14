import Arrow from "@/components/Arrow";
import { newsPosters } from "@/utils/constants";

// I HATE EVERYTHING IN THIS SECTION, FUTURE ME... PLS.. FIX IT.

const News = () => {
  return (
    <div className="py-48 px-[8.5rem]">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-neueMachina-bold text-[11rem]">News</h1>
      </div>
      <div className="flex flex-row gap-10">
        {newsPosters.map((news, index) => (
          <div data-news-poster className="w-1/3 flex flex-col gap-2" key={index}>
            <div className="rounded-3xl">
              <img
                src={news.src}
                alt={news.alt}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
            <div className="w-full h-full flex items-center">
              <h3 className="font-neueMachina-bold text-3xl">{news.title}</h3>
              <div className="mx-2 aspect-square">
                <Arrow active={true} className="p-2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
