// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
function Results() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <p>Results</p>
      </MDBox>
    </DashboardLayout>
  );
}

export default Results;
