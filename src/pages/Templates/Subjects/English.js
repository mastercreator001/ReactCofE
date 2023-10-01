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

// Images
import mrsMontgomery1 from "assets/images/Allteachers/mrsMontgomery1.jpg";
import mrHawes1 from "assets/images/Allteachers/mrHawes1.jpg";
import missForer3 from "assets/images/Allteachers/missForer3.jpg";
import englishClip from "assets/images/facebookClippings/englishClip.jpg";

function English() {
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
              English Class
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              A journey of literacy spelling and grammar.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={missForer3}
              lgimage={missForer3}
              name="Why Do We Need to learn English At School"
              position={{ color: "info", label: "Mr Forer head of English, Drama, and French" }}
              description="Whether you are taking an English class in middle school, high school college or graduate school, you may wonder why English matters, particularly if you plan to study or work in a field in which you think English is irrelevant. Possibly the most important reason to take an English class is its relevance to virtually all fields and careers.<br/> <br/>
              
              Wherever reading skills, speaking skills, writing or critical thinking is required, English class is useful.Analyzing literature in English class challenges you to understand characters motivations, cultural contexts, and the causes and effects of various actions in stories plot lines.<br/> <br/>
              
              Learning to analyze literature effectively not only teaches you how to better enjoy books, music and film, but also how to better understand the causes and effects in the world around you whether that is events taking place in your family, neighborhood or school. English learners can better understand the world with nuance and conviction."
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
              smimage={mrsMontgomery1}
              lgimage={mrsMontgomery1}
              name="Mrs Montgomery"
              position={{ color: "info", label: "English Teacher, French Teacher" }}
              description="Our English classes wern't my favourite class as we had lots of test on spellings and that may well mhave ben the reason why I'm not quite as good at spelling as I probably should be but we still try and keep pegging at it. Hence if you see a spellling mistake amoungst this text or a grammar slip up I am entirely to blame and don't hold my teachers responsiable at all.<br/> <br/>
              
              Spelling and grammar is super important in today's world but has somewhat taken a backseat given all the new slf correcting system we now have as you type. remember in the days we attended C Of E Middle School the most sophisticated technlogy we had was a BBC Computer or a scientific calculator.   "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={25}>
            <HorizontalTeamCard2
              smimage={mrHawes1}
              lgimage={mrHawes1}
              name="Mr Hawes"
              position={{ color: "info", label: "English Teacher, Sex Education Teacher" }}
              description="English the second most spoken language in the world and it still is growing fast in popularity, hence the natural born should really be able to use it correctly, I hope I'm not murdering it here as Miss Forer would not be happy if she were to read this.  "
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h2" color="white">
              English Class
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Some of your thoughts about English Class
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={3} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2 smimage={englishClip} name="" position={{}} description="" />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default English;
