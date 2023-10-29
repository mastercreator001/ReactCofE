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
import AudioCard from "components/common/TransparentBlogCard";

//Images
import AudioIcon from "assets/images/Audio/AudioIcon.jpg";

// Import Audio
import HistoryMrFelton from "assets/audio/HistoryMrFelton.mp3";
import Cdtaudio1 from "assets/audio/Cdtaudio1.mp3";
import Cdtaudio2 from "assets/audio/Cdtaudio2.mp3";
import Cdtaudio3 from "assets/audio/Cdtaudio3.mp3";
import Cdtaudio4 from "assets/audio/Cdtaudio4.mp3";
import Cdtaudio5 from "assets/audio/Cdtaudio5.mp3";
import Cdtaudio6 from "assets/audio/Cdtaudio6.mp3";
import Cdtaudio7 from "assets/audio/Cdtaudio7.mp3";
import Cdtaudio8 from "assets/audio/Cdtaudio8.mp3";
import Cdtaudio9 from "assets/audio/Cdtaudio9.mp3";
import Cdtaudio10 from "assets/audio/Cdtaudio10.mp3";
import Cdtaudio11 from "assets/audio/Cdtaudio11.mp3";
import Cdtaudio12 from "assets/audio/Cdtaudio12.mp3";
import Cdtaudio13 from "assets/audio/Cdtaudio13.mp3";
import Cdtaudio14 from "assets/audio/Cdtaudio14.mp3";
import Cdtaudio15 from "assets/audio/Cdtaudio15.mp3";
import Cdtaudio16 from "assets/audio/Cdtaudio16.mp3";

