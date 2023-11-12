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

import CL19801SM from "assets/images/ClassLists/CL1980/CL19801SM.jpg";
import CL19802SM from "assets/images/ClassLists/CL1980/CL19802SM.jpg";
import CL19803SM from "assets/images/ClassLists/CL1980/CL19803SM.jpg";
import CL19804SM from "assets/images/ClassLists/CL1980/CL19804SM.jpg";
import CL19805SM from "assets/images/ClassLists/CL1980/CL19805SM.jpg";
import CL19806SM from "assets/images/ClassLists/CL1980/CL19806SM.jpg";
import CL19807SM from "assets/images/ClassLists/CL1980/CL19807SM.jpg";
import CL19808SM from "assets/images/ClassLists/CL1980/CL19808SM.jpg";
import CL19809SM from "assets/images/ClassLists/CL1980/CL19809SM.jpg";
import CL198010SM from "assets/images/ClassLists/CL1980/CL198010SM.jpg";
import CL198011SM from "assets/images/ClassLists/CL1980/CL198011SM.jpg";
import CL198012SM from "assets/images/ClassLists/CL1980/CL198012SM.jpg";

//Large Images

import CL19801LG from "assets/images/ClassLists/CL1980/CL19801LG.jpg";
import CL19802LG from "assets/images/ClassLists/CL1980/CL19802LG.jpg";
import CL19803LG from "assets/images/ClassLists/CL1980/CL19803LG.jpg";
import CL19804LG from "assets/images/ClassLists/CL1980/CL19804LG.jpg";
import CL19805LG from "assets/images/ClassLists/CL1980/CL19805LG.jpg";
import CL19806LG from "assets/images/ClassLists/CL1980/CL19806LG.jpg";
import CL19807LG from "assets/images/ClassLists/CL1980/CL19807LG.jpg";
import CL19808LG from "assets/images/ClassLists/CL1980/CL19808LG.jpg";
import CL19809LG from "assets/images/ClassLists/CL1980/CL19809LG.jpg";
import CL198010LG from "assets/images/ClassLists/CL1980/CL198010LG.jpg";
import CL198011LG from "assets/images/ClassLists/CL1980/CL198011LG.jpg";
import CL198012LG from "assets/images/ClassLists/CL1980/CL198012LG.jpg";

function Class1980() {
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
              Class of 1980
            </MKTypography>
            <MKTypography variant="body1" color="light" opacity={0.8}>
              Here are a few class lists of students that attended C of E Middle in 1980
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19801SM}
                lgimage={CL19801LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Hawes Class",
                }}
                title="Mr Hawes Class"
                position={{ color: "info", label: "Mr Hawes class list for 1H 1980" }}
                description="Mr Hawes class list for 1H 1980"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19802SM}
                lgimage={CL19802LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Manchee's Class",
                }}
                title="Mrs Manchee's Class "
                position={{ color: "info", label: "Mrs Manchee's class list for 1M 1980" }}
                description="Mrs Manchee's Class list for 1M 1980"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19803SM}
                lgimage={CL19803LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Watson's Class",
                }}
                title="Miss Watson's Class"
                position={{ color: "info", label: "Miss Watson's class lists for year 1W 1980" }}
                description="Miss Watson's Class lists for year 1W 1980"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19804SM}
                lgimage={CL19804LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Besley's Class",
                }}
                title="Mrs Besley's Class"
                position={{ color: "info", label: "Mrs Besley's class lists for year 2B 1980" }}
                description="Mrs Besley's class lists for year 2B 1980"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19805SM}
                lgimage={CL19805LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Hutchinson's Class",
                }}
                title="Mrs Hutchinson's Class"
                position={{
                  color: "info",
                  label: "Mrs Hutchinson's class list for 2H 1980",
                }}
                description="Mrs Hutchinson's class list for 2H 1980"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19806SM}
                lgimage={CL19806LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Murdoch's Class ",
                }}
                title="Mrs Murdoch's Class"
                position={{ color: "info", label: "Mrs Murdoch's class list for 2M 1980" }}
                description="Mrs Murdoch's class list for 2M 1980"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19807SM}
                lgimage={CL19807LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Goodships Class",
                }}
                title="Miss Goodships Class"
                position={{ color: "info", label: "Miss Goodships class list for 3G 1980" }}
                description="Miss Goodships class list for 3G 1980"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19808SM}
                lgimage={CL19808LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Googe's Class",
                }}
                title="Mrs Googe's Class "
                position={{ color: "info", label: "Mrs Googe's class list for 3G 1980" }}
                description="Mrs Googe's class list for 3G 1980 "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19809SM}
                lgimage={CL19809LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Wickens Class",
                }}
                title="Mrs Wickens Class"
                position={{ color: "info", label: "Mrs Wickens class list for 3W 1980" }}
                description="Mrs Wickens class list for 3W 1980 "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL198010SM}
                lgimage={CL198010LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Besley's Class",
                }}
                title="Mr Besley's Class"
                position={{ color: "info", label: "Mr Besley's class list for 4B 1980" }}
                description="Mr Besley's class list for 4B 1980 "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL198011SM}
                lgimage={CL198011LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Forer's Class",
                }}
                title="Miss Forer's Class"
                position={{ color: "info", label: "Miss Forer's class list for 4F 1980" }}
                description=" Miss Forer's class list for 4F 1980"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL198012SM}
                lgimage={CL198012LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Howe's Class",
                }}
                title="Miss Howe's Class"
                position={{ color: "info", label: "Miss Howe's class list for 4H 1980" }}
                description="Miss Howe's class list for 4H 1980 "
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

export default Class1980;
