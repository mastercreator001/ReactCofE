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
//import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Material Kit 2 React examples
import HorizontalTeamCard2 from "examples/Cards/TeamCards/HorizontalTeamCard2";

// Small Images

import missForer2 from "assets/images/Allteachers/missForer2.png";
import mrsReynolds1 from "assets/images/Allteachers/mrsReynolds1.png";
import mrWalker from "assets/images/Allteachers/mrWalker.png";

//Large Images
import mrsReynolds1Large from "assets/images/Allteachers/mrsReynolds1Large.png";
import missForer2Large from "assets/images/Allteachers/missForer2Large.png";
import mrWalkerLarge from "assets/images/Allteachers/mrWalkerLarge.png";
// FB clip
import FrenchFBClip from "assets/images/facebookClippings/FrenchFBClip.jpg";
function French() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={8}
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
          <Grid item xs={12} md={9} sx={{ mb: 3 }} mt={10}>
            <MKTypography variant="h3" color="white">
              French Class
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Working in different languages, learning and adapting.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={missForer2}
              lgimage={missForer2Large}
              name="French At School"
              position={{ color: "info", label: "Why did we have to learn" }}
              subheading="Miss Forer was a part time French teacher, Domestic Science teacher."
              description="
Until the 1960s foreign language education was mostly confined to grammar and independent schools. Following the introduction of comprehensive education in the 1960s the provision of language education at secondary level, mostly French, expanded and many primary schools introduced foreign languages as part of the 'Primary School Language Project'.However, by the 1970s the status of French in primary schools was in question with the inflencial report 'Primary French in the Balance' ensuring that 11 was the age that most began studying French.<br/> <br/>

As part of the National Curriculum, a Modern Languages working group was established in 1989. As a result all children at Key Stage 3 and Key Stage 4 were required to study a modern foreign language. However, concerns were expressed as to whether the time devoted to learning modern languages was sufficient for acquisition to take place and the extent to which French had become the dominant language.<br/> <br/>

The authoritative report Language Trends has been published annually since 2002 by the British Council.<br/> <br/>

In 2000, modular AS levels were introduced, to be taken in year 12, which counted 50% towards the final A-level result: it spread the risk of the exam result over two years, but any number of resit exams were possible."
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white"></MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}></MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={mrsReynolds1}
              lgimage={mrsReynolds1Large}
              name="Mrs Reynolds"
              position={{ color: "info", label: " French Teacher and form tutor " }}
              description=" French classes were both useful and given that France is our nearest country to speak the langauge or learn the langauge id often contested in relavance in schools today. In our scholl we had to learn French but I have to confess I wasn't any good at it? how about you did you enjoy french class at all ? as far as I remember the 3 teachers who taught in my time were Miss Forer Mr Walker ( advanced as I remember ) and Mrs Reynolds and each teacher had a  different style.<br/> <br/>
              
              Redading through the comments Mrs Reynolds had a rather large Flump collection and would reward students to memorise 10 words a week and the winner was as ou guessed it rewarded with a Flump. Mr Walker I couldn't really comment on but Miss Forer terrified me in French class as I wasn't a powerful speaker and to be trying to speak in a class let alone in a foreign language terried me. Although we had great fun in class I do remember being told off by Miss Forer for handing back a school book all dogeared on the subject of French. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={25}>
            <HorizontalTeamCard2
              smimage={mrWalker}
              lgimage={mrWalkerLarge}
              name="Mr Walker"
              position={{ color: "info", label: "French Teacher, Strong Irish accent" }}
              description="Mr walker was a one in a million a teacher who had a strong Irish accent wo taught french had to be a one off correct ? Mr walker was saly not one of my teachers but I'm sure we had interactions with him on occasion. Was he one of your form tutors as his character was a briliant man and teacher and he was also one of the teachers tp transition in Christ The King and left at a leaving ceremony at the main building in the late 2010's.<br/> <br/>
              
              I have in vein attempted to track Mr Walker down and see if he woould like to join the group but sadly he has now lef the island for locations unknown. If anoyone can help find himor have stories of him please do contct us on the contact us links. "
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h2" color="white">
              French Class
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Some of your thoughts about French Class
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={3} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2 smimage={FrenchFBClip} name="" position={{}} description="" />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default French;
