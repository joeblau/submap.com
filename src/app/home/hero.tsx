import Image from "next/image";

const Hero = () => {
  return (
    <div className="absolute right-0 top-0 h-screen w-full">
      <div className="relative hidden place-content-center place-items-center h-full flex-col bg-muted text-white lg:flex dark:border-r">
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
      </div>
    </div>
  );
};

export default Hero;
