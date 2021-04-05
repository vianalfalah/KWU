import Home from "./pages/Home/Home";
import UserP from "./pages/UserProfile/UserP";

const routes = [
  {
    path: "/home",
    exact: true,
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    exact: true,
    name: "Profile",
    component: UserP,
  },
];

export default routes;
