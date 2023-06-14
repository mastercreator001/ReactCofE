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
import mrBlank from "assets/images/Dhteachers/mrBlank.png";
import missForer from "assets/images/Dhteachers/missForer.jpg";
import missForerLarge from "assets/images/Dhteachers/missForerLarge.jpg";
import mrLuckett from "assets/images/Dhteachers/mrLuckett.png";
import mrLuckettLarge from "assets/images/Dhteachers/mrLuckettLarge.png";
import mrFelton from "assets/images/Dhteachers/mrFelton.jpg";
import mrFeltonLarge from "assets/images/Dhteachers/mrFeltonLarge.jpg";

function dhTeachers() {
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
              Meet The Deputy Head teaching Staff
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              All of the deputy head teachers of Church Of England Middle School 1971-2008 Welly
              Road including transition to Christ The King College.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrBlank}
              lgimage={mrBlank}
              name="Mr Darby"
              position={{ color: "info", label: "Deputy Head Teacher 1971-1982" }}
              description="Mr Darby was as many have said firm fair and strict which you would expect of a school master or  deputy headteachers. As he was appointed to the newly incorprated school he was to work along side Mr Knight and support the headteacher in both the running of the school and be able to teach where necessary within the required subjects should the need arise. Mr Darby was a teacher of his age and with that formed a fairly strict part of the teaching structure within the school. Representing a strong personality with a sound academic foundation grounded in the base subjects of the time.  Mr Darby was well liked amoung the students but was also respected by his fellow peers as well, demonstrating the very best academically of what a faith based school needs to be to function effectively. If you have any memories of Mr Darby please feel free to message me or using the contact us section pos me a story. Information is always appreciated and the website is constantly requiring more information so if you feel you could help please feel free to contact the admin team."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrLuckett}
              lgimage={mrLuckettLarge}
              name="Mr Luckett"
              position={{ color: "info", label: "Deputy Head Teacher 1985-1992?" }}
              description="Mr Luckett was an brilliant man and well liked amoung both students and staff alike during his time with the school serving as deputy head for both Mr Knight and David Harrison briefly before Mr felton arrived to serve as the second deputy head for the school. Mr Luckett was also a french teacher alongside his role as deputy head as many teacher had to have the ability to plug gaps for teacher sickness or absence. "
              id="Church Of England Middle School"
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrFelton}
              lgimage={mrFeltonLarge}
              name="Mr Felton"
              position={{ color: "info", label: "Deputy Head Teacher 1992-2004?" }}
              description="The process and structure of a school is very important to its overall success and running and although I can only comment on my time at the school Mr Felton served as deputy head teacher for a substantial time during the school's existence. He was in place as the head teacher under Mr Knight's term and well into and I believe through Mr Harrissons as well. Mr Felton was always a strong personality and an authority figure in my time at the school. He like any other teacher had a dual teaching talent and although Mr Felton was a Deputy Head he was also found in the D.T or Design Technology department. Perhaps you remember the pencil Holder car you had the chance to make under his tuition or maybe the Parrot, it's a case if you know you just know I'm afraid.

Mr Felton was somewhat of a familiar face in the school and also on many school trips he was also an architect as well in the creation and organization of the trips. Imagine a large group of students and lots of activities to organize, although this was a yearly trip to Malham and Poole in Dorset trip for year 4's it still needing organization and staffing.

Mr Felton was on my trip to Malham, and it was as fun as you could imagine especially as it was one of the first trips away from home for allot of young people so seeing familiar faces were an absolute comfort. Mr Felton eventually retired after I left the school but served the school for decades and is now happily enjoying retirement on the Island with his wife. We all know him as Mr Felton and he had been at the school serving for decades, and another dedicated teacher in the C of E middle community. He was not only a deputy head he ran various classes as well as helping to run the school including CDT next to the art room helping many students find a love of creating something cool from nothing. He had a temper and I fell foul of this once but only once I made sure I stayed in line but have heard from you guys many now creative classes when temper may came to the surface. He worked with both Mr Knight the 1st head teacher Mr Harrison the second head teacher and the 3rd Mr Bloomfield. I don't have figures for his leaving the school but may be you could add to the comments and we will build a jigsaw picture of his career and subjects covered as well as our memories of him. Apparently he retired between 1994 and 1995"
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrBlank}
              lgimage={mrBlank}
              name="Mr Seaward"
              position={{ color: "info", label: "Deputy Head Teacher ?" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={missForer}
              lgimage={missForerLarge}
              name="Miss Forer"
              position={{ color: "info", label: "Deputy Head, Year head" }}
              description="Miss Forer, what can you say apart from her falling into a Matriarch category.

Miss Forer started at the school joining for the opening of the school it was Definity a new start and a new challenge as it was the only Church Of England Faith based school on the Island at the time and welcomed students between 9-13 The school started out with 1 head teacher 1 deputy head and 2 full time staff which Miss Forer was head of all years at the opening in the 1971 with an initial intake of 210 students.

Miss Forer performed many different teaching jobs inside the school aside from the year head role. During my time at the school, she was a form tutor also a Domestic science teacher a French teacher and I do believe she was also an English teacher as well. Aside from that she was also instrumental in being the driving force behind the drama department and worked along side Mrs Brock to help make productions like The Evacuees get produced. Link to the production https://youtu.be/tMUhge07wZc.

The Evacuees was I'm sure a stressful occasion for all staff involved and the logistics were I'm sure quite the challenge. Miss Forer Stayed in the school until the 2003 when she retired from the school, and I can happily say is enjoying her retirement."
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default dhTeachers;
