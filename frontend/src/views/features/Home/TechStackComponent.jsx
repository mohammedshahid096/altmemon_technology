import LogoLoop from "@/components/react-bits/LogoLoop";
import React, { memo } from "react";
import ReactImage from "@/assets/images/reactjs.png";
import NextImage from "@/assets/images/nextjs.png";
import JavascriptImage from "@/assets/images/javascript.webp";
import NodeJsImage from "@/assets/images/nodejs.png";
import ExpressJsImage from "@/assets/images/expressjs.png";
import MongoDbImage from "@/assets/images/mongodb.png";
import ReduxImage from "@/assets/images/redux.png";
import HtmlImage from "@/assets/images/html.png";
import CssImage from "@/assets/images/css.png";
import ScssImage from "@/assets/images/scss.png";
import TailwindImage from "@/assets/images/tailwind.png";
import GraphqlImage from "@/assets/images/graphql.png";
import GoogleApiImage from "@/assets/images/googleApi.png";
import RedisImage from "@/assets/images/redis.png";
import AwsImage from "@/assets/images/aws.png";
import DockerImage from "@/assets/images/docker.png";
import GlitchText from "@/components/react-bits/GlitchText";

const frontendLogos = [
  {
    src: HtmlImage,
    alt: "HTML5",
    href: "",
  },
  {
    src: CssImage,
    alt: "CSS3",
    href: "",
  },
  {
    src: JavascriptImage,
    alt: "Node.js",
    href: "",
  },
  {
    src: ReactImage,
    alt: "React.js",
    href: "",
  },
  {
    src: NextImage,
    alt: "Next.js",
    href: "",
  },
  {
    src: ReduxImage,
    alt: "Redux",
    href: "",
  },
  {
    src: ScssImage,
    alt: "Sass",
    href: "",
  },
  {
    src: TailwindImage,
    alt: "Tailwind CSS",
    href: "",
  },
];

const backendLogos = [
  {
    src: NodeJsImage,
    alt: "Node.js",
    href: "",
  },
  {
    src: ExpressJsImage,
    alt: "Express.js",
    href: "",
  },
  {
    src: MongoDbImage,
    alt: "MongoDB",
    href: "",
  },

  {
    src: GraphqlImage,
    alt: "GraphQL",
    href: "",
  },
  {
    src: GoogleApiImage,
    alt: "Google APIs",
    href: "",
  },
  {
    src: RedisImage,
    alt: "Redis",
    href: "",
  },
  {
    src: AwsImage,
    alt: "Aws",
    href: "",
  },
  {
    src: DockerImage,
    alt: "Docker",
    href: "",
  },
  {
    src: "https://www.pabbly.com/wp-content/uploads/2021/03/Connect-Logo.svg",
    alt: "Pabbly Connect",
    href: "",
  },
];

const TechStackComponent = () => {
  return (
    <div>
      <div className="mb-3 flex justify-center">
        <div>
          <GlitchText speed={1} enableShadows={true} enableOnHover={true}>
            Tech Stacks
          </GlitchText>
        </div>
      </div>
      <div className="w-[99%] m-auto bg-gradient-to-r from-green-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 cursor-pointer">
        <div className=" space-y-16">
          <LogoLoop
            logos={frontendLogos}
            speed={100}
            direction="left"
            logoHeight={100}
            gap={50}
            pauseOnHover={false}
            //   scaleOnHover
            //   fadeOut
            //   fadeOutColor="#000000"
            ariaLabel="Technology partners"
          />
          <LogoLoop
            logos={backendLogos}
            speed={100}
            direction="right"
            logoHeight={100}
            gap={50}
            pauseOnHover={false}
            //   scaleOnHover
            //   fadeOut
            //   fadeOutColor="#000000"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(TechStackComponent);
