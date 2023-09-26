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
import cofeoverviewduring from "assets/images/historicSchool/cofeoverviewduring.png";
import cofeoverviewduringLarge from "assets/images/historicSchool/cofeoverviewduringLarge.png";

function Historic1() {
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
              Historic School View From The Air
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Church Of England Middle School After Demolition And during Construction
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={cofeoverviewduring}
              lgimage={cofeoverviewduringLarge}
              name="The School after demolition but during new construction phase"
              position={{ color: "info", label: "Head Teacher 1971-1982" }}
              description="The demolition of the school seemd to have been totally missed by the satelites and indeed the actual physicl demolition of the school happened relatively fast. I have a week of in October from the strains of work and saw the school had recetly been arsoned and in reading this article and the knowledge of the subsequent impending demolition sought to viit ti site before it was destroyed. I susbequently had to wait for my leave which to my horror had been the very week the bulldozers had moved in on the school and started to demolish the site. Having the week off I visited every day and took photos which are in the group of the susbsequent demolition. This all happened in a week and from one to the other the school was gone and therefore given the quick timing the satelites missed there opportunity to recored the school and it's demise from the air.<br/> <br/>
              
              The actualy demlition was quik but clearing the sie of it's former use took longer but still wasn't captured on the Satelites. The image was the very next satellite pass of the school which is very after the fact sha we say and very much into the final phase of the sites development. The satelite listed this image as April 2020 with the former image recorded being September 2019 and only shows the very earliest porta cabins removed.<br/><br/>
              
              If you would like to take a look for yourself the images are available on the Google Earth pro web service. Only use the proversion as this has the time sliders and the Googe Eart variant doesn't have this feature."
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Historic1;
