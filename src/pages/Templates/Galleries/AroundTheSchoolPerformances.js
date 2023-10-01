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
import SchoolPerformances from "assets/images/Galleries/SchoolPerformances.jpg";
import ATSPerformances1sm from "assets/images/ATSPerformances/ATSPerformances1sm.jpg";
import ATSPerformances2sm from "assets/images/ATSPerformances/ATSPerformances2sm.jpg";
import ATSPerformances3sm from "assets/images/ATSPerformances/ATSPerformances3sm.jpg";
import ATSPerformances4sm from "assets/images/ATSPerformances/ATSPerformances4sm.jpg";
import ATSPerformances5sm from "assets/images/ATSPerformances/ATSPerformances5sm.jpg";
import ATSPerformances6sm from "assets/images/ATSPerformances/ATSPerformances6sm.jpg";
import ATSPerformances7sm from "assets/images/ATSPerformances/ATSPerformances7sm.jpg";
import ATSPerformances8sm from "assets/images/ATSPerformances/ATSPerformances8sm.jpg";
import ATSPerformances9sm from "assets/images/ATSPerformances/ATSPerformances9sm.jpg";
import ATSPerformances10sm from "assets/images/ATSPerformances/ATSPerformances10sm.jpg";
import ATSPerformances11sm from "assets/images/ATSPerformances/ATSPerformances11sm.jpg";

// Images Large
import SchoolPerformancesLarge from "assets/images/Galleries/SchoolPerformancesLarge.jpg";
import ATSPerformances1lg from "assets/images/ATSPerformances/ATSPerformances1lg.jpg";
import ATSPerformances2lg from "assets/images/ATSPerformances/ATSPerformances2lg.jpg";
import ATSPerformances3lg from "assets/images/ATSPerformances/ATSPerformances3lg.jpg";
import ATSPerformances4lg from "assets/images/ATSPerformances/ATSPerformances4lg.jpg";
import ATSPerformances5lg from "assets/images/ATSPerformances/ATSPerformances5lg.jpg";
import ATSPerformances6lg from "assets/images/ATSPerformances/ATSPerformances6lg.jpg";
import ATSPerformances7lg from "assets/images/ATSPerformances/ATSPerformances7lg.jpg";
import ATSPerformances8lg from "assets/images/ATSPerformances/ATSPerformances8lg.jpg";
import ATSPerformances9lg from "assets/images/ATSPerformances/ATSPerformances9lg.jpg";
import ATSPerformances10lg from "assets/images/ATSPerformances/ATSPerformances10lg.jpg";
import ATSPerformances11lg from "assets/images/ATSPerformances/ATSPerformances11lg.jpg";

function AroundTheSchoolPerformances() {
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
              Around The School Performances
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              School Productions
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SchoolPerformances}
              lgimage={SchoolPerformancesLarge}
              name="Various School performances taken part on site in the late 1970's early 1980's "
              position={{ color: "info", label: "School Performances On Site" }}
              description="School productions were vaired and themed some of these came form the earlier years of the school opening, Can you name the performances or perhaps some of the students taking part i them."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={ATSPerformances1sm}
              lgimage={ATSPerformances1lg}
              name="Various School performances taken part on site in the late 1970's early 1980's "
              position={{ color: "info", label: "School Performances On Site" }}
              description="Could be a Red Nose Day themed event but I think we could be a little earlier than that but perhaps you were there? "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={ATSPerformances2sm}
              lgimage={ATSPerformances2lg}
              name="Various School performances taken part on site in the late 1970's early 1980's "
              position={{ color: "info", label: "School Performances On Site" }}
              description="The creativity os masterful and in this production it seems we have all age groups in the school taking part here. You have to love the costume as I feel sure they would have been made onsite. Perhaps an art department hand into the mix. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={ATSPerformances3sm}
              lgimage={ATSPerformances3lg}
              name="Various School performances taken part on site in the late 1970's early 1980's "
              position={{ color: "info", label: "School Performances On Site" }}
              description="Two ladies all ready to perform but what was the performance, notice the flag pole is still there."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={ATSPerformances4sm}
              lgimage={ATSPerformances4lg}
              name="Various School performances taken part on site in the late 1970's early 1980's "
              position={{ color: "info", label: "School Performances On Site" }}
              description="Ths could well be a Frankestein production as it certainly has the feel of it with the four students ready for the camera and maybe an impending performance. Do you recognise anyone? let us know."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={ATSPerformances5sm}
              lgimage={ATSPerformances5lg}
              name="Various School performances taken part on site in the late 1970's early 1980's "
              position={{ color: "info", label: "School Performances On Site" }}
              description="I'm leaning towards Jesus Christ Superstar performance but I couldn't commit to it with certainty can you. Clearly a lovely day and once again the super steps are being used to their full potiential."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={ATSPerformances6sm}
              lgimage={ATSPerformances6lg}
              name="Various School performances taken part on site in the late 1970's early 1980's "
              position={{ color: "info", label: "School Performances On Site" }}
              description="Five lovely ladies in all in a row ready for the show, the steps seem to have an ampitheatre theme going on with all the action in performances they sem to get."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={ATSPerformances7sm}
              lgimage={ATSPerformances7lg}
              name="Various School performances taken part on site in the late 1970's early 1980's "
              position={{ color: "info", label: "School Performances On Site" }}
              description="Return of the masks or 3 students having robbed the art department of all the supplies, another unidentified performance. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={ATSPerformances8sm}
              lgimage={ATSPerformances8lg}
              name="Various School performances taken part on site in the late 1970's early 1980's "
              position={{ color: "info", label: "School Performances On Site" }}
              description="Four students a throne and a camera roll, I wuld love to ee the picture taken from the angle of the main photographer as I'm sure Miss Forer was the person taking our picture."
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              Three picture and one performance
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Do you remember the performance ?
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={ATSPerformances9sm}
              lgimage={ATSPerformances9lg}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "School Performances On Site" }}
              description="I do detected a futuristic theme going on here and perhaps we are revisiting Blake 7 possibly ?
               "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={ATSPerformances10sm}
              lgimage={ATSPerformances10lg}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "School Performances On Site" }}
              description="Do you rememeber the performers or perhaps the finer details of the performance are we correct with a Blake 7 assumption?
               "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={ATSPerformances11sm}
              lgimage={ATSPerformances11lg}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "School Performances On Site" }}
              description="I see the torch and I'm putting a guess on late 1970's for the date of the photos and the performances, does anyone have a video still pitures or even a programme as it would be amazing to stich all of this together.
               "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AroundTheSchoolPerformances;
