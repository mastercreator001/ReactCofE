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
import RB1Sm from "assets/images/RebuildingGallery/RB1Sm.jpg";
import RB2Sm from "assets/images/RebuildingGallery/RB2Sm.jpg";
import RB3Sm from "assets/images/RebuildingGallery/RB3Sm.jpg";
import RB4Sm from "assets/images/RebuildingGallery/RB4Sm.jpg";
import RB5Sm from "assets/images/RebuildingGallery/RB5Sm.jpg";
import RB6Sm from "assets/images/RebuildingGallery/RB6Sm.jpg";
import RB7Sm from "assets/images/RebuildingGallery/RB7Sm.jpg";
import RB8Sm from "assets/images/RebuildingGallery/RB8Sm.jpg";
import RB9Sm from "assets/images/RebuildingGallery/RB9Sm.jpg";
import RB10Sm from "assets/images/RebuildingGallery/RB10Sm.jpg";

// Images Large
import RB1Lg from "assets/images/RebuildingGallery/RB1Lg.jpg";
import RB2Lg from "assets/images/RebuildingGallery/RB2Lg.jpg";
import RB3Lg from "assets/images/RebuildingGallery/RB3Lg.jpg";
import RB4Lg from "assets/images/RebuildingGallery/RB4Lg.jpg";
import RB5Lg from "assets/images/RebuildingGallery/RB5Lg.jpg";
import RB6Lg from "assets/images/RebuildingGallery/RB6Lg.jpg";
import RB7Lg from "assets/images/RebuildingGallery/RB7Lg.jpg";
import RB8Lg from "assets/images/RebuildingGallery/RB8Lg.jpg";
import RB9Lg from "assets/images/RebuildingGallery/RB9Lg.jpg";
import RB10Lg from "assets/images/RebuildingGallery/RB10Lg.jpg";

