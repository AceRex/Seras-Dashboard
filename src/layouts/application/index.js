import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { columns, rows } from "./data";
import MDButton from "components/MDButton";
import { Card, Checkbox, Icon, IconButton } from "@mui/material";
import DataTable from "examples/Tables/DataTable";
import MDInput from "components/MDInput";
import MultipleSelect from "components/MultiSelect";
import { statues, categories, rounds, tags } from "./data";
import MDBadge from "components/MDBadge";
import { useMaterialUIController } from "context";
import { DateFormat } from "components/DateFormat";

function Application() {
  const [controller, dispatch] = useMaterialUIController();

  const { user, entries } = controller;

  const columns = [
    { Header: " ", accessor: "select", width: "10%", align: "center" },
    { Header: "ID", accessor: "id", width: "10%", align: "center" },
    { Header: "Last edited", accessor: "last_edited", width: "10%", align: "center" },
    { Header: "Registrant", accessor: "registrant", width: "20%", align: "center" },
    { Header: "Name", accessor: "name", width: "20%", align: "center" },
    { Header: "Category", accessor: "category", width: "20%", align: "center" },
    { Header: "Status", accessor: "status", width: "5%", align: "center" },
    { Header: "Result", accessor: "result", width: "5%", align: "center" },
    { Header: "Rounds", accessor: "rounds", width: "5%", align: "center" },
    { Header: "Tags", accessor: "tags", width: "1%", align: "center" },
    { Header: "Action", accessor: "action", width: "1%", align: "center" },
  ];
  const allAwardEntries = entries.flatMap((awardentry) =>
    awardentry.AwardEntry.map((award) => ({
      select: <Checkbox />,
      id: awardentry._id,
      last_edited: DateFormat(new Date(awardentry.updatedAt)),
      registrant: awardentry.NameOfCEOMD,
      name: awardentry.NameOfBusinessOrganization,
      category: award.awardCategory,
      status: <MDBadge badgeContent="not paid" color="warning" />,
      result: "77",
      rounds: "4",
      tags: "something",
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
    }))
  );

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
                table={{ columns, rows: allAwardEntries }}
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
