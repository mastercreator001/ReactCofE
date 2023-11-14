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
import ClassListCard from "components/common/ClassListCard";

//Small Images

import CL19861SM from "assets/images/ClassLists/CL1986/CL19861SM.jpg";
import CL19862SM from "assets/images/ClassLists/CL1986/CL19862SM.jpg";
import CL19863SM from "assets/images/ClassLists/CL1986/CL19863SM.jpg";
import CL19864SM from "assets/images/ClassLists/CL1986/CL19864SM.jpg";
import CL19865SM from "assets/images/ClassLists/CL1986/CL19865SM.jpg";
import CL19866SM from "assets/images/ClassLists/CL1986/CL19866SM.jpg";
import CL19867SM from "assets/images/ClassLists/CL1986/CL19867SM.jpg";
import CL19868SM from "assets/images/ClassLists/CL1986/CL19868SM.jpg";
import CL19869SM from "assets/images/ClassLists/CL1986/CL19869SM.jpg";
import CL198610SM from "assets/images/ClassLists/CL1986/CL198610SM.jpg";
import CL198611SM from "assets/images/ClassLists/CL1986/CL198611SM.jpg";
import CL198612SM from "assets/images/ClassLists/CL1986/CL198612SM.jpg";

//Large Images

import CL19861LG from "assets/images/ClassLists/CL1986/CL19861LG.jpg";
import CL19862LG from "assets/images/ClassLists/CL1986/CL19862LG.jpg";
import CL19863LG from "assets/images/ClassLists/CL1986/CL19863LG.jpg";
import CL19864LG from "assets/images/ClassLists/CL1986/CL19864LG.jpg";
import CL19865LG from "assets/images/ClassLists/CL1986/CL19865LG.jpg";
import CL19866LG from "assets/images/ClassLists/CL1986/CL19866LG.jpg";
import CL19867LG from "assets/images/ClassLists/CL1986/CL19867LG.jpg";
import CL19868LG from "assets/images/ClassLists/CL1986/CL19868LG.jpg";
import CL19869LG from "assets/images/ClassLists/CL1986/CL19869LG.jpg";
import CL198610LG from "assets/images/ClassLists/CL1986/CL198610LG.jpg";
import CL198611LG from "assets/images/ClassLists/CL1986/CL198611LG.jpg";
import CL198612LG from "assets/images/ClassLists/CL1986/CL198612LG.jpg";

function Class1986() {
  return (
    <MKBox
      component="section"
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
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h1" color="white">
              Class of 1985
            </MKTypography>
            <MKTypography variant="body1" color="light" opacity={0.8}>
              Here are a few class lists of students that attended C of E Middle in 1985
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19861SM}
                lgimage={CL19861LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Dennis Class",
                }}
                title="Miss Dennis Class"
                position={{ color: "info", label: "Miss Dennis class list 1D 1986" }}
                description="Miss Dennis class list 1D 1986"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19862SM}
                lgimage={CL19862LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Hawes Class",
                }}
                title="Mr Hawes Class"
                position={{ color: "info", label: "Mr Hawe's class lists for 1H 1986" }}
                description="Mr Hawe's class lists for 1H 1986"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19863SM}
                lgimage={CL19863LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Crump's Class",
                }}
                title="Mrs Crump's Class"
                position={{ color: "info", label: "Mrs Crump's class list 1D 1986" }}
                description="Mrs Crump's class list 1D 1986"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19864SM}
                lgimage={CL19864LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Chaloner's Class",
                }}
                title="Mrs Chaloner's Class"
                position={{ color: "info", label: "Mrs Chaloner's class lists for 2C 1986" }}
                description="Mrs Chaloner's class lists for 2C 1986"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19865SM}
                lgimage={CL19865LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Murdoch's Class",
                }}
                title="Mrs Murdoch's Class"
                position={{ color: "info", label: "Mrs Murdoch's class list for 2M 1986" }}
                description="Mrs Murdoch's class list for 2M 1986"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19866SM}
                lgimage={CL19866LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Reynolds Class",
                }}
                title="Mrs Reynolds Class"
                position={{ color: "info", label: "Mrs Reynolds class list for 2R 1986" }}
                description="Mrs Reynolds class list for 2R 1986"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19867SM}
                lgimage={CL19867LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Goodship's Class",
                }}
                title="Miss Goodship's Class"
                position={{ color: "info", label: "Miss Goodship's class list for 3G 1986" }}
                description="Miss Goodship's class list for 3G 1986"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19868SM}
                lgimage={CL19868LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Hayles Class",
                }}
                title="Mrs Hayles Class"
                position={{ color: "info", label: "Mrs Hayles class list for 3H 1986" }}
                description=" Mrs Hayles class list for 3H 19866"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19869SM}
                lgimage={CL19869LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Walker's Class",
                }}
                title="Mr Walker's Class"
                position={{ color: "info", label: "Mr Walker's class list for 3W 1986" }}
                description="Mr Walker's class list for 3W 1986"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL198610SM}
                lgimage={CL198610LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Betts Class ",
                }}
                title="Mrs Betts Class"
                position={{ color: "info", label: "Mrs Betts class list for 4B 1986" }}
                description=" Mrs Betts class list for 4B 1986"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL198611SM}
                lgimage={CL198611LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Forer's Class",
                }}
                title="Miss Forer's Class"
                position={{ color: "info", label: "Miss Forer's class list for 4F 1986" }}
                description="Miss Forer's class list for 4F 1986"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL198612SM}
                lgimage={CL198612LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Watkins Class",
                }}
                title="Mrs Watkins Class"
                position={{ color: "info", label: "Mrs Watkins class list for 4W 1986" }}
                description="Mrs Watkins class list for 4W 1986"
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

export default Class1986;
