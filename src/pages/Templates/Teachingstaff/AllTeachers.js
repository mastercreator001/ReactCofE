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
import missBarabraWatson from "assets/images/Allteachers/missBarabraWatson.png";
import missDennis from "assets/images/Allteachers/missDennis.png";
import missForer2 from "assets/images/Allteachers/missForer2.png";
import missGoodship from "assets/images/Allteachers/missGoodship.png";
import mrFelton from "assets/images/Allteachers/mrFelton.png";
import mrChristensen from "assets/images/Allteachers/mrChristensen.png";
import monk1 from "assets/images/Allteachers/monk1.png";
import mrsBall from "assets/images/Allteachers/mrsBall.png";
import mrMoorse from "assets/images/Allteachers/mrMoorse.png";
import mrsBrock from "assets/images/Allteachers/mrsBrock.png";
import mrsHayles from "assets/images/Allteachers/mrsHayles.png";
import mrsMurdoch from "assets/images/Allteachers/mrsMurdoch.png";
import mrsChalloner from "assets/images/Allteachers/mrsChalloner.png";
import mrsPassmore from "assets/images/Allteachers/mrsPassmore.png";
import mrsReynolds1 from "assets/images/Allteachers/mrsReynolds1.png";
import mrsWatkins from "assets/images/Allteachers/mrsWatkins.png";
import mrWalker from "assets/images/Allteachers/mrWalker.png";
import mrTansley2 from "assets/images/Allteachers/mrTansley2.png";
import mrBlank from "assets/images/Dhteachers/mrBlank.png";
import mrsCrump from "assets/images/Allteachers/mrsCrump.png";
import mrHawes from "assets/images/Allteachers/mrHawes.png";

