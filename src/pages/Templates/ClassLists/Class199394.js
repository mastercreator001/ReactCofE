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

import CL1993941SM from "assets/images/ClassLists/CL199394/CL1993941SM.jpg";
import CL1993942SM from "assets/images/ClassLists/CL199394/CL1993942SM.jpg";
import CL1993943SM from "assets/images/ClassLists/CL199394/CL1993943SM.jpg";
import CL1993944SM from "assets/images/ClassLists/CL199394/CL1993944SM.jpg";
import CL1993946SM from "assets/images/ClassLists/CL199394/CL1993946SM.jpg";
import CL1993948SM from "assets/images/ClassLists/CL199394/CL1993948SM.jpg";
import CL19939410SM from "assets/images/ClassLists/CL199394/CL19939410SM.jpg";

import CL1993941LG from "assets/images/ClassLists/CL199394/CL1993941LG.jpg";
import CL1993942LG from "assets/images/ClassLists/CL199394/CL1993942LG.jpg";
import CL1993943LG from "assets/images/ClassLists/CL199394/CL1993943LG.jpg";
import CL1993944LG from "assets/images/ClassLists/CL199394/CL1993944LG.jpg";
import CL1993946LG from "assets/images/ClassLists/CL199394/CL1993946LG.jpg";
import CL1993948LG from "assets/images/ClassLists/CL199394/CL1993948LG.jpg";
import CL19939410LG from "assets/images/ClassLists/CL199394/CL19939410LG.jpg";

function Class199394() {
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
              Class of 1993/ 1994
            </MKTypography>
            <MKTypography variant="body1" color="light" opacity={0.8}>
              Here are a few class lists of students that attended C of E Middle in 1993/1994
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL1993941SM}
                lgimage={CL1993941LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Ball's Class",
                }}
                title="Mrs Ball's Class"
                position={{ color: "info", label: "Mrs Ball's class list 5B 1993/94" }}
                description="Mrs Ball's class list 5B 1993/94"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL1993942SM}
                lgimage={CL1993942LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Dennis Class",
                }}
                title="Miss Dennis Class"
                position={{ color: "info", label: "Miss Dennis class lists for 5D 1993/94" }}
                description="Miss Dennis class lists for 5D 1993/94"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL1993943SM}
                lgimage={CL1993943LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Reynolds Class",
                }}
                title="Mrs Reynolds Class"
                position={{ color: "info", label: "Mrs Reynolds class list 5R 1993/94" }}
                description="Mrs Reynolds class list 5R 1993/94"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL1993944SM}
                lgimage={CL1993944LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "7G's Class",
                }}
                title="7G's Class"
                position={{ color: "info", label: "7G's class lists for 7G 1993/94" }}
                description="7G's class lists for 7G 1993/94"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL1993946SM}
                lgimage={CL1993946LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Hawes Class",
                }}
                title="Mr Hawes Class"
                position={{ color: "info", label: "Mr Hawes class list for 6M 1993/94" }}
                description="Mr Hawes class list for 6M 1993/94"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL1993948SM}
                lgimage={CL1993948LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "7P's Class",
                }}
                title="7P's Class"
                position={{ color: "info", label: "7P's class list for 7P 1993/94" }}
                description=" 7P's class list for 7P 1993/94"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19939410SM}
                lgimage={CL19939410LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Walkers Class",
                }}
                title="Mr Walkers Class"
                position={{ color: "info", label: "Mr Walkers class list for 7W 1993/94" }}
                description=" Mr Walkers class list for 7W 1993/94"
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

export default Class199394;
