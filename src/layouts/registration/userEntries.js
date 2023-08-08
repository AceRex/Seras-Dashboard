import { Card, Grid, Icon } from "@mui/material";
import axios from "axios";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Divider from "@mui/material/Divider";

function userEntries() {
  const getUser = useParams();
  const [orgData, setOrgData] = useState({});
  useEffect(() => {
    axios
      .get(`https://ill-colt-sundress.cyclic.app/organisation-registration/${getUser.userID}`)
      .then(function (response) {
        setOrgData(response.data);
      });
  }, [getUser]);

  const Labelstyle = {
    fontSize: "15px",
    color: "#808080",
  };
  const Textstyle = {
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "1rem",
  };
  const arrayStyle = {
    fontSize: "14px",
    fontWeight: "lighter",
    color: "#ffffff",
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
                <p style={Textstyle}>{orgData.NameOfCEOMD}</p>
                <p style={Labelstyle}>Email</p>
                <p style={Textstyle}>{orgData.EmailOfBusinessOrganization}</p>
                <p style={Labelstyle}>Company</p>
                <p style={Textstyle}>{orgData.NameOfBusinessOrganization}</p>
                <p style={Labelstyle}>Address</p>
                <p style={Textstyle}>{orgData.AddressOfBusinessOrganization}</p>
                <p style={Labelstyle}>City</p>
                <p style={Textstyle}>{orgData.City}</p>
                <p style={Labelstyle}>State</p>
                <p style={Textstyle}>{orgData.State}</p>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card style={{ padding: "3rem" }}>
                <p style={Labelstyle}>Payments</p>
                <p style={Textstyle}>{orgData.PaymentStatus}</p>
                <p style={Labelstyle}>Amount Due</p>
                <p style={Textstyle}>{orgData.EmailOfBusinessOrganization}</p>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={1} style={{ marginTop: "2rem" }}>
            <Grid item xs={12} md={6}>
              {orgData &&
                orgData.AwardEntry &&
                orgData.AwardEntry.map((entry, index) => (
                  <Card
                    key={index}
                    style={{ marginBottom: "1rem", padding: "3rem", backgroundColor: "#1A73E8" }}
                  >
                    <p style={{ fontSize: "15px", fontWeight: "normal", color: "#ffffff" }}>
                      Application {index + 1}
                    </p>
                    <Divider />
                    <p style={arrayStyle}>Category</p>
                    <p style={Textstyle}>{entry.awardCategory}</p>
                    {entry.awardCategory === "CEO of the Year" ? (
                      <>
                        <p style={arrayStyle}>Name of MD</p>
                        <p style={Textstyle}>{entry.nameMD}</p>{" "}
                        <p style={arrayStyle}>Name of organisation</p>
                        <p style={Textstyle}>{entry.nameOfOrg}</p> <p style={arrayStyle}>Role</p>
                        <p style={Textstyle}>{entry.CEORole}</p>{" "}
                      </>
                    ) : entry.awardCategory === "Sustainability Professional of the Year" ? (
                      <>
                        {" "}
                        <p style={arrayStyle}>Nominee</p>
                        <p style={Textstyle}>{entry.nameOfASPY}</p>{" "}
                        <p style={arrayStyle}>Name of organisation</p>
                        <p style={Textstyle}>{entry.ASPYOrg}</p> <p style={arrayStyle}>Role</p>
                        <p style={Textstyle}>{entry.ASPYRole}</p>{" "}
                      </>
                    ) : entry.awardCategory === "Partnership of the Year" ? (
                      <>
                        {" "}
                        <p style={arrayStyle}>Partnership of the Year</p>
                        <p style={Textstyle}>{entry.POYID}</p> <p style={arrayStyle}>Project</p>
                        <p style={Textstyle}>{entry.POYProject}</p> <p style={arrayStyle}>Role</p>
                        <p style={Textstyle}>{entry.POYRoles}</p>{" "}
                      </>
                    ) : (
                      <>
                        {" "}
                        <p style={arrayStyle}>Project</p>
                        <p style={Textstyle}>{entry.project}</p>{" "}
                        <p style={arrayStyle}>Project Lead Email</p>
                        <p style={Textstyle}>{entry.projectLeadEmail}</p>{" "}
                        <p style={arrayStyle}>Project Duration</p>
                        <p style={Textstyle}>{entry.projectDuration}</p>{" "}
                      </>
                    )}
                  </Card>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

export default userEntries;
