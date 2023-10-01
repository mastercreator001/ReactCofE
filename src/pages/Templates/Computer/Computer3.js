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

// Routes
import routes from "routes";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard2 from "components/common/PrimaryTemplate";

// Images Small
import bbcComputer3 from "assets/images/ComputerImages/bbcComputer3.png";
// Images Large
import bbcComputer3Large from "assets/images/ComputerImages/bbcComputer3Large.png";

function Computer3() {
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
              smimage={bbcComputer3}
              lgimage={bbcComputer3Large}
              name="Bbc Computers"
              position={{ color: "info", label: "A massive leap forward" }}
              description="The upgraded model with casette access on the keyboard beacme the new must have piece of equiptment but it was still years ahed as the fast loading format through the onboard casette made programs relatively simple to load. The Acorn Electronic was an equlivent but used a three wire connected audio cassette system to load the programs and they were considerbly more likely to crash and given the already exteneded load time more outdated as the new Casette loading BBC have arrived at the school became the must have tool for the modernising school. "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Computer3;
