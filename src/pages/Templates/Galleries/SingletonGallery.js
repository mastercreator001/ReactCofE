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
import Singleton from "assets/images/Galleries/Singleton.jpg";
import SingletonTrips1sm from "assets/images/SingletonGallery/SingletonTrips1sm.png";
import SingletonTrips2sm from "assets/images/SingletonGallery/SingletonTrips2sm.png";
import SingletonTrips3sm from "assets/images/SingletonGallery/SingletonTrips3sm.jpg";
import SingletonTrips4sm from "assets/images/SingletonGallery/SingletonTrips4sm.jpg";
import SingletonTrips5sm from "assets/images/SingletonGallery/SingletonTrips5sm.jpg";
import SingletonTrips6sm from "assets/images/SingletonGallery/SingletonTrips6sm.jpg";
import SingletonTrips7sm from "assets/images/SingletonGallery/SingletonTrips7sm.jpg";
import SingletonTrips8sm from "assets/images/SingletonGallery/SingletonTrips8sm.jpg";
import SingletonTrips9sm from "assets/images/SingletonGallery/SingletonTrips9sm.jpg";

// Images Large
import SingletonTrips1lg from "assets/images/SingletonGallery/SingletonTrips1lg.png";
import SingletonTrips2lg from "assets/images/SingletonGallery/SingletonTrips2lg.png";
import SingletonTrips3lg from "assets/images/SingletonGallery/SingletonTrips3lg.jpg";
import SingletonTrips4lg from "assets/images/SingletonGallery/SingeltonTrips4lg.jpg";
import SingletonTrips5lg from "assets/images/SingletonGallery/SingletonTrips5lg.jpg";
import SingletonTrips6lg from "assets/images/SingletonGallery/SingletonTrips6lg.jpg";
import SingletonTrips7lg from "assets/images/SingletonGallery/SingletonTrips7lg.jpg";
import SingletonTrips8lg from "assets/images/SingletonGallery/SingletonTrips8lg.jpg";
import SingletonTrips9lg from "assets/images/SingletonGallery/SingletonTrips9lg.jpg";
import SingletonLarge from "assets/images/Galleries/SingletonLarge.jpg";

function SingletonGallery() {
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
              Mr Felton Singleton Gallery
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Singleton Gallery
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SingletonTrips1sm}
              lgimage={SingletonTrips1lg}
              name="Trips away To the Weald and Downland Museum "
              position={{ color: "info", label: "Singleton Gallery Photos" }}
              description="The Singleton Adventure was one of the very first trips I have attended on The New Middle school and for me moving from West Street Primary as many others did as well it was a big move as was a trip away to somewhere not local. Singleton for me was in 1Hawes  and the trip was fun and exciting and lots of places to run around. I couldn't tell you the weather or what I learn't but it was all part of getting older and making progress into the adult I have become.  <br/> <br/>
              
              Singlteon or as it later became known as The Weald And Downland Living And Open Air Museum is a unique place in the city of Chichester and hopefully you remember you trip away with the school.<br/><br/>
              
              As you can see in the image there is a recreation of an old school as it would have been  in the late 1800 or early 1900's"
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SingletonTrips2sm}
              lgimage={SingletonTrips2lg}
              name="Trips away To the Weald and Downland Museum "
              position={{ color: "info", label: "Singleton Gallery Photos" }}
              description="The Singleton museum is unique and offers a rich heritage of building of all different styles and ages brought together to represent the progression through the ages of society in Britian. The collection is unique and aquires builidings that would have been demolished and rebuilds them like for like using the same materials and techniques that were used originally. If possible the building isn't even dismantled and will be moved as close to whole as it safely can. <br/> <br/>
              
              The collection covers all types of builiding school houses public meeting bulidings and offices of sorts schools are amoung their collections. The overall site is themed and has allowed for a collective of similur aged buildings to be hosted near to each other. The site spans 40 acres and is the only living museum with such a extensive collection in the United Kingdom. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={Singleton}
              lgimage={SingletonLarge}
              name="Trips away To the Weald and Downland Museum "
              position={{ color: "info", label: "Singleton Gallery Photos" }}
              description="From Farming to local politics the colection keeps expanding and is only limited by time and the willingness of building owners to either demolish or in exceptioal cases await the engineers from the museum to dismantle the building slowly so as not to do too much damage to the structure. The public building you see in the image is an old town hall that was rescued from Titchfield and it used to be a Market Hall which would otherwise continued to be either removed via demolition or collapse through natural decay and neglect.<br/></br>
              
              
BUILDING HISTORYTOP 3 INTERESTING FACTS
Market halls like this were once general throughout England. Among the earliest which have survived are several from the late 15th and early 16th centuries. The majority were timber-framed.

Many were demolished in the 18th and 19th centuries, since they no longer served the purpose for which they were built and were occupying space needed for other uses. Many others were replaced by more solid buildings, with enclosed rooms taking the place of the open arcade. One by one they were transformed, lost, or, in a few cases, moved to a less valuable site.

This was the fate of the Titchfield Market Hall in the middle of the last century — some two and a half centuries after it was first built."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SingletonTrips3sm}
              lgimage={SingletonTrips3lg}
              name="Trips away To the Weald and Downland Museum "
              position={{ color: "info", label: "Singleton Gallery Photos" }}
              description="As you can see there are some images from the school the trip by students was never a day out it was always a learning experience and the young lady has a clip board to recored certain facts about the building and probably a series for general coverage of the site overall. I'm afraid i dont remember the worksheets we had to use or fill out but perhps you do and could let me know what you remember about the trip. If like me it was one of your forst school trips off the Island how did it go for you? apphrension or worry or totaly fine I'd be interested to hear."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SingletonTrips4sm}
              lgimage={SingletonTrips4lg}
              name="Trips away To the Weald and Downland Museum "
              position={{ color: "info", label: "Singleton Gallery Photos" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SingletonTrips5sm}
              lgimage={SingletonTrips5lg}
              name="Trips away To the Weald and Downland Museum "
              position={{ color: "info", label: "Singleton Gallery Photos" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SingletonTrips6sm}
              lgimage={SingletonTrips6lg}
              name="Trips away To the Weald and Downland Museum "
              position={{ color: "info", label: "Singleton Gallery Photos" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SingletonTrips7sm}
              lgimage={SingletonTrips7lg}
              name="Trips away To the Weald and Downland Museum "
              position={{ color: "info", label: "Singleton Gallery Photos" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SingletonTrips8sm}
              lgimage={SingletonTrips8lg}
              name="Trips away To the Weald and Downland Museum "
              position={{ color: "info", label: "Singleton Gallery Photos" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              School Maps SVG recreation of the schools internal layout.
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Close up of the buildings only
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SingletonTrips9sm}
              lgimage={SingletonTrips9lg}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "Singleton Gallery Photos" }}
              description="
               "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SingletonGallery;
