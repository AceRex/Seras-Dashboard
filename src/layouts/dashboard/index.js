import Grid from "@mui/material/Grid";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import ListCard from "components/ListCard";
import { useMaterialUIController, setEntries, setApplication } from "context";
import { useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [controller, dispatch] = useMaterialUIController();
  const { entries, application } = controller;

  useEffect(() => {
    axios
      .get("https://ill-colt-sundress.cyclic.app/organisation-registration")
      .then(function (response) {
        if (response) {
          const allAwardEntries = [];
          setEntries(dispatch, response.data);
          response.data.forEach((user) => {
            if (user.hasOwnProperty("AwardEntry") && Array.isArray(user.AwardEntry)) {
              allAwardEntries.push(...user.AwardEntry);
            }
          });
          setApplication(dispatch, allAwardEntries);
          localStorage.setItem("user", JSON.stringify(true));
        } else {
          setMSG(true);
          setErrorMSGColor("error");
          setErrorMSG("User Not Found");
          setTimeout(() => navigate("0"), 1000);
        }
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const Registration = [
    { itemTitle: "Total Registration", item: entries.length, link: "/registration" },
    { itemTitle: "Total Amount", item: 0, link: "#" },
    { itemTitle: "Due Amount", item: 0, link: "#" },
    { itemTitle: "Paid Amount", item: 0, link: "#" },
  ];

  const Applications = [
    { itemTitle: "Total Applications", item: application.length, link: "/application" },
    { itemTitle: "Draft", item: 0, link: "#" },
    { itemTitle: "Submitted", item: 0, link: "#" },
    { itemTitle: "Approved", item: 0, link: "#" },
    { itemTitle: "Rejected", item: 0, link: "#" },
    { itemTitle: "Judging", item: 0, link: "#" },
    { itemTitle: "Publice Voting", item: 0, link: "#" },
  ];
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
          <ListCard title="Registration" bigTitle={entries.length} items={Registration} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ListCard title="Applications" bigTitle={application.length} items={Applications} />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

export default Dashboard;
