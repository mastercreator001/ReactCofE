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
import finalMapCTK from "assets/images/school maps/finalMapCTK.png";
import finalMapCTKLarge from "assets/images/school maps/finalMapCTKlarge.jpg";

function Maps3() {
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
              School Maps laterly C of E
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              All maps of the school are current for the date they relate too and although additions
              have been added they represent the base design of the school from 1971-2009.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={finalMapCTK}
              lgimage={finalMapCTKLarge}
              name="This the later map of the schools history"
              position={{ color: "info", label: "The map is approx 1990-2008" }}
              description="Ah now onto something more modern and out of my time period. As the popularity of the school continued to grow there was a need for more space and the additional building costs were prohibitive on the schools budget. The planning and additional space needed were a pressure the school needed to find a solution for and the obvious answer was to allow for mobile classrooms to be built. Modular in design and easy to place with the use of a crane the school could add classrooms in areas of the school quickly.<br/> <br/>
              
              The additional units added were to science classes making SC1 the original scienec class and almost adjacent to tis was the new class SC2 inside the new porta cabin, doubling the ability to teach scienec in the school. In total 5 new portacabins were added in various areas around the school site as you will see in the next map. <br/> <br/>
              
              This map is a copy of the map that was displayed in the school during the id 90's and early 2000's and as far as we are aware represents the final layout of the school on site until it's final demolition. The map may well have been photographed buy a student durnig the final farewell to the school open day which was changed with little  notice from a Friday to a Wednesday. Unfortunately it wasn't as well atteneded as it could have been save for this change so well done all of you who were able to attend it."
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Maps3;
