import { Icon, IconButton } from "@mui/material";
import MDBadge from "components/MDBadge";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

export const columns = [
  { Header: "ID", accessor: "id", width: "10%", align: "center" },
  { Header: "Date", accessor: "date", width: "10%", align: "center" },
  { Header: "Name", accessor: "name", width: "20%", align: "center" },
  { Header: "Company", accessor: "company", width: "20%", align: "center" },
  { Header: "Category", accessor: "category", width: "20%", align: "center" },
  { Header: "Applications", accessor: "applications", width: "5%", align: "center" },
  { Header: "Total USD", accessor: "total_usd", width: "5%", align: "center" },
  { Header: "Status", accessor: "status", width: "5%", align: "center" },
  { Header: "Action", accessor: "action", width: "1%", align: "center" },
];

export const rows = [
  {
    id: "090922282",
    date: "12/03/2020",
    name: "Are Oluwasegun Johnson",
    company: "something",
    category: "Best Company",
    applications: "4",
    total_usd: (
      <MDTypography variant="caption" color="text" fontWeight="medium">
        $14,000
      </MDTypography>
    ),
    status: <MDBadge badgeContent="not paid" color="warning" />,
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
    id: "090922290",
    date: "12/03/2020",
    name: "Are Oluwasegun Johnson",
    company: "something",
    category: "CEO of the year",
    applications: "4",
    total_usd: (
      <MDTypography variant="caption" color="text" fontWeight="medium">
        $14,000
      </MDTypography>
    ),
    status: <MDBadge badgeContent="paid" color="success" />,
    action: (
      <IconButton
        size="small"
        centerRipple
        color="inherit"
        // sx={navbarMobileMenu}
        onClick={handleMiniSidenav}
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
