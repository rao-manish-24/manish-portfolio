import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Senior Software Engineer with 5+ years&apos; experience</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br /> <span className="text-accent">Manish Rao</span>
            </h1>
            <div className="max-w-[500px] mb-9 text-foreground/80 space-y-4">
              <p>I excel at crafting elegant software experiences and am proficient in various programming languages and technologies.</p>
              <p>When in doubt, I let the metrics argue.</p>
              <p>I&apos;d tell you a joke about UDP, but you might not get it.</p>
            </div>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                asChild
              >
                <a href="/assets/resume/Manish_Rao_Software_Engineer_2.pdf" download="Manish_Rao_Resume.pdf">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-dark hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />

      {/* Video Section */}
      <div className="container mx-auto px-4 pt-32 pb-16 mt-20">
        <div className="max-w-[900px] mx-auto">
          <video
            src="/assets/grad-video.mp4"
            controls
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
