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
import HomeworkDiarysm from "assets/images/SchoolDiary/HomeworkDiarysm.png";
import HomeworkDiarylg from "assets/images/SchoolDiary/HomeworkDiarylg.png";
import schoolDiarysm from "assets/images/SchoolDiary/schoolDiarysm.png";
import schoolDiarylg from "assets/images/SchoolDiary/schoolDiarylg.png";
import schoolDiary1sm from "assets/images/SchoolDiary/schoolDiary1sm.png";
import schoolDiary1lg from "assets/images/SchoolDiary/schoolDiary1lg.png";
import usedDiarysm from "assets/images/SchoolDiary/usedDiarysm.jpg";
import usedDiarylg from "assets/images/SchoolDiary/usedDiarylg.jpg";

function HomeWork() {
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
              School Diaries
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Working With The School Diary And Time Tables
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={HomeworkDiarysm}
              lgimage={HomeworkDiarylg}
              name="Thursday February 4th 1971"
              position={{
                color: "info",
                label: "Opening day of the school and a new type of school is born",
              }}
              description="Whether you are taking an English class in middle school, high school college or graduate school, you may wonder why English matters, particularly if you plan to study or work in a field in which you think English is irrelevant.
              
              <br/> <br/> Possibly the most important reason to take an English class is its relevance to virtually all fields and careers. Wherever reading skills, speaking skills, writing or critical thinking is required, English class is useful.Analyzing literature in English class challenges you to understand characters motivations, cultural contexts, and the causes and effects of various actions in stories plot lines.
              
              <br/> <br/> Learning to analyze literature effectively not only teaches you how to better enjoy books, music and film, but also how to better understand the causes and effects in the world around you whether that is events taking place in your family, neighborhood or school. English learners can better understand the world with nuance and conviction."
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
              smimage={schoolDiarysm}
              lgimage={schoolDiarylg}
              name="A copy of the Pamphlet released on the opening day of the school."
              position={{ color: "info", label: "Opening Day" }}
              description="Our English classes wern't my favourite class as we had lots of test on spellings and that may well mhave ben the reason why I'm not quite as good at spelling as I probably should be but we still try and keep pegging at it. Hence if you see a spelllin mistake amoungst this text or a grammar slip up Iam entirely to blame and don't hold my teachers responsiable at all. <br/> <br/>
              
              Spelling and grammar is super important in today's world but has somewhat taken a backseat given all the new slf correcting system we now have as you type. remember in the days we attended C Of E Middle School the most sophisticated technlogy we had was a BBC Computer or a scientific calculator.   "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={25}>
            <HorizontalTeamCard2
              smimage={schoolDiary1sm}
              lgimage={schoolDiary1lg}
              name="Map and general layout."
              position={{ color: "info", label: "A map showing the new layout of the new school." }}
              description="English the second most spoken language in the world and it still is growing fast in popularity, hence the natural born should really be able to use it correctly, I hope I'm not murdering it here as Miss Forer would not be happy if she were to read this.  "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={25}>
            <HorizontalTeamCard2
              smimage={usedDiarysm}
              lgimage={usedDiarylg}
              name="Map and general layout."
              position={{ color: "info", label: "A map showing the new layout of the new school." }}
              description="English the second most spoken language in the world and it still is growing fast in popularity, hence the natural born should really be able to use it correctly, I hope I'm not murdering it here as Miss Forer would not be happy if she were to read this.  "
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h2" color="white">
              Learning to be able to organise
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              The uses of the school diary around the school an hleping to organise the students
              onto repsonsiable adults.
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default HomeWork;
