/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ // Material Kit 2 React examples
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
import MissFMalham from "assets/images/Galleries/MissFMalham.jpg";
import MalhamForer1sm from "assets/images/MalhamForer/MalhamForer1sm.jpg";
import MalhamForer2sm from "assets/images/MalhamForer/MalhamForer2sm.jpg";
import MalhamForer3sm from "assets/images/MalhamForer/MalhamForer3sm.jpg";
import MalhamForer4sm from "assets/images/MalhamForer/MalhamForer4sm.jpg";
import MalhamForer5sm from "assets/images/MalhamForer/MalhamForer5sm.jpg";
import MalhamForer6sm from "assets/images/MalhamForer/MalhamForer6sm.jpg";
import MalhamForer7sm from "assets/images/MalhamForer/MalhamForer7sm.jpg";
import MalhamForer8sm from "assets/images/MalhamForer/MalhamForer8sm.jpg";
import MalhamForer9sm from "assets/images/MalhamForer/MalhamForer9sm.jpg";
import MalhamForer10sm from "assets/images/MalhamForer/MalhamForer10sm.jpg";
// Images Large
import MalhamForer1lg from "assets/images/MalhamForer/MalhamForer1lg.jpg";
import MalhamForer2lg from "assets/images/MalhamForer/MalhamForer2lg.jpg";
import MalhamForer3lg from "assets/images/MalhamForer/MalhamForer3lg.jpg";
import MalhamForer4lg from "assets/images/MalhamForer/MalhamForer4lg.jpg";
import MalhamForer5lg from "assets/images/MalhamForer/MalhamForer5lg.jpg";
import MalhamForer6lg from "assets/images/MalhamForer/MalhamForer6lg.jpg";
import MalhamForer7lg from "assets/images/MalhamForer/MalhamForer7lg.jpg";
import MalhamForer8lg from "assets/images/MalhamForer/MalhamForer8lg.jpg";
import MalhamForer9lg from "assets/images/MalhamForer/MalhamForer9lg.jpg";
import MalhamForer10lg from "assets/images/MalhamForer/MalhamForer10lg.jpg";

import MissFMalhamLarge from "assets/images/Galleries/MissFMalhamLarge.jpg";

function SchoolTripsMalhamF() {
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
              Miss Forer Malham Trips
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Malham With Miss Forers Collection
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissFMalham}
              lgimage={MissFMalhamLarge}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Miss Forer Malham Trip" }}
              description="As far as the saying goes (a ship sailed without her captain) the fact Miss Forer didn't go to Malham to my knowledge. Please do feel free to correct me but this section is for Miss Forer's Malham trip could be misleading, thet were her slides which she has gifted to the group so maybe she used a camera person and took a risk on what they returned who knows. <br/> <br/>
              
              The photo contains some of the students who attended the Malham trip in the late 1970's early 1980's we could be visiting Harewood House on the Malham Trip with Mr Monk or Northcourt House in Shorewell??. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MalhamForer1sm}
              lgimage={MalhamForer1lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Miss Forer Malham Trip" }}
              description="We believe this to be one of the many Limestone caves visited on the trip to Malham programme 1989 possibly Monday 22nd we had a tour to Ingleborough Cave so I'm going to say this is probably the location as I cannot find any other references to caves on the Malham Programme. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MalhamForer2sm}
              lgimage={MalhamForer2lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Miss Forer Malham Trip" }}
              description="A shot of one of the many rivers feeding the Tarn although I can't be 100% certain it still seems to be one of many nature pictures included in the pacakage. Can you see anyone in the picutre ?. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MalhamForer3sm}
              lgimage={MalhamForer3lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Miss Forer Malham Trip" }}
              description="We have here the Famous York Minster Catherdral and also a personal tour although this was listed as optional on the Malham sheets, followed by shopping in york. Those were the days, do you remember your shopping trip?."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MalhamForer4sm}
              lgimage={MalhamForer4lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Miss Forer Malham Trip" }}
              description="Here we may have an inside view of Skipton Castle? does anyone remmeber if we were allowed to take photos. Or perhaps if you can remember this photo or the student featured it would be helpful."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MalhamForer5sm}
              lgimage={MalhamForer5lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Miss Forer Malham Trip" }}
              description="I would like to say there was a lake outside or to the side of Bolton Abbey, does anyone remember this as I may be incorrect. Oh and the ducks and their babies swimming along as well."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MalhamForer6sm}
              lgimage={MalhamForer6lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Miss Forer Malham Trip" }}
              description="Ducks and more ducks probably looking for food at Bolton Abbey, Does anyone remember paddling down there?. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MalhamForer7sm}
              lgimage={MalhamForer7lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Miss Forer Malham Trip" }}
              description="So many possibilities that this could be but Im going with an orienterring adventure where we started out at Airhead Springs and had to map read and compass read our way back to Newfield Hall. although it could also be enroute to Gordale Scar perhaps too?."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MalhamForer8sm}
              lgimage={MalhamForer8lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Miss Forer Malham Trip" }}
              description="Yet again more ducks, I'm thinking the person loved animals who originally photographed these."
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              Ah and now onto the famous waterfall
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              What is the name of the waterfall
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MalhamForer9sm}
              lgimage={MalhamForer9lg}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "Miss Forer Malham Trip" }}
              description="Unknown water fall yet to be named but will come to me at some point I'm sure.
               "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MalhamForer10sm}
              lgimage={MalhamForer10lg}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "Miss Forer Malham Trip" }}
              description="An internal shot showing how big some of the formations had become overtime, dwarfing the young students. This should be Ingleborough Cave in Yorkshire as we all had a guided tour of the caves.<br/> <br/> 

              Any ideas on the identity of the students within the cave, I wonder if they made it home?
               "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SchoolTripsMalhamF;
