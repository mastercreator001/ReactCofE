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

// Small Images
import mrFelton from "assets/images/Dhteachers/mrFelton.png";
import mrHawes from "assets/images/Allteachers/mrHawes.png";
import monk1 from "assets/images/Allteachers/monk1.png";
// Large Images
import mrFeltonLarge from "assets/images/Dhteachers/mrFeltonLarge.png";
import mrHawesLarge from "assets/images/Allteachers/mrHawesLarge.png";
import monk1Large from "assets/images/Allteachers/monk1Large.png";

//Wood WorkFBClip
import CDTFBClip from "assets/images/facebookClippings/CDTFBClip.jpg";
function WoodWork() {
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
              CDT or Wood Work Class
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Working with and working to measurements, creating the pencil holder or perhaps the
              parrot.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={mrFelton}
              lgimage={mrFeltonLarge}
              name="Why Do We Need to learn Design and Technology At School"
              position={{ color: "info", label: "Design And Technology Teacher" }}
              description="Middle school wood shop project requirements can vary by school and district as well as by the equipment provided to the class and teacher. The focus of wood shop class at this age tends to be on teaching the students how to work safely with the wood and tools, thus leading the majority of the work to be completed solely with hand tools.<br/> <br/>

Cars/ pencil holders
Using hardwood or laminated wood and a variety of hand tools such as band saw and rasp, students in a middle school wood shop can learn how to make wooden toy cars. The students use paper patterns to lay out the design of the car before cutting the wood. They then assemble the cut pieces using wood glue before using a drill to attach the dowel and wooden wheels to make the car mobile. The finished products are sanded and painted if necessary.<br/> <br/>

The creation of a clock can be an easy wood shop project, and the project allows the students to work on their cutting skills. Students cut out the main plank or step with a handsaw and then work on tapering skills while cutting the legs of the stool. They will also need to cut out a brace and attach it and the legs to the main piece by precisely drilling holes and screwing the pieces together. Depending on the lumber chosen for the project, the stools may or may not be covered with a finish before completion.<br/> <br/>

For middle school wood shop classes working on a more advanced level, the students may even wish to try their hand at creating the playing pieces to go along with their checker or chess board.<br/> <br/>

Parrots come in a variety of shapes and sizes, making the choice for the type built in a middle school wood shop dependent on the skill level of the students, and the tools provided. A picnic-style holder can be built with a square base with slightly raised edges and small piece of wood attached to two dowels to weigh the napkins down.<br/> <br/>

A Parrot or Pencil holder more suited for the desk and requires the students to measure and cut a base and two sides and affix them together for the napkins to rest into vertically upon completion."
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
              smimage={monk1}
              lgimage={monk1Large}
              name="Mr Monk"
              position={{ color: "info", label: "Design And Technology Teacher, Science Teacher" }}
              description="Ye Gods for an expression of a sign of frustration for the people who remember Mr Monk in both the Science lab and the C.D.T area helping students and occasional making the familiur phrase so many of you seem to remember so well. Mr felton Created the tool boxes, does anyone remember them at all? we had coloured bands on the tools to make sure that all the tools ended up ack in the correct kit.<br/> <br/>
              
              Mr Felton is quite the talented wood worker if you hadn't guessed by now and has made some very attractive wooden birds which adord his cabinet as we speak.    "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={25}>
            <HorizontalTeamCard2
              smimage={mrHawes}
              lgimage={mrHawesLarge}
              name="Mr Hawes"
              position={{
                color: "info",
                label: "English Teacher, Sex Education Teacher Wood work?",
              }}
              description="English the second most spoken language in the world and it still is growing fast in popularity, hence the natural born should really be able to use it correctly, I hope I'm not murdering it here as Miss Forer would not be happy if she were to read this. Wheather  it was Mr Monk or it was Mr Felton it was always a pleasure to be able to work in the wood working department and I have been told in the early days of the school we never had a wood working department. <br/> <br/>
              
              It all evolced from a discussion Mr Felton had with Mr Knight about expanding the cirriclum and it wasn't expected to last. As such was the case Mr Felton precivered and the C.D.T deprtment came into existence and with it the famous wooden animals and the pencil holder or perhaps it was the parrot you may have made.<br/> <br/>
              
              Initially Mr O'Donaghue wasn't heen on loosing a chunk of the art room as this was originally all the art class, kindly submitting the C.D.T department was formed into what we rememeber today, thanks Mr O'D much appreciated. "
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h2" color="white">
              Wood Working or C.D.T Class
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Some of your thoughts about C.D.T Class
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={3} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2 smimage={CDTFBClip} name="" position={{}} description="" />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default WoodWork;
