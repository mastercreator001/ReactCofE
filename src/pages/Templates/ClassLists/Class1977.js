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

import CL19771SM from "assets/images/ClassLists/CL1977/CL19771SM.jpg";
import CL19772SM from "assets/images/ClassLists/CL1977/CL19772SM.jpg";
import CL19773SM from "assets/images/ClassLists/CL1977/CL19773SM.jpg";
import CL19774SM from "assets/images/ClassLists/CL1977/CL19774SM.jpg";
import CL19775SM from "assets/images/ClassLists/CL1977/CL19775SM.jpg";
import CL19776SM from "assets/images/ClassLists/CL1977/CL19776SM.jpg";
import CL19777SM from "assets/images/ClassLists/CL1977/CL19777SM.jpg";
import CL19778SM from "assets/images/ClassLists/CL1977/CL19778SM.jpg";
import CL19779SM from "assets/images/ClassLists/CL1977/CL19779SM.jpg";
import CL197710SM from "assets/images/ClassLists/CL1977/CL197710SM.jpg";
import CL197711SM from "assets/images/ClassLists/CL1977/CL197711SM.jpg";
import CL197712SM from "assets/images/ClassLists/CL1977/CL197712SM.jpg";

//Large Images

import CL19771LG from "assets/images/ClassLists/CL1977/CL19771LG.jpg";
import CL19772LG from "assets/images/ClassLists/CL1977/CL19772LG.jpg";
import CL19773LG from "assets/images/ClassLists/CL1977/CL19773LG.jpg";
import CL19774LG from "assets/images/ClassLists/CL1977/CL19774LG.jpg";
import CL19775LG from "assets/images/ClassLists/CL1977/CL19775LG.jpg";
import CL19776LG from "assets/images/ClassLists/CL1977/CL19776LG.jpg";
import CL19777LG from "assets/images/ClassLists/CL1977/CL19777LG.jpg";
import CL19778LG from "assets/images/ClassLists/CL1977/CL19778LG.jpg";
import CL19779LG from "assets/images/ClassLists/CL1977/CL19779LG.jpg";
import CL197710LG from "assets/images/ClassLists/CL1977/CL197710LG.jpg";
import CL197711LG from "assets/images/ClassLists/CL1977/CL197711LG.jpg";
import CL197712LG from "assets/images/ClassLists/CL1977/CL197712LG.jpg";

function Class1977() {
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
              Class of 1977
            </MKTypography>
            <MKTypography variant="body1" color="light" opacity={0.8}>
              Here are a few faces that atteneded C of E Middle in 1977
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL19771SM}
                lgimage={CL19771LG}
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
                smimage={CL19772SM}
                lgimage={CL19772LG}
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
                smimage={CL19773SM}
                lgimage={CL19773LG}
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
                smimage={CL19774SM}
                lgimage={CL19774LG}
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
                smimage={CL19775SM}
                lgimage={CL19775LG}
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
                smimage={CL19776SM}
                lgimage={CL19776LG}
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
                smimage={CL19777SM}
                lgimage={CL19777LG}
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
                smimage={CL19778SM}
                lgimage={CL19778LG}
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
                smimage={CL19779SM}
                lgimage={CL19779LG}
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
                smimage={CL197710SM}
                lgimage={CL197710LG}
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
                smimage={CL197711SM}
                lgimage={CL197711LG}
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
                smimage={CL197712SM}
                lgimage={CL197712LG}
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
                smimage={CL197712SM}
                lgimage={CL197712LG}
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

export default Class1977;
