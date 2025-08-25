import React, { memo } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const MobileNavbar = ({ navList, loginNavigate, pathname, handleClick2 }) => {
  const navigate = useNavigate();

  const handleClick = (to) => {
    navigate(to);

    // Extract hash
    const hash = to.split("#")[1];
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "instant" });
        }
      }, 100); // Small delay for navigation/render
    }
  };

  return (
    <Drawer direction="bottom" className="md:hidden">
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[50vh] bg-black text-white">
        <DrawerTitle className="hidden">Menu</DrawerTitle>
        <div className="mt-4 flex flex-col items-center justify-center space-y-4">
          {navList?.map((singleNav) => {
            return (
              <DrawerClose asChild>
                <a
                  key={singleNav?.name}
                  //  to={singleNav?.route}
                  className="text-lg font-medium hover:text-primary"
                  onClick={() => handleClick2(singleNav?.route)}
                >
                  {singleNav?.name}
                </a>
              </DrawerClose>
            );
          })}

          {/* <DrawerClose asChild>
            <Button className="text-lg font-medium" onClick={loginNavigate}>
              Login
            </Button>
          </DrawerClose> */}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default memo(MobileNavbar);
