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

import CL19881SM from "assets/images/ClassLists/CL1988/CL19881SM.jpg";
import CL19882SM from "assets/images/ClassLists/CL1988/CL19882SM.jpg";
import CL19883SM from "assets/images/ClassLists/CL1988/CL19883SM.jpg";
import CL19884SM from "assets/images/ClassLists/CL1988/CL19884SM.jpg";
import CL19885SM from "assets/images/ClassLists/CL1988/CL19885SM.jpg";
import CL19886SM from "assets/images/ClassLists/CL1988/CL19886SM.jpg";
import CL19887SM from "assets/images/ClassLists/CL1988/CL19887SM.jpg";
import CL19888SM from "assets/images/ClassLists/CL1988/CL19888SM.jpg";
import CL19889SM from "assets/images/ClassLists/CL1988/CL19889SM.jpg";
import CL198810SM from "assets/images/ClassLists/CL1988/CL198810SM.jpg";
import CL198811SM from "assets/images/ClassLists/CL1988/CL198811SM.jpg";
import CL198812SM from "assets/images/ClassLists/CL1988/CL198812SM.jpg";

//Large Images

import CL19881LG from "assets/images/ClassLists/CL1988/CL19881LG.jpg";
import CL19882LG from "assets/images/ClassLists/CL1988/CL19882LG.jpg";
import CL19883LG from "assets/images/ClassLists/CL1988/CL19883LG.jpg";
import CL19884LG from "assets/images/ClassLists/CL1988/CL19884LG.jpg";
import CL19885LG from "assets/images/ClassLists/CL1988/CL19885LG.jpg";
import CL19886LG from "assets/images/ClassLists/CL1988/CL19886LG.jpg";
import CL19887LG from "assets/images/ClassLists/CL1988/CL19887LG.jpg";
import CL19888LG from "assets/images/ClassLists/CL1988/CL19888LG.jpg";
import CL19889LG from "assets/images/ClassLists/CL1988/CL19889LG.jpg";
import CL198810LG from "assets/images/ClassLists/CL1988/CL198810LG.jpg";
import CL198811LG from "assets/images/ClassLists/CL1988/CL198811LG.jpg";
import CL198812LG from "assets/images/ClassLists/CL1988/CL198812LG.jpg";

function Class1988() {
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
              Class of 1988
            </MKTypography>
            <MKTypography variant="body1" color="light" opacity={0.8}>
              Here are a few class lists of students that attended C of E Middle in 1988
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19881SM}
                lgimage={CL19881LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Ball's Class",
                }}
                title="Mrs Ball's Class"
                position={{ color: "info", label: "Mrs Ball's class list 1B 1988" }}
                description="Mrs Ball's class list 1B 1988"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19882SM}
                lgimage={CL19882LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Dennis Class",
                }}
                title="Miss Dennis Class"
                position={{ color: "info", label: "Miss Dennis class lists for 1D 1988" }}
                description="Miss Dennis class lists for 1D 1988"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19883SM}
                lgimage={CL19883LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Reynolds Class",
                }}
                title="Mrs Reynolds Class"
                position={{ color: "info", label: "Mrs Reynolds class list 1R 1988" }}
                description="Mrs Reynolds class list 1R 1988"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19884SM}
                lgimage={CL19884LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Chaloner's Class",
                }}
                title="Mrs Chaloner's Class"
                position={{ color: "info", label: "Mrs Chaloner's class lists for 2C 1988" }}
                description="Mrs Chaloner's class lists for 2C 1988"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19885SM}
                lgimage={CL19885LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Murdoch's Class",
                }}
                title="Mrs Murdoch's Class"
                position={{ color: "info", label: "Mrs Murdoch's class list for 2M 1988" }}
                description="Mrs Murdoch's class list for 2M 1988"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19886SM}
                lgimage={CL19886LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Tansley's Class",
                }}
                title="Mr Tansley's Class"
                position={{ color: "info", label: "Mr Tansley's class list for 2T 1988" }}
                description="Mr Tansley's class list for 2T 1988"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19887SM}
                lgimage={CL19887LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Hayles Class",
                }}
                title="Mrs Hayles Class"
                position={{ color: "info", label: "Mrs Hayles class list for 3H 1988" }}
                description="Mrs Hayles class list for 3H 1988"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19888SM}
                lgimage={CL19888LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Hawes Class",
                }}
                title="Mr Hawes Class"
                position={{ color: "info", label: "Mr Hawes class list for 3H 1988" }}
                description=" Mr Hawes class list for 3H 1988"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19889SM}
                lgimage={CL19889LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Walker's Class",
                }}
                title="Mr Walker's Class"
                position={{ color: "info", label: "Mr Walker's class list for 3W 1988" }}
                description="Mr Walker's class list for 3W 1988"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL198810SM}
                lgimage={CL198810LG}
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
                smimage={CL198811SM}
                lgimage={CL198811LG}
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
                smimage={CL198812SM}
                lgimage={CL198812LG}
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

export default Class1988;