function RebuildingGallery() {
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
              Rebuilding on the Old School Site
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              ABK meets C Of E Middle equals Christ The King
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={RB1Sm}
              lgimage={RB1Lg}
              name="The Rebuilding Phase of the school Site to transition into an overflow Carpark for the Christ The King Main complex "
              position={{ color: "info", label: "Redevelopment of the site begins" }}
              description="As with  all redevelopment opportunities you have to follow the plan and the contractor chosen for both the demolition and the redevelopment of the old school site was Sir Robert McAlpine Limited. The company is a family-owned building and civil engineering company based in Hemel Hempstead, Hertfordshire, England. The company specializes in engineering and construction in the infrastructure, heritage, commercial, arena and stadium, healthcare, education, and nuclear sectors.
              
              <br/> <br/> Sir Robert McAlpine was one of the contractors engaged in building the Mulberry harbour units during World War II. The company has been running for 64 years and has six active directors and two active secretaries.0 It provides construction services to oil and gas, pharmaceutical, power generation, nuclear, defense, chemical, water, and mining industries. And in our case regeneration of the old school site as well as the revevelopment. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={RB2Sm}
              lgimage={RB2Lg}
              name="The Rebuilding Phase of the school Site to transition into an overflow Carpark for the Christ The King Main complex "
              position={{ color: "info", label: "The Site laying empty until equiptment arrives." }}
              description="As you can see in the pictures in tis section the site has effectively been cleared and resored to it's clean state and ready for the groundworks to begin. With all and or any regeneration project the future of a site depends on the type of work that will have to be undertaken to make it ready for a long term future.<br/> <br/>
              
              Such as a minor road would need a minimal foundation based on the predicted future traffic type and frequency but a majorroad perhaps on a dual carriagway would need more suitable ground analsis aand foundation installed to support the heavier lorries. The school site was earmarked to be used as a car park and although tis isn't a heavy load it will be incoprating the wweight of the materials added and the items driven over it as well. So it's important to rememeber the needs of the site must be underpinned by the foundation. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={RB3Sm}
              lgimage={RB3Lg}
              name="The Rebuilding Phase of the school Site to transition into an overflow Carpark for the Christ The King Main complex "
              position={{ color: "info", label: "Hardcore on site and ready for compaction" }}
              description="The site although cleared and ready to be worked upon to facilitate the transisiton from school to car park was a slow progression. As the school was demolished and the old materials removed the site was also needing much hard core to etblish the new road level matching the incline evidenent on Wellington Road. Imagine with me if you will lookinf from the steps in the playground at the bottom of the big steps.<br/> <br/>
              
              If you stood there now you would be under ground as the site need much hard core and compactiong to establish the new foundation and the new reset height leevel matching Wellington Road. To look at the site now we would have to make a guess and say that the ground level directly outside the hall is over 2 meters higher now i.e the hall is under the ground. The majority of the school estimated at 2 meters plus hall end and shoe level at the other end. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={RB4Sm}
              lgimage={RB4Lg}
              name="The Rebuilding Phase of the school Site to transition into an overflow Carpark for the Christ The King Main complex "
              position={{ color: "info", label: "Redeveloment at a pace" }}
              description="The site although having been compacted and mutliple ayers of hard core added needed finishing and all appropriate measure were taken to mirror the height of Wellington Rod with that of the new site. Did you ever notice the school was sittingin a hole ? rememeber the playing fields and the fact in most cases they were higher than the school towards the hall end and leveled out towards the sciece block end.<br/> <br/>
              
              Just take a look at the fields today and you ca clearly see the bungalows sit on a much higher bank around the permieter of the feilds. The school seems to have been designed to site proudly in a hollow and be a little less intrusive on the surronding area. This needed to change and this was calculated out in the new site when it was planned as the road level now represents as close to level between the fields the new site and the road is as possible. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={RB5Sm}
              lgimage={RB5Lg}
              name="The Rebuilding Phase of the school Site to transition into an overflow Carpark for the Christ The King Main complex "
              position={{ color: "info", label: "Notice the edges where the new car park starts." }}
              description="The school site as you can see is now boasting a new tarmac coating over the groundworks installed in some cases over the old. Look at the pictures and you can see the ground level for the site has been completed and will now be back filled wih fresh soil to lift any remaining low spots to level the site once again. In some of the remaining pictures you can still spot one of two areas of the old school still exist.<br/> <br/>
              
              The pictures show a photograph of the schools old exit with a heavy layer of soil approaching. But in the foreground you can spot kerb stones and and old tramac not removed and still a small but interesting nod to what was there before, although all now hidden under turf and grass."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={RB6Sm}
              lgimage={RB6Lg}
              name="The Rebuilding Phase of the school Site to transition into an overflow Carpark for the Christ The King Main complex "
              position={{ color: "info", label: "Redevelopment at a fast pace" }}
              description="Having ground works complete lights tarmac and kerb stones were in place for the remaining touch needed for the finislising of the car park site. There are still some features remining of the original school to this day. Look forthe tennis courts which are now on a level with the new car park and to us they were the entrance gates but the left pillar still exists today and forms the new sites exit for the bus traffic and turning circle.<br/> <br/>
              
              The telegraph pole sitting behind the wall is still ther and someof the original bondary fencing is still there. Does anyone rememeber the grass path way next to the pavement directly outside the school? The worn out grass is still there to this day. Maybe pay the site a visit and see what else you can spot of the old school. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={RB7Sm}
              lgimage={RB7Lg}
              name="The Rebuilding Phase of the school Site to transition into an overflow Carpark for the Christ The King Main complex "
              position={{
                color: "info",
                label: "Take note of the new soil the old carpark height",
              }}
              description="Criptic perhaps title but perhaps your rememeber me saying how the ntire school site has been redevelped and also been refilled to match the road way height.<br/> <br/>
              
              This photo is the prefect example as you can see the site in the bottom right of the picture the origianl tarmac and kerb stones forming the boundary edge of the schools car park. Looking at the height difference at this end of the site we would believe the original car park would be around knee to ankle deep today.<br/> <br/>
              
              It's all very interesting if you take a deeper look at the photos as the hall end would be at least 2 meters under ground today."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={RB8Sm}
              lgimage={RB8Lg}
              name="The Rebuilding Phase of the school Site to transition into an overflow Carpark for the Christ The King Main complex "
              position={{ color: "info", label: "The gates didn't survive" }}
              description="The School and the original gates, yes you heard me correclty the school lasted form 1971-2008 and still had the same gates. I cannot be sure about the wood attached to them but as we as students transitioned from primary school to middle school the gates were opened in the morning and in some cases a sad thing but also the best thing to pass back out of at 15.40 each evening.<br/> <br/>
              
              The pillars remain today but as most quick fixes go these days the gates were disposed of and the hinges cut off into the brick pillars. Still evident today the metal cut clean will rust and slowly expand as they rust and burst the brick work but still you can pop down the site to see for yourself."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={RB9Sm}
              lgimage={RB9Lg}
              name="The Rebuilding Phase of the school Site to transition into an overflow Carpark for the Christ The King Main complex "
              position={{ color: "info", label: "Road with a view" }}
              description="The school Site was one of dread and for me one of love upon leaving the school but the view always remianed the same for a couple of generations and has not irrecovucable changed now the site has been demolished. Were always sad to see an old school go as it contains happy memories of school friends and a growing up.<br/> <br/>
              
              The site entrances have been little changed however although new gates to the school or the new car park have been added the site is still home to C Of E although a litte different in it's layout."
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              Progression to A new Road Level Car park
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Close up of the buildings only
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={RB10Sm}
              lgimage={RB10Lg}
              name="Demolition and the sunsequent rebuilding phase of the school."
              position={{ color: "info", label: "The Final push and the site is complete." }}
              description="The initial transition phase of a development and the further redevelopment of a site is a messey task but as the pictures demeonstrate it's all a process and it can be a wild ride in the aims of the final transitioral phase from it's previous use to it's new final use.<br/> <br/>
              
              I can't help but think it is a sad end to the old school being a car park now. No Laughter no Joy and No Tears there anymore only memories and echoes of the past forever etched in our hearts and memories. The site has transitoned and we need to say good bye to it but we will never forget it, the good and the bad the happy and the sad it was a home to many of us as well as a start into a life of experiences and where could we have ever got more. Good bye school.......
               "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default RebuildingGallery;
