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

import CL19871SM from "assets/images/ClassLists/CL1987/CL19871SM.jpg";
import CL19872SM from "assets/images/ClassLists/CL1987/CL19872SM.jpg";
import CL19873SM from "assets/images/ClassLists/CL1987/CL19873SM.jpg";
import CL19874SM from "assets/images/ClassLists/CL1987/CL19874SM.jpg";
import CL19875SM from "assets/images/ClassLists/CL1987/CL19875SM.jpg";
import CL19876SM from "assets/images/ClassLists/CL1987/CL19876SM.jpg";
import CL19877SM from "assets/images/ClassLists/CL1987/CL19877SM.jpg";
import CL19878SM from "assets/images/ClassLists/CL1987/CL19878SM.jpg";
import CL19879SM from "assets/images/ClassLists/CL1987/CL19879SM.jpg";
import CL198710SM from "assets/images/ClassLists/CL1987/CL198710SM.jpg";
import CL198711SM from "assets/images/ClassLists/CL1987/CL198711SM.jpg";
import CL198712SM from "assets/images/ClassLists/CL1987/CL198712SM.jpg";

//Large Images

import CL19871LG from "assets/images/ClassLists/CL1987/CL19871LG.jpg";
import CL19872LG from "assets/images/ClassLists/CL1987/CL19872LG.jpg";
import CL19873LG from "assets/images/ClassLists/CL1987/CL19873LG.jpg";
import CL19874LG from "assets/images/ClassLists/CL1987/CL19874LG.jpg";
import CL19875LG from "assets/images/ClassLists/CL1987/CL19875LG.jpg";
import CL19876LG from "assets/images/ClassLists/CL1987/CL19876LG.jpg";
import CL19877LG from "assets/images/ClassLists/CL1987/CL19877LG.jpg";
import CL19878LG from "assets/images/ClassLists/CL1987/CL19878LG.jpg";
import CL19879LG from "assets/images/ClassLists/CL1987/CL19869LG.jpg";
import CL198710LG from "assets/images/ClassLists/CL1987/CL198710LG.jpg";
import CL198711LG from "assets/images/ClassLists/CL1987/CL198711LG.jpg";
import CL198712LG from "assets/images/ClassLists/CL1987/CL198712LG.jpg";

function Class1987() {
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
                smimage={CL19871SM}
                lgimage={CL19871LG}
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
                smimage={CL19872SM}
                lgimage={CL19872LG}
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
                smimage={CL19873SM}
                lgimage={CL19873LG}
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
                smimage={CL19874SM}
                lgimage={CL19874LG}
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
                smimage={CL19875SM}
                lgimage={CL19875LG}
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
                smimage={CL19876SM}
                lgimage={CL19876LG}
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
                smimage={CL19877SM}
                lgimage={CL19877LG}
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
                smimage={CL19878SM}
                lgimage={CL19878LG}
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
                smimage={CL19879SM}
                lgimage={CL19879LG}
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
                smimage={CL198710SM}
                lgimage={CL198710LG}
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
                smimage={CL198711SM}
                lgimage={CL198711LG}
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
                smimage={CL198712SM}
                lgimage={CL198712LG}
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

export default Class1987;
