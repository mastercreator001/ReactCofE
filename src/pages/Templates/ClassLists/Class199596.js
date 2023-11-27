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

import CL1995961SM from "assets/images/ClassLists/CL199596/CL1995961SM.jpg";
import CL1995962SM from "assets/images/ClassLists/CL199596/CL1995962SM.jpg";
import CL1995963SM from "assets/images/ClassLists/CL199596/CL1995963SM.jpg";
import CL1995964SM from "assets/images/ClassLists/CL199596/CL1995964SM.jpg";
import CL1995965SM from "assets/images/ClassLists/CL199596/CL1995965SM.jpg";
import CL1995966SM from "assets/images/ClassLists/CL199596/CL1995966SM.jpg";
import CL1995967SM from "assets/images/ClassLists/CL199596/CL1995967SM.jpg";
import CL1995968SM from "assets/images/ClassLists/CL199596/CL1995968SM.jpg";
import CL1995969SM from "assets/images/ClassLists/CL199596/CL1995969SM.jpg";
import CL19959610SM from "assets/images/ClassLists/CL199596/CL19959610SM.jpg";
import CL19959611SM from "assets/images/ClassLists/CL199596/CL19959611SM.jpg";
import CL19959612SM from "assets/images/ClassLists/CL199596/CL19959612SM.jpg";
import CL19959613SM from "assets/images/ClassLists/CL199596/CL19959613SM.jpg";
import CL19959614SM from "assets/images/ClassLists/CL199596/CL19959614SM.jpg";

//Large Images

import CL1995961LG from "assets/images/ClassLists/CL199596/CL1995961LG.jpg";
import CL1995962LG from "assets/images/ClassLists/CL199596/CL1995962LG.jpg";
import CL1995963LG from "assets/images/ClassLists/CL199596/CL1995963LG.jpg";
import CL1995964LG from "assets/images/ClassLists/CL199596/CL1995964LG.jpg";
import CL1995965LG from "assets/images/ClassLists/CL199596/CL1995965LG.jpg";
import CL1995966LG from "assets/images/ClassLists/CL199596/CL1995966LG.jpg";
import CL1995967LG from "assets/images/ClassLists/CL199596/CL1995967LG.jpg";
import CL1995968LG from "assets/images/ClassLists/CL199596/CL1995968LG.jpg";
import CL1995969LG from "assets/images/ClassLists/CL199596/CL1995969LG.jpg";
import CL19959610LG from "assets/images/ClassLists/CL199596/CL19959610LG.jpg";
import CL19959611LG from "assets/images/ClassLists/CL199596/CL19959611LG.jpg";
import CL19959612LG from "assets/images/ClassLists/CL199596/CL19959612LG.jpg";
import CL19959613LG from "assets/images/ClassLists/CL199596/CL19959613LG.jpg";
import CL19959614LG from "assets/images/ClassLists/CL199596/CL19959614LG.jpg";

function Class199596() {
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
              Class of 1995/1996
            </MKTypography>
            <MKTypography variant="body1" color="light" opacity={0.8}>
              Here are a few class lists of students that attended C of E Middle in 1995/1996
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL1995961SM}
                lgimage={CL1995961LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Ball's Class",
                }}
                title="Mrs Ball's Class"
                position={{ color: "info", label: "Mrs Ball's class list 5B 1995/96" }}
                description="Mrs Ball's class list 5B 1995/96"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL1995962SM}
                lgimage={CL1995962LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Dennis Class",
                }}
                title="Miss Dennis Class"
                position={{ color: "info", label: "Miss Dennis class lists for 5D 1995/96" }}
                description="Miss Dennis class lists for 5D 1995/96"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL1995963SM}
                lgimage={CL1995963LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Reynolds Class",
                }}
                title="Mrs Reynolds Class"
                position={{ color: "info", label: "Mrs Reynolds class list 5R 1995/96" }}
                description="Mrs Reynolds class list 5R 1995/96"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL1995964SM}
                lgimage={CL1995964LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "6 CO's Class",
                }}
                title="6 CO's Class"
                position={{ color: "info", label: "6 CO's class lists for 6C 1995/96" }}
                description="6 CO's class lists for 6C 1995/96"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL1995965SM}
                lgimage={CL1995965LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Chaloners Class",
                }}
                title="Mrs Chaloners Class"
                position={{ color: "info", label: "Mrs Chaloner's class list for 6C 1995/96" }}
                description="Mrs Chaloners class list for 6C 1995/96"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL1995966SM}
                lgimage={CL1995966LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Hawes Class",
                }}
                title="Mr Hawes Class"
                position={{ color: "info", label: "Mr Hawes Class class list for 6H 1995/96" }}
                description="Mr Hawes Class class list for 6H 1995/96"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL1995967SM}
                lgimage={CL1995967LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Chaloner's Class",
                }}
                title="Mrs Chaloner's Class"
                position={{ color: "info", label: "Mrs Chaloner's class list for 7C 1995/96" }}
                description="Mrs Chaloner's class list for 7C 1995/96"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL1995968SM}
                lgimage={CL1995968LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Forer's Class",
                }}
                title="Miss Forer's Class"
                position={{ color: "info", label: "Miss Forer's class list for 7F 1995/96" }}
                description=" Miss Forer's class list for 7F 1995/96"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL1995969SM}
                lgimage={CL1995969LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: " Mr Hawes Class",
                }}
                title="Mr Hawes Class"
                position={{ color: "info", label: "Mr Hawes class list for 7H 1995/96" }}
                description="Mr Hawes class list for 7H 1995/96"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19959610SM}
                lgimage={CL19959610LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Walkers Class",
                }}
                title="Mr Walkers Class"
                position={{ color: "info", label: "Mr Walkers class list for 7W 1995/96" }}
                description=" Mr Walkers class list for 7W 1995/96"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19959611SM}
                lgimage={CL19959611LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Brocks Class",
                }}
                title="Mrs Brocks Class"
                position={{ color: "info", label: "Mrs Brocks class list for 8B 1995/96" }}
                description="Mrs Brocks class list for 8B 1995/96"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19959612SM}
                lgimage={CL19959612LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Forer's Class",
                }}
                title="Miss Forer's Class"
                position={{ color: "info", label: "Miss Forer's class list for 8F 1995/96" }}
                description="Miss Forer's class list for 8F 1995/96"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19959613SM}
                lgimage={CL19959613LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Murdoch's Class",
                }}
                title="Mrs Murdoch's Class"
                position={{ color: "info", label: "Mrs Murdoch's class list for 8M 1995/96" }}
                description="Mrs Murdoch's class list for 8M 1995/96"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19959614SM}
                lgimage={CL19959614LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Reynolds Class",
                }}
                title="Mrs Reynolds Class"
                position={{ color: "info", label: "Mrs Reynolds class list for 8R 1995/96" }}
                description="Mrs Reynolds class list for 8R 1995/96"
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

export default Class199596;
