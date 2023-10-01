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
import DefaultFooter from "components/common/Footers/DefaultFooter";

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
import AudioCard from "components/common/AudioCard";

import AudioIcon from "assets/images/Audio/AudioIcon.jpg";

// Import Audio
import MrH1 from "assets/audio/FallingForward.mp3";
import AlisonCaligari from "assets/audio/AlisonCaligari.mp3";
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
              smimage={AudioIcon}
              lgimage={AudioIcon}
              name="Miss Forer's memories of the school "
              position={{ color: "info", label: "Mrs Forer's audiable Memories of the school" }}
              description="Welcome to the school's Memory corner. The ability of the human memory is limited and we all tend to forget over time the voices of our favourite teachers so i have sought out the teachers and tried to capture their memories of the school the staff and the students for everyone to enjoy.<br><br>
              
              The memories have been recorded by Myself (Richard McMaster) and the teachers have kindly agreed for the recording to be aired over the internet to former students and staff alike.<br><br>
              
              We hope you enjoy the tip back in time and the voices may trigger a few memories of your own.Talking myself to the teachers they have all have their own distinct styles and you would definitely will get a flash of memories from hearing them speak.<br><br>
              
              So please now sit back and listen to the good old days from voices you will remember."
              audiofile={AlisonCaligari}
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <AudioCard
              smimage={AudioIcon}
              lgimage={AudioIcon}
              name="Audio Recording 1 with Miss Forer "
              position={{ color: "info", label: "Audio Recording 1 with Miss Forer" }}
              description=""
              audiofile={MrH1}
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <AudioCard
              smimage={AudioIcon}
              lgimage={AudioIcon}
              name="Audio Recording 2 with Miss Forer "
              position={{ color: "info", label: "Audio Recording 2 with Miss Forer" }}
              description=""
              audiofile={MrH1}
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <AudioCard
              smimage={AudioIcon}
              lgimage={AudioIcon}
              name="Audio Recording 3 with Miss Forer"
              position={{ color: "info", label: "Audio Recording 3 with Miss Forer" }}
              description=""
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <AudioCard
              smimage={AudioIcon}
              lgimage={AudioIcon}
              name="Audio Recording 4 with Miss Forer"
              position={{ color: "info", label: "Audio Recording 4 with Miss Forer" }}
              description=""
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <AudioCard
              smimage={AudioIcon}
              lgimage={AudioIcon}
              name="Audio Recording 5 with Miss Forer "
              position={{ color: "info", label: "Audio Recording 5 with Miss Forer" }}
              description=""
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <AudioCard
              smimage={AudioIcon}
              lgimage={AudioIcon}
              name="Audio Recording 6 with Miss Forer"
              position={{ color: "info", label: "Audio Recording 6 with Miss Forer" }}
              description=""
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <AudioCard
              smimage={AudioIcon}
              lgimage={AudioIcon}
              name="Audio Recording 7 with Miss Forer "
              position={{ color: "info", label: "Audio Recording 7 with Miss Forer" }}
              description="."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <AudioCard
              smimage={AudioIcon}
              lgimage={AudioIcon}
              name="Audio Recording 7 with Miss Forer "
              position={{ color: "info", label: "Audio Recording 7 with Miss Forer" }}
              description=" "
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              Audio diaries of school teachers
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Memories in audio
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