function MrFeltonaudio() {
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
            <MKTypography variant="h1" color="white">
              Mr Feltons audio Memories
            </MKTypography>
            <MKTypography variant="body1" color="light" opacity={0.8}>
              Mr Feltons audiable memories of the school the staff and the students and the varying
              fun in and around the CDT department through the years.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <AudioCard
                smimage={AudioIcon}
                lgimage={AudioIcon}
                action={{
                  type: "internal",
                  route: "/",
                  color: "black",
                }}
                title=" Mr Felton and his personal history "
                position={{
                  color: "info",
                  label: "Historical information on Mr Felton",
                }}
                description="Like any other person Mr Felton progressed through many carrears throughout his life. Here we go on an audio trip through his personal history and discover what lead him to the Island and eventually to become the teacher we know today."
                audiofile={HistoryMrFelton}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <AudioCard
                smimage={AudioIcon}
                lgimage={AudioIcon}
                action={{
                  type: "internal",
                  route: "/",
                  color: "black",
                }}
                title="Audio Recording 1 with Mr Felton "
                position={{
                  color: "info",
                  label: "Mr Feltons audio memories of the school recording 1",
                }}
                description="Adapt, Adopt, Improve. An Introducion to Cdt or as it was first known Pratical Maths in It's first itteration.
                
                Mike Rose from Downside Middle trained Mr Felton in CDT."
                audiofile={Cdtaudio1}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <AudioCard
                smimage={AudioIcon}
                lgimage={AudioIcon}
                action={{
                  type: "internal",
                  route: "/",
                  color: "green",
                }}
                title="Audio Recording 2 with Mr Felton "
                position={{ color: "info", label: "Audio Recording 1 with Mr Felton's" }}
                description="Tools and the hand made toolboxes with the stripes. Do you remember checking your tools and the check sheets we ued at the start of the lesson."
                audiofile={Cdtaudio2}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <MKBox mb={1} mt={10}>
              <AudioCard
                smimage={AudioIcon}
                lgimage={AudioIcon}
                action={{
                  type: "internal",
                  route: "/",
                  color: "green",
                }}
                title="Audio Recording 3 with Mr Felton "
                position={{ color: "info", label: "Audio Recording 3 with Mr Felton's" }}
                description="Tools and the rewards of using tools though a worksheets at the school. Responsibility for your tools and learning to use them. "
                audiofile={Cdtaudio3}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <AudioCard
                smimage={AudioIcon}
                lgimage={AudioIcon}
                action={{ type: "internal", route: "/", color: "green", label: "" }}
                title="Audio Recording 4 with Mr Felton "
                position={{
                  color: "info",
                }}
                description="Parents evening and the mysterious missing work, (not at C Of E Middle)."
                audiofile={Cdtaudio4}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <AudioCard
                smimage={AudioIcon}
                lgimage={AudioIcon}
                action={{ type: "internal", route: "/", color: "green" }}
                title="Audio Recording 5 with Mr Felton"
                position={{
                  color: "info",
                }}
                description="Cdt Progression thoughout the years and need to stop students at the end of the lesson. Plywood animals 1st years or year 5's the first Cdt projects. Lucy Critchlow and the genius of Tippex."
                audiofile={Cdtaudio5}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <AudioCard
                smimage={AudioIcon}
                lgimage={AudioIcon}
                action={{ type: "internal", route: "/", color: "green", label: "" }}
                title="Audio Recording 6 with Mr Felton "
                position={{
                  color: "info",
                }}
                description="Burgular Alarms projects, year five projects. Different materials project."
                audiofile={Cdtaudio6}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <AudioCard
                smimage={AudioIcon}
                lgimage={AudioIcon}
                action={{ type: "internal", route: "/", color: "green", label: "" }}
                title="Audio Recording 7 with Mr Felton "
                position={{
                  color: "info",
                }}
                description="The Cardboard Lorry, chassis and cab, individual design. Pupils choice as to the final design."
                audiofile={Cdtaudio7}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <AudioCard
                smimage={AudioIcon}
                lgimage={AudioIcon}
                action={{
                  type: "internal",
                  route: "/",
                  color: "green",
                }}
                title="Audio Recording 8 with Mr Felton "
                position={{ color: "info", label: "Audio Recording 9 with Mr Felton's" }}
                description="Photo Frames in year six, build and design yours. Funny Face toys, did you make one?."
                audiofile={Cdtaudio8}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <AudioCard
                smimage={AudioIcon}
                lgimage={AudioIcon}
                action={{
                  type: "internal",
                  route: "/",
                  color: "green",
                }}
                title="Audio Recording 9 with Mr Felton "
                position={{ color: "info", label: "Audio Recording 1 with Mr Felton's" }}
                description="Year Six and the litter pickers, do you remember the grabs we used to collect cans around the school? The Pencil box and the varying designs."
                audiofile={Cdtaudio9}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <AudioCard
                smimage={AudioIcon}
                lgimage={AudioIcon}
                action={{
                  type: "internal",
                  route: "/",
                  color: "green",
                }}
                title="Audio Recording 10 with Mr Felton "
                position={{
                  color: "info",
                  label: "Mr Feltons audio memories of the school recording 10",
                }}
                description="The Steady Hand game, Doctor,Docotor anyone and the Pull Along Toy Project."
                audiofile={Cdtaudio10}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <AudioCard
                smimage={AudioIcon}
                lgimage={AudioIcon}
                action={{
                  type: "internal",
                  route: "/",
                  color: "green",
                }}
                title="Audio Recording 11 with Mr Felton "
                position={{ color: "info", label: "Audio Recording 11 with Mr Felton's" }}
                description="South Haven Marine Bridge project, Fictious place and the building of bridges and syringes for hydraulic movement.And the balancing Toy Parrot toy."
                audiofile={Cdtaudio11}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <AudioCard
                smimage={AudioIcon}
                lgimage={AudioIcon}
                action={{
                  type: "internal",
                  route: "/",
                  color: "green",
                }}
                title="Audio Recording 12 with Mr Felton "
                position={{ color: "info", label: "Audio Recording 13 with Mr Felton's" }}
                description="Design and make a box project, multiuse boxes. And the thougth that went into conception of a school project and timescales. "
                audiofile={Cdtaudio12}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <AudioCard
                smimage={AudioIcon}
                lgimage={AudioIcon}
                action={{
                  type: "internal",
                  route: "/",
                  color: "green",
                }}
                title="Audio Recording 13 with Mr Felton "
                position={{
                  color: "info",
                  label: "Mr Feltons audio memories of the school recording 13",
                }}
                description="New Guinea Jungle project, Trebushe over the dangerous river ? Medieval seige engine if anyone remembers. Fairground projects. "
                audiofile={Cdtaudio13}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <AudioCard
                smimage={AudioIcon}
                lgimage={AudioIcon}
                action={{
                  type: "internal",
                  route: "/",
                  color: "green",
                }}
                title="Audio Recording 14 with Mr Felton "
                position={{ color: "info", label: "Audio Recording 14 with Mr Felton's" }}
                description="Charity week, the making of the hedgehogs and the cocktail sticks. Made as Wight mice today and available in local shops."
                audiofile={Cdtaudio14}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <AudioCard
                smimage={AudioIcon}
                lgimage={AudioIcon}
                action={{
                  type: "internal",
                  route: "/",
                  color: "green",
                }}
                title="Audio Recording 15 with Mr Felton "
                position={{ color: "info", label: "Audio Recording 15 with Mr Felton" }}
                description="A Messy Church project held in out of the school sessions."
                audiofile={Cdtaudio15}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MKBox mb={1} mt={10}>
              <AudioCard
                smimage={AudioIcon}
                lgimage={AudioIcon}
                action={{
                  type: "internal",
                  route: "/",
                  color: "green",
                }}
                title="Audio Recording 16 with Mr Felton "
                position={{ color: "info", label: "Audio Recording 16 with Mr Felton's" }}
                description="Clocks a Brief project with Quartz movements."
                audiofile={Cdtaudio16}
              />
            </MKBox>
          </Grid>
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

export default MrFeltonaudio;
