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
import HorizontalTeamCard1 from "examples/Cards/TeamCards/HorizontalTeamCard1";

// Images
import schoolClosing4 from "assets/images/historicSchool/schoolClosing4.png";
import schoolClosing4Large from "assets/images/historicSchool/schoolClosing4Large.png";

function Historic3() {
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
              Historic School View From Entrance Pathway
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Church Of England Middle School Awaiting Demolition
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={schoolClosing4}
              lgimage={schoolClosing4Large}
              name="The School receives It's first set of equiptment to allow the demolition crews to start stripping the internal of the building."
              position={{ color: "info", label: "September 2018 Schools Awaits demolition Crews" }}
              description="The school looks a little like any other day but sadly this is an image of the school closed and awaiting it's demolition day. See more demolition pictures in the demolition section. Await the arris fencing to arrive and descure the perimeter of the site and then the destruction begins. The school is like any other project and need to await the arrival of gas engineers and electrical engineers for the school to be safe before proper demolition started. Im afraid to say I wasn't there for the start of the demolition of the school but I did captire plenty of moments in the progression of the schools destruction. Despite the sda event I was sad and happy to not have witnessed the school in it's final years as apparently the school became in the words of a teacher very ramshackle affair. Sad to see C Of E fall but progress of sorts I guess  "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Historic3;
