// @mui material components
import { Divider } from "@mui/material";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

ListCard.propTypes = {
  title: PropTypes.string.isRequired,
  bigTitle: PropTypes.any.isRequired,
  items: PropTypes.array.isRequired,
  item: PropTypes.any,
  itemTitle: PropTypes.any,
  link: PropTypes.any,
};

function ListCard({ title, bigTitle, items }) {
  const navigate = useNavigate();
  const handleClick = (link) => {
    navigate(link);
  };
  return (
    <Card>
      <MDBox pt={3} px={2}>
        <MDTypography pl={2} variant="h5" fontWeight="normal">
          {title}
        </MDTypography>
      </MDBox>
      <MDBox pt={1} px={2}>
        <MDTypography pl={2} variant="h1" fontWeight="bold">
          {bigTitle}
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox
          component="ul"
          display="flex"
          style={{ listStyleType: "none" }}
          flexDirection="column"
          p={0}
          m={0}
        >
          {Array.isArray(items) ? (
            items.map((item) => {
              return (
                <>
                  <MDBox
                    onClick={() => navigate(item.link)}
                    rel="noreferrer"
                    display="flex"
                    pt={0}
                    style={{ justifyContent: "space-between", cursor: "pointer" }}
                  >
                    <MDTypography pl={2} variant="subtitle2" fontWeight="normal">
                      {item.itemTitle}
                    </MDTypography>
                    <MDTypography pr={2} variant="subtitle2" fontWeight="bold">
                      {item.item}
                    </MDTypography>
                  </MDBox>
                  <Divider />
                </>
              );
            })
          ) : (
            <MDBox
              target="_blank"
              rel="noreferrer"
              display="flex"
              pt={1}
              style={{ justifyContent: "space-between" }}
            >
              <MDTypography pl={2} variant="subtitle2" fontWeight="normal">
                {itemTitle}
              </MDTypography>
              <MDTypography pr={2} variant="subtitle2" fontWeight="bold">
                {item}
              </MDTypography>
            </MDBox>
          )}
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default ListCard;
