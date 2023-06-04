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
import monk1 from "assets/images/Allteachers/monk1.png";
import mrMoorse1 from "assets/images/Allteachers/mrMoorse1.jpg";
import mrTansley1 from "assets/images/Allteachers/mrTansley1.jpg";
import scienceClip from "assets/images/facebookClippings/scienceClip.jpg";

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
            <HorizontalTeamCard
              image={mrTansley1}
              name="Why Do We Need to learn Science At School"
              position={{ color: "info", label: "Mr Tansley head of science" }}
              description="Science education is important for students as it provides critical thinking skills and engages them in science from the start. Governmental guidelines and tests often focus on middle and high school-level STEM education, but many educators believe that science education should begin much earlier.1 Science education can support the development of a knowledgeable citizenry, meaningful learning of language and mathematics, wonderment about how the natural world works, and preparation for STEM-related careers. Science feeds a natural love for learning and is a great medium to do so, as children are inquisitive explores by nature and science offers lots to explore."
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
            <HorizontalTeamCard
              image={mrMoorse1}
              name="Mr Moorse"
              position={{ color: "info", label: "Science teacher" }}
              description="Our labs at school may never have been the biggest available but they were a place whre the mind wondered about the possibilities and allowed us to esacpe some of the subjects we might not love but are required to learn. Having done my four years at C of E Middle School it was always fun to attend science as it had a less formal feel to me than say maths or french class. Mr Tansley was  my teacher and he always made learning fun. I always wondered what else was inside the magical potions cupboard. "
            />
            <Grid container mt="30px">
              <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
                <MKTypography variant="h3" color="white"></MKTypography>
                <MKTypography variant="body2" color="white" opacity={0.8}></MKTypography>
              </Grid>
            </Grid>
            <HorizontalTeamCard
              image={monk1}
              name="Mr Monk"
              position={{ color: "info", label: "Science teacher" }}
              description="Well before the time of Harry Potter science always has the ability to make you wonder and some of the experiments were awe inspiring for a young person. I have heard stories of Mr Moorse nearly setting fire to the science lab. It may have not been something I have witnessed personally but if any ex students reading this has first hand experience we would love a blow by blow renactment of the events that nearly took the science lab to dust. Did you enjoy Science class or were you more favourble to the other subject prehaps? Scienec had to be one of my personal favourites and the teachers always made if fun to learn. Any stories of the teachers featured above please do feel free to share by eailing me and well get your storie added to the site.  "
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h2" color="white">
              Science Class
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Some of your thoughts about the Science lab
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={3} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard image={scienceClip} name="" position={{}} description="" />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Maths;