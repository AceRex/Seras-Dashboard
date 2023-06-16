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
    icon: <Icon fontSize="small">Application</Icon>,
    route: "/application",
    component: <Application />,
  },
  {
    type: "nested",
    name: "Evaluation",
    key: "evaluation",
    icon: <Icon fontSize="small">Evaluation</Icon>,
    route: "/notifications",
    component: <Evaluation />,
    children: [
      { name: "round", key: "round", title: "Round", href: "#" },
      { name: "judges", key: "judges", title: "Judges", href: "#" },
      { name: "votes", key: "votes", title: "Votes", href: "#" },
      { name: "Results", key: "Results", title: "Results", href: "#" },
    ],
  },
  {
    type: "nested",
    name: "Website",
    key: "Website",
    icon: <Icon fontSize="small">Website</Icon>,
    route: "/website",
    component: <Website />,
    children: [
      { name: "branding", key: "branding", title: "Branding", href: "#" },
      { name: "webpage", key: "webpage", title: "Webpage", href: "#" },
      { name: "embedcode", key: "embedcode", title: "Embed code", href: "#" },
      { name: "applicantPortal", key: "applicantPortal", title: "Applicant Portal", href: "#" },
      { name: "judgingPortal", key: "judgingPortal", title: "Judging Portal", href: "#" },
      {
        name: "publicVotingPortal",
        key: "publicVotingPortal",
        title: "publicVotingPortal",
        href: "#",
      },
      { name: "applicationPage", key: "applicationPage", title: "applicationPage", href: "#" },
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
    icon: <Icon fontSize="small">Emails</Icon>,
    route: "/emails",
    component: <Emails />,
  },
  {
    type: "collapse",
    name: "Data",
    key: "data",
    icon: <Icon fontSize="small">Data</Icon>,
    route: "/data",
    component: <Data />,
  },
  {
    type: "collapse",
    name: "Settings",
    key: "settings",
    icon: <Icon fontSize="small">Settings</Icon>,
    route: "/settings",
    component: <Settings />,
  },
];

export default routes;
