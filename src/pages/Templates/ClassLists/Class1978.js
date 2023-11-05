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

import CL19781SM from "assets/images/ClassLists/CL1978/CL19781SM.jpg";
import CL19782SM from "assets/images/ClassLists/CL1978/CL19782SM.jpg";
import CL19783SM from "assets/images/ClassLists/CL1978/CL19783SM.jpg";
import CL19784SM from "assets/images/ClassLists/CL1978/CL19784SM.jpg";
import CL19785SM from "assets/images/ClassLists/CL1978/CL19785SM.jpg";
import CL19786SM from "assets/images/ClassLists/CL1978/CL19786SM.jpg";
import CL19787SM from "assets/images/ClassLists/CL1978/CL19787SM.jpg";
import CL19788SM from "assets/images/ClassLists/CL1978/CL19788SM.jpg";
import CL19789SM from "assets/images/ClassLists/CL1978/CL19789SM.jpg";
import CL197810SM from "assets/images/ClassLists/CL1978/CL197810SM.jpg";
import CL197811SM from "assets/images/ClassLists/CL1978/CL197811SM.jpg";
import CL197812SM from "assets/images/ClassLists/CL1978/CL197812SM.jpg";

//Large Images

import CL19781LG from "assets/images/ClassLists/CL1978/CL19781LG.jpg";
import CL19782LG from "assets/images/ClassLists/CL1978/CL19782LG.jpg";
import CL19783LG from "assets/images/ClassLists/CL1978/CL19783LG.jpg";
import CL19784LG from "assets/images/ClassLists/CL1978/CL19784LG.jpg";
import CL19785LG from "assets/images/ClassLists/CL1978/CL19785LG.jpg";
import CL19786LG from "assets/images/ClassLists/CL1978/CL19786LG.jpg";
import CL19787LG from "assets/images/ClassLists/CL1978/CL19787LG.jpg";
import CL19788LG from "assets/images/ClassLists/CL1978/CL19788LG.jpg";
import CL19789LG from "assets/images/ClassLists/CL1978/CL19789LG.jpg";
import CL197810LG from "assets/images/ClassLists/CL1978/CL197810LG.jpg";
import CL197811LG from "assets/images/ClassLists/CL1978/CL197811LG.jpg";
import CL197812LG from "assets/images/ClassLists/CL1978/CL197812LG.jpg";

function Class1978() {
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
              Class of 1978
            </MKTypography>
            <MKTypography variant="body1" color="light" opacity={0.8}>
              Here are a few class lists of students that attended C of E Middle in 1978
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19781SM}
                lgimage={CL19781LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Hawes Class",
                }}
                title="Mr Hawes Class"
                position={{ color: "info", label: "Mr Hawes's Class list for 1H 1978" }}
                description="Mr Hawes's Class list for 1H 1978"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19782SM}
                lgimage={CL19782LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Manchee's Class",
                }}
                title="Miss Manchee's Class"
                position={{ color: "info", label: "Miss Manchee's Class list for 1M 1978" }}
                description="Miss Manchee's Class list for 1M 1978"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19783SM}
                lgimage={CL19783LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Watson's Class ",
                }}
                title="Miss Watson's Class  "
                position={{ color: "info", label: "Miss Watson's Class list for 1W 1978" }}
                description="Miss Watson's Class list for 1W 1978"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19784SM}
                lgimage={CL19784LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Besley's Class",
                }}
                title="Mrs Besley's Class"
                position={{ color: "info", label: "Mrs Besley's Class list for 2B 1978" }}
                description="Mrs Besley's Class list for 2B 1978"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19785SM}
                lgimage={CL19785LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Hutchinson's Class",
                }}
                title="Mrs Hutchinson's Class"
                position={{
                  color: "info",
                  label: "Mrs Hutchinson's Class lists for 2H 1978",
                }}
                description="Mrs Hutchinson's Class lists for 2H 1978"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19786SM}
                lgimage={CL19786LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Murdoch's Class",
                }}
                title="Mrs Murdoch's Class"
                position={{
                  color: "info",
                  label: "Mrs Murdoch's Class lists 2M 1978",
                }}
                description="Mrs Murdoch's Class lists 2M 1978"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19787SM}
                lgimage={CL19787LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Curry's Class",
                }}
                title="Miss Curry's Class"
                position={{ color: "info", label: "Miss Curry's Class list for 3C 1978" }}
                description="Miss Curry's Class list for 3C 1978"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19788SM}
                lgimage={CL19788LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Goodship's Class",
                }}
                title="Miss Goodship's Class "
                position={{ color: "info", label: "Miss Goodship's Class for 3C 1978" }}
                description="Miss Goodship's Class for 3C 1978"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19789SM}
                lgimage={CL19789LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Howe's Class",
                }}
                title="Miss Howe's Class"
                position={{ color: "info", label: "Miss Howe's Class for 3H 1978" }}
                description="Miss Howe's Class for 3H 1978 "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL197810SM}
                lgimage={CL197810LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Felton's Class ",
                }}
                title="Mr Felton's Class "
                position={{ color: "info", label: "Mr Felton's Class List for 4FE 1978" }}
                description="Mr Felton's Class List for 4FE 1978 "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL197811SM}
                lgimage={CL197811LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Besley's Class",
                }}
                title="Mr Besley's Class"
                position={{ color: "info", label: "Mr Besley's Class for 4B 1978" }}
                description="Mr Besley's Class for 4B 1978 "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL197812SM}
                lgimage={CL197812LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Forer's Class",
                }}
                title="Miss Forer's Class "
                position={{ color: "info", label: "Miss Forer's Class list for 4FO 1978" }}
                description="Miss Forer's Class list for 4FO 1978 "
              />
            </MKBox>
          </Grid>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              Class lists of 1978
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              To the class of 1978
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

export default Class1978;
