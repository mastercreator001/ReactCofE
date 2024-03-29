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

// Images
import mrsTout from "assets/images/Auxstaff/mrsTout.png";
import mrsToutLarge from "assets/images/Auxstaff/mrsToutLarge.png";

function DinnerLadies2() {
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
              Dinner Ladies at C of E Middle
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Mrs Tout
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={mrsTout}
              lgimage={mrsToutLarge}
              name="Mrs Tout"
              position={{ color: "info", label: "Dinner lady" }}
              description="I'm not sure apart from domicilary staff we can categorise these two lovely ladies. Now I must apologise if I make a mistake but I'm pretty certain we have Mrs Smith and not so sure but Mrs Tout. 
I might be incorrect in the second so if I am please do let me know and we will adjust the post based on the outrage I may cause.
Ok they may not have been teachers to my recollection but I'm sure we have the dinner ladies of the school for many years. They usually worked as a pair and that's why we have reunited them again.<br/> <br/>

As kids playing and having fun we were as always prone to gravity and I feel certain we will be reading in the posts of times these ladies came to our aid and added the plaster and cuddle we needed at the time.<br/> <br/>
  
Fundamentally they were a core part of the day as we all loved to play and also dreaded the bell which required us to go learn but in equal measure bounced with excitement as the bell rang for playtime and they were there for us so any memories most welcome. "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default DinnerLadies2;
