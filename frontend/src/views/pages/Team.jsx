import React, { memo, useState } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Calendar,
  Award,
  Code,
  Users,
  Star,
  Coffee,
  Heart,
  Briefcase,
  GraduationCap,
  Zap,
  Target,
  Globe,
} from "lucide-react";
import CountUp from "@/components/react-bits/CountUp";
import SplashCursor from "@/components/react-bits/SplashCursor";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TeamMemberCard = memo(({ member, isFounder = false, delay = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`group relative bg-gradient-to-br ${member.gradient} backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {isFounder && (
        <div className="absolute top-4 right-4">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <Star className="w-3 h-3" />
            FOUNDER
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-6">
        {/* Image on the left */}
        <div className="flex-shrink-0">
          <div className="relative w-32 h-32 overflow-hidden rounded-full border-4 border-white/20 group-hover:border-white/30 transition-all duration-300 mx-auto md:mx-0">
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Avatar className={"w-full h-full"}>
                <AvatarImage
                  src={member.avatarUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <AvatarFallback
                  className="w-full h-full flex items-center justify-center bg-gray-700 text-white text-3xl font-bold"
                  delayMs={600}
                >
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Social Links below image */}
          <div className="flex justify-center md:justify-start space-x-2 mt-4">
            {member.social.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  className="p-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Content on the right */}
        <div className="flex-grow">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
            <p className="text-blue-200 text-sm font-medium mb-3">
              {member.role}
            </p>

            {/* Basic Info */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 text-gray-300 text-xs mb-3">
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{member.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                <span>{member.experience} years experience</span>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {isExpanded
                ? member.fullBio
                : `${member.shortBio.substring(0, 100)}...`}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {member.topSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-blue-200 border border-white/20"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Toggle and Contact buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="px-3 py-1.5 text-xs bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 rounded-full transition-colors duration-300"
              >
                {isExpanded ? "Show Less" : "Read More"}
              </button>
              <a
                href={`mailto:${member.email}`}
                className="px-3 py-1.5 text-xs bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-1"
              >
                <Mail className="w-3.5 h-3.5" />
                Contact
              </a>
            </div>
          </div>

          {/* Expanded Details */}
          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-white/10">
              {/* Current Role */}
              <div className="flex items-center gap-2 text-gray-300 mb-3">
                <Briefcase className="w-4 h-4 text-blue-400" />
                <span className="text-sm">{member.currentRole}</span>
              </div>

              {/* Key Achievements */}
              <div>
                <h4 className="text-white font-semibold mb-2 text-sm">
                  Key Achievements:
                </h4>
                <ul className="space-y-1">
                  {member.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="text-gray-300 text-xs flex items-start gap-2"
                    >
                      <Award className="w-3 h-3 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Mohammed Shahid",
      role: "Founder & Lead Full Stack Developer",
      currentRole: "Currently at  9X Technologies Pvt. Ltd.",
      shortBio:
        "Passionate MERN stack developer with 2+ years of experience building scalable web applications and innovative solutions.",
      fullBio:
        "A dedicated Full Stack Developer specializing in the MERN stack with extensive experience in building high-performance web applications. Currently contributing to cutting-edge projects at Huemn Interactive while founding ALT Technology to deliver exceptional software solutions.",
      topSkills: [
        "MERN Stack",
        "Node.js",
        "React",
        "MongoDB",
        "Three.js",
        "AWS",
      ],
      location: "Hyderabad, Telangana, India",
      experience: 2,
      email: "mohammedshahidnagodriya@gmail.com",
      avatarUrl:
        "https://raw.githubusercontent.com/mohammedshahid096/ShahidProtfolio/main/src/images/shahidprofile.jpg",
      achievements: [
        "Led development of serverless GraphQL API",
        "Built no-code website builder platform",
        "Created AI-powered chatbot solutions",
        "Developed facial recognition gallery system",
        "Open-sourced Mosque Management System",
      ],
      social: [
        {
          platform: "GitHub",
          icon: Github,
          url: "https://github.com/mohammedshahid096",
        },
        {
          platform: "LinkedIn",
          icon: Linkedin,
          url: "https://www.linkedin.com/in/mohammed-shahid-nagodriya-9aa61222a",
        },
        {
          platform: "Twitter",
          icon: Twitter,
          url: "https://twitter.com/yourhandle",
        },
        {
          platform: "Email",
          icon: Mail,
          url: "mailto:mohammedshahidnagodriya@gmail.com",
        },
      ],
      gradient: "from-blue-900/40 to-purple-900/40",
    },
    {
      name: "Mohammad Haneef",
      role: "Product Designer",
      currentRole: "Currently at Huemn",
      shortBio:
        "UI/UX and Product Designer with 3 years of experience creating user-centric digital products that enhance usability, clarity, and business value.",
      fullBio:
        "A results-driven Product Designer specializing in creating intuitive user experiences for B2B SaaS platforms and mobile applications. Experienced in managing design teams, conducting user research, and applying design thinking to develop clean, functional solutions aligned with real user needs. Dedicated to crafting meaningful, effective digital products that improve usability and business outcomes.",
      topSkills: [
        "User Research",
        "UX Strategies",
        "Product and UI Design",
        "Usability Testing",
      ],
      location: "Hyderabad, Telangana, India",
      experience: 3,
      email: "hnf2411@gmail.com",
      avatarUrl:
        "https://framerusercontent.com/images/KdgyH3Zf8CSKiCBOXCAQ5CpYo.jpeg?scale-down-to=2048",
      achievements: [
        "Managed and mentored a team of 4+ designers, improving workflow efficiency",
        "Designed 5+ core product modules including forms and schedulers",
        "Created secure document storage mobile app emphasizing user privacy",
        "Implemented design systems that improved development consistency",
        "Led end-to-end product design for impactful UI/UX projects",
      ],
      social: [
        {
          platform: "Portfolio",
          icon: Globe,
          url: "https://haneef.framer.ai",
        },
        {
          platform: "LinkedIn",
          icon: Linkedin,
          url: "https://www.linkedin.com/in/uiuxhaneefmohd/",
        },
        {
          platform: "Email",
          icon: Mail,
          url: "mailto:hnf2411@gmail.com",
        },
      ],
      gradient: "from-green-900/40 to-teal-900/40",
    },
    // {
    //   name: "Frontend Specialist",
    //   role: "Senior Frontend Developer",
    //   currentRole: "Joining Soon",
    //   shortBio:
    //     "Expert in React, Next.js and modern frontend technologies with focus on user experience.",
    //   fullBio:
    //     "We're looking for a talented frontend developer to join our team and help create amazing user experiences with React, Next.js, and modern frontend tooling.",
    //   topSkills: ["React", "Next.js", "TypeScript", "Tailwind"],
    //   location: "Remote",
    //   experience: 4,
    //   email: "careers@alttechnology.dev",
    //   achievements: [
    //     "Position opening soon",
    //     "Remote work available",
    //     "Competitive compensation",
    //     "Growth opportunities",
    //   ],
    //   social: [
    //     {
    //       platform: "Email",
    //       icon: Mail,
    //       url: "mailto:careers@alttechnology.dev",
    //     },
    //   ],
    //   gradient: "from-green-900/40 to-emerald-900/40",
    // },
    // {
    //   name: "Backend Engineer",
    //   role: "Senior Backend Developer",
    //   currentRole: "Position Available",
    //   shortBio:
    //     "Specializing in Node.js, databases, and cloud architecture for scalable backend systems.",
    //   fullBio:
    //     "Seeking an experienced backend developer to architect robust, scalable server-side solutions using Node.js, various databases, and cloud infrastructure.",
    //   topSkills: ["Node.js", "MongoDB", "AWS", "Docker"],
    //   location: "Remote",
    //   experience: 4,
    //   email: "careers@alttechnology.dev",
    //   achievements: [
    //     "Remote-first position",
    //     "Latest tech stack",
    //     "Flexible working hours",
    //     "Professional development",
    //   ],
    //   social: [
    //     {
    //       platform: "Email",
    //       icon: Mail,
    //       url: "mailto:careers@alttechnology.dev",
    //     },
    //   ],
    //   gradient: "from-orange-900/40 to-red-900/40",
    // },
  ];

  return (
    <section className="relative py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The passionate individuals behind ALT Technology's innovative
            solutions and exceptional client experiences
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          <div className="text-center p-4 md:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-400 mx-auto mb-2 md:mb-3" />
            <div className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
              <CountUp
                to={3}
                duration={2}
                separator=","
                className="text-white"
              />
              +
            </div>
            <div className="text-gray-300 text-xs md:text-sm">Team Members</div>
          </div>
          <div className="text-center p-4 md:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <Code className="w-6 h-6 md:w-8 md:h-8 text-green-400 mx-auto mb-2 md:mb-3" />
            <div className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
              <CountUp
                to={15}
                duration={2}
                separator=","
                className="text-white"
              />
              +
            </div>
            <div className="text-gray-300 text-xs md:text-sm">Technologies</div>
          </div>
          <div className="text-center p-4 md:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <Coffee className="w-6 h-6 md:w-8 md:h-8 text-orange-400 mx-auto mb-2 md:mb-3" />
            <div className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
              <CountUp
                to={500}
                duration={2}
                separator=","
                className="text-white"
              />
              +
            </div>
            <div className="text-gray-300 text-xs md:text-sm">Hours Coded</div>
          </div>
          <div className="text-center p-4 md:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-red-400 mx-auto mb-2 md:mb-3" />
            <div className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
              <CountUp
                to={5}
                duration={2}
                separator=","
                className="text-white"
              />
              +
            </div>
            <div className="text-gray-300 text-xs md:text-sm">
              Happy Clients
            </div>
          </div>
        </div>

        {/* Team Members List */}
        <div className="space-y-8 mb-16">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              member={member}
              isFounder={index === 0}
              delay={index * 200}
            />
          ))}
        </div>
      </div>

      {/* <SplashCursor /> */}
    </section>
  );
};

export default memo(TeamSection);
