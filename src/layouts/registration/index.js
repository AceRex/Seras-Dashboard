import { Card, Grid, Icon, IconButton } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import MDButton from "components/MDButton";
import MDBadge from "components/MDBadge";
import { useMaterialUIController } from "context";
import { DateFormat } from "components/DateFormat";

function Registration() {
  const [controller, dispatch] = useMaterialUIController();
  const { user, entries } = controller;

  const columns = [
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
  const AllRegistration = entries.map((entry) => ({
    id: entry._id,
    date: DateFormat(new Date(entry.updatedAt)),
    name: entry.NameOfCEOMD,
    company: entry.NameOfBusinessOrganization,
    applications: entry.AwardEntry.length,
    total_usd: (
      <MDTypography variant="caption" color="text" fontWeight="medium">
        ${entry.total_usd}
      </MDTypography>
    ),
    status: <MDBadge badgeContent={entry.status} color="warning" />,
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
  }));

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid container spacing={6} pt={4}>
        <Grid item xs={12}>
          <Card>
            <MDBox display="flex" pl={4} pt={3}>
              <MDBox pr={1}>
                <MDButton variant="gradient" color="warning">
                  <Icon>add</Icon>&nbsp; Add Registration
                </MDButton>
              </MDBox>
              <MDBox>
                <MDButton variant="gradient" color="dark">
                  Actions &nbsp;<Icon>keyboard_arrow_down</Icon>
                </MDButton>
              </MDBox>
            </MDBox>
            <MDBox pt={3}>
              <DataTable
                table={{ columns, rows: AllRegistration }}
                isSorted={false}
                entriesPerPage={true}
                showTotalEntries={true}
              />
            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

export default Registration;
