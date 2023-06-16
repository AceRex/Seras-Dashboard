// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import SignIn from "layouts/authentication/sign-in";
import Registration from "layouts/registration";
import Application from "layouts/application";
import Evaluation from "layouts/evaluation";
import Website from "layouts/website";
import Emails from "layouts/emails";
import Data from "layouts/data";
import Settings from "layouts/settings";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Registration",
    key: "registration",
    icon: <Icon fontSize="small">home</Icon>,
    route: "/registration",
    component: <Registration />,
  },
  {
    type: "collapse",
    name: "Application",
    key: "application",
    icon: <Icon fontSize="small">extension</Icon>,
    route: "/application",
    component: <Application />,
  },
  {
    type: "nested",
    name: "Evaluation",
    key: "evaluation",
    icon: <Icon fontSize="small">query_stats</Icon>,
    route: "/notifications",
    component: <Evaluation />,
    children: [
      { key: "round", title: "Round", href: "#" },
      { key: "judges", title: "Judges", href: "#" },
      { key: "votes", title: "Votes", href: "#" },
      { key: "Results", title: "Results", href: "#" },
    ],
  },
  {
    type: "nested",
    name: "Website",
    key: "Website",
    icon: <Icon fontSize="small">public</Icon>,
    // route: "/website",
    // component: <Website />,
    children: [
      { key: "branding", title: "Branding", route: "/", component: <Website /> },
      { key: "webpage", title: "Webpage", route: "#" },
      { key: "embedcode", title: "Embed code", route: "#" },
      { key: "applicantPortal", title: "Applicant Portal", route: "#" },
      { key: "judgingPortal", title: "Judging Portal", route: "#" },
      {
        key: "publicVotingPortal",
        title: "Public Voting Portal",
        route: "#",
      },
      { name: "applicationPage", key: "applicationPage", title: "Application Page", route: "#" },
    ],
  },
  {
    type: "d-none",
    name: "login",
    key: "sign-in",
    display: "none",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Emails",
    key: "emails",
    icon: <Icon fontSize="small">email</Icon>,
    route: "/emails",
    component: <Emails />,
  },
  {
    type: "nested",
    name: "Data",
    key: "data",
    icon: <Icon fontSize="small">bar_chart</Icon>,
    route: "/data",
    component: <Data />,
    children: [
      { key: "analytics", title: "Analytics", route: "/" },
      { key: "export", title: "Export", route: "#" },
      { key: "integrations", title: "Integrations", route: "#" },
    ],
  },
  {
    type: "nested",
    name: "Settings",
    key: "settings",
    icon: <Icon fontSize="small">settings</Icon>,
    route: "/settings",
    component: <Settings />,
    children: [
      { key: "general", title: "General", route: "/" },
      { key: "registration", title: "Registration", route: "#" },
      { key: "categories", title: "Categories", route: "#" },
      { key: "forms", title: "Forms", route: "#" },
      { key: "payments", title: "Payments", route: "#" },
      { key: "promoCodes", title: "Promo Codes", route: "#" },
      { key: "specialOffers", title: "Special Offers", route: "#" },
    ],
  },
];

export default routes;
