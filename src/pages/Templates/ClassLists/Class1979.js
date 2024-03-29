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

import CL19791SM from "assets/images/ClassLists/CL1979/CL19791SM.jpg";
import CL19792SM from "assets/images/ClassLists/CL1979/CL19792SM.jpg";
import CL19793SM from "assets/images/ClassLists/CL1979/CL19793SM.jpg";
import CL19794SM from "assets/images/ClassLists/CL1979/CL19794SM.jpg";
import CL19795SM from "assets/images/ClassLists/CL1979/CL19795SM.jpg";
import CL19796SM from "assets/images/ClassLists/CL1979/CL19796SM.jpg";
import CL19797SM from "assets/images/ClassLists/CL1979/CL19797SM.jpg";
import CL19798SM from "assets/images/ClassLists/CL1979/CL19798SM.jpg";
import CL19799SM from "assets/images/ClassLists/CL1979/CL19799SM.jpg";
import CL197910SM from "assets/images/ClassLists/CL1979/CL197910SM.jpg";
import CL197911SM from "assets/images/ClassLists/CL1979/CL197911SM.jpg";
import CL197912SM from "assets/images/ClassLists/CL1979/CL197912SM.jpg";

//Large Images

import CL19791LG from "assets/images/ClassLists/CL1979/CL19791LG.jpg";
import CL19792LG from "assets/images/ClassLists/CL1979/CL19792LG.jpg";
import CL19793LG from "assets/images/ClassLists/CL1979/CL19793LG.jpg";
import CL19794LG from "assets/images/ClassLists/CL1979/CL19794LG.jpg";
import CL19795LG from "assets/images/ClassLists/CL1979/CL19795LG.jpg";
import CL19796LG from "assets/images/ClassLists/CL1979/CL19796LG.jpg";
import CL19797LG from "assets/images/ClassLists/CL1979/CL19797LG.jpg";
import CL19798LG from "assets/images/ClassLists/CL1979/CL19798LG.jpg";
import CL19799LG from "assets/images/ClassLists/CL1979/CL19799LG.jpg";
import CL197910LG from "assets/images/ClassLists/CL1979/CL197910LG.jpg";
import CL197911LG from "assets/images/ClassLists/CL1979/CL197911LG.jpg";
import CL197912LG from "assets/images/ClassLists/CL1979/CL197912LG.jpg";

function Class1979() {
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
              Class of 1979
            </MKTypography>
            <MKTypography variant="body1" color="light" opacity={0.8}>
              Here are a few class lists of students that attended C of E Middle in 1979
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19791SM}
                lgimage={CL19791LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Hawes Class",
                }}
                title="Mr Hawes Class"
                position={{ color: "info", label: "Mr Hawes Class list for 1H 1979" }}
                description="Mr Hawes Class list for 1H 1979"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19792SM}
                lgimage={CL19792LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Manchee's Class",
                }}
                title="Mrs Manchee's Class"
                position={{ color: "info", label: "Mrs Manchee's class list for 1M 1979" }}
                description="Mrs Manchee's class list for 1M 1979"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19793SM}
                lgimage={CL19793LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Watson's Class ",
                }}
                title="Miss Howe's Class "
                position={{ color: "info", label: "Miss Watson's Class list 1W 1979" }}
                description="Miss Watson's Class list 1W 1979"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19794SM}
                lgimage={CL19794LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Besley's Class",
                }}
                title="Mrs Besley's Class"
                position={{ color: "info", label: "Mrs Besley's Class lists for 2B 1979" }}
                description="Mrs Besley's Class lists for 2B 1979"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19795SM}
                lgimage={CL19795LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Hutchinson's Class",
                }}
                title="Mrs Hutchinson's Class"
                position={{ color: "info", label: "Mrs Hutchinson's Class lists for 2H 1979" }}
                description="Mrs Hutchinson's Class lists for 2H 1979"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19796SM}
                lgimage={CL19796LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Murdoch's Class",
                }}
                title="Mrs Murdoch's Class"
                position={{ color: "info", label: "Mrs Murdoch's Class lists for 2M 1979" }}
                description="Mrs Murdoch's Class lists for 2M 1979"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19797SM}
                lgimage={CL19797LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Goodship's Class",
                }}
                title="Miss Goodship's Class"
                position={{ color: "info", label: "Mrs Goodships Class list for 3G 1979" }}
                description="Mrs Goodships Class list for 3G 1979"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19798SM}
                lgimage={CL19798LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Googe's Class",
                }}
                title="Mrs Googe's Class "
                position={{ color: "info", label: "Mrs Googe's Class list for 3G 1979" }}
                description="Mrs Googe's Class list for 3G 1979"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19799SM}
                lgimage={CL19799LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Howe's Class",
                }}
                title="Miss Howe's Class"
                position={{ color: "info", label: "Miss Howe's Class List for 3H 1979" }}
                description=" Miss Howe's Class List for 3H 1979"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL197910SM}
                lgimage={CL197910LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Felton's Class",
                }}
                title="Mr Felton's Class "
                position={{ color: "info", label: "Mr Felton's Class List for 4FE 1979" }}
                description="Mr Felton's Class List for 4FE 1979 "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL197911SM}
                lgimage={CL197911LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Besley's Class ",
                }}
                title="Mr Besley's Class "
                position={{ color: "info", label: "Mr Besley's Class List for 4B 1979" }}
                description="Mr Besley's Class List for 4B 1979 "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL197912SM}
                lgimage={CL197912LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Forer's Class",
                }}
                title="Miss Forer's Class"
                position={{ color: "info", label: "Miss Forer's Class List for 4F 1979" }}
                description="Miss Forer's Class List for 4F 1979 "
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

export default Class1979;
