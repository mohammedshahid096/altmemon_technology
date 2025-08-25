import React, { memo, useState } from "react";
import {
  Globe,
  Smartphone,
  Monitor,
  Cloud,
  Code,
  Palette,
  Database,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";
import SpotlightCard from "@/components/react-bits/SpotlightCard";

const services = [
  {
    icon: Globe,
    title: "MERN Stack Development",
    description:
      "Full-stack web applications using MongoDB, Express.js, React, and Node.js. We create scalable, modern web solutions with seamless user experiences.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Redux",
      "TypeScript",
    ],
    gradient: "from-blue-900/50 to-cyan-900/50",
    delay: 100,
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native Android apps and cross-platform solutions using React Native. From concept to deployment, we build mobile experiences that users love.",
    technologies: [
      "React Native",
      "Android",
      "Kotlin",
      "Java",
      "Flutter",
      "Firebase",
    ],
    gradient: "from-purple-900/50 to-pink-900/50",
    delay: 200,
  },
  {
    icon: Monitor,
    title: "Desktop Applications",
    description:
      "Powerful desktop applications for Windows, macOS, and Linux. Built with modern frameworks for optimal performance and user experience.",
    technologies: ["Electron", "Tauri", ".NET", "PyQt", "JavaFX", "C++"],
    gradient: "from-green-900/50 to-emerald-900/50",
    delay: 300,
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & DevOps",
    description:
      "Scalable cloud infrastructure, CI/CD pipelines, and deployment automation. We help you leverage the power of cloud computing.",
    technologies: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Terraform",
      "Jenkins",
    ],
    gradient: "from-orange-900/50 to-red-900/50",
    delay: 400,
  },
  {
    icon: Database,
    title: "Database Design & Management",
    description:
      "Robust database architectures and data management solutions. From SQL to NoSQL, we optimize your data layer for performance.",
    technologies: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Elasticsearch",
      "GraphQL",
    ],
    gradient: "from-indigo-900/50 to-blue-900/50",
    delay: 500,
  },
  {
    icon: Palette,
    title: "UI/UX Design & Development",
    description:
      "Beautiful, intuitive interfaces that convert. We combine aesthetic design with user psychology for maximum impact.",
    technologies: [
      "Figma",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Material-UI",
      "Chakra UI",
    ],
    gradient: "from-yellow-900/50 to-lime-900/50",
    delay: 600,
  },
];

const ServiceCard2 = ({
  icon: Icon,
  title,
  description,
  technologies,
  gradient,
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative p-8 rounded-2xl bg-gradient-to-br ${gradient} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className={`w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 transition-transform duration-300 ${
            isHovered ? "scale-110 rotate-3" : ""
          }`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-blue-200 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Learn More Button */}
        <button className="group/btn flex items-center gap-2 text-white font-semibold hover:text-blue-200 transition-colors duration-300">
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

const ServiceComponent = () => {
  return (
    <div className="mb-3">
      <div className="relative  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Services, {""}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              <br /> We Build. We Innovate. We Deliver.
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide comprehensive software
            development solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard2 key={index} {...service} />
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}

      <div className="mt-20 text-center">
        <div className=" backdrop-blur-sm  p-8 max-w-4xl mx-auto">
          <SpotlightCard
            spotlightColor="rgba(112, 51, 255, 0.3)
"
            className="cursor-pointer"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Let's discuss your project and turn your ideas into reality with
              cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Your Project
              </button>
              <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-full transition-all duration-300 backdrop-blur-sm">
                Schedule Consultation
              </button>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};

export default memo(ServiceComponent);
