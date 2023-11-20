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

import CL19911SM from "assets/images/ClassLists/CL1991/CL19911SM.jpg";
import CL19912SM from "assets/images/ClassLists/CL1991/CL19912SM.jpg";
import CL19913SM from "assets/images/ClassLists/CL1991/CL19913SM.jpg";
import CL19914SM from "assets/images/ClassLists/CL1991/CL19914SM.jpg";
import CL19915SM from "assets/images/ClassLists/CL1991/CL19915SM.jpg";
import CL19916SM from "assets/images/ClassLists/CL1991/CL19916SM.jpg";
import CL1983SM from "assets/images/ClassLists/CL1983/CL1983SM.jpg";

//Large Images

import CL19911LG from "assets/images/ClassLists/CL1991/CL19911LG.jpg";
import CL19912LG from "assets/images/ClassLists/CL1991/CL19912LG.jpg";
import CL19913LG from "assets/images/ClassLists/CL1991/CL19913LG.jpg";
import CL19914LG from "assets/images/ClassLists/CL1991/CL19914LG.jpg";
import CL19915LG from "assets/images/ClassLists/CL1991/CL19915LG.jpg";
import CL19916LG from "assets/images/ClassLists/CL1991/CL19916LG.jpg";
import CL1983LG from "assets/images/ClassLists/CL1983/CL1983LG.jpg";

function Class1991() {
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
              Class of 1990
            </MKTypography>
            <MKTypography variant="body1" color="light" opacity={0.8}>
              Here are a few class lists of students that attended C of E Middle in 1990
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19911SM}
                lgimage={CL19911LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Chaloners Class ?",
                }}
                title="Mrs Chaloners Class ?"
                position={{ color: "info", label: "Mrs Chaloners class list 7C 1991" }}
                description="Mrs Chaloners class list 7C 1991"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19912SM}
                lgimage={CL19912LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Hawes Class",
                }}
                title="Mr Hawes Class"
                position={{ color: "info", label: "Mr Hawes class lists for 7H 1991" }}
                description="Mr Hawes class lists for 7H 1991"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19913SM}
                lgimage={CL19913LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Murdoch's Class",
                }}
                title="Mrs Murdoch's Class"
                position={{ color: "info", label: "Mrs Murdoch's class list 7M 1991" }}
                description="Mrs Murdoch's class list 7M 1991"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19914SM}
                lgimage={CL19914LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Watkin's Class ?",
                }}
                title="Mrs Watkin's Class ?"
                position={{ color: "info", label: "Mrs Watkin's class ? lists for 7W 1991" }}
                description="Mrs Watkin's class ? lists for 7W 1991"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19915SM}
                lgimage={CL19915LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Forer's Class",
                }}
                title="Miss Forer's Class"
                position={{ color: "info", label: "Miss Forer's class list for 8F 1991" }}
                description="Miss Forer's class list for 8F 1991"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19916SM}
                lgimage={CL19916LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "8P's ? Class",
                }}
                title="8P's ? Class"
                position={{ color: "info", label: "8P's class list for 8P 1991" }}
                description="8P's class list for 8P 1991"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL1983SM}
                lgimage={CL1983LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Class Lists Lost",
                }}
                title="Class Lists Lost"
                position={{
                  color: "info",
                  label:
                    "All Remaining clases for the remaining Years Lost. If you happen to know where these lists are please do contact me as we would love to share them in the group.",
                }}
                description="All Remaining clases for the remaining Years Lost. If you happen to know where these lists are please do contact me as we would love to share them in the group."
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

export default Class1991;
