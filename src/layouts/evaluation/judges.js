// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
function Judges() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <p>Hello</p>
      </MDBox>
    </DashboardLayout>
  );
}

export default Judges;
