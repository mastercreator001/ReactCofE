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

import CL19821SM from "assets/images/ClassLists/CL1982/CL19821SM.jpg";
import CL19822SM from "assets/images/ClassLists/CL1982/CL19822SM.jpg";
import CL19823SM from "assets/images/ClassLists/CL1982/CL19823SM.jpg";
import CL19824SM from "assets/images/ClassLists/CL1982/CL19824SM.jpg";
import CL19825SM from "assets/images/ClassLists/CL1982/CL19825SM.jpg";
import CL19826SM from "assets/images/ClassLists/CL1982/CL19826SM.jpg";
import CL19827SM from "assets/images/ClassLists/CL1982/CL19827SM.jpg";
import CL19828SM from "assets/images/ClassLists/CL1982/CL19828SM.jpg";
import CL19829SM from "assets/images/ClassLists/CL1982/CL19829SM.jpg";
import CL198210SM from "assets/images/ClassLists/CL1982/CL198210SM.jpg";
import CL198211SM from "assets/images/ClassLists/CL1982/CL198211SM.jpg";
import CL198212SM from "assets/images/ClassLists/CL1982/CL198212SM.jpg";
import CL198213SM from "assets/images/ClassLists/CL1982/CL198213SM.jpg";
import CL198214SM from "assets/images/ClassLists/CL1982/CL198214SM.jpg";
import CL198215SM from "assets/images/ClassLists/CL1982/CL198215SM.jpg";

//Large Images

import CL19821LG from "assets/images/ClassLists/CL1982/CL19821LG.jpg";
import CL19822LG from "assets/images/ClassLists/CL1982/CL19822LG.jpg";
import CL19823LG from "assets/images/ClassLists/CL1982/CL19823LG.jpg";
import CL19824LG from "assets/images/ClassLists/CL1982/CL19824LG.jpg";
import CL19825LG from "assets/images/ClassLists/CL1982/CL19825LG.jpg";
import CL19826LG from "assets/images/ClassLists/CL1982/CL19826LG.jpg";
import CL19827LG from "assets/images/ClassLists/CL1982/CL19827LG.jpg";
import CL19828LG from "assets/images/ClassLists/CL1982/CL19828LG.jpg";
import CL19829LG from "assets/images/ClassLists/CL1982/CL19829LG.jpg";
import CL198210LG from "assets/images/ClassLists/CL1982/CL198210LG.jpg";
import CL198211LG from "assets/images/ClassLists/CL1982/CL198211LG.jpg";
import CL198212LG from "assets/images/ClassLists/CL1982/CL198212LG.jpg";
import CL198213LG from "assets/images/ClassLists/CL1982/CL198213LG.jpg";
import CL198214LG from "assets/images/ClassLists/CL1982/CL198214LG.jpg";
import CL198215LG from "assets/images/ClassLists/CL1982/CL198215LG.jpg";

function Class1982() {
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
              Class of 1982
            </MKTypography>
            <MKTypography variant="body1" color="light" opacity={0.8}>
              Here are a few class lists of students that attended C of E Middle in 1982
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19821SM}
                lgimage={CL19821LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Crump Class",
                }}
                title="Mrs Crump Class"
                position={{ color: "info", label: "Mrs Crump's class list 1C 1982" }}
                description="Mrs Crump's class list 1C 1982"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19822SM}
                lgimage={CL19822LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Dennis Class",
                }}
                title="Miss Dennis Class "
                position={{ color: "info", label: "Miss Dennis class list 1D 1982" }}
                description="Miss Dennis class list 1D 1982"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19823SM}
                lgimage={CL19823LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Hawe's Class",
                }}
                title="Mr Hawe's Class"
                position={{ color: "info", label: "Mr Hawe's class lists for 1H 1982" }}
                description="Mr Hawe's class lists for 1H 1982"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19824SM}
                lgimage={CL19824LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Besley's Class",
                }}
                title="Mrs Besley's Class"
                position={{ color: "info", label: "Mrs Besley's class lists for 2B 1982" }}
                description="Mrs Besley's class lists for 2B 1982"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19825SM}
                lgimage={CL19825LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Googe's Class",
                }}
                title="Mrs Googe's Class"
                position={{ color: "info", label: "Mrs Googe's class lists for 2G 1982" }}
                description="Mrs Googe's class lists for 2G 1982"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19826SM}
                lgimage={CL19826LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Murdoch's Class",
                }}
                title="Mrs Murdoch's Class"
                position={{ color: "info", label: "Mrs Murdoch's class list for 2M 1982" }}
                description="Mrs Murdoch's class list for 2M 1982"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19827SM}
                lgimage={CL19827LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Goodships Class",
                }}
                title="Miss Goodships Class"
                position={{ color: "info", label: "Miss Goodships class list for 3G 1982" }}
                description="Miss Goodships class list for 3G 1982"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19828SM}
                lgimage={CL19828LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Walker's Class",
                }}
                title="Mr Walker's Class"
                position={{ color: "info", label: "Mr Walker's class list for 3W 1982" }}
                description=" Mr Walker's class list for 3W 1982"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19829SM}
                lgimage={CL19829LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Watkins Class",
                }}
                title="Mrs Watkins Class"
                position={{ color: "info", label: "Mrs Watkins class list for 3W 1982" }}
                description="Mrs Watkins class list for 3W 1982 "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL198210SM}
                lgimage={CL198210LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Forer's Class ",
                }}
                title="Miss Forer's Class "
                position={{ color: "info", label: " Miss Forer's class list for 4F 1982" }}
                description="Miss Forer's class list for 4F 1982 "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL198211SM}
                lgimage={CL198211LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Howe's Class",
                }}
                title="Miss Howe's Class"
                position={{ color: "info", label: "Miss Howe's class list for 4H 1982" }}
                description="Miss Howe's class list for 4H 1982 "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL198212SM}
                lgimage={CL198212LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Hutchinson's Class",
                }}
                title="Mrs Hutchinson's Class"
                position={{ color: "info", label: "Mrs Hutchinson's class list for 4H 1982" }}
                description="Mrs Hutchinson's class list for 4H 1982 "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL198213SM}
                lgimage={CL198213LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "September 1982 Year Two Group List",
                }}
                title="September 1982 Year Two Group List"
                position={{ color: "info", label: "Class lists for year 2 1982" }}
                description="Class lists for year 2 1982 "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL198214SM}
                lgimage={CL198214LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "September 1982 Year Third Group List",
                }}
                title="September 1982 Year Third Group List"
                position={{ color: "info", label: "Class lists for year 3 1982" }}
                description="Class lists for year 3 1982 "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL198215SM}
                lgimage={CL198215LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "September 1982 Year Fourth Group List",
                }}
                title="September 1982 Year Fourth Group List"
                position={{ color: "info", label: "Class lists for year 4 1982" }}
                description="Class lists for year 4 1982 "
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

export default Class1982;
