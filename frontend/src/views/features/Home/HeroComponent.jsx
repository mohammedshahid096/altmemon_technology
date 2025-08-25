import React, { memo } from "react";
import TextType from "@/components/react-bits/TextType";
import { Button } from "@/components/ui/button";

const HeroComponent = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10 flex items-center justify-center">
      <div
        //   ref={contentRef}
        className="mx-auto max-w-3xl px-4 text-center text-white"
      >
        <h1 className=" text-5xl font-bold md:text-6xl lg:text-8xl">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            ALT Memon Techonology
          </span>{" "}
          <span className="text-white text-3xl md:text-4xl lg:text-5xl font-light">
            Software and Service
          </span>
        </h1>

        <div className="mt-6  max-w-4xl mx-auto">
          <TextType
            text={
              "Full-stack development excellence across all platforms - from dynamic web applications with  mobile apps and powerful desktop solutions"
            }
            typingSpeed={45}
            pauseDuration={1500}
            showCursor={false}
            cursorCharacter="|"
            className="text-3xl max-md:text-lg font-light tracking-wide word-spacing"
            textColors={["#e5e5e1"]}
            loop={true}
            onSentenceComplete={() => console.log("Sentence completed!")}
          />
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <Button size="lg" className="rounded-full">
            Explore More
          </Button>
          <Button
            size="lg"
            //   variant="outline"
            //   className="rounded-full border-white text-white hover:bg-white/10"
          >
            View Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroComponent);
