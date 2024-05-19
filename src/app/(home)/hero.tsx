import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Hero = () => {
  return (
    <div className="absolute right-0 top-0 h-screen w-full overflow-hidden">
      <div className="relative place-content-start lg:place-content-center h-full flex-col bg-muted text-white flex dark:border-r">
        <Image
          src="/images/background.webp"
          alt="golden gate bridge"
          sizes="100%"
          fill
          style={{ objectFit: "cover" }}
          className="animate-fade"
          priority
        />
        <div className="z-5 absolute w-screen h-screen backdrop-blur-md" />
        <div className="z-10 flex flex-col items-center pt-8 lg:pt-0">
          <div className="pb-4 text-5xl font-bold text-center">Submap</div>
          <div className="pb-4 font-mono">Open-source iOS multimodal agent</div>
          <div className="pb-2 flex space-x-4">
            <HoverCard>
              <HoverCardTrigger>
                <Button asChild disabled>
                  <Link href="#"> Test Flight</Link>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="dark">
                <div className="text-sm">Coming soon...</div>
              </HoverCardContent>
            </HoverCard>
            <Button asChild>
              <Link href="https://github.com/joeblau/submap">
                <GitHubLogoIcon className="mr-2 h-4 w-4" />
                Source Code
              </Link>
            </Button>
          </div>
          <div className="w-80 -mt-4">
            <Image
              src="/images/submap.webp"
              alt="submap"
              width={1170}
              height={2532}
              style={{ objectFit: "contain" }}
              className="animate-fade"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
