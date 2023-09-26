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

// Images
import advancedMap from "assets/images/school maps/advancedMap.jpg";
import advancedMaplarge from "assets/images/school maps/advancedMaplarge.jpg";

function Maps1() {
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
              School Maps
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
              smimage={advancedMap}
              lgimage={advancedMaplarge}
              name="This is an original map recreated"
              position={{
                color: "info",
                label: "A map showing an artists concept of landscaping ",
              }}
              description="This is a map from a promotionl brochure for the school, take note of the landscaping added to this map which shows it was a prefferential artist interpriation of what the school could look like in their opinion. The map is a hand drawn map and was used to show classroom layouts and prospective use of parking and scale of rooms for future use. <br/> <br/>
              
              The School eas of a new design and very moder in its both facilities and the layout with screens fitted through most classroom to make large open expanses in the school to utilise mass teaching shoul it be needed. In idea a brilliant concept but in pratice as most of you may remember a pain as you could generally speaking hear teachers and the classes next door. I would use Mr Walker as an example as his french class backed onto Mrs Reynolds class and it could be said the loudest teacher wins and often children who were at the back of the class were often hearing too classes.<br/> <br/>
              
              Hopefully by now you have had a good look at the map and sen the two missing things from the map that made the school the school. Firstly there is no provison for the school step and making of a clever earth retaining wall which was of amazing use at lunch breaks and the tennis courts also don't feature either. Perhaps this maps predates others. <br/> <br/>
              
              Could you imagine if we had had a large retaining wall in place instead of the wonderful steps, how many hours did you spend climbing and running up those steps. It was a sense of brilliance they were utilised as a support structure instead of a big block wall. They may have been in the design phase at the time but they clearly didn't make it onto this map."
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Maps1;
