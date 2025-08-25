import React, { memo, useCallback, useState, useRef, useEffect } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { GraduationCap } from "lucide-react";
import MobileNavbar from "./MobileNavbar";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const navList = [
  { name: "Home", route: "/" },
  {
    name: "FAQs",
    route: "/faqs",
  },
  { name: "Contact", route: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isHidden, setIsHidden] = useState(false);
  const navRef = useRef(null);
  const lastScrollY = useRef(0);

  useGSAP(() => {
    gsap.from("#navbar", {
      duration: 1,
      scale: 0.5,
      opacity: 0,
      yoyo: true,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHidden]);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      // Scrolling down - hide navbar
      if (!isHidden) {
        gsap.to(navRef.current, {
          y: -100,
          duration: 0.3,
          ease: "power2.out",
        });
        setIsHidden(true);
      }
    } else if (currentScrollY < lastScrollY.current) {
      // Scrolling up - show navbar
      if (isHidden) {
        gsap.to(navRef.current, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        setIsHidden(false);
      }
    }

    lastScrollY.current = currentScrollY;
  };

  const handleClick = useCallback((to) => {
    navigate(to);
  }, []);

  return (
    <nav
      className={cn(
        "sticky m-auto top-4.5 px-5 rounded-full  z-40 w-[90%] bg-[#7033ff]/20 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow border-2 border-[#7033ff]/30"
      )}
      id="navbar"
      ref={navRef}
    >
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-2 items-center text-xl font-bold">
          <GraduationCap className="h-6 w-6" />
          <span>Alt Techonology</span>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-6">
            {navList?.map((singleNav) => {
              return (
                <a
                  key={singleNav?.name}
                  className="text-sm font-medium hover:text-primary cursor-pointer"
                  onClick={() => handleClick(singleNav?.route)}
                >
                  {singleNav?.name}
                </a>
              );
            })}
          </nav>

          {/* Mobile Navigation - Hamburger Menu */}
          <MobileNavbar
            navList={navList}
            loginNavigate={null}
            pathname={location.pathname}
            handleClick2={handleClick}
          />
        </div>
      </div>
    </nav>
  );
};

export default memo(Header);
