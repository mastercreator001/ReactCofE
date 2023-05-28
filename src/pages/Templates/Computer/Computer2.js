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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import bbcComputer1 from "assets/images/ComputerImages/bbcComputer1.jpg";

function Computer1() {
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
            <HorizontalTeamCard
              image={bbcComputer1}
              name="Bbc Computers"
              position={{ color: "info", label: "A massive leap forward" }}
              description="The BBC was an extraordinary piece of kit and the school as a leader in the field"
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Computer1;