function AllTeachers() {
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
              Teaching Staff
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              All teaching staff throught the years
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={missBarabraWatson}
              name="Miss Barbera Watson"
              position={{ color: "info", label: " Physical Education Teacher" }}
              description="Miss Watson was as many have said firm fair and strict which you would expect of a school master or  deputy headteachers. As he was appointed to the newly incorprated school he was to work along side Mr Knight and support the headteacher in both the running of the school and be able to teach where necessary within the required subjects should the need arise. Mr Darby was a teacher of his age and with that formed a fairly strict part of the teaching structure within the school. Representing a strong personality with a sound academic foundation grounded in the base subjects of the time.  Mr Darby was well liked amoung the students but was also respected by his fellow peers as well, demonstrating the very best academically of what a faith based school needs to be to function effectively. If you have any memories of Mr Darby please feel free to message me or using the contact us section pos me a story. Information is always appreciated and the website is constantly requiring more information so if you feel you could help please feel free to contact the admin team."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={missDennis}
              name="Miss Dennis"
              position={{ color: "info", label: " Religious Education Teacher " }}
              description="Miss Dennis was an brilliant man and well liked amoung both students and staff alike during his time with the school serving as deputy head for both Mr Knight and David Harrison briefly before Mr felton arrived to serve as the second deputy head for the school. Mr Luckett was also a french teacher alongside his role as deputy head as many teacher had to have the ability to plug gaps for teacher sickness or absence. "
              id="Church Of England Middle School"
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={mrFelton}
              name="Mr Felton"
              position={{ color: "info", label: "Cdt teacher/Deputy Head" }}
              description="The process and structure of a school is very important to its overall success and running and although I can only comment on my time at the school Mr Felton served as deputy head teacher for a substantial time during the school's existence. He was in place as the head teacher under Mr Knight's term and well into and I believe through Mr Harrissons as well. Mr Felton was always a strong personality and an authority figure in my time at the school. He like any other teacher had a dual teaching talent and although Mr Felton was a Deputy Head he was also found in the D.T or Design Technology department. Perhaps you remember the pencil Holder car you had the chance to make under his tuition or maybe the Parrot, it's a case if you know you just know I'm afraid.

Mr Felton was somewhat of a familiar face in the school and also on many school trips he was also an architect as well in the creation and organization of the trips. Imagine a large group of students and lots of activities to organize, although this was a yearly trip to Malham and Poole in Dorset trip for year 4's it still needing organization and staffing.

Mr Felton was on my trip to Malham, and it was as fun as you could imagine especially as it was one of the first trips away from home for allot of young people so seeing familiar faces were an absolute comfort. Mr Felton eventually retired after I left the school but served the school for decades and is now happily enjoying retirement on the Island with his wife."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={missGoodship}
              name="Miss Goodship"
              position={{ color: "info", label: "MusicTeacher" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={missForer2}
              name="Miss Forer"
              position={{ color: "info", label: "Deputy Head, Year head" }}
              description="Miss Forer, what can you say apart from her falling into a Matriarch category.

Miss Forer started at the school joining for the opening of the school it was Definity a new start and a new challenge as it was the only Church Of England Faith based school on the Island at the time and welcomed students between 9-13 The school started out with 1 head teacher 1 deputy head and 2 full time staff which Miss Forer was head of all years at the opening in the 1971 with an initial intake of 210 students.

Miss Forer performed many different teaching jobs inside the school aside from the year head role. During my time at the school, she was a form tutor also a Domestic science teacher a French teacher and I do believe she was also an English teacher as well. Aside from that she was also instrumental in being the driving force behind the drama department and worked along side Mrs Brock to help make productions like The Evacuees get produced. Link to the production https://youtu.be/tMUhge07wZc.

The Evacuees was I'm sure a stressful occasion for all staff involved and the logistics were I'm sure quite the challenge. Miss Forer Stayed in the school until the 2003 when she retired from the school, and I can happily say is enjoying her retirement."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={missGoodship}
              name="Miss Goodship"
              position={{ color: "info", label: "MusicTeacher" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={mrChristensen}
              name="Mr Christensen"
              position={{ color: "info", label: "Physical Education Teacher" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={monk1}
              name="Mr Monk"
              position={{ color: "info", label: "Science Teacher" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={mrMoorse}
              name="Mr Moorse"
              position={{ color: "info", label: "Science Teacher" }}
              description="We have limited information but we believe Mr Moorse served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={mrsBall}
              name="Mrs Ball"
              position={{ color: "info", label: "Physical Education Teacher" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={mrBlank}
              name="Mr Hind"
              position={{ color: "info", label: "Physical Education Teacher" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={mrsBrock}
              name="Mrs Brock"
              position={{ color: "info", label: "Music Teacher" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={mrsMurdoch}
              name="Mrs Murdoch"
              position={{ color: "info", label: "Domestic Science Class" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={mrsHayles}
              name="Mrs Hayles"
              position={{ color: "info", label: "Maths Teacher" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={mrsChalloner}
              name="Mrs Challoner"
              position={{ color: "info", label: "Religious Education Teacher" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={mrsPassmore}
              name="Mrs Passmore"
              position={{ color: "info", label: "Art Teacher" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={mrBlank}
              name="Mr Patterson"
              position={{ color: "info", label: "Art Teacher" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={mrBlank}
              name="Mr O,Donnahew"
              position={{ color: "info", label: "Art Teacher" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={mrsReynolds1}
              name="Mrs Reynolds"
              position={{ color: "info", label: "French Teacher" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={mrsWatkins}
              name="Mrs Watkins"
              position={{ color: "info", label: "Watkins Teacher( Montgomery ) " }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={mrWalker}
              name="Mr Walker"
              position={{ color: "info", label: "French Teacher" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={mrTansley2}
              name="Mr Tansley"
              position={{ color: "info", label: "Science Teacher" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={mrsCrump}
              name="Mrs Crump"
              position={{ color: "info", label: "Teacher" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={mrHawes}
              name="Mr Hawes"
              position={{ color: "info", label: "Teacher" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AllTeachers;
