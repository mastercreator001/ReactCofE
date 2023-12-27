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
import CharityWeekCard from "components/common/CharityWeekCard";

//Small Images

//import CL19741SM from "assets/images/ClassLists/CL1974/CL19741SM.jpg";
import CL19742SM from "assets/images/ClassLists/CL1974/CL19742SM.jpg";
import CL19743SM from "assets/images/ClassLists/CL1974/CL19743SM.jpg";
import CL19744SM from "assets/images/ClassLists/CL1974/CL19744SM.jpg";
import CL19745SM from "assets/images/ClassLists/CL1974/CL19745SM.jpg";
import CL19746SM from "assets/images/ClassLists/CL1974/CL19746SM.jpg";
import CL19747SM from "assets/images/ClassLists/CL1974/CL19747SM.jpg";
import CL19748SM from "assets/images/ClassLists/CL1974/CL19748SM.jpg";
import CL19749SM from "assets/images/ClassLists/CL1974/CL19749SM.jpg";
import CL197410SM from "assets/images/ClassLists/CL1974/CL197410SM.jpg";
import CL197411SM from "assets/images/ClassLists/CL1974/CL197411SM.jpg";
import CL197412SM from "assets/images/ClassLists/CL1974/CL197412SM.jpg";
import Louie1 from "assets/images/ClassLists/CL1974/Louie1.jpg";

//Large Images

//import CL19741LG from "assets/images/ClassLists/CL1974/CL19741LG.jpg";
import CL19742LG from "assets/images/ClassLists/CL1974/CL19742LG.jpg";
import CL19743LG from "assets/images/ClassLists/CL1974/CL19743LG.jpg";
import CL19744LG from "assets/images/ClassLists/CL1974/CL19744LG.jpg";
import CL19745LG from "assets/images/ClassLists/CL1974/CL19745LG.jpg";
import CL19746LG from "assets/images/ClassLists/CL1974/CL19746LG.jpg";
import CL19747LG from "assets/images/ClassLists/CL1974/CL19747LG.jpg";
import CL19748LG from "assets/images/ClassLists/CL1974/CL19748LG.jpg";
import CL19749LG from "assets/images/ClassLists/CL1974/CL19749LG.jpg";
import CL197410LG from "assets/images/ClassLists/CL1974/CL197410LG.jpg";
import CL197411LG from "assets/images/ClassLists/CL1974/CL197411LG.jpg";
import CL197412LG from "assets/images/ClassLists/CL1974/CL197412LG.jpg";

function ChildrensSociety() {
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
              School Charity Week Carisbrooke Castle
            </MKTypography>
            <MKTypography variant="body1" color="light" opacity={0.8}>
              Childrens Society at Carisbrooke Castle
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={10}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={Louie1}
                lgimage={Louie1}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Wright's Class",
                }}
                title="Louis Adaway"
                position={{ color: "info", label: "Just Taking a Casual Poop" }}
                description="Just Taking a Casual Poop"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={12} lg={10}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={CL19742SM}
                lgimage={CL19742LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Manchee's Class",
                }}
                title="Mrs Manchee's Class"
                position={{ color: "info", label: "Mrs Manchee's class lists for 1M 1974" }}
                description="Mrs Manchee's class lists for 1M 1974"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={10}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={CL19743SM}
                lgimage={CL19743LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Watson's Class",
                }}
                title="Miss Watson's Class"
                position={{ color: "info", label: "Miss Watson's class list 1W 1974" }}
                description="Miss Watson's class list 1W 1974"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={10}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={CL19744SM}
                lgimage={CL19744LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Monk's Class",
                }}
                title="Mr Monk's Class"
                position={{ color: "info", label: "Mr Monk's class lists for 2Mo 1974" }}
                description="Mr Monk's class lists for 2Mo 1974"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={10}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={CL19745SM}
                lgimage={CL19745LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Murdoch's Class",
                }}
                title="Mrs Murdoch's Class"
                position={{ color: "info", label: "Mrs Murdoch's class list for 2M 1974" }}
                description="Mrs Murdoch's class list for 2M 1974"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={10}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={CL19746SM}
                lgimage={CL19746LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Blythe's Class",
                }}
                title="Miss Blythe's Class"
                position={{ color: "info", label: "Miss Blythe's class list for 2B 1974" }}
                description="Miss Blythe's class list for 2B 1974"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={10}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={CL19747SM}
                lgimage={CL19747LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Besley's Class",
                }}
                title="Mr Besley's Class"
                position={{ color: "info", label: "Mr Besley's class list for 3B 1974" }}
                description="Mr Besley's class list for 3B 1974"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={10}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={CL19748SM}
                lgimage={CL19748LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Forer's Class",
                }}
                title="Miss Forer's Class"
                position={{ color: "info", label: "Miss Forer's class list for 3F 1974" }}
                description=" Miss Forer's class list for 3F 1974"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={10}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={CL19749SM}
                lgimage={CL19749LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Howe's Class",
                }}
                title="Miss Howe's Class"
                position={{ color: "info", label: "Miss Howe's class list for 3H 1974" }}
                description="Miss Howe's class list for 3H 1974"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={10}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={CL197410SM}
                lgimage={CL197410LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Felton's Class ",
                }}
                title="Mr Felton's Class "
                position={{ color: "info", label: "Mr Felton's class list for 4Fo 1974" }}
                description="Mr Felton's class list for 4Fo 1974"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={10}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={CL197411SM}
                lgimage={CL197411LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Miss Forer's Class",
                }}
                title="Miss Forer's Class"
                position={{ color: "info", label: "Miss Forer's class list for 4Fo 1974" }}
                description="Miss Forer's class list for 4Fo 1974"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={10}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={CL197412SM}
                lgimage={CL197412LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mr Besley's Class",
                }}
                title="Mr Besley's Class"
                position={{ color: "info", label: "Mr Besley's class list for 4B 1974" }}
                description="Mr Besley's class list for 4B 1974"
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

export default ChildrensSociety;
