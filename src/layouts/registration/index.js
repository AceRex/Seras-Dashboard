// Material Dashboard 2 React components
import { Card, Grid } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import { columns, rows } from "./data";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

function Registration() {
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

export default Registration;
