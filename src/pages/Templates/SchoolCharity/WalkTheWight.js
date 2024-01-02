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

import WTW1SM from "assets/images/CharityEvents/WTW1SM.jpg";
import WTW2SM from "assets/images/CharityEvents/WTW2SM.jpg";
import WTW3SM from "assets/images/CharityEvents/WTW3SM.jpg";
import WTW4SM from "assets/images/CharityEvents/WTW4SM.jpg";
import WTW5SM from "assets/images/CharityEvents/WTW5SM.jpg";
import WTW6SM from "assets/images/CharityEvents/WTW6SM.jpg";
import WTW7SM from "assets/images/CharityEvents/WTW7SM.jpg";
import WTW8SM from "assets/images/CharityEvents/WTW8SM.jpg";

//Large Images

import WTW1LG from "assets/images/CharityEvents/WTW1LG.jpg";
import WTW2LG from "assets/images/CharityEvents/WTW2LG.jpg";
import WTW3LG from "assets/images/CharityEvents/WTW3LG.jpg";
import WTW4LG from "assets/images/CharityEvents/WTW4LG.jpg";
import WTW5LG from "assets/images/CharityEvents/WTW5LG.jpg";
import WTW6LG from "assets/images/CharityEvents/WTW6LG.jpg";
import WTW7LG from "assets/images/CharityEvents/WTW7LG.jpg";
import WTW8LG from "assets/images/CharityEvents/WTW8LG.jpg";

function WalkTheWight() {
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
              Walking The Wight With the School
            </MKTypography>
            <MKTypography variant="body1" color="light" opacity={0.8}>
              Moreys Walk The Wight
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={10} ml={13}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={WTW1SM}
                lgimage={WTW1LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Students doing orienteering",
                }}
                title="Students possibly on Walk The Wight however they seem to be doing orienteering"
                position={{ color: "info", label: "Students doing orientierring" }}
                description="Unknown location and date unknown (WTW ?) "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={12} lg={10} ml={13}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={WTW2SM}
                lgimage={WTW2LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Forer minding the bags and taking a break",
                }}
                title="Miss Forer minding the bags and taking a break on a sunny day"
                position={{
                  color: "info",
                  label: "Miss Forer minding the bags and taking a break",
                }}
                description="Miss Forer doing Walk The Wight probably on Brightstone Downs (date unknown)"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={12} lg={10} ml={13}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={WTW3SM}
                lgimage={WTW3LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "students with Miss Forer",
                }}
                title="Miss Forer and students below Ventnor Cascades on a sunny day "
                position={{ color: "info", label: "students with Miss Forer" }}
                description="An outing with Miss Forer purpose unclear(date unknown)"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={10} ml={13}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={WTW4SM}
                lgimage={WTW4LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Cold and wet team of students resting mid walk",
                }}
                title="Students ready to go on the next leg"
                position={{
                  color: "info",
                  label: "Cold and wet team of students resting mid walk",
                }}
                description="Walking The Wight possibly on a cold and wet day (dates unknown)"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={10} ml={13}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={WTW5SM}
                lgimage={WTW5LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Four year 1 students awaiting instructions",
                }}
                title="Location unknown possibly Walk The Wight"
                position={{ color: "info", label: "Four 1 year students awaiting instructions" }}
                description="1st year students awaiting marching orders (dates unknown) "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={10} ml={13}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={WTW6SM}
                lgimage={WTW6LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Students tackling Brading Marsh",
                }}
                title="Brading Marsh Possibly Walk The Wight (date unknown)"
                position={{ color: "info", label: "Students tackling Brading Marsh" }}
                description="Students unknown but looking like Brading Marshes, possibly WTW"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={10} ml={13}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={WTW7SM}
                lgimage={WTW7LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Brock plus students",
                }}
                title="Mrs Brock Relaxing with students on bench"
                position={{ color: "info", label: "Mrs Brock plus students" }}
                description="Mrs Brock and students relaxing on a bench out for the Walk (date unknown)"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={10} ml={13}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={WTW8SM}
                lgimage={WTW8LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Forer on the Downs heading to Freshwater",
                }}
                title="Miss Forer on the Downs heading to Freshwater"
                position={{
                  color: "info",
                  label: "Miss Forer on the Brightstone Down heading to Freshwater",
                }}
                description="Miss Forer looking tired heading onward to Freshwater on a hot sunny day (date unknown)"
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
              Memories in Walk The Wight Adventures
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

export default WalkTheWight;
