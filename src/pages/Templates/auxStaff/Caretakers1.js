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
import careTaker from "assets/images/Auxstaff/careTaker.png";
import careTakerLarge from "assets/images/Auxstaff/careTakerLarge.png";
import mrBlank from "assets/images/Dhteachers/mrBlank.png";

function Caretakers1() {
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
              Caretakers at C of E Middle
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Mr Houghton
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1} mt={10}>
              <HorizontalTeamCard1
                smimage={mrBlank}
                lgimage={mrBlank}
                name="Mr Farringford"
                position={{ color: "info", label: "Caretaker 1977-1981" }}
                description="TEXT TO BE ADDED FOR THE 1ST CARE TAKER ???"
              />
            </MKBox>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={careTaker}
              lgimage={careTakerLarge}
              name="Mr Houghton"
              position={{ color: "info", label: "Caretaker number 2" }}
              description="Ah Caretakers were in my mind the coolest as they weren't here to punish us poor students or perhaps torment us in the classroom but they were usually understanding, kind and helpful. That's been my experience, what about yours? Perhaps they weren't always as helpful or kind.

For the opening of the school in 1971 we have Mr J.H.F Farrington who is listed as the schools caretaker and although I can't vouch for him as I wasn't there Im sure he was great, perhaps you were one of the first students and you can relate or have had some interactions with him? email us in the contact section and well get your stories added.

With my snippet of time at the school we Had Mr Houghton at the school and he was a grey headed man with fleeting glimpses of him litter picking while we were all confined to class. He is in the picture and if he seems familiar, he might just be as he served the school for a number of years. Indeed, as I remember the school had a very small turnover of staff as it was a well-liked and relaxed environment to work in. Yes, I'm sure there are stories which we will never be privy to but sometimes that's the best course. Mr Houghton was a well-liked member of staff, and he was responsible for our favorite time of the year, yes Christmas. Well, the decorations never erected themselves, did they? yes this was firmly the caretakers doing and I'm sure as I did you enjoyed the time for the decorations to come up and the school became a wonderous place decorated in a wonderful theme of the season. I'm sure it was alot of his work but as kids we never asked questions, we just enjoyed being kids and never thought how and who.

Mr Houghton was a keen photographer and was always taking snaps and gained quite the professional reputation as he was very accomplished aside from being a great caretaker, perhaps you have seen some of his photos?

I feel sure there were many other caretakers I may have missed and for my oversight I am truly sorry but my sense and information about the school and it's working are only created from my memory so perhaps you can end me some stories pictures or perhaps guidance on who was here and what I have missed. Any help would be truly appreciated, and we will build the picture together of C OF E Middle School welly road."
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Caretakers1;
