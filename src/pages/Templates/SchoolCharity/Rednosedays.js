/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Kit 2 React examples
import DefaultNavbar from "components/common/Navbars/DefaultNavbar";
import DefaultFooter from "components/common/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import CharityWeekCard from "components/common/CharityWeekCard";

//Small Images

import Rednose1SM from "assets/images/CharityEvents/Rednose1SM.jpg";
import Rednose2SM from "assets/images/CharityEvents/Rednose2SM.jpg";
import Rednose3SM from "assets/images/CharityEvents/Rednose3SM.jpg";
import Rednose4SM from "assets/images/CharityEvents/Rednose4SM.jpg";
import Rednose5SM from "assets/images/CharityEvents/Rednose5SM.jpg";

//Large Images

import Rednose1LG from "assets/images/CharityEvents/Rednose1LG.jpg";
import Rednose2LG from "assets/images/CharityEvents/Rednose2LG.jpg";
import Rednose3LG from "assets/images/CharityEvents/Rednose3LG.jpg";
import Rednose4LG from "assets/images/CharityEvents/Rednose4LG.jpg";
import Rednose5LG from "assets/images/CharityEvents/Rednose5LG.jpg";

function Rednosedays() {
  return (
    <MKBox
      component="center"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <DefaultNavbar
        routes={routes}
        // action={{
        //   type: "external",
        //   route: "https://www.facebook.com/groups/172663070820628",
        // }}
        sticky
      />
      <Container>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={20}>
            <MKTypography variant="h1" color="white">
              Red nose days Gallery
            </MKTypography>
            <MKTypography variant="body1" color="light" opacity={0.8}>
              School Charity events Red Nose Day
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={10} ml={13}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={Rednose1SM}
                lgimage={Rednose1LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Wright's Class",
                }}
                title="Mrs Wright's Class"
                position={{ color: "info", label: "Mrs Wright's class list 1W 1974" }}
                description="Mrs Wright's class list 1W 1974"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={12} lg={10} ml={13}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={Rednose2SM}
                lgimage={Rednose2LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Manchee's Class",
                }}
                title="Mrs Manchee's Class"
                position={{ color: "info", label: "Mrs Manchee's class lists for 1M 1974" }}
                description="Mrs Manchee's class lists for 1M 1974"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={10} ml={13}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={Rednose3SM}
                lgimage={Rednose3LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Watson's Class",
                }}
                title="Miss Watson's Class"
                position={{ color: "info", label: "Miss Watson's class list 1W 1974" }}
                description="Miss Watson's class list 1W 1974"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={10} ml={13}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={Rednose4SM}
                lgimage={Rednose4LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Monk's Class",
                }}
                title="Mr Monk's Class"
                position={{ color: "info", label: "Mr Monk's class lists for 2Mo 1974" }}
                description="Mr Monk's class lists for 2Mo 1974"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={10} ml={13}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={Rednose5SM}
                lgimage={Rednose5LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Murdoch's Class",
                }}
                title="Mrs Murdoch's Class"
                position={{ color: "info", label: "Mrs Murdoch's class list for 2M 1974" }}
                description="Mrs Murdoch's class list for 2M 1974"
              />
            </MKBox>
          </Grid>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              School Memories school friends
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Memories in Class Lists
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </MKBox>
  );
}

export default Rednosedays;
