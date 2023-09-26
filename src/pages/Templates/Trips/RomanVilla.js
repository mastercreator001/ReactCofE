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
import romanVilla1sm from "assets/images/TripsAway/romanVilla1sm.jpg";
import romanVilla2sm from "assets/images/TripsAway/romanVilla2sm.jpg";
import romanVilla3sm from "assets/images/TripsAway/romanVilla3sm.jpg";
import romanVilla4sm from "assets/images/TripsAway/romanVilla4sm.jpg";
// Large Images
import romanVilla1lg from "assets/images/TripsAway/romanVilla1lg.jpg";
import romanVilla2lg from "assets/images/TripsAway/romanVilla2lg.jpg";
import romanVilla3lg from "assets/images/TripsAway/romanVilla3lg.jpg";
import romanVilla4lg from "assets/images/TripsAway/romanVilla4lg.jpg";
function RomanVilla() {
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
              Newport Roman Villa
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Various year trips.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={romanVilla1sm}
              lgimage={romanVilla1lg}
              name="Newport Roman Villa was a 1,700-year-old farmhouse. "
              position={{ color: "info", label: "Isle of Wight Council Heritage Service." }}
              description="As School trips were I believe we walked from the school to the villa in 2 by 2 down Wellington road and then the Mall Fitlering off at the Castle street Zebra crossing and down Trafalgar Road and onto the Villa. I<br/> <br/>
              It may be my memory or perhaps it was a Yellow Submarine bus that took us, do you rmember those at all. The Roam Villa is quite sall and filtering in and around it with all the 30 plus students was at times a feet on it's self alone. As we were at school we had the quiz sheets to fill out whih although boring still added the eductional touch to a day out off the school grounds. Do you remmeber how many times we visited the Villa ?"
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={romanVilla2sm}
              lgimage={romanVilla2lg}
              name="Newfield Hall"
              position={{
                color: "info",
                label: "Inside the Small Archelogical site.",
              }}
              description="When the owners of a nearby house sank new foundations for a garage in 1926, they discovered something that they found to be unusual. It was the site of a Roman farmhouse that had been built around the year 280 AD. Subsequent excavations revealed that this was a major find and told archaeologists more about the Roman way of life on the Isle of Wight. The Romans were fine designers and engineers and this is reflected in the remains of the villa, much of which is still in excellent condition. <br/> <br/>
              
              The hypocaust system graphically displays the famed Roman central heating and the villa even has the remains of a Roman bath which is in very good condition. The restoration team has painstakingly recreated scenes within the villa, and also outside by recreating a Roman herb garden as it would have been nearly 2000 years ago "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={romanVilla3sm}
              lgimage={romanVilla3lg}
              name="A Small Glimpse into an Intreging past "
              position={{
                color: "info",
                label: "Inside the recreated scenes of the 13th Century recreation.",
              }}
              description="Newport Roman Villa was constructed in about 280 AD with local stone including flint, chalk, limestone and greensand with the walls remaining almost at their original height. The building was roofed with massive slabs of Bembridge limestone which needed large roof timbers to support them.<br/> <br/>
              
              Many of these roof slabs had a distinctive shape, pierced with a single hole to take a nail, were found on the site. It is likely the building was the centre of a wealthy estate.<br/> <br/>

The discovery of fragments of window glass on the site shows that the building had some glazed windows, and remains of painted wall plaster during excavation show that at least some of the rooms had brightly coloured interior walls.<br/> <br/>

It features a well-preserved Roman bath suite with hypocaust underfloor heating.The furnace for heating the bath suite was outside the back wall of the villa at the end of the bath wing, and a slave would have been responsible for providing it with fuel. The hot air from the furnace passed through an arch at the base of the villa's back wall and circulated under the raised floors of the three rooms.<br/> <br/>

It remains unknown when life at the villa ended. During excavation, the skull of a woman in her early thirties was found in the corner of one of the rooms. It has been suggested that she was killed during a raid in an abandoned building. However it is also viewed that the abandonment of the island's villas by the middle of the fourth century could be due to economic hardship rather than the threat of attacks by Anglo-saxon raiders."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={romanVilla4sm}
              lgimage={romanVilla4lg}
              name="So Much To see and do in the Villa."
              position={{
                color: "info",
                label: "About The Museum.",
              }}
              description="The villa has since been reconstructed based on archaeological evidence featuring a Roman kitchen and Roman garden. It is now open to the public usually from around April to October. The villa regularly has over 5,000 visitors per year, with a further 1,400 school children taking part in educational visits. It is located on Cypress Road in Newport on the Isle of Wight in the middle of a residential development.<br/> <br/>

For 2009 the villa underwent a roof replacement project, involving essential repairs and replacement of the cover-building roof structure to protect it from further weathering. The project has been joint-funded by the Isle of Wight Council and English Heritage, which grant-aided over £40,000 towards costs. The roof has been designed to improve environmental conditions, reducing moisture levels which have contributed to a build-up of algae on the mosaics below."
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default RomanVilla;
