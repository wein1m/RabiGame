import NewsPoster from "@/components/NewsPoster";
import SeeAll from "@/components/SeeAll";
import { newsPosters } from "@/utils/constants";

// I HATE EVERYTHING IN THIS SECTION, FUTURE ME... PLS.. FIX IT.

const News = () => {
  return (
    <div id="news" className="py-48 px-14">
      <div className="flex flex-row justify-between items-center px-20">
        <h1 className="font-neueMachina-bold text-[11rem]">News</h1>
        <SeeAll />
      </div>
      <div className="flex flex-row gap-2">
        {newsPosters.map((news, index) => (
          <NewsPoster
            key={index}
            src={news.src}
            alt={news.alt}
            title={news.title}
            date={news.date}
            short_desc={news.short_desc}
            className=""
          />
        ))}
      </div>
    </div>
  );
};

export default News;
