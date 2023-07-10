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
import HorizontalTeamCard2 from "examples/Cards/TeamCards/HorizontalTeamCard2";

// Small Images
import mrsHayles from "assets/images/Allteachers/mrsHayles.png";
import mrsCrump from "assets/images/Allteachers/mrsCrump.png";
import mrFelton from "assets/images/Dhteachers/mrFelton.png";
// Large Images
import mrFeltonLarge from "assets/images/Dhteachers/mrFeltonLarge.png";
import mrsCrumpLarge from "assets/images/Allteachers/mrsCrumpLarge.png";
import mrsHaylesLarge from "assets/images/Allteachers/mrsHaylesLarge.png";
//Facobook Clipping
import mathsFB from "assets/images/facebookClippings/mathsFB.jpg";

function Maths() {
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
      <Container>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              Maths Class
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              A journey mental journey into calclus and equations.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={mrsHayles}
              lgimage={mrsHaylesLarge}
              name="Why Do We Need to learn Maths At School"
              position={{ color: "info", label: "Mrs Hayles head of Maths" }}
              description="
The most frequent word one hears today in all education and business circles is STEM. We need to educate all students in the fields of science, technology, engineering and mathematics (STEM) in order to be competitive in the 21st century global economy. This issue has gained significant momentum over the last few years and is reaching critical mass but we still have a long way to go in raising the level of our education and student achievement in these fields in order to fulfill the increasing demand for qualified employees our corporations and universities need in the Information Age.<br/> <br/>

Why is Maths So Important?
No matter which way I look at it, math came first and foremost and was at the core of my success. Science, technology and engineering, so essential to the future success of our country, cannot thrive without practitioners having a solid mathematics foundation.<br/> <br/>

The importance of a solid mathematics education goes much beyond the current conversation of improved proficiency on test scores. I have used the word mathematics very frequently in my education and career but never until recently thought about the actual meaning of the word.<br/> <br/>

Once I looked from an Etymology perspective, I found interesting literal definitions in two ancient languages. In Greek, it is “learning.” In Hebrew, it’s root is “thinking.”

They tell us that mathematics gives us the critical ability to learn and think logically in any field of endeavor. The skills of learning today are more important than knowledge, which is so readily available on the Internet."
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
              smimage={mrsCrump}
              lgimage={mrsCrumpLarge}
              name="Mr Crump (Manche)"
              position={{ color: "info", label: "Maths teachers" }}
              description="Maths taught at C of E Middle school was fairly hum drum as it' and area of academic stalemate especially in a council/ church controled school as the sylabus an the need for students to attain basic maths skills were firmly laid out with books course work and key skills.<br/> <br/>
              
              The need to learn althou explained above gave studetns a basic understanding of the importance of maths in life and the need to be albe to basic maths as part of a job and indeed life. Does anyone in the group remember the maths classes as I'm sure basic algebra may send a shiver dowm most people's spine as it did mine."
            />
            <Grid container mt="30px">
              <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
                <MKTypography variant="h3" color="white"></MKTypography>
                <MKTypography variant="body2" color="white" opacity={0.8}></MKTypography>
              </Grid>
            </Grid>
            <HorizontalTeamCard2
              smimage={mrFelton}
              lgimage={mrFeltonLarge}
              name="Mr Felton"
              position={{ color: "info", label: "Maths teachers" }}
              description="We were well equipped at C of E to not only comete with other school but excel as we had various set for maths and although I could never claim to be a high flyer for maths I learn't the basics. Some students hated the thoght of becoming a student who would be moved up a maths set for fear of being out of their depth but agin other had the dissapointment of being downgraded and dropped a maths set.<br/> <br/>
              
              I do remember during the late eighities we had the opportunity to purchase a small batch of scientific calculators thats the school had purchased. Texas Instruments I believe and although expensive I think the most taxing thing I did to mine was to type shell oil in it. Yes you guessed it we were bottom set maths but someone had to be ??   "
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h2" color="white">
              Maths Classes
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Some of your thoughts about the Maths Class
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={3} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2 smimage={mathsFB} name="" position={{}} description="" />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Maths;
