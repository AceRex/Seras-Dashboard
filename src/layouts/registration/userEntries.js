import { Card, Grid, Icon } from "@mui/material";
import axios from "axios";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function userEntries() {
  const getUser = useParams();
  const [orgData, setOrgData] = useState({});
  useEffect(() => {
    axios
      .get(`https://zpfh8p-7070.csb.app/organisation-registration/${getUser.userID}`)
      .then(function (response) {
        setOrgData(response.data);
        console.log(response.data.AwardEntry);
      });
  }, [getUser]);

  const Labelstyle = {
    fontSize: "15px",
    color: "#808080",
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid container spacing={6} pt={4}>
        <Grid item xs={12}>
          <Grid container spacing={1} style={{ marginTop: "2rem" }}>
            <Grid item xs={12} md={6}>
              <Card style={{ padding: "3rem" }}>
                <p style={Labelstyle}>Name</p>
                <p>{orgData.NameOfCEOMD}</p>
                <p style={Labelstyle}>Email</p>
                <p>{orgData.EmailOfBusinessOrganization}</p>
                <p style={Labelstyle}>Company</p>
                <p>{orgData.NameOfBusinessOrganization}</p>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                {" "}
                <p style={Labelstyle}>payments</p>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={1} style={{ marginTop: "2rem" }}>
            <Grid item xs={12} md={6}>
              {/* <Card style={{ padding: "3rem" }}>
                {orgData.AwardEntry.map((entry) => (
                  <>
                    <p style={Labelstyle}>Name</p>
                    <p>{entry.awardCategory}</p>
                  </>
                ))}
              </Card> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

export default userEntries;
