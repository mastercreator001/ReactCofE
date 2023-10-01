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
//import navbarDarkCode from "layouts/sections/navigation/navbars/components/NavbarDark/code";
// Images
import Clock1 from "assets/images/schoolDay/Clock1.png";
import Clock2 from "assets/images/schoolDay/Clock2.png";
import Clock3 from "assets/images/schoolDay/Clock3.png";
import Clock4 from "assets/images/schoolDay/Clock4.png";
import Clock5 from "assets/images/schoolDay/Clock5.png";
import Clock6 from "assets/images/schoolDay/Clock6.png";
import hometime from "assets/images/schoolDay/hometime.png";
import assemblyTime from "assets/images/schoolDay/assemblyTime.png";
import schoolDiary from "assets/images/SchoolDiary/schoolDiary.png";
import schoolhistorictotaloverview1 from "assets/images/schoolDay/schoolhistorictotaloverview1.png";

function SchoolRoutine() {
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
              School Routines
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Start Times Lunch Times Home Times
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={Clock1}
              name="Thursday February 4th 1971"
              position={{
                color: "info",
                label: "School Start time ",
              }}
              description=" (1) 09:10 was registration, in form class"
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
              smimage={Clock2}
              name="School 1st lesson period"
              position={{ color: "info", label: "Clock 2" }}
              description=" (2) 09:15 to 10.25 1st lesson dependant on your diary and the day dictated your class or form group.  "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={25}>
            <HorizontalTeamCard2
              smimage={Clock3}
              name="School 2nd lesson period"
              position={{ color: "info", label: "Clock 3" }}
              description=" (3) 10.25 to 11.35 2nd lesson dependant on your diary and the day dictated your class or form group. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={25}>
            <HorizontalTeamCard2
              smimage={Clock4}
              name="School morning break time 20 minutes"
              position={{ color: "info", label: "Clock 4" }}
              description=" (4) 11.35 to 11.55 and break time had arrived, for 20 minutes."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={25}>
            <HorizontalTeamCard2
              smimage={Clock5}
              name="School 3rd lesson period"
              position={{ color: "info", label: "Clock 5" }}
              description=" (5) 11.55 to 13.05 3rd lesson dependant on your diary and the day dictated your class or form group.

"
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={25}>
            <HorizontalTeamCard2
              smimage={Clock6}
              name="School 4th lesson period"
              position={{ color: "info", label: "Clock 6" }}
              description=" (6) 14.05 to 1500 4th lesson dependant on your diary and the day dictated your class or form group."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={25}>
            <HorizontalTeamCard2
              smimage={hometime}
              name="Home time and awaiting the bell. "
              position={{ color: "info", label: "Clock 7" }}
              description="(7) 15.00 was home time, bus walk car? whichever you did it was a relief."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={25}>
            <HorizontalTeamCard2
              smimage={assemblyTime}
              name="School assemblies ?"
              position={{ color: "info", label: "A School Assembly" }}
              description=" Once a week or more Perhaps you rememeber"
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={25}>
            <HorizontalTeamCard2
              smimage={schoolDiary}
              name="Questions upon questions"
              position={{ color: "info", label: "Can you Answer the following ?" }}
              description="Lunchtime 12:30 or 1pm or did you have a different time ?
             Was the lunch break split up to allow for space in the dinning hall?
             <br/> <br/>
             
             No Afternoon break but do you remember the school finish time? 15:40 seems correct to me or perhaps as per my school diary it was 15.00 or shortly after. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={25}>
            <HorizontalTeamCard2
              smimage={schoolhistorictotaloverview1}
              name="Questions upon questions"
              position={{ color: "info", label: "Can you Answer the following ?" }}
              description="How was the lunchtime started? and the home time given, not that we need any asking to head home "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SchoolRoutine;
