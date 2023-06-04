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
import Tripsout1 from "assets/images/TripsAway/Tripsout1.jpg";
import Tripsout2 from "assets/images/TripsAway/Tripsout2.jpg";
import Tripsout3 from "assets/images/TripsAway/Tripsout3.jpg";
import Tripsout4 from "assets/images/TripsAway/Tripsout4.jpg";
import bradingFBclipping from "assets/images/facebookClippings/bradingFBclipping.jpg";

function BradingandVarious() {
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
              Bradng Walks about the Village
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Various year trips random walks about the place.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={Tripsout1}
              name="Usually when other year groups are away and to stop kids staying in school. "
              position={{ color: "info", label: "" }}
              description="The school operated a policy of if your child was unable to attend a trip perhaps due to personal reason at home then they would still be attending school. However there seem to have been varying options. You have to understand that the schoo would in some occasions be uncocupied by an entire year group amounting to nearly 1 quater of the school and with this options needed to utilised to be entertain those few reminig students. One of the said options was to undertake a series of walks and the one I will refer to tody was the Brading walks. It's unclear as to how many students remained on site and as to when the routine was used to transport them to their locations but i'd imagine a yellow bus would be the order of the day. The walks consisted as series of site to visit each day and general nature observations were undertaken and observed. One teacher who has been involved in this assigment was Miss Forer. We May have a picture or two of such occasions. We have recently spoken to Mr Felton who indicated to me that the Brading town hall may have been utilised for just such an occasion as a base.   "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={Tripsout2}
              // name="Brading Marshes perhaps?"
              position={{
                color: "info",
                label:
                  "Perhaps you can identify the picture or the students within it and show us what your remember about the Brading excursions or maybe the picture is of aothr location on the Island all together. By the looks of it the lady on the left is probably the teacher and the students may seem familur.  ",
              }}
              description=""
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={Tripsout3}
              name=" "
              position={{
                color: "info",
                label: "About Brading town",
              }}
              description="From early times, Brading ranked as an important Island port. The ancient name of Brerdynge, from which 'Brading' is derived, probably meant the people living by the ridge of the Downs, and dates from at least 683.

The Roman Villa south of the town, and Roman relics discovered locally, indicate that this was an important seaport 2,000 years ago. Signs of prehistoric activity have also been found on Brading Down.

History records that St Wilfrid came to the island during the 680s, landed at Brading, preached there to the islanders, and began the conversion of the Island. Bede states that King Caedwalla of Wessex killed the pagan population with merciless slaughter and replaced them with his own Christian followers dedicating a quarter of the Isle of Wight to Wilfrid and the Church. Wilfrid would thus have been literally preaching to the converted because everyone else was dead. This legend was illustrated by a tableau at the Waxworks."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={Tripsout4}
              name="Brading History"
              position={{
                color: "info",
                label: "Royal charter and governance",
              }}
              description="
Brading was first granted a charter in 1280, unusually for the time directly from King Edward I, rather than the Lord of the Isle (who was its private owner). This led to it being known as the 'King's Town'.

The charter granted to Brading by Edward VI in 1548 refers to the previous charter granted by Edward I. This charter allowed the town to hold two annual fairs. Nowadays the fair is called Brading Day and is held over the first weekend in July.

Because of its status as a town, Brading has a mayor and an elected town council.

In medieval times the town was governed by the Steward, Bailiffs and 13 Jurats, and returned two MPs to the Westminster Parliament. Now the town is a part of the Isle of Wight parliamentary constituency."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={bradingFBclipping}
              name="What you have been Saying"
              position={{
                color: "info",
                label: "extract from the C Of E group Memory Corner",
              }}
              description="What you have been saying about the school trips away and the options left open having not been able to go. "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BradingandVarious;
