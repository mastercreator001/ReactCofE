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
<HorizontalTeamCard2 image={pooleCertificatesm} name="" position={{}} description="" />;
import HorizontalTeamCard2 from "examples/Cards/TeamCards/HorizontalTeamCard2";

//Small Images
import abselingPoole1sm from "assets/images/TripsAway/abselingPoole1sm.jpg";
import abselingPoole2sm from "assets/images/TripsAway/abselingPoole2sm.jpg";
import abselingPoole3sm from "assets/images/TripsAway/abselingPoole3sm.jpg";
import canoePoole3sm from "assets/images/TripsAway/canoePoole3sm.jpg";
import pooleCertificatesm from "assets/images/TripsAway/pooleCertificatesm.jpg";
//Large Images
import abselingPoole1lg from "assets/images/TripsAway/abselingPoole1lg.jpg";
import abselingPoole2lg from "assets/images/TripsAway/abselingPoole2lg.jpg";
import abselingPoole3lg from "assets/images/TripsAway/abselingPoole3lg.jpg";
import canoePoole3lg from "assets/images/TripsAway/canoePoole3lg.jpg";
import pooleCertificatelg from "assets/images/TripsAway/pooleCertificatelg.jpg";
function Poole() {
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
              Poole Adventure Center
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Poole In Dorset adventures for year 4/8.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={abselingPoole1sm}
              lgimage={abselingPoole1lg}
              name="Poole"
              position={{ color: "info", label: "Fourth Years activity week." }}
              description="Having being a more mature age a more mature task and holiday with the school was neede and that came in the regualr Poole in Dorset Adventure center.<br/> <br/>
              
              I may be incorrect but at the moment I have been unable to find any exact details of the activity center at the moment and I can't be sure if it is even in existence as we rememebr it.If anyone has an links or video photos they would like to share please do get in touch with me and we will get you added into the blog. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={abselingPoole2sm}
              lgimage={abselingPoole2lg}
              name="Abseling was a big challenge"
              position={{
                color: "info",
                label: "A sheer face and a challenge to tackle, did you ?",
              }}
              description="The Fourth years were so mature or we liked to think we were but the task at hand was a real challeneg for me personally as it included trusting your life to a prson you never met and a piece of rope youd never used. It's a strange scenario laying back more or less horizontal and walking down a sheer drop but the mechanics of the gravity and experience of the instructors it was a challenge I mastered.<br/> <br/>
              
              I really have to say it was a very scarey thing to do but the sense of achievement personally was amazing and I can truly say I rememeber the adrenelin buzz when I hit the floor ( well my shoes ) to this day.<br/> <br/>
              
              Many things in life you seldom remember with such clarity as the ones you do with the heart pumping out of your chest like mine was. I'm sorry to say some didn't complete the challenge as it was a big challeneg but happy to say most did. Do you have any stories of abseling at Poole In Dorset ? let me know and well get you added. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={abselingPoole3sm}
              lgimage={abselingPoole3lg}
              name="We did Hiking "
              position={{ color: "info", label: "Hiking at Poole" }}
              description="Perhaps you remember other activities you did at Poole but mine were Canoes , Hiking possibly swimming nd definatly abseling? any more let me know. The hiking was a little more in depth than what we did at malham as we were older and more mature and able to handle a little more exercise. The task was A to B and as I remember we had been split into team and done a fair amount of orintierring to help educate us a little more with maps and map reading skills.<br/> <br/>
              
              Packed lunches on board we headed off and attempted to reach the end gooal before the others naturally being the myschevious person I was I took the opportunity often to misdirect other groups and head them off target. So much was the case I thik one group lost and the teachers were sent out to find them, sorry my have been me..... "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={canoePoole3sm}
              lgimage={canoePoole3lg}
              name="Canoes and the fun of the water."
              position={{
                color: "info",
                label: "water and water based fun",
              }}
              description="
Although I can't find any actual history on Poole in Dorset Adventure Center nowerdays The fun lives on well beyond my time at the school as Poole trip for year 4 were the last of the school trips. The one big trip a year and at Poole we had fun with the canoes in the ocean. I can't recall much about the fun we had but maybe you do I can tell you we used the canoes in the sea and we paddled and intentionally turn the canoes over and had to demonstrate we could surface.<br/> <br/>

I remember as it scared me allot beyed that Poole was a adult adventure for minors. Any memories of Poole let me know and il get them added to the site.    "
            />
          </MKBox>
        </Grid>
        <Grid item xs={3} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={pooleCertificatesm}
              lgimage={pooleCertificatelg}
              name=""
              position={{}}
              description=""
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Poole;
