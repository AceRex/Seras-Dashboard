// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import ListCard from "components/ListCard";

const Registration = [
  { itemTitle: "Total Registration", item: 5, link: "/registration" },
  { itemTitle: "Total Amount", item: 1900, link: "#" },
  { itemTitle: "Due Amount", item: 1900, link: "#" },
  { itemTitle: "Paid Amount", item: 0, link: "#" },
];

const Applications = [
  { itemTitle: "Total Applications", item: 20, link: "/application" },
  { itemTitle: "Draft", item: 20, link: "#" },
  { itemTitle: "Submitted", item: 0, link: "#" },
  { itemTitle: "Approved", item: 0, link: "#" },
  { itemTitle: "Rejected", item: 0, link: "#" },
  { itemTitle: "Judging", item: 0, link: "#" },
  { itemTitle: "Publice Voting", item: 0, link: "#" },
];

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid container spacing={1} style={{ marginTop: "2rem" }}>
        <Grid item xs={12} md={6} xl={3}>
          <ComplexStatisticsCard
            color="info"
            icon="add_home_work"
            count="Registration"
            percentage={{ color: "info", label: "In Active" }}
          />
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <ComplexStatisticsCard
            color="info"
            icon="app_registration"
            count="Application"
            percentage={{ color: "info", label: "In Active" }}
          />
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <ComplexStatisticsCard
            color="warning"
            icon="gavel"
            count="Judging"
            percentage={{ color: "warning", label: "In Progress" }}
          />
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <ComplexStatisticsCard
            color="warning"
            icon="how_to_vote"
            count="Public Voting"
            percentage={{ color: "warning", label: "In Progress" }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginTop: "2rem" }}>
        <Grid item xs={12} md={6}>
          <ListCard title="Registration" bigTitle="5" items={Registration} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ListCard title="Applications" bigTitle="20" items={Applications} />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

export default Dashboard;
