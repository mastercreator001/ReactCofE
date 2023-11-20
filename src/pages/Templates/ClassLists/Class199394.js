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

import CL19901SM from "assets/images/ClassLists/CL1990/CL19901SM.jpg";
import CL19902SM from "assets/images/ClassLists/CL1990/CL19902SM.jpg";
import CL19903SM from "assets/images/ClassLists/CL1990/CL19903SM.jpg";
import CL19904SM from "assets/images/ClassLists/CL1990/CL19904SM.jpg";
import CL19905SM from "assets/images/ClassLists/CL1990/CL19905SM.jpg";
import CL19906SM from "assets/images/ClassLists/CL1990/CL19906SM.jpg";
import CL19907SM from "assets/images/ClassLists/CL1990/CL19907SM.jpg";
import CL19908SM from "assets/images/ClassLists/CL1990/CL19908SM.jpg";
import CL19909SM from "assets/images/ClassLists/CL1990/CL19909SM.jpg";
import CL199010SM from "assets/images/ClassLists/CL1990/CL199010SM.jpg";
import CL199011SM from "assets/images/ClassLists/CL1990/CL199011SM.jpg";
import CL199012SM from "assets/images/ClassLists/CL1990/CL199012SM.jpg";
import CL199013SM from "assets/images/ClassLists/CL1990/CL199013SM.jpg";
import CL199014SM from "assets/images/ClassLists/CL1990/CL199014SM.jpg";

//Large Images

import CL19901LG from "assets/images/ClassLists/CL1990/CL19901LG.jpg";
import CL19902LG from "assets/images/ClassLists/CL1990/CL19902LG.jpg";
import CL19903LG from "assets/images/ClassLists/CL1990/CL19903LG.jpg";
import CL19904LG from "assets/images/ClassLists/CL1990/CL19904LG.jpg";
import CL19905LG from "assets/images/ClassLists/CL1990/CL19905LG.jpg";
import CL19906LG from "assets/images/ClassLists/CL1990/CL19906LG.jpg";
import CL19907LG from "assets/images/ClassLists/CL1990/CL19907LG.jpg";
import CL19908LG from "assets/images/ClassLists/CL1990/CL19908LG.jpg";
import CL19909LG from "assets/images/ClassLists/CL1990/CL19909LG.jpg";
import CL199010LG from "assets/images/ClassLists/CL1990/CL199010LG.jpg";
import CL199011LG from "assets/images/ClassLists/CL1990/CL199011LG.jpg";
import CL199012LG from "assets/images/ClassLists/CL1990/CL199012LG.jpg";
import CL199013LG from "assets/images/ClassLists/CL1990/CL199013LG.jpg";
import CL199014LG from "assets/images/ClassLists/CL1990/CL199014LG.jpg";

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
                smimage={CL19901SM}
                lgimage={CL19901LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Ball's Class",
                }}
                title="Mrs Ball's Class"
                position={{ color: "info", label: "Mrs Ball's class list 5B 1990" }}
                description="Mrs Ball's class list 5B 1990"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19902SM}
                lgimage={CL19902LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Dennis Class",
                }}
                title="Miss Dennis Class"
                position={{ color: "info", label: "Miss Dennis class lists for 5D 1990" }}
                description="Miss Dennis class lists for 5D 1990"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19903SM}
                lgimage={CL19903LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Reynolds Class",
                }}
                title="Mrs Reynolds Class"
                position={{ color: "info", label: "Mrs Reynolds class list 5R 1990" }}
                description="Mrs Reynolds class list 5R 1990"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19904SM}
                lgimage={CL19904LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Chaloner's Class",
                }}
                title="Mrs Chaloner's Class"
                position={{ color: "info", label: "Mrs Chaloner's class lists for 6C 1990" }}
                description="Mrs Chaloner's class lists for 6C 1990"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19905SM}
                lgimage={CL19905LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "6H Class",
                }}
                title="6H Class"
                position={{ color: "info", label: "Mr?? class list for 6H 1990" }}
                description="Mr?? class list for 6H 1990"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19906SM}
                lgimage={CL19906LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Murdoch's Class",
                }}
                title="Mrs Murdoch's Class"
                position={{ color: "info", label: "Mrs Murdoch's class list for 6M 1990" }}
                description="Mrs Murdoch's class list for 6M 1990"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19907SM}
                lgimage={CL19907LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Chaloner's Class",
                }}
                title="Mrs Chaloner's Class"
                position={{ color: "info", label: "Mrs Chaloner's class list for 7C 1990" }}
                description="Mrs Chaloner's class list for 7C 1990"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19908SM}
                lgimage={CL19908LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Hawes Class",
                }}
                title="Mr Hawes Class"
                position={{ color: "info", label: "Mr Hawes class list for 7H 1990" }}
                description=" Mr Hawes class list for 7H 190"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19909SM}
                lgimage={CL19909LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "7M ? Class",
                }}
                title="7M ? Class"
                position={{ color: "info", label: "7M ?class list for 7M 1990" }}
                description="7M class list for 7M 1990"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL199010SM}
                lgimage={CL199010LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Walkers Class",
                }}
                title="Mr Walkers Class"
                position={{ color: "info", label: "Mr Walkers class list for 7W 1990" }}
                description=" Mr Walkers class list for 7W 1990"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL199011SM}
                lgimage={CL199011LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Brocks Class",
                }}
                title="Mrs Brocks Class"
                position={{ color: "info", label: "Mrs Brocks class list for 4B 1990" }}
                description="Mrs Brocks class list for 4B 1990"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL199012SM}
                lgimage={CL199012LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Forer's Class",
                }}
                title="Miss Forer's Class"
                position={{ color: "info", label: "Miss Forer's class list for 8F 1990" }}
                description="Miss Forer's class list for 8F 1990"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL199013SM}
                lgimage={CL199013LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "8P ? Class",
                }}
                title="8P ? Class"
                position={{ color: "info", label: "8P class list for 8P 1990" }}
                description="8P class list for 8P 1990"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL199014SM}
                lgimage={CL199014LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Tansley's Class",
                }}
                title="Mr Tansley's Class"
                position={{ color: "info", label: "Mr Tansley's class list for 8T 1990" }}
                description="Mr Tansley's class list for 8T 1990"
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
