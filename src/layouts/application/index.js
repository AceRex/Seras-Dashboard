// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { columns, rows } from "./data";
import MDButton from "components/MDButton";
import { Card, Icon } from "@mui/material";
import DataTable from "examples/Tables/DataTable";

function Application() {
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
                table={{ columns, rows }}
                isSorted={false}
                entriesPerPage={false}
                showTotalEntries={false}
              />
            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

export default Application;
