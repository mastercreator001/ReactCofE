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
import CL1981SM from "assets/images/ClassLists/CL1981/CL1981SM.jpg";
import CL19811SM from "assets/images/ClassLists/CL1981/CL19811SM.jpg";
import CL19812SM from "assets/images/ClassLists/CL1981/CL19812SM.jpg";
import CL19813SM from "assets/images/ClassLists/CL1981/CL19813SM.jpg";
import CL19814SM from "assets/images/ClassLists/CL1981/CL19814SM.jpg";
import CL19815SM from "assets/images/ClassLists/CL1981/CL19815SM.jpg";
import CL19816SM from "assets/images/ClassLists/CL1981/CL19816SM.jpg";
import CL19817SM from "assets/images/ClassLists/CL1981/CL19817SM.jpg";
import CL19818SM from "assets/images/ClassLists/CL1981/CL19818SM.jpg";
import CL19819SM from "assets/images/ClassLists/CL1981/CL19819SM.jpg";
import CL198110SM from "assets/images/ClassLists/CL1981/CL198110SM.jpg";
import CL198111SM from "assets/images/ClassLists/CL1981/CL198111SM.jpg";
import CL198112SM from "assets/images/ClassLists/CL1981/CL198112SM.jpg";
import CL198113SM from "assets/images/ClassLists/CL1981/CL198113SM.jpg";
import CL198114SM from "assets/images/ClassLists/CL1981/CL198114SM.jpg";
import CL198115SM from "assets/images/ClassLists/CL1981/CL198115SM.jpg";

//Large Images
import CL1981LG from "assets/images/ClassLists/CL1981/CL1981LG.jpg";
import CL19811LG from "assets/images/ClassLists/CL1981/CL19811LG.jpg";
import CL19812LG from "assets/images/ClassLists/CL1981/CL19812LG.jpg";
import CL19813LG from "assets/images/ClassLists/CL1981/CL19813LG.jpg";
import CL19814LG from "assets/images/ClassLists/CL1981/CL19814LG.jpg";
import CL19815LG from "assets/images/ClassLists/CL1981/CL19815LG.jpg";
import CL19816LG from "assets/images/ClassLists/CL1981/CL19816LG.jpg";
import CL19817LG from "assets/images/ClassLists/CL1981/CL19817LG.jpg";
import CL19818LG from "assets/images/ClassLists/CL1981/CL19818LG.jpg";
import CL19819LG from "assets/images/ClassLists/CL1981/CL19819LG.jpg";
import CL198110LG from "assets/images/ClassLists/CL1981/CL198110LG.jpg";
import CL198111LG from "assets/images/ClassLists/CL1981/CL198111LG.jpg";
import CL198112LG from "assets/images/ClassLists/CL1981/CL198112LG.jpg";
import CL198113LG from "assets/images/ClassLists/CL1981/CL198113LG.jpg";
import CL198114LG from "assets/images/ClassLists/CL1981/CL198114LG.jpg";
import CL198115LG from "assets/images/ClassLists/CL1981/CL198115LG.jpg";

function Class1981() {
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
              Classes of 1981
            </MKTypography>
            <MKTypography variant="body1" color="light" opacity={0.8}>
              Here are a few faces that atteneded C of E Middle in 1981
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <ClassListCard
                smimage={CL1981SM}
                lgimage={CL1981LG}
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
                smimage={CL19811SM}
                lgimage={CL19811LG}
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
                smimage={CL19812SM}
                lgimage={CL19812LG}
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
                smimage={CL19813SM}
                lgimage={CL19813LG}
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
                smimage={CL19814SM}
                lgimage={CL19814LG}
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
                smimage={CL19815SM}
                lgimage={CL19815LG}
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
                smimage={CL19816SM}
                lgimage={CL19816LG}
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
                smimage={CL19817SM}
                lgimage={CL19817LG}
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
                smimage={CL19818SM}
                lgimage={CL19818LG}
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
                smimage={CL19819SM}
                lgimage={CL19819LG}
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
                smimage={CL198110SM}
                lgimage={CL198110LG}
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
                smimage={CL198111SM}
                lgimage={CL198111LG}
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
                smimage={CL198112SM}
                lgimage={CL198112LG}
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
                smimage={CL198113SM}
                lgimage={CL198113LG}
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
                smimage={CL198114SM}
                lgimage={CL198114LG}
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
                smimage={CL198115SM}
                lgimage={CL198115LG}
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

export default Class1981;
