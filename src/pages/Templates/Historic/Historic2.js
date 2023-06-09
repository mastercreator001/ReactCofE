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
import HorizontalTeamCard2 from "examples/Cards/TeamCards/HorizontalTeamCard2";

// Images
import Overview1 from "assets/images/historicSchool/Overview1.png";
import Overview1Large from "assets/images/historicSchool/Overview1Large.png";

function Historic2() {
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
              Historic School View From The Air
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Church Of England Middle School Demolished With Overlay
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={Overview1}
              lgimage={Overview1Large}
              name="The School Sadly demolished with overlay of site plan"
              position={{ color: "info", label: "Head Teacher 1971-1982" }}
              description="TEXT TO BE ADDDED"
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Historic2;
