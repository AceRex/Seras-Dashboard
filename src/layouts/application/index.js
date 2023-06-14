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
import MDInput from "components/MDInput";
import MultipleSelect from "components/MultiSelect";
import { statues, categories, rounds, tags } from "./data";

function Application() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid container spacing={2} pt={4}>
        <Card>
          <MDBox display="flex" p={1}>
            <Grid item xs={12}>
              <MDBox pr={1}>
                <MultipleSelect placeholder="All Statuses" array={statues} />
              </MDBox>
            </Grid>
            <Grid item xs={12}>
              <MDBox pr={1}>
                {" "}
                <MultipleSelect placeholder="All Categories" array={categories} />
              </MDBox>
            </Grid>
            <Grid item xs={12}>
              <MDBox pr={1}>
                {" "}
                <MultipleSelect placeholder="All rounds" array={rounds} />
              </MDBox>
            </Grid>
            <Grid item xs={12}>
              {" "}
              <MDBox pr={1}>
                <MultipleSelect placeholder="All tags" array={tags} />
              </MDBox>
            </Grid>
          </MDBox>
        </Card>
      </Grid>
      <Grid container spacing={2} pt={4}>
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
