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
import CL198013SM from "assets/images/ClassLists/CL1980/CL198013SM.jpg";
import CL198014SM from "assets/images/ClassLists/CL1980/CL198014SM.jpg";
import CL198015SM from "assets/images/ClassLists/CL1980/CL198015SM.jpg";

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
import CL198013LG from "assets/images/ClassLists/CL1980/CL198013LG.jpg";
import CL198014LG from "assets/images/ClassLists/CL1980/CL198014LG.jpg";
import CL198015LG from "assets/images/ClassLists/CL1980/CL198015LG.jpg";

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
              Class of 1981
            </MKTypography>
            <MKTypography variant="body1" color="light" opacity={0.8}>
              Here are a few class lists of students that attended C of E Middle in 1981
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL1980SM}
                lgimage={CL1980LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Audio Miss Forer 1",
                }}
                title="Miss Forer's class "
                position={{ color: "info", label: "Mrs Forer's Class list for 4F 1981" }}
                description="4F Miss Forer's Class list for 1981"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19801SM}
                lgimage={CL19801LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Audio Miss Forer 1",
                }}
                title="Mr Walker's Class"
                position={{ color: "info", label: "Mr Walkers class list for 4W 1981" }}
                description="Mr Walkers class list for 4W 1981"
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
                  label: "Miss Howe Class list 4H 1981",
                }}
                title="Miss Howe's Class "
                position={{ color: "info", label: "Miss Howe Class list 4H 1981" }}
                description="Miss Howe Class list 4H 1981"
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
                  label: "Miss Howe Class",
                }}
                title="Class lists for year 3 1981"
                position={{ color: "info", label: "Class lists for year 3 1981" }}
                description="September 1981 year 3 class"
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
                  label: "Class lists for year 2 1981",
                }}
                title="Class lists for year 2 1981"
                position={{ color: "info", label: "Class lists for year 2 1981" }}
                description="Class lists for year 2 1981"
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
                  label: "Class lists for year 4 1981",
                }}
                title="Class lists for year 4 1981"
                position={{ color: "info", label: "Class lists for year 4 1981" }}
                description="Class lists for year 4 1981"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19806SM}
                lgimage={CL19806LG}
                action={{ type: "internal", route: "/", color: "white", label: "" }}
                title="Audio Recording 6 with Miss Forer"
                position={{ color: "info", label: "Audio Recording 6 with Miss Forer" }}
                description=""
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19807SM}
                lgimage={CL19807LG}
                action={{ type: "internal", route: "/", color: "white", label: "" }}
                title="Audio Recording 7 with Miss Forer "
                position={{ color: "info", label: "Audio Recording 7 with Miss Forer" }}
                description="."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19808SM}
                lgimage={CL19808LG}
                action={{ type: "internal", route: "/", color: "white", label: "" }}
                title="Audio Recording 7 with Miss Forer "
                position={{ color: "info", label: "Audio Recording 7 with Miss Forer" }}
                description=" "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19809SM}
                lgimage={CL19809LG}
                action={{ type: "internal", route: "/", color: "white", label: "" }}
                title="Audio Recording 7 with Miss Forer "
                position={{ color: "info", label: "Audio Recording 7 with Miss Forer" }}
                description=" "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL198010SM}
                lgimage={CL198010LG}
                action={{ type: "internal", route: "/", color: "white", label: "" }}
                title="Audio Recording 7 with Miss Forer "
                position={{ color: "info", label: "Audio Recording 7 with Miss Forer" }}
                description=" "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL198011SM}
                lgimage={CL198011LG}
                action={{ type: "internal", route: "/", color: "white", label: "" }}
                title="Audio Recording 7 with Miss Forer "
                position={{ color: "info", label: "Audio Recording 7 with Miss Forer" }}
                description=" "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL198012SM}
                lgimage={CL198012LG}
                action={{ type: "internal", route: "/", color: "white", label: "" }}
                title="Audio Recording 7 with Miss Forer "
                position={{ color: "info", label: "Audio Recording 7 with Miss Forer" }}
                description=" "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL198013SM}
                lgimage={CL198013LG}
                action={{ type: "internal", route: "/", color: "white", label: "" }}
                title="Audio Recording 7 with Miss Forer "
                position={{ color: "info", label: "Audio Recording 7 with Miss Forer" }}
                description=" "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL198014SM}
                lgimage={CL198014LG}
                action={{ type: "internal", route: "/", color: "white", label: "" }}
                title="Audio Recording 7 with Miss Forer "
                position={{ color: "info", label: "Audio Recording 7 with Miss Forer" }}
                description=" "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL198015SM}
                lgimage={CL198015LG}
                action={{ type: "internal", route: "/", color: "white", label: "" }}
                title="Audio Recording 7 with Miss Forer "
                position={{ color: "info", label: "Audio Recording 7 with Miss Forer" }}
                description=" "
              />
            </MKBox>
          </Grid>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              Audio diaries of school teachers
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Memories in audio
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
