import Home from "./views/pages/Home";
import TeamSection from "./views/pages/Team";

const allRoutesMapper = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/team",
    component: <TeamSection />,
  },

  //   {
  //     path: "*",
  //     component: <NotFound />,
  //   },
];

export default allRoutesMapper;
