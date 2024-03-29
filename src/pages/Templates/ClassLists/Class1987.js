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
import CL1983SM from "assets/images/ClassLists/CL1983/CL1983SM.jpg";

//Large Images

import CL19871LG from "assets/images/ClassLists/CL1987/CL19871LG.jpg";
import CL1983LG from "assets/images/ClassLists/CL1983/CL1983LG.jpg";

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
              Class of 1987
            </MKTypography>
            <MKTypography variant="body1" color="light" opacity={0.8}>
              Here are a few class lists of students that attended C of E Middle in 1987
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
                  label: "1st Years Class list",
                }}
                title="1st Years Class list"
                position={{ color: "info", label: "First Years class list 1987" }}
                description="First Years class list 1987"
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
                  label: "All Remaining clases for the remaining Years Lost",
                }}
                title="All Remaining clases for the remaining Years Lost"
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

export default Class1987;
