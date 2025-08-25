import React, { memo } from "react";
import { Star, Quote, Building, CheckCircle, Heart, Award } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import getInitials from "@/helpers/get-initials";

const ReviewCard = memo(({ review, isActive, onClick, src }) => {
  return (
    <div
      className={`transition-all duration-500 cursor-pointer ${
        isActive
          ? "scale-105 opacity-100 transform translate-y-0"
          : "scale-95 opacity-70 hover:opacity-90 hover:scale-100"
      }`}
      onClick={onClick}
    >
      <div
        className={`relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-500 ${
          isActive
            ? "bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-white/30 shadow-2xl"
            : "bg-white/10 border-white/10 hover:border-white/20"
        }`}
      >
        {/* Quote Icon */}
        <div className="absolute -top-4 left-8">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <Quote className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-4 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-gray-200 text-lg leading-relaxed mb-6 italic">
          "{review.text}"
        </p>

        {/* Client Info */}
        <div className="flex items-center gap-4">
          {/* <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div> */}
          <Avatar className="size-10">
            <AvatarImage src={src} />
            <AvatarFallback
              className={"text-purple-400 bg-black tracking-widest"}
            >
              {getInitials(review.name)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="text-white font-semibold text-lg">{review.name}</h4>
            <p className="text-blue-200 text-sm flex items-center gap-2">
              <Building className="w-4 h-4" />
              {review.company} • {review.role}
            </p>
          </div>
        </div>

        {/* Project Tag */}
        <div className="mt-4">
          <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-blue-200 border border-white/20">
            {review.project}
          </span>
        </div>
      </div>
    </div>
  );
});

const StatCard = memo(({ icon: Icon, number, label, color }) => {
  return (
    <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
      <Icon
        className={`w-8 h-8 ${color} mx-auto mb-3 transition-transform duration-300 group-hover:scale-110`}
      />
      <div className="text-3xl font-bold text-white mb-2">{number}</div>
      <div className="text-gray-300 text-sm">{label}</div>
    </div>
  );
});

const ClientReviewsSection = () => {
  const reviews = [
    {
      name: "Istiyana Lamba",
      image: null,
      company: "EduExcellenceTutorial",
      role: "Teacher",
      text: "Collaborating with ALT Technology, led by Shahid, has been a transformative experience for EduExcellenceTutorial. Tasks that previously required extensive manual effort, such as class scheduling, progress-tracking, and etc.., are now seamlessly automated. The platform is stable, user-friendly, and scalable. I truly appreciate the professionalism, innovative approach, and commitment demonstrated throughout the project.",
      project: "EduExcellenceTutorial Online  Platform",
    },

    {
      name: "Shaik Murad",
      image:
        "https://xperiencewave.com/wp-content/uploads/2025/07/Edit-6-1-scaled-1-1024x1024.jpeg",
      company: "XperienceWave",
      role: "Co-founder",
      text: "Working with Shahid on our automation workflows has been extremely impactful for XperienceWave. By implementing Pabbly Connect integrations, he successfully automated several processes, including payment tracking, email notifications, adding user data to Excel sheets, and sending timely reminders. These automations have significantly reduced manual effort, improved accuracy. The solution was seamless, and we are very satisfied with the results.",
      project: "Business Process Automations (Pabbly Connect)",
    },
    {
      name: "Mohammed Gouse",
      company: "Bellary Infotech",
      image: null,
      role: "Founder",
      text: "We collaborated with Shahid from ALT Technology for our website hosting and deployment requirements, and the experience was seamless. He set up our domain configuration, managed server hosting, and deployed the project efficiently using Nginx. Thanks to his expertise, our website is stable, secure, and easily accessible for our customers. The entire process was executed professionally and with great attention to detail.",
      project: "Website Hosting, Domain  & Deployment",
    },
  ];

  return (
    <section className="relative py-20 ">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from the businesses we've
            helped transform with innovative technology solutions
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <StatCard
            icon={CheckCircle}
            number="100%"
            label="Client Satisfaction"
            color="text-green-400"
          />
          <StatCard
            icon={Star}
            number="5.0"
            label="Average Rating"
            color="text-yellow-400"
          />
          <StatCard
            icon={Heart}
            number="50+"
            label="Happy Clients"
            color="text-red-400"
          />
          <StatCard
            icon={Award}
            number="98%"
            label="Project Success Rate"
            color="text-purple-400"
          />
        </div>

        {/* All Reviews Grid (Preview) */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            More Client{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 6).map((review, index) => (
              <ReviewCard
                key={index}
                review={review}
                isActive={false}
                onClick={() => setActiveReview(index)}
                src={review.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ClientReviewsSection);
