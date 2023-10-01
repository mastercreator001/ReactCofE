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
import DefaultNavbar from "components/common/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard2 from "components/common/PrimaryTemplate";

// Images Small
import careTaker from "assets/images/Auxstaff/careTaker.png";
import careTaker1Sm from "assets/images/Auxstaff/careTaker1Sm.jpg";
// Images Large
import careTakerLarge from "assets/images/Auxstaff/careTakerLarge.png";
import careTaker1lg from "assets/images/Auxstaff/careTaker1lg.jpg";

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
              Caretakers at C of E Middle
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Mr Farrington and Mr Houghton
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={careTaker1Sm}
              lgimage={careTaker1lg}
              name="Mr Farringford"
              position={{ color: "info", label: "Mr Farringford Caretaker 1977-1981" }}
              description="He was the 1st caretaker of the school and as such would have entered the school at the pinicle of it's design phase no doubt taking on mutiple task for the saftey and continued opertaion of the school. We have little information on Mr Farringford but we have been told he was an amazing dancer and often enjoyed the school discos to strut his stuff. He had left the school prior to my attendance but I'm sure he was efficent having lasted so long maintaining the school and looking after it's general infrastructure. The photo was take in the mid to late 70's and placing an age on Mr Farringford of around 50's he almost certainly retired from the post. <br/> <br/>
                
                Entering a school when it is new is always a challenge would have been a big job as the time as everything would hve been super shinny and I'm certain like any caretaker would have wanted to keep it that way. The general role of a caretaker is to maintian the school and as such he would have performed odd jobs such as general maintenance and rubbish clearence and contractor support for jobs bigger than he was able to accomplish. I do rememeber being at the school shortly after the 1987 storm and having water coming into the building through the windows in the main cafeteria and as such Mr Farringford in his time would have insured the quick repair of such damage sustained.
                <br/> <br/>
                Does anyone remember Mr Farringford or have any memories of him they would like to share? please mail me in the comments and we will post a story for you."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={careTaker}
              lgimage={careTakerLarge}
              name="Mr Houghton"
              position={{ color: "info", label: "Mr Houghton the 2nd Caretaker" }}
              description="Ah Caretakers were in my mind the coolest as they weren't here to punish us poor students or perhaps torment us in the classroom but they were usually understanding, kind and helpful. That's been my experience, what about yours? Perhaps they weren't always as helpful or kind.
<br/> <br/>
For the opening of the school in 1971 we have Mr J.H.F Farrington who is listed as the schools caretaker and although I can't vouch for him as I wasn't there Im sure he was great, perhaps you were one of the first students and you can relate or have had some interactions with him? email us in the contact section and well get your stories added.
<br/> <br/>
With my snippet of time at the school we Had Mr Houghton at the school and he was a grey headed man with fleeting glimpses of him litter picking while we were all confined to class. He is in the picture and if he seems familiar, he might just be as he served the school for a number of years. Indeed, as I remember the school had a very small turnover of staff as it was a well-liked and relaxed environment to work in. Yes, I'm sure there are stories which we will never be privy to but sometimes that's the best course. Mr Houghton was a well-liked member of staff, and he was responsible for our favorite time of the year, yes Christmas. Well, the decorations never erected themselves, did they? yes this was firmly the caretakers doing and I'm sure as I did you enjoyed the time for the decorations to come up and the school became a wonderous place decorated in a wonderful theme of the season. I'm sure it was alot of his work but as kids we never asked questions, we just enjoyed being kids and never thought how and who.
<br/> <br/>
Mr Houghton was a keen photographer and was always taking snaps and gained quite the professional reputation as he was very accomplished aside from being a great caretaker, perhaps you have seen some of his photos?
<br/> <br/>
I feel sure there were many other caretakers I may have missed and for my oversight I am truly sorry but my sense and information about the school and it's working are only created from my memory so perhaps you can end me some stories pictures or perhaps guidance on who was here and what I have missed. Any help would be truly appreciated, and we will build the picture together of C OF E Middle School welly road."
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Caretakers1;
