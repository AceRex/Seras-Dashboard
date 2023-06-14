import { Checkbox, Icon, IconButton } from "@mui/material";
import MDBadge from "components/MDBadge";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

export const columns = [
  { Header: " ", accessor: "select", width: "10%", align: "center" },
  { Header: "ID", accessor: "id", width: "10%", align: "center" },
  { Header: "Last edited", accessor: "last_edited", width: "10%", align: "center" },
  { Header: "Registrant", accessor: "registrant", width: "20%", align: "center" },
  { Header: "Name", accessor: "name", width: "20%", align: "center" },
  { Header: "Category", accessor: "category", width: "20%", align: "center" },
  { Header: "Status", accessor: "status", width: "5%", align: "center" },
  { Header: "Result", accessor: "result", width: "5%", align: "center" },
  { Header: "Rounds", accessor: "rounds", width: "5%", align: "center" },
  { Header: "Tags", accessor: "tags", width: "1%", align: "center" },
  { Header: "Action", accessor: "action", width: "1%", align: "center" },
];

export const rows = [
  {
    select: <Checkbox />,
    id: "090922282",
    last_edited: "10 Jun",
    registrant: "Are Oluwasegun Johnson",
    name: "Oluwasegun",
    category: "Best Company",
    status: <MDBadge badgeContent="not paid" color="warning" />,
    result: "77",
    rounds: "4",
    tags: "something",
    action: (
      <IconButton
        size="small"
        centerRipple
        color="inherit"
        // sx={navbarMobileMenu}
        // onClick={handleMiniSidenav}
      >
        <Icon
          // sx={iconsStyle}
          fontSize="small"
        >
          more_vert
          {/* {miniSidenav ? "menu_open" : "menu"} */}
        </Icon>
      </IconButton>
    ),
  },
  {
    select: <Checkbox />,
    id: "090922282",
    last_edited: "10 Jun",
    registrant: "Are Oluwasegun Johnson",
    name: "Oluwasegun",
    category: "Best Company",
    status: <MDBadge badgeContent="not paid" color="warning" />,
    result: "77",
    rounds: "4",
    tags: "something",
    action: (
      <IconButton
        size="small"
        centerRipple
        color="inherit"
        // sx={navbarMobileMenu}
        // onClick={handleMiniSidenav}
      >
        <Icon
          // sx={iconsStyle}
          fontSize="small"
        >
          more_vert
          {/* {miniSidenav ? "menu_open" : "menu"} */}
        </Icon>
      </IconButton>
    ),
  },
];

export const statues = ["Draft", "Submitted", "Approved", "Rejected", "Resubmission Required"];

export const categories = [
  "Best Company",
  "Best Team",
  "Innovation of the year",
  "Person of the year",
  "People's choice award",
];

export const rounds = ["Public voting", "Judging"];

export const tags = [
  "Finalist",
  "Gold Award",
  "People's choice award",
  "Silver Award",
  "Bronze Award",
];
