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
import Rednose6SM from "assets/images/CharityEvents/Rednose6SM.jpg";
import Rednose7SM from "assets/images/CharityEvents/Rednose7SM.jpg";

//Large Images

import Rednose1LG from "assets/images/CharityEvents/Rednose1LG.jpg";
import Rednose2LG from "assets/images/CharityEvents/Rednose2LG.jpg";
import Rednose3LG from "assets/images/CharityEvents/Rednose3LG.jpg";
import Rednose4LG from "assets/images/CharityEvents/Rednose4LG.jpg";
import Rednose5LG from "assets/images/CharityEvents/Rednose5LG.jpg";
import Rednose6LG from "assets/images/CharityEvents/Rednose6LG.jpg";
import Rednose7LG from "assets/images/CharityEvents/Rednose7LG.jpg";

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
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={15}>
            <MKTypography variant="h1" color="white">
              Red Nose day Events at C Of E
            </MKTypography>
            <MKTypography variant="body1" color="light" opacity={0.8}>
              Red Noses
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
                  label: "Students doing a fun tennis courts based activity",
                }}
                title="Students being motivated by Miss Forer in Aid of Red Nose Day"
                position={{
                  color: "info",
                  label: "Students doing a fun tennis courts based activity",
                }}
                description="Students doing a fun tennis courts based activity (exact date unknown)."
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
                  label: "Students in proper attire, not forgetting their red noses",
                }}
                title="Two Students celebrating Red Nose Day "
                position={{
                  color: "info",
                  label: "Students in proper attire, not forgetting their red noses",
                }}
                description="No doubt enjoying the mufty day as the school levied a small charge for wearing mufty as a charitable contrbution to the charity (date unknown)."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={12} lg={10} ml={13}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={Rednose3SM}
                lgimage={Rednose3LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: " Miss Forer in Mufty for the school disco",
                }}
                title="Miss Forer Kicking back on a school disco "
                position={{ color: "info", label: "Miss Forer in Mufty for the school disco" }}
                description="Miss Forer was hosting a Red Nose Day School Disco with her usual flair (date unknown)."
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
                  label: "Miss Forer any opportunity to dress up",
                }}
                title="Miss Forer in casuals for the Day"
                position={{
                  color: "info",
                  label: "Miss Forer any opportunity to dress up",
                }}
                description="Another school disco and another opportuinity for an amazing costume (dates unknown)."
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
                  label: "Miss Forer at the school disco surronded by students ",
                }}
                title="The Middle or the end of the disco."
                position={{
                  color: "info",
                  label: "Miss Forer at the school disco surronded by students ",
                }}
                description="Miss Forer showing the students how to party up (dates unknown). "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={10} ml={13}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={Rednose6SM}
                lgimage={Rednose6LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "A subsequent Red Nose Cratity Fundraiser disco",
                }}
                title="A subsequent school disco for Red Nose day. (date unknown)"
                position={{
                  color: "info",
                  label: "A subsequent Red Nose Cratity Fundraiser disco",
                }}
                description="Miss Forer not in sight ? perhaps she's taking the photo, Mid 1980's ?"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={10} ml={13}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={Rednose7SM}
                lgimage={Rednose7LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Forer in the hall undergoing a charity fundraiser",
                }}
                title="Miss Forer undergoing a trilthon for Red Nose Day "
                position={{
                  color: "info",
                  label: "Miss Forer in the hall undergoing a charity fundraiser",
                }}
                description="Putting her through her paces in the hall for the Red Nose Money (date unknown)."
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
              Memories in Red Nose Adventures
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
