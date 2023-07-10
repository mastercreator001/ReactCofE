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

// Images
import MissForerGermany1 from "assets/images/FireAlarms/MissForerGermany1.jpg";
import MissForerGermany1Large from "assets/images/FireAlarms/MissForerGermanyLarge1.jpg";
import FireAlarmlg from "assets/images/FireAlarms/FireAlarmlg.jpg";
import FireAlarm from "assets/images/FireAlarms/FireAlarm.jpg";
import englishClip from "assets/images/facebookClippings/englishClip.jpg";
import EarlySchool from "assets/images/FireAlarms/EarlySchool.jpg";
import EarlySchoolLarge from "assets/images/FireAlarms/EarlySchoolLarge.jpg";

function FireAlarm1() {
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
      <Container>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 3 }} mt={10}>
            <MKTypography variant="h3" color="white">
              The Story Behind the fire alarms.....
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Modern School Massive fire detection system.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={FireAlarm}
              lgimage={FireAlarmlg}
              name="Thursday February 4th 1971"
              position={{
                color: "info",
                label: "The school Fire alarms and the testing ",
              }}
              description="When in school it helped us grow as adults or should I say helped us grow into adults as a routine was drilled into us and the frequency of follwing the routine were instilled in us due to this. I rememeber the West Primary School we had a hand rung bell to advise staff and students alike of the start and end of lunch breaks but oddly I never needed to be told when it was time to head home.<br/> <br/>
              
              Fire alarms and the fire alarm testing was a little bit of a challenge. As mentioned above we all knew fire was a risk although we never perhaps appreciated the responses need and the ultimate consenquences of not following the alarms. The school had a system place that sought to evacuate the school with precision and accuracy as to account for every student. As your sitting down sometimes in form groups and sometimes in afternoon lesson we all heard the familur ringing of the school fire alarms and the teachers diligently asked all students to head for the tennis courts for a registration check. <br/> <br/>
              
              I personally cannot recall any period when the fire larms were malicously activated but I'm sure it must have happened over the years. Do you remember it happening and do you have any thoughts on the fire alarms ?? contact us and we catch up. "
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
              smimage={MissForerGermany1}
              lgimage={MissForerGermany1Large}
              name="Ready for lunch on the bell"
              position={{ color: "info", label: "Lunches and period breaks" }}
              description="I'm not wanting to sound like I didn't enjoy school but I did also enjoy my first period breaks and the subsequent breaks at lunch time and the period heading towards home time. I can't think of a good way to get the students to go to lunch or getting them to return but we do have the school bell.<br/> <br/>
              
              As I mentioned above the schools fire alarm system was utlised as opefully you rememebr to get the students to signal lunch breaks and I think it worked pretty well aside from the odd occasion Mrs Tour Or Mrs Smith insisted to the studetns tht break was indeed over. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={25}>
            <HorizontalTeamCard2
              smimage={EarlySchool}
              lgimage={EarlySchoolLarge}
              name="Time for home"
              position={{ color: "info", label: "Home time 15.00 as I remember" }}
              description="In Mr Knights time at the school he introduced a tradition of first period after lunch was to allow he students to calm down from footbal or running or playing anround and let them regain their focus. Tis said the school day seemed quite long and for the right reasons, as it was.<br/> <br/>
              
              We started at 0900 and eneded at 1500 so a fairly long day but I always used to be able to tell the time around 1500 as it was a favoutire part of the day. Staff and students delighted by the ringing of the fire alarms and the fact the buses had usually arrived ready for the students collection and either were coming from ABK to Us and then to Carisbrooke High. <br/> <br/>
              
              The teachers were usually outside in pairs to see children cross the road safely and then no trouble occoured outside the school. Mr Felto once mentioned is little treasures but I'm sure after a tough day they were glad to be heading home on the bell as we all were.  "
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h2" color="white">
              The Modern Fire Alarm System
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Fitted throught the school
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={3} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2 smimage={englishClip} name="" position={{}} description="" />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FireAlarm1;
