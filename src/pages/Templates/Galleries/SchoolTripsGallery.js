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
import SchoolTrips from "assets/images/Galleries/SchoolTrips.jpg";
import STripsIOW1sm from "assets/images/SchoolTripsIOW/STripsIOW1sm.jpg";
import STripsIOW2sm from "assets/images/SchoolTripsIOW/STripsIOW2sm.jpg";
import STripsIOW3sm from "assets/images/SchoolTripsIOW/STripsIOW3sm.jpg";
import STripsIOW4sm from "assets/images/SchoolTripsIOW/STripsIOW4sm.jpg";
import STripsIOW5sm from "assets/images/SchoolTripsIOW/STripsIOW5sm.jpg";
import STripsIOW6sm from "assets/images/SchoolTripsIOW/STripsIOW6sm.jpg";
import STripsIOW7sm from "assets/images/SchoolTripsIOW/STripsIOW7sm.jpg";
import STripsIOW8sm from "assets/images/SchoolTripsIOW/STripsIOW8sm.jpg";
import STripsIOW9sm from "assets/images/SchoolTripsIOW/STripsIOW9sm.jpg";

// Images Large
import SchoolTripsLarge from "assets/images/Galleries/SchoolTripsLarge.jpg";
import STripsIOW1lg from "assets/images/SchoolTripsIOW/STripsIOW1lg.jpg";
import STripsIOW2lg from "assets/images/SchoolTripsIOW/STripsIOW2lg.jpg";
import STripsIOW3lg from "assets/images/SchoolTripsIOW/STripsIOW3lg.jpg";
import STripsIOW4lg from "assets/images/SchoolTripsIOW/STripsIOW4lg.jpg";
import STripsIOW5lg from "assets/images/SchoolTripsIOW/STripsIOW5lg.jpg";
import STripsIOW6lg from "assets/images/SchoolTripsIOW/STripsIOW6lg.jpg";
import STripsIOW7lg from "assets/images/SchoolTripsIOW/STripsIOW7lg.jpg";
import STripsIOW8lg from "assets/images/SchoolTripsIOW/STripsIOW8lg.jpg";
import STripsIOW9lg from "assets/images/SchoolTripsIOW/STripsIOW9lg.jpg";

