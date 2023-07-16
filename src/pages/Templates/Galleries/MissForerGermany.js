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

// Images Small
import MissFGVisit1sm from "assets/images/missFGVisit/MissFGVisit1sm.jpg";
import MissFGVisit2sm from "assets/images/missFGVisit/MissFGVisit2sm.jpg";
import MissFGVisit3sm from "assets/images/missFGVisit/MissFGVisit3sm.jpg";
import MissFGVisit4sm from "assets/images/missFGVisit/MissFGVisit4sm.jpg";
import MissFGVisit5sm from "assets/images/missFGVisit/MissFGVisit5sm.jpg";
import MissFGVisit6sm from "assets/images/missFGVisit/MissFGVisit6sm.jpg";
import MissFGVisit7sm from "assets/images/missFGVisit/MissFGVisit7sm.jpg";
import MissFGVisit8sm from "assets/images/missFGVisit/MissFGVisit8sm.jpg";
import MissFGVisit9sm from "assets/images/missFGVisit/MissFGVisit9sm.jpg";
import MissFGVisit10sm from "assets/images/missFGVisit/MissFGVisit10sm.jpg";
// Images Large
import MissFGVisit1lg from "assets/images/missFGVisit/MissFGVisit1lg.jpg";
import MissFGVisit3lg from "assets/images/missFGVisit/MissFGVisit3lg.jpg";
import MissFGVisit2lg from "assets/images/missFGVisit/MissFGVisit2lg.jpg";
import MissFGVisit4lg from "assets/images/missFGVisit/MissFGVisit4lg.jpg";
import MissFGVisit5lg from "assets/images/missFGVisit/MissFGVisit5lg.jpg";
import MissFGVisit6lg from "assets/images/missFGVisit/MissFGVisit6lg.jpg";
import MissFGVisit7lg from "assets/images/missFGVisit/MissFGVisit7lg.jpg";
import MissFGVisit8lg from "assets/images/missFGVisit/MissFGVisit8lg.jpg";
import MissFGVisit9lg from "assets/images/missFGVisit/MissFGVisit9lg.jpg";
import MissFGVisit10lg from "assets/images/missFGVisit/MissFGVisit10lg.jpg";

function MissForerGermany() {
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
              Miss Forer Germany Visit
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Germany Visit Images
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissFGVisit10sm}
              lgimage={MissFGVisit10lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Germany Visits photos" }}
              description="A collection of images from the Miss Forer collection. They were utilised in a team visit to German school's to demonstarate the typical school day for a student in the the United Kingdom. Miss Forer was leading the trip which involved 15 school teachers leaving the Island and visiting school's across Germany. In a simular way to the EF exchange students program worked this may well have been a future option that was sadly never realised.  "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissFGVisit1sm}
              lgimage={MissFGVisit1lg}
              name="Old school Images of the school staff and students "
              position={{
                color: "info",
                label: "Domestic Science is another subject Germany may not teach in schools",
              }}
              description="The four students are diligently working in the Domestic Science lab on a project and have been unwhittingly had photographs taken for the teachers amalgamated Germany school trip visits.<br/> <br/> 
              
              Do you recognise the students or are they from your year groups maybe drop a comment and we will see what they are doing in Domestic Science Lab."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissFGVisit2sm}
              lgimage={MissFGVisit2lg}
              name="Old school Images of the school staff and students "
              position={{
                color: "info",
                label: "CDT Workshop and the 5 students working on a project",
              }}
              description="See in the foreground of the picture is one of the famous tool boxes Mr Felton made for the Cdt department and the students are making good use of the tools. Again this is another demonstration of the varying subject that are available in the English schools that may not be available to the schools in Germany. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissFGVisit3sm}
              lgimage={MissFGVisit3lg}
              name="Old school Images of the school staff and students "
              position={{
                color: "info",
                label: "Two students on the lower path from the tennis courts.",
              }}
              description="I would have to make a guess and say the to students are probably on a lunch break or have been allowed to leave class for a special photo opportunity. The students are no doubt showing the type of school uniform that we wear in the C Of E Middle school."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissFGVisit4sm}
              lgimage={MissFGVisit4lg}
              name="Sports held within the school alike the same in probably in Germany"
              position={{
                color: "info",
                label: "Different sports and options are available to German students",
              }}
              description="The P.E department at school covered may subjects and Football was amoung them as well as rugby and I would like to say cricket as well (however I never played cricket at school). Im sure the students in Germany played football but this could be another example of sport and the school'sport uniform. Only Miss Forer will know I guess unless there are some shsrp eyed teachers out there thn can help."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissFGVisit5sm}
              lgimage={MissFGVisit5lg}
              name="A gathering of young ladies no doubt on Netball class  "
              position={{
                color: "info",
                label: "A group of netball students awaiting a lesson or a game",
              }}
              description="This could well be a game interupted by Miss Forer's camera and the girls seem happy to obilge the photo opportunity. I'm sure as most of you can see the little white labels on the socks of the girls and hopefully our rememeber what they were for ? yes we all used to have to label our individual kit and this was in most cases the little cut out and iron on the Fablon stickers with the clothes marking pen. This photo would have been exported to the Germany vist as well and in most cases another demonstration of uniform and school subjects. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissFGVisit6sm}
              lgimage={MissFGVisit6lg}
              name="Far end of the school, students in a History lesson"
              position={{ color: "info", label: "A group of students in a History lesson " }}
              description="A class of students in a History lesson and caugh by the Miss Forer camera. Class sizes were an still are a very important issue and as you can see by this class the size of the class is relatively small by the look from the photo. <br/> <br/>
              
              Are you perhaps one of the students in the photos or maybe you know them, Get in touch and we will see if we can get some names to the faces in the photos."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissFGVisit7sm}
              lgimage={MissFGVisit7lg}
              name="Mr Walker holding a French Lesson "
              position={{
                color: "info",
                label: "Mr Walker in Class probably holding a French Class",
              }}
              description="Who remembers French class and aso who remembers Mr Walker, well we feature both in this photo. I would say it's a shame it wasn't a German lesson as this is the promary location that the teachers would start. Did we learn German at school? wasn't it just French we tried to learn a school as I can't rememeber any German. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissFGVisit8sm}
              lgimage={MissFGVisit8lg}
              name="Students at play "
              position={{
                color: "info",
                label: "Students on lunch break and awaiting the school bell",
              }}
              description="To the end of the corner of the building the room 4 which for me would have been Mrs Hayles Maths class for me and also a form room. The student used to race around the corner of the building and on to the grass playing field with some missing the fact there was a considerable drop for a small student on the other side of the wall. The ground level was a drop here but was quickly leveled as you approached the other end of the school heading towards the tennis courts.<br/> <br/>
              
              Do you recognise anyone in the photos or perhaps it was you please contact us and well will add some names to the list. "
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              OLd Photos of the schol and students for display in Germany
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Staff and students days around the school
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissFGVisit9sm}
              lgimage={MissFGVisit9lg}
              name="Home time and the familar yellow submarine school busses"
              position={{ color: "info", label: "The end of the day at school, Home Time" }}
              description=" A typical day stars and ends, and at the end of a school day is usually followed by one of the famous Yellow buses. Yes they were a famous thing for the school and I couldn't tell you who chose the colour but it was certainly distinctive and remembered until either the school didn't use the council buses anymore or they aquired a new contract wich didn't use them."
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default MissForerGermany;
