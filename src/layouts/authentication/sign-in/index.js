import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import MDAlert from "components/MDAlert";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import bgImage from "assets/images/bg2.png";
import { useMaterialUIController, setUser, setEntries, setApplication } from "context";
import axios from "axios";
import Icon from "@mui/material/Icon";

function Basic() {
  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [controller, dispatch] = useMaterialUIController();
  const [MSG, setMSG] = useState(false);
  const [errorMSG, setErrorMSG] = useState(" ");
  const [errorMSGColor, setErrorMSGColor] = useState(" ");
  const { user, entries } = controller;
  const navigate = useNavigate();
  const UserExist = () => {
    const User = "admin";
    const Password = "admin";
    axios
      .get("https://ill-colt-sundress.cyclic.app/organisation-registration")
      .then(function (response) {
        if (userLogin === User && userPassword === Password) {
          setEntries(dispatch, response.data);
          setUser(dispatch, true);
          setErrorMSGColor("success");
          setErrorMSG("Login Successful");
          setMSG(true);
          const allAwardEntries = [];
          response.data.forEach((user) => {
            if (user.hasOwnProperty("AwardEntry") && Array.isArray(user.AwardEntry)) {
              allAwardEntries.push(...user.AwardEntry);
            }
          });
          setApplication(dispatch, allAwardEntries);
          localStorage.setItem("user", JSON.stringify(true));
          setTimeout(() => navigate("/dashboard"), 3000);
        } else {
          setMSG(true);
          setErrorMSGColor("error");
          setErrorMSG("User Not Found");
          setTimeout(() => navigate("0"), 1000);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="email"
                value={userLogin}
                onChange={(e) => setUserLogin(e.target.value)}
                label="Email"
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                label="Password"
                fullWidth
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="secondary" fullWidth onClick={UserExist}>
                sign in
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
      <MDAlert
        color={errorMSGColor}
        style={
          MSG === false
            ? { display: "none" }
            : { position: "absolute", bottom: 0, right: 0, fontSize: "15px" }
        }
        dismissible
      >
        {errorMSGColor === "success" ? (
          <Icon fontSize="small" style={{ marginRight: 10 }}>
            check
          </Icon>
        ) : (
          <Icon fontSize="small" style={{ marginRight: 10 }}>
            error
          </Icon>
        )}
        {errorMSG}
      </MDAlert>
    </BasicLayout>
  );
}

export default Basic;
