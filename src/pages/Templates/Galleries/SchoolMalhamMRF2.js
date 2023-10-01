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

// Images Small
import MG2MRF1sm from "assets/images/MalhamGallery2/MG2MRF1sm.jpg";
import MG2MRF2sm from "assets/images/MalhamGallery2/MG2MRF2sm.jpg";
import MG2MRF3sm from "assets/images/MalhamGallery2/MG2MRF3sm.jpg";
import MG2MRF4sm from "assets/images/MalhamGallery2/MG2MRF4sm.jpg";
import MG2MRF5sm from "assets/images/MalhamGallery2/MG2MRF5sm.jpg";
import MG2MRF6sm from "assets/images/MalhamGallery2/MG2MRF6sm.jpg";
import MG2MRF7sm from "assets/images/MalhamGallery2/MG2MRF7sm.jpg";
import MG2MRF8sm from "assets/images/MalhamGallery2/MG2MRF8sm.jpg";
import MG2MRF9sm from "assets/images/MalhamGallery2/MG2MRF9sm.jpg";
import Malham1985 from "assets/images/Galleries/Malham1985.jpg";
// Images Large
import MG2MRF1lg from "assets/images/MalhamGallery2/MG2MRF1lg.jpg";
import MG2MRF2lg from "assets/images/MalhamGallery2/MG2MRF2lg.jpg";
import MG2MRF3lg from "assets/images/MalhamGallery2/MG2MRF3lg.jpg";
import MG2MRF4lg from "assets/images/MalhamGallery2/MG2MRF4lg.jpg";
import MG2MRF5lg from "assets/images/MalhamGallery2/MG2MRF5lg.jpg";
import MG2MRF6lg from "assets/images/MalhamGallery2/MG2MRF6lg.jpg";
import MG2MRF7lg from "assets/images/MalhamGallery2/MG2MRF7lg.jpg";
import MG2MRF8lg from "assets/images/MalhamGallery2/MG2MRF8lg.jpg";
import MG2MRF9lg from "assets/images/MalhamGallery2/MG2MRF9lg.jpg";
import Malham1985Large from "assets/images/Galleries/Malham1985Large.jpg";

function SchoolMalhamMRF2() {
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
              Mr Feltons Malham Trips 1985 onwards
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Malham With Mr Feltons Collection 1985 0nwards
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={Malham1985}
              lgimage={Malham1985Large}
              name="Mr Feltons slides of Malham 1985 onwards "
              position={{ color: "info", label: "Mr Feltons slides of Malham 1985 onwards" }}
              description="I'm sure someone will Know exactly where in the Dales this is but my idea is possible Gordale Scar or was Gordale Scar a cove? Perhpas someone can correct me and save the day. The students seem to be having a wonderful time as I feel certain we aren't doing our Malham Dairies, I remember they were mandatory but did we have a particular time of the day to fill it all out. <br/> <br/>
              
              Hopefully someone remembers and we can see about the Malham diary section."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG2MRF1sm}
              lgimage={MG2MRF1lg}
              name="Mr Feltons slides of Malham 1985 onwards "
              position={{ color: "info", label: "Mr Feltons slides of Malham 1985 onwards" }}
              description="Hello Mrs Montgomery, I know she has changed names since the school days. No she isn't driving the coach I have been reassured just getting the feeling for a change of job, I'm sure like most we are all glad she stayed as a teacher and went onto benefit many of students over the years. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG2MRF2sm}
              lgimage={MG2MRF2lg}
              name="Mr Feltons slides of Malham 1985 onwards "
              position={{ color: "info", label: "Mr Feltons slides of Malham 1985 onwards" }}
              description="A scenic view across the dales and the photographer remains a mystery but my suspicion is Mr Felton. Do you have any pictures of the Malham Trip you would like to share with the group as it would be amazing to see them."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG2MRF3sm}
              lgimage={MG2MRF3lg}
              name="Mr Feltons slides of Malham 1985 onwards "
              position={{ color: "info", label: "Mr Feltons slides of Malham 1985 onwards" }}
              description="A photograph from my year group but where are we and what are we doing. I would say we are engaged in a fact sheet of sorts but the location is not a trip I went on during Malham so perhaps you can help?. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG2MRF4sm}
              lgimage={MG2MRF4lg}
              name="Mr Feltons slides of Malham 1985 onwards "
              position={{ color: "info", label: "Mr Feltons slides of Malham 1985 onwards" }}
              description="Hello Newfield Hall, now we can either having our photograph taken on arrival or ready to head out on a hike across the Dales. I'm happy to say that Jus Thorne, Robin Mundell, Daniel Cooper(R.I.P) Edward Long Ben Ansell,Steven Cleary and Simon Hewitt Lucy Deal are amoung those captured so this must be around 1989 to 1990 as they were all in my year group. <br/> <br/>
              
              Happy Days but prehaps you have a set of photographs as well we all might like to enjoy, please feel free to contact us. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG2MRF5sm}
              lgimage={MG2MRF5lg}
              name="Mr Feltons slides of Malham 1985 onwards "
              position={{ color: "info", label: "Mr Feltons slides of Malham 1985 onwards" }}
              description="A outing out anyone, this ,ust have been on a hike as I cannot remember any roads nearby so I would love to have a location if anyone remembers it please."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG2MRF6sm}
              lgimage={MG2MRF6lg}
              name="Mr Feltons slides of Malham 1985 onwards "
              position={{ color: "info", label: "Mr Feltons slides of Malham 1985 onwards" }}
              description="I think this is a beautiful view and try  ot to panic as there is a teacher nearby, notice the students in the foreground and the teaher off to the left of them. There is also another person sitting on what would appear to be the edge of the cliff. Everyone made it back safely as I haven't heard of any fatalities on the trips out and about.<br/> <br/>
              
              The rock formations are amazing and it would be amazing to see if we can actually put a name to this place if anyone has been to the Dales and recognises it please."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG2MRF7sm}
              lgimage={MG2MRF7lg}
              name="Mr Feltons slides of Malham 1985 onwards "
              position={{ color: "info", label: "Mr Feltons slides of Malham 1985 onwards" }}
              description="I'm thiking the Jorvik Center or perhaps this is a mis=xed up slide from the Singleton section, does anyone rember live wood crafts on Malham?."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG2MRF8sm}
              lgimage={MG2MRF8lg}
              name="Mr Feltons slides of Malham 1985 onwards "
              position={{ color: "info", label: "Mr Feltons slides of Malham 1985 onwards" }}
              description="Well what can be siad the teachers are clearly echausted are a full day of mentoring but tke ote on the student off to the left. Have they been bad if so what did they do ? the teachers seems pretty relaxed. I'm throwing a guess out there that Mr Felton is enjoying the sun on the right and the teacher on the left is..............
              
              <br/><br/>
              
              I'm sure we must be on a walk and the teachers where ? and the other interesting question is where are the students ?"
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              A Trip along the River banks down The Tay River
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Many happy memories of the Malham trip
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG2MRF9sm}
              lgimage={MG2MRF9lg}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "Mr Feltons slides of Malham 1985 onwards" }}
              description="Now I'm not 100% sure but  The River Tay? I do remmebr with absolute certainty that wewere told explicetly not to walk close to the edge by the waterfall as there was strong rip currents and you will be oulled straight down and not come back up. It terrified me and I certainly did so as full instruted. Who are the two ladies perhaps you recognise them or are up fr making a guess. The photos came out of the 1985 box so in theory they shoild be around this time."
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SchoolMalhamMRF2;
