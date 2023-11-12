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

import CL19841SM from "assets/images/ClassLists/CL1984/CL19841SM.jpg";
import CL19842SM from "assets/images/ClassLists/CL1984/CL19842SM.jpg";
import CL19843SM from "assets/images/ClassLists/CL1984/CL19843SM.jpg";
import CL19844SM from "assets/images/ClassLists/CL1984/CL19844SM.jpg";
import CL19845SM from "assets/images/ClassLists/CL1984/CL19845SM.jpg";
import CL19846SM from "assets/images/ClassLists/CL1984/CL19846SM.jpg";
import CL19847SM from "assets/images/ClassLists/CL1984/CL19847SM.jpg";
import CL19848SM from "assets/images/ClassLists/CL1984/CL19848SM.jpg";
import CL19849SM from "assets/images/ClassLists/CL1984/CL19849SM.jpg";
import CL198410SM from "assets/images/ClassLists/CL1984/CL198410SM.jpg";
import CL198411SM from "assets/images/ClassLists/CL1984/CL198411SM.jpg";
import CL198412SM from "assets/images/ClassLists/CL1984/CL198412SM.jpg";
import CL198413SM from "assets/images/ClassLists/CL1984/CL198413SM.jpg";
import CL198414SM from "assets/images/ClassLists/CL1984/CL198414SM.jpg";
import CL198415SM from "assets/images/ClassLists/CL1984/CL198415SM.jpg";

//Large Images

import CL19841LG from "assets/images/ClassLists/CL1984/CL19841LG.jpg";
import CL19842LG from "assets/images/ClassLists/CL1984/CL19842LG.jpg";
import CL19843LG from "assets/images/ClassLists/CL1984/CL19843LG.jpg";
import CL19844LG from "assets/images/ClassLists/CL1984/CL19844LG.jpg";
import CL19845LG from "assets/images/ClassLists/CL1984/CL19845LG.jpg";
import CL19846LG from "assets/images/ClassLists/CL1984/CL19846LG.jpg";
import CL19847LG from "assets/images/ClassLists/CL1984/CL19847LG.jpg";
import CL19848LG from "assets/images/ClassLists/CL1984/CL19848LG.jpg";
import CL19849LG from "assets/images/ClassLists/CL1984/CL19849LG.jpg";
import CL198410LG from "assets/images/ClassLists/CL1984/CL198410LG.jpg";
import CL198411LG from "assets/images/ClassLists/CL1984/CL198411LG.jpg";
import CL198412LG from "assets/images/ClassLists/CL1984/CL198412LG.jpg";
import CL198413LG from "assets/images/ClassLists/CL1984/CL198413LG.jpg";
import CL198414LG from "assets/images/ClassLists/CL1984/CL198414LG.jpg";
import CL198415LG from "assets/images/ClassLists/CL1984/CL198415LG.jpg";

function Class1984() {
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
              Class of 1984
            </MKTypography>
            <MKTypography variant="body1" color="light" opacity={0.8}>
              Here are a few class lists of students that attended C of E Middle in 1984
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19841SM}
                lgimage={CL19841LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Crump Class",
                }}
                title="Mrs Crump Class"
                position={{ color: "info", label: "Mrs Crump's class list 1C 1984" }}
                description="Mrs Crump's class list 1C 1984"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19842SM}
                lgimage={CL19842LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Dennis Class",
                }}
                title="Miss Dennis Class "
                position={{ color: "info", label: "Miss Dennis class list 1D 1984" }}
                description="Miss Dennis class list 1D 1984"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19843SM}
                lgimage={CL19843LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Hawe's Class",
                }}
                title="Mr Hawe's Class"
                position={{ color: "info", label: "Mr Hawe's class lists for 1H 1984" }}
                description="Mr Hawe's class lists for 1H 1984"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19844SM}
                lgimage={CL19844LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Besley's Class",
                }}
                title="Mrs Besley's Class"
                position={{ color: "info", label: "Mrs Besley's class lists for 2B 1984" }}
                description="Mrs Besley's class lists for 2B 1984"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19845SM}
                lgimage={CL19845LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Chaloner's Class",
                }}
                title="Mrs Chaloner's Class"
                position={{ color: "info", label: "Mrs Chaloner's class lists for 2C 1984" }}
                description="Mrs Chaloner's class lists for 2C 1984"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19846SM}
                lgimage={CL19846LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Murdoch's Class",
                }}
                title="Mrs Murdoch's Class"
                position={{ color: "info", label: "Mrs Murdoch's class list for 2M 1984" }}
                description="Mrs Murdoch's class list for 2M 1984"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19847SM}
                lgimage={CL19847LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Goodships Class",
                }}
                title="Miss Goodships Class"
                position={{ color: "info", label: "Miss Goodships class list for 3G 1984" }}
                description="Miss Goodships class list for 3G 1984"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19848SM}
                lgimage={CL19848LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Walker's Class",
                }}
                title="Mr Walker's Class"
                position={{ color: "info", label: "Mr Walker's class list for 3W 1984" }}
                description=" Mr Walker's class list for 3W 1984"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19849SM}
                lgimage={CL19849LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Watkins Class",
                }}
                title="Mrs Watkins Class"
                position={{ color: "info", label: "Mrs Watkins class list for 3W 1984" }}
                description="Mrs Watkins class list for 3W 1984 "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL198410SM}
                lgimage={CL198410LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Betts Class ",
                }}
                title="Mrs Betts Class "
                position={{ color: "info", label: " Mrs Betts class list for 4B 1984" }}
                description=" Mrs Betts class list for 4B 1984"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL198411SM}
                lgimage={CL198411LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Forer's Class",
                }}
                title="Miss Forer's Class"
                position={{ color: "info", label: "Miss Forer's class list for 4F 1984" }}
                description="Miss Forer's class list for 4F 1984 "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL198412SM}
                lgimage={CL198412LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Hutchinson's Class",
                }}
                title="Mrs Hutchinson's Class"
                position={{ color: "info", label: "Mrs Hutchinson's class list for 4H 1984" }}
                description="Mrs Hutchinson's class list for 4H 1984"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL198413SM}
                lgimage={CL198413LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "September 1984 Year Two Group List",
                }}
                title="September 1984 Year Two Group List"
                position={{ color: "info", label: "Class lists for year 2 1984" }}
                description="Class lists for year 2 1984 "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL198414SM}
                lgimage={CL198414LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "September 1984 Year Third Group List",
                }}
                title="September 1984 Year Third Group List"
                position={{ color: "info", label: "Class lists for year 3 1984" }}
                description="Class lists for year 3 1984 "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL198415SM}
                lgimage={CL198415LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "September 1984 Year Fourth Group List",
                }}
                title="September 1984 Year Fourth Group List"
                position={{ color: "info", label: "Class lists for year 4 1984" }}
                description="Class lists for year 4 1984 "
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

export default Class1984;
