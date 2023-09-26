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
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard2 from "examples/Cards/TeamCards/HorizontalTeamCard2";

// Images Small
import floopyDisc from "assets/images/ComputerImages/floopyDisc.png";
// Images Large
import floopyDiscLarge from "assets/images/ComputerImages/floopyDiscLarge.png";

function Computer4() {
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
            <MKTypography variant="h3" color="white">
              Computer Programming
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Computer programming at C Of E Middle School
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={floopyDisc}
              lgimage={floopyDiscLarge}
              name="Bbc Computers"
              position={{ color: "info", label: "A massive leap forward" }}
              description="Floopy Discs we're quite the innovation in their day, do you remember sharing games at lunch time ?. The introduction of the floop disc made the loading of games faster and the ability to store more information and to also be able to do it so much faster than anyting else on the market. We may well have not had word processing classes but they would not have been far behind as familarity with computers was and is the future so having an ability to store data goes hand in hand with the march of the computer age. "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Computer4;
