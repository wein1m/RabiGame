import { ParallaxProviders } from "@/app/ParallaxProviders";
import FloatUp from "@/components/FloatUp";
import ResponsiveImage from "@/components/ResponsiveImage";

const page = async ({ params }) => {
  const { title } = await params;

  return (
    <ParallaxProviders>
      <section id="news">
        <div className="news-title">
          <p>Jul 4, 2025</p>
          <h1>AC Shadows Title Update 1.0.7</h1>
          <div>
            <ResponsiveImage
              src="/images/news/assassinCreed_update.png"
              parallaxSpeed={-10}
              className="size-full"
            />
          </div>
        </div>
        <div className="news-content">
          <h5>New Game+ is coming to Assassin's Creed Shadows!</h5>
          <p>
            Upon completing the main story on any difficulty, start a new game
            while keeping all collected skills, gear, Allies and hideout
            progression from your first playthrough. You can start a New Game+
            playthrough from the Memory Menu in the Animus after finishing all
            journeys of Naoe, Yasuke and Junjiro.
          </p>
          <p>
            Upon completing a New Game+ playthrough you'll be awarded Whisper of
            Gold, and Dragon's Gold! Brand new gold plated Legendary Long Katana
            and Legendary Katana with their own unique perk engravings.
          </p>
          <p>
            Take your journey through Feudal Japan to the next level as many
            times as you want... or at least up to 8 times with New Game+! With
            each new venture into New Game+, face stronger foes, more demanding
            challenges, and tests of your Shinobi and Samurai skills.
          </p>
          <div>
            <ResponsiveImage
              src="/images/news/ac_shadow/newGamePlus.avif"
              parallaxSpeed={-5}
              className="size-full"
            />
          </div>

          <h5>Knowledge Rank & Level Cap Increase</h5>
          <p>
            Prepare to push beyond your limits! We've raised the level cap from
            60 to 80, meaning tougher foes with enhanced tactics and awareness -
            demanding sharper reflexes and smarter strategies.
          </p>
          <p>
            To meet this rising threat, we've also expanded the Knowledge Rank
            system to 9 & 10 allowing players to unlock and develop a broader
            array of skills, passives, and combat techniques to become even more
            masterful.
          </p>
          <p>
            New Game+ awaits! But before taking on the task of a new journey,
            you can upgrade the passives and skills of Naoe and Yasuke! Players
            will gain 1 new rank for multiple nodes in their Mastery Skills, and
            10 new ranks for all existing Knowledge passives to become even more
            formidable.
          </p>
          <p>
            A test of your skills is no match without the right gear! The Forge
            can now be upgraded to level 4, allowing players to upgrade all
            weapons and gear to level 80 to have the edge on the rising threats
            that await.
          </p>
          <div>
            <ResponsiveImage
              src="/images/news/ac_shadow/LevelCapIncreased.avif"
              parallaxSpeed={-5}
              className="size-full"
            />
          </div>

          <h5>Additional Highlights</h5>
          <ul>
            <li>
              Removed a performance warning on MacBook Air when using M4
              following improved support.
            </li>
            <li>
              Fixed an error in Photo Mode where the "Show UI" prompt was
              visible in preview mode, affecting players taking screenshots with
              their native systems.
            </li>
            <li>
              Individual items will now have their dedicated page within the
              store.
            </li>
            <li>
              Katsuhime no longer vanishes from the hideout after the previous
              1.0.5 fix for the breakup bug.
            </li>
          </ul>
        </div>
      </section>
    </ParallaxProviders>
  );
};

export default page;
