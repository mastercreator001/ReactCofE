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

// Small Images
import marketSquaresm from "assets/images/TripsAway/marketSquaresm.jpg";
import northCrayHousesm from "assets/images/TripsAway/northCrayHousesm.jpg";
import Pendeansm from "assets/images/TripsAway/Pendeansm.jpg";
import TitchfieldMarketHallsm from "assets/images/TripsAway/TitchfieldMarketHallsm.jpg";
import SingletonMapsm from "assets/images/SingletonGallery/SingletonMapsm.png";

// Large Images
import marketSquarelg from "assets/images/TripsAway/marketSquarelg.jpg";
import northCrayHouselg from "assets/images/TripsAway/northCrayHouselg.jpg";
import Pendeanlg from "assets/images/TripsAway/Pendeanlg.jpg";
import TitchfieldMarketHalllg from "assets/images/TripsAway/TitchfieldMarketHalllg.jpg";
import SingletonMaplg from "assets/images/SingletonGallery/SingletonMaplg.png";

function Singleton() {
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
              Singleton Trip.
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Singleton as we called it or The Weald and Downland Open Air Museum.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={marketSquaresm}
              lgimage={marketSquarelg}
              name="Singleton"
              position={{ color: "info", label: "Weald and Downland Living Museum" }}
              description="The Weald and Downland Living Museum (known as the Weald and Downland Open Air Museum until January 2017) is an open-air museum in Singleton, West Sussex. The museum is a registered charity.<br/> <br/>

The museum covers 40 acres (16 ha), with over 50 historic buildings dating from 950AD to the 19th century, along with gardens, farm animals, walks and a mill pond.<br/> <br/>

The principal aim at the foundation of the museum was to establish a centre that could rescue representative examples of vernacular buildings from South East England, and thereby to generate increased public awareness and interest in the built environment.<br/> <br/>

The museum principally promotes the retention of buildings on their original sites unless there is no alternative, and encourages an informed and sympathetic approach to their preservation and continuing use.<br/> <br/>

The buildings at the museum were all threatened with destruction and, as it was not possible to find a way to preserve them at their original sites, they were carefully dismantled, conserved and rebuilt in their historical form at the museum.<br/> <br/>

These buildings, plus two archaeological reconstructions, help the museum bring to life the homes, farmsteads and rural industries of the last 950 years. Along with the buildings, there are hands-on activities like cooking and weaving and a number of yearly activities including seasonal shows historic gardens weekend and Tree Dressing."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={northCrayHousesm}
              lgimage={northCrayHouselg}
              name="History"
              position={{ color: "info", label: "Site History 1967 onwards" }}
              description="The Weald and Downland Open Air Museum was launched in 1967 by a group of enthusiasts led by the museum's founder, the late Dr. J.R. Armstrong MBE. The land for the museum was gifted by a local landowner, Edward James of West Dean at a peppercorn rent. The objective was to rescue vernacular buildings that would otherwise have been demolished. The museum first opened to the public on 5 September 1970.<br/> <br/>

The principle of an open-air museum was well established in Scandinavia as a way to create a three-dimensional setting for explaining the way of living or working. Open-air museums allowed the buildings to give context to the techniques, equipment, furnishings, clothes and art of the period."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={Pendeansm}
              lgimage={Pendeanlg}
              name="Singleton attractions"
              position={{ color: "info", label: "Longport Farmhouse" }}
              description="
The Longport Farmhouse is a typical Kent farmhouse and was formerly located at Folkestone, Kent, but was threatened by the construction of the Channel Tunnel. The earliest part of the building dates from 1554 and was originally attached to a medieval hall, which no longer exists.<br/> <br/>

From the late 16th century through to the early 20th century various extensions and alterations were made. The farmhouse was dismantled in 1992 by a team from the museum and the Canterbury Archaeological Trust and reconstructed in 1995. During the reconstruction the museum tried to reconstruct faithfully the historic building as it came into the 20th century, with all its phases of alteration.<br/> <br/>

However, the 17th-century chimney stack was not reconstructed, but was dismantled and recorded in such a way that it could be reconstructed in the future. In leaving it out the museum created an open space in the building to allow it to serve as the entrance and shop, and to better demonstrate the historic development of the farmhouse. The farmhouse also serves as offices for the museum."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={TitchfieldMarketHallsm}
              lgimage={TitchfieldMarketHalllg}
              name="Many many live exhibitions"
              position={{
                color: "info",
                label: "Upper Hall",
              }}
              description="The Upper Hall from Crawley, in front of which stands the Market Hall.
This building dates from the 15th century and has a long, open room on the first floor, which probably served as a communal meeting place. It was originally built at Crawley, Sussex, behind Tree House—the old manor house of Crawley.<br/> <br/>

The building was threatened with demolition due to an extension to an office building. Of the original four bays, two complete bays remained, plus a third of another. The original building would have been some 36 feet (10.97 m) long. The original roof covering would have been Horsham Slab, which was replaced when the building was re-erected at the museum. Only the centre part of the present building is the original. The ends are modern reconstructions replicating contemporary practice.<br/> <br/>

The building is used as the museum's library and meeting place and is not normally open to the public.[55] The Worshipful Company of Drapers donated £5,000, which was used to part-fund the dismantling and re-erection of the building at the museum."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SingletonMapsm}
              lgimage={SingletonMaplg}
              name="Have you seen the map of the site."
              position={{
                color: "info",
                label: "Weald And Downland Museum map",
              }}
              description="Visit the site and plan your return visit with your family perhaps."
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Singleton;
