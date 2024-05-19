"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import { datum } from "@/lib/datum";

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
        />
        <div className="z-5 absolute w-screen h-screen backdrop-blur-md" />
        <TagCloud
          className="z-10 absolute w-screen h-screen flex justify-center items-center font-mono text-xs font-bold text-foreground mix-blend-overlay"
          options={(w: Window & typeof globalThis): any => ({
            radius: Math.min(w.innerWidth, w.innerHeight) / 1.5,
            maxSpeed: "slow",
          })}
        >
          {datum}
        </TagCloud>
        <div className="z-20 flex flex-col items-center pt-8 lg:pt-0">
          <div className="pb-4 text-5xl font-bold text-center">Submap</div>
          <div className="pb-4 font-semibold font-mono">Open-source iOS multimodal agent</div>
          <div className="pb-2 flex space-x-4">
            <Button asChild disabled>
              <Link href="#"> Test Flight</Link>
            </Button>
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
