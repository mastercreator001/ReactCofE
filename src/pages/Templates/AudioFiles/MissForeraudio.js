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
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import AudioCard from "examples/Cards/TeamCards/AudioCard";

// Images Small
import ESG1SM from "assets/images/EarlySchoolGall/ESG1SM.jpg";
import ESG2SM from "assets/images/EarlySchoolGall/ESG2SM.jpg";
import ESG3SM from "assets/images/EarlySchoolGall/ESG3SM.jpg";
import ESG4SM from "assets/images/EarlySchoolGall/ESG4SM.jpg";
import ESG5SM from "assets/images/EarlySchoolGall/ESG5SM.jpg";
import ESG6SM from "assets/images/EarlySchoolGall/ESG6SM.jpg";
import ESG7SM from "assets/images/EarlySchoolGall/ESG7SM.jpg";
import ESG8SM from "assets/images/EarlySchoolGall/ESG8SM.jpg";
import ESG9SM from "assets/images/EarlySchoolGall/ESG9SM.jpg";
// Images Large
import ESG1LG from "assets/images/EarlySchoolGall/ESG1LG.jpg";
import ESG2LG from "assets/images/EarlySchoolGall/ESG2LG.jpg";
import ESG3LG from "assets/images/EarlySchoolGall/ESG3LG.jpg";
import ESG4LG from "assets/images/EarlySchoolGall/ESG4LG.jpg";
import ESG5LG from "assets/images/EarlySchoolGall/ESG5LG.jpg";
import ESG6LG from "assets/images/EarlySchoolGall/ESG6LG.jpg";
import ESG7LG from "assets/images/EarlySchoolGall/ESG7LG.jpg";
import ESG8LG from "assets/images/EarlySchoolGall/ESG8LG.jpg";
import ESG9LG from "assets/images/EarlySchoolGall/ESG9LG.jpg";

// Import Audio
import MrH1 from "assets/audio/FallingForward.mp3";

function MissForeraudio() {
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
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              Miss Forer audio Memories
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Miss Forer audiable memories of the school the staff and the students.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <AudioCard
              smimage={ESG1SM}
              lgimage={ESG1LG}
              name="Miss Forer's memories of the school "
              position={{ color: "info", label: "Mrs Forer's audiable Memories of the school" }}
              description="Welcome to the school's Memory corner. The ability of the human memory is limited and we all tend to forget over time the voices of our favourite teachers so i have sought out the teachers and tried to capture their memories of the school the staff and the students for everyone to enjoy.<br><br>
              
              The memories have been recorded by Myself (Richard McMaster) and the teachers have kindly agreed for the recording to be aired over the internet to former students and staff alike.<br><br>
              
              We hope you enjoy the tip back in time and the voices may trigger a few memories of your own.Talking myself to the teachers they have all have their own distinct styles and you would definitely will get a flash of memories from hearing them speak.<br><br>
              
              So please now sit back and listen to the good old days from voices you will remember."
              audiofile={MrH1}
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <AudioCard
              smimage={ESG2SM}
              lgimage={ESG2LG}
              name="Audio Recording 1 with Miss Forer "
              position={{ color: "info", label: "Audio Recording 1 with Miss Forer" }}
              description=""
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <AudioCard
              smimage={ESG3SM}
              lgimage={ESG3LG}
              name="Audio Recording 2 with Miss Forer "
              position={{ color: "info", label: "Audio Recording 2 with Miss Forer" }}
              description=""
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <AudioCard
              smimage={ESG4SM}
              lgimage={ESG4LG}
              name="Audio Recording 3 with Miss Forer"
              position={{ color: "info", label: "Audio Recording 3 with Miss Forer" }}
              description=""
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <AudioCard
              smimage={ESG5SM}
              lgimage={ESG5LG}
              name="Audio Recording 4 with Miss Forer"
              position={{ color: "info", label: "Audio Recording 4 with Miss Forer" }}
              description=""
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <AudioCard
              smimage={ESG6SM}
              lgimage={ESG6LG}
              name="Audio Recording 5 with Miss Forer "
              position={{ color: "info", label: "Audio Recording 5 with Miss Forer" }}
              description=""
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <AudioCard
              smimage={ESG7SM}
              lgimage={ESG7LG}
              name="Audio Recording 6 with Miss Forer"
              position={{ color: "info", label: "Audio Recording 6 with Miss Forer" }}
              description="Ah lunchtimes and school dinners, the school had a limited cafteria section and it was often the school had staggered lunch breaks to allow for this."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <AudioCard
              smimage={ESG8SM}
              lgimage={ESG8LG}
              name="Audio Recording 7 with Miss Forer "
              position={{ color: "info", label: "Audio Recording 7 with Miss Forer" }}
              description="Students enjoying there lunch time away from the books and socialising with the other students and teachrs alike."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <AudioCard
              smimage={ESG9SM}
              lgimage={ESG9LG}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "1971-through to early 1980's" }}
              description=" Another lunch time shot of the kids enjoying themeselves away from the pressures of school work"
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              EARLY SCHOOL YEARS PICTURES
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Close up of the buildings only
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </MKBox>
  );
}

export default MissForeraudio;
