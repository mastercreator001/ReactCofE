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
import finalMapCTK1 from "assets/images/school maps/finalMapCTK1.png";
import finalMapCTK2 from "assets/images/school maps/finalMapCTK2.png";

function Maps4() {
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
              School Maps SVG recreation of the schools internal layout.
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Full site view
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={finalMapCTK1}
              name="This is remade addition of an original map recreated"
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="The school I it's final phse of existence was utilised by the new amalgmation of C of E Middle and the former A.B.K school. C of E was utilised during heavy construction works on the abk site and called the lower campus. The map you see is one of the final internal layouts of the school prior to it's decomissioning and handing over to contractors for demolition."
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              School Maps SVG recreation of the schools internal layout.
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Close up of the buildings only
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={finalMapCTK2}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="A close up of the map above showing the schools internal layout in it's final years operating as Christ The Kings lower campus prior to demolition. "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Maps4;
