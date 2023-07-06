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

//Small Images
import mrsPassmore from "assets/images/Allteachers/mrsPassmore.png";
import MRODsm from "assets/images/SubjectsArt/MRODlg.jpg";

//Large Images
import mrsPassmoreLarge from "assets/images/Allteachers/mrsPassmoreLarge.png";
import MRODlg from "assets/images/SubjectsArt/MRODlg.jpg";
import mrBlank from "assets/images/Dhteachers/mrBlank.png";
//Fb Clip
import artFBClip from "assets/images/facebookClippings/artFBClip.jpg";

function Art() {
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
          <Grid item xs={12} md={9} sx={{ mb: 3 }} mt={10}>
            <MKTypography variant="h3" color="white">
              Art Class
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Art Creating something inspiring from nothing more than the basics
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MRODsm}
              lgimage={MRODlg}
              name="Mr O'Donnaghue"
              position={{ color: "info", label: "Art teacher 1971-1984" }}
              description="WHY IS ART EDUCATION IMPORTANT?
Anyone who’s passionate about the arts recalls formative moments of experiencing a work of art pushing through a creative challenge. When we’re exposed to remarkable artworks or have opportunities to create, we find that art is crucial to individual growth and development and can even impact our health.

A literature review from Frontiers in Psychology outlined several studies linking aesthetic experiences with broad improvements in subjects’ emotional states that promote physical and psychological well-being. Giving learners the time, space, and materials for creative expression can lower stress, improve memory, and make them feel more socially connected. Instructors can build their careers on bringing those experiences to students in a variety of settings, like galleries, museums, or events organized by nonprofit and community organizations.

Appreciation for art also makes a significant difference in people’s lives on a macro level. Entire societies may stand to gain from an investment in the arts. Drawing on data from the General Social Survey, researchers from the University of Illinois at Chicago’s Department of Public Administration linked participation as either an audience member or creator to higher levels of civic engagement and social tolerance. This work suggests that learning how to draw, paint, sing, or just appreciate the works made by others can help us become not just happier and healthier, but also better people.

"
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
              smimage={mrsPassmore}
              lgimage={mrsPassmoreLarge}
              name="Mrs Passmore"
              position={{ color: "info", label: "Art Teacher  1984-1991" }}
              description="Who remembers art in school, I hear you cry me me me. I loved art and it was a great was for students to be creative and express themselves more so than perhaps academically. I personally wasn't a gifted student and therefore I was pretty good at art and expressive forms so Art was definatly one of my most favorite subjects. The teachers were pretty uch a strong stable backbone in the school and as so many of you have pointed out Mr O' Donnaghue was the 1st and Mrs Passmore was the second but the third was Mr Patterson whom I haven't had the pleasure of meeting. Perhaps you could tell me a little more about your experiences and the classes projects you enjoyed in the art class. I have to say Mrs passmore was a little of a boyhood crush and that is probably true of many other students as well but she was a fabllous teacher who helped me personally make some tye die art work using wax to cover the colours and also a prehistoric cave for which I received a gold letter as well. Art is a freedom subject or so I would call it as it allow expressive outbursts of creativity which wouldn't perhpas as well understood in a class  environment typically.    "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={25}>
            <HorizontalTeamCard2
              smimage={mrBlank}
              lgimage={mrBlank}
              name="Mr Patterson"
              position={{ color: "info", label: "Art teacher 1991 onwards" }}
              description="Not sadly a teacher I ever met but he was new to the school in 1991 so arrived shorlty after I left the school. Do you have any memories of Mr Patterson as any memories projects or picture of him and or the class wpuld be greatly appreciated. I would like to do justice to him and his teaching carrear as I'm sure he left an impression on the class as my teacher di for me as well. Please emmail stories via the contact us links ."
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h2" color="white">
              Art Class
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Some of your thoughts about Art Class
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={3} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2 smimage={artFBClip} name="" position={{}} description="" />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Art;
