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
import missForer2 from "assets/images/Allteachers/missForer2.png";
import missGoodship from "assets/images/Allteachers/missGoodship.png";
import mrsBrock from "assets/images/Allteachers/mrsBrock.png";
// Large Images
import missForer2Large from "assets/images/Allteachers/missForer2Large.png";
import mrsBrockLarge from "assets/images/Allteachers/mrsBrockLarge.png";
import missGoodshipLarge from "assets/images/Allteachers/missGoodshipLarge.png";

// FB Clippings
import musicFBClip from "assets/images/facebookClippings/musicFBClip.jpg";

function Music() {
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
              Music Class
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              The Beauty of Music and sound of the heavens
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={missForer2}
              lgimage={missForer2Large}
              name="Why Do We Need to learn Music At School"
              position={{ color: "info", label: "Whis is Music Important at school" }}
              description="Music education is important in our schools.  And yet, it seems these days, it is being offered less and less in many school systems. Unfortunately, many schools have begun to exclude music from their curriculums to make room for other subjects.<br/> <br/>

Music is an extremely important subject for all children to learn and can lead to better brain development, increases in human connection, and even stress relief. As music is removed from schools, children will no longer receive these benefits unless they enroll in private lessons, which is much too expensive for some families to afford.<br/> <br/>

Here are five reasons why music education in schools is important:<br/> <br/>

Music stimulates brain development in childrenstudents singing
Various studies have found that engagement with music can lead to an improvement in brain development in children. A study at Northwestern University found better neural processing in students who played a musical instrument when they were compared with students who simply listened to music. This study shows the importance of receiving music education, rather than simply turning on background music when students are doing work in other subjects. Other studies have also found increases in IQ points in children who engaged with music. When compared with students who didn’t take any music lessons, musically-engaged students had more improvements in IQ subtests, index scores, and a standardized measure of academic achievement.<br/> <br/>

If you’re interested in enrolling your child in music lessons outside of the school system for more engagement with music, take a look at this article to learn about the costs.<br/> <br/>

Music education is also a great way to enhance reading comprehension abilities in children. Another study, which was also conducted at Northwestern University, found that students who actively participated in music classes had better speech processing abilities along with higher reading scores than children who weren’t involved. Reading is an important skill for all children to develop because it is needed for all subjects. Even subjects that are not related to English literature will involve reading. For example, math word problems require excellent reading comprehension abilities in order to answer them correctly."
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
              smimage={missGoodship}
              lgimage={missGoodshipLarge}
              name="Miss Goodship"
              position={{ color: "info", label: "Music Teacher" }}
              description="Well a story to relate to you, Mr Felton and I were chatting over the years and the subject came up about the school and the overall layout of the rooms. Now you have to rememeber that Mr felton joined the school in 1973/74 so the school was well established and running so most running snags had been overcome and the schools layout was pretty much set in stone.<br/> <br/>
              
              When we approached the fact about the Octogon room and the fact it was an isoated building was an odd aspect or so I thought but after  chatting to Mr Felton leaned the double truth. The music rom had actually quite delibrately been designed as a seperate unit from the school so the acoustic could be appreciated for the shape of the room was designed with this in mind but as it appears the most popualr answer was so that all the loud and immatured players were in fact not disturbing the remainder of the school and there is the very good reason for the disconnected nature of the class room which was to me 4B or brock."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={25}>
            <HorizontalTeamCard2
              smimage={mrsBrock}
              lgimage={mrsBrockLarge}
              name="Mrs Brock"
              position={{ color: "info", label: "Music Teacher" }}
              description="The school was way ahead of it's times and to have a dedicated music area which in it's self and by design was speciall designed to allow for the acoustic benefits was pretty advanced for the years around 1971. The very fact the school was brand new and still shinnig was also to the jealous green eye of others in the near by building of A.B.K too.<br/> <br/>
              
              A fact that never seem to go unoticed by some students as the schools turned out and engaged the nearest buses. A new school and a new way of teaching and quite the long list of pupils waiting to attend the school. Mr Felton mentioned to me the fact that if a student left the school then they could have a new student attend and be enrolled in just a matter of days, depeandant on the list of course.  "
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h2" color="white">
              Music Class
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Some of your thoughts about Music Classes
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={3} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2 smimage={musicFBClip} name="" position={{}} description="" />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Music;