function SchoolTripsGallery() {
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
              Miss Forer And the schools local trips
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Local trips around the Island With Miss Forers Collection
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SchoolTrips}
              lgimage={SchoolTripsLarge}
              name="Old school Images of the local trips "
              position={{ color: "info", label: "Iow Local Trips Miss Forer" }}
              description="AS n every school there is an element of social economic diversity ans as such there are some who can afford every trip and other s who my well not be able to. Other aspects play into the roll of a family but it is always a fact that some students may well be able to go on a trip and others may well not be able to so the school had to accomadate the other students who were unavailable to go on such trips as Malham and Poole trips. The years groups generally functioned independantly of each other but when a who year group was attending a trip it could change. Teachers were always on hand to help improvished students attend the trips but family issues or poor health in the family were also taken into account. <br/> <br/>
              
              As I recently had a meeting with Mr Felton and we discussed the inability of families to attend certain trips and the schools/Churches wishes students didn't miss out on the trips there were always ways to obtain funding from other means within the schools or the churches funds and unless specific issues arose in a family where they couldn't attend it was always made as best as possible to help everyone attend."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={STripsIOW1sm}
              lgimage={STripsIOW1lg}
              name="Old school Images of the local trips "
              position={{ color: "info", label: "Iow Local Trips Miss Forer" }}
              description="Attendance on the trips wasn't mandatory but it as much as it was a commnity it was a thrilling experience seeing somewhere new and the team binding was also a pretty important aspect of tis too. However if the studnent could't attend other things were organised and that is what we shall  discuss here in photos and and text. As previously stated Miss Forer was not only a great teacher she was also a matriarch of the school. Miss Forer started at the school in the first days of it's opening and left with only 10 years prir to it's subsequent cosure so she was a very senior person in the school. I don't doubt had shw wanted to  run the shool she woould have made a very competent person under her stewardship. <br/> <br/>
              
              However that isn't what happened and aside from teaching Drama and French and Domestic Science and being a from tutor she also oversaw student activities on the said trips away. Malha and poole were the big trips in the school and typicaly a week away for the other students. School life continued on for the  other years but for the remaining students activites were needed. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={STripsIOW2sm}
              lgimage={STripsIOW2lg}
              name="Old school Images of the local trips "
              position={{ color: "info", label: "Iow Local Trips Miss Forer" }}
              description="The activities that were on offer were fixed as the school had limited teaching staff bbut the fixed rotation and duration of the school trips allowed for much organisation prior so it became a well organised routine year on year. Miss Forer as most of you know had a collecto of dogs over the years and this made it difficult for her to go to Malham or Poole but I feel if she had it would have been interesting had she.<br/> <br/>
              
              Walks were the order of the day and although they wern't well documented I do feel sure where I may fail to address when and where you went you will help me address the defiencies I leave out. There seem to be a Brading walk and I have heard of a Brightsone walk too. Various orienterring walks up and down the downs but perhaps you stayed as I was able to attend the main trips and sadly have little information on them. Where did you go what did you do and see.  "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={STripsIOW3sm}
              lgimage={STripsIOW3lg}
              name="Old school Images of the local trips "
              position={{ color: "info", label: "Iow Local Trips Miss Forer" }}
              description="Here we are off on a walk but whre did we go, perhaps Newport Roman Villa or Carisbrooke Castle or maybe just maybe we went to the Apollo theatre. The dog may be one for Miss Forer to identify but perhaps it wasn't. We can tell you the shots were from the mid to late 1970's and the fashion demontrated would seem to reind=force that fact as well.<br/> <br/>
              
              Maybe you were one of the alkers in these photos and can actually remember where you were headed but I fear the actual facts have been lsot to the mists of time and we may well never truly know."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={STripsIOW4sm}
              lgimage={STripsIOW4lg}
              name="Old school Images of the local trips "
              position={{ color: "info", label: "Iow Local Trips Miss Forer" }}
              description="Where are we now? Newtown, Cowes, East Cowes or perhaps Yarmouth. Do you remember these trips out and about and where you went when not attending Malham Or Poole?"
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={STripsIOW5sm}
              lgimage={STripsIOW5lg}
              name="Old school Images of the local trips "
              position={{ color: "info", label: "Iow Local Trips Miss Forer" }}
              description="I feel sure there will be some of the ladies who will be able to let us knowwhen and where we are in the this shot. Did we atend Shorewell perhaps or another location still unheard of by myself. I'm sure as a rather self consumed child I couldn't see much beyond my own nose and the internal dynamics of the school were well outside my observation threshold but perhaps ou do remember where we went and what we did."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={STripsIOW6sm}
              lgimage={STripsIOW6lg}
              name="Old school Images of the local trips "
              position={{ color: "info", label: "Iow Local Trips Miss Forer" }}
              description="I do hear we may have stayed at Brading Town Hall and also had some fun on Brading marshes perhaps this is one such picture of the fun that was had over there. Lots of opportunities to walk and I'm sure to study nature along the way as well. Did you attend the Brading walks or perhaps you could give us some more information as to the timing of the trips and the staffing required for them. <br/> <br/>
              
              I feel quite sure tht when we fondly remember the trips we went along and compare to the trips we or our children ay attend today there is a fsir sense of risk we undertook as young children that wouldn't be tolerated today. We may have taken more risk but in that same sentance we have a little more freedom and perhaps that made us who we are today."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={STripsIOW7sm}
              lgimage={STripsIOW7lg}
              name="Old school Images of the local trips "
              position={{ color: "info", label: "Iow Local Trips Miss Forer" }}
              description="One of the many local trips we all I would hope attened was the Totland trip and indeed I would Love to say I remember it clearly but I cannot but hopefully you can, if so message me and we will attempt to put together a longer message about the trip. <br/> <br/>
              
              What I can tell you about Totland was that it was of course an out of school trip but was it a weekend or a week away? this I am unsure about this fact but the accomadation and what we did and where we went is also a mystery. I do hear about the possabilities of a trip to Alum Bay and the beach at the foot of Alum Bay but what else did we all get upto. Trips out days away the is now way we would have been kept inside but I also cannot find out much about Totland trips. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={STripsIOW8sm}
              lgimage={STripsIOW8lg}
              name="Old school Images of the local trips "
              position={{ color: "info", label: "Iow Local Trips Miss Forer" }}
              description="Three boys all in a row but where are we ? could it be The Albion Hotel in Freshwater in the bacjground or could it be on the mainland. I believe it to be somewhere on the island as this was plav=ced in the Isle Of Wight slides box. Do you remmeber the faces as I feel sure they will be remembered by someone "
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              Local School trips out and about the Island
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Iow Based trips Carisbrooke, Brading
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={STripsIOW9sm}
              lgimage={STripsIOW9lg}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "Iow Local Trips Miss Forer" }}
              description="I think we are still on Alum Bay beach but does anyone remember this trip out or the studens that are in the photograph please? any information would be helpful. I would have to make a guess and say give the stoney beach it has a remarkable make up to Freshwater beach as the stones are pretty unique down there. I can also summise we are off summer season given the choice of rain macs and hats although given the summers we often have this is far from certain.
              
               "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SchoolTripsGallery;
