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

import CL19851SM from "assets/images/ClassLists/CL1985/CL19851SM.jpg";
import CL19852SM from "assets/images/ClassLists/CL1985/CL19852SM.jpg";
import CL19853SM from "assets/images/ClassLists/CL1985/CL19853SM.jpg";
import CL19854SM from "assets/images/ClassLists/CL1985/CL19854SM.jpg";

import CL19856SM from "assets/images/ClassLists/CL1985/CL19856SM.jpg";
import CL19857SM from "assets/images/ClassLists/CL1985/CL19857SM.jpg";
import CL19858SM from "assets/images/ClassLists/CL1985/CL19858SM.jpg";
import CL19859SM from "assets/images/ClassLists/CL1985/CL19859SM.jpg";
import CL198510SM from "assets/images/ClassLists/CL1985/CL198510SM.jpg";
import CL198511SM from "assets/images/ClassLists/CL1985/CL198511SM.jpg";
import CL198512SM from "assets/images/ClassLists/CL1985/CL198512SM.jpg";
import CL198513SM from "assets/images/ClassLists/CL1985/CL198513SM.jpg";
import CL198514SM from "assets/images/ClassLists/CL1985/CL198514SM.jpg";
import CL198515SM from "assets/images/ClassLists/CL1985/CL198515SM.jpg";
import CL198516SM from "assets/images/ClassLists/CL1985/CL198516SM.jpg";

//Large Images

import CL19851LG from "assets/images/ClassLists/CL1985/CL19851LG.jpg";
import CL19852LG from "assets/images/ClassLists/CL1985/CL19852LG.jpg";
import CL19853LG from "assets/images/ClassLists/CL1985/CL19853LG.jpg";
import CL19854LG from "assets/images/ClassLists/CL1985/CL19854LG.jpg";

import CL19856LG from "assets/images/ClassLists/CL1985/CL19856LG.jpg";
import CL19857LG from "assets/images/ClassLists/CL1985/CL19857LG.jpg";
import CL19858LG from "assets/images/ClassLists/CL1985/CL19858LG.jpg";
import CL19859LG from "assets/images/ClassLists/CL1985/CL19859LG.jpg";
import CL198510LG from "assets/images/ClassLists/CL1985/CL198510LG.jpg";
import CL198511LG from "assets/images/ClassLists/CL1985/CL198511LG.jpg";
import CL198512LG from "assets/images/ClassLists/CL1985/CL198512LG.jpg";
import CL198513LG from "assets/images/ClassLists/CL1985/CL198513LG.jpg";
import CL198514LG from "assets/images/ClassLists/CL1985/CL198514LG.jpg";
import CL198515LG from "assets/images/ClassLists/CL1985/CL198515LG.jpg";
import CL198516LG from "assets/images/ClassLists/CL1985/CL198516LG.jpg";

function Class1985() {
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
                smimage={CL19851SM}
                lgimage={CL19851LG}
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
                smimage={CL19852SM}
                lgimage={CL19852LG}
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
                smimage={CL19853SM}
                lgimage={CL19853LG}
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
                smimage={CL19854SM}
                lgimage={CL19854LG}
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
                smimage={CL19856SM}
                lgimage={CL19856LG}
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
                smimage={CL19857SM}
                lgimage={CL19857LG}
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
                smimage={CL19858SM}
                lgimage={CL19858LG}
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
                smimage={CL19859SM}
                lgimage={CL19859LG}
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
                smimage={CL198510SM}
                lgimage={CL198510LG}
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
                smimage={CL198511SM}
                lgimage={CL198511LG}
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
                smimage={CL198512SM}
                lgimage={CL198512LG}
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
                smimage={CL198513SM}
                lgimage={CL198513LG}
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
                smimage={CL198514SM}
                lgimage={CL198514LG}
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
                smimage={CL198515SM}
                lgimage={CL198515LG}
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
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL198516SM}
                lgimage={CL198516LG}
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

export default Class1985;
