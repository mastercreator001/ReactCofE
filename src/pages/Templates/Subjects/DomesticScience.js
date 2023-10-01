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

// Small Images
import mrsMurdoch from "assets/images/Allteachers/mrsMurdoch.png";
import missForer2 from "assets/images/Allteachers/missForer2.png";
import MMBookSm from "assets/images/SubDomesticScience/MMBookSm.jpg";

// Large Images
import mrsMurdochLarge from "assets/images/Allteachers/mrsMurdochLarge.png";
import missForer2Large from "assets/images/Allteachers/missForer2Large.png";
import MMBookLg from "assets/images/SubDomesticScience/MMBookLg.jpg";

// Domestic Science FB Clip
import DSFBClip from "assets/images/facebookClippings/DSFBClip.jpg";

function DomesticScience() {
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
              Domestic Science Class
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Learning how to cook and work with foods and hot ovens.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={mrsMurdoch}
              lgimage={mrsMurdochLarge}
              name="Why Do We Need to learn Domestic Scienece At School"
              position={{ color: "info", label: "Mrs Murdoch Head Of Cooking" }}
              description="Culinary education naturally cultivates teamwork in children, has strong curriculum links across key learning areas and helps develop critical thinking skills and an understanding of the land and our communities. When children are involved in hands-on learning through digging and picking, mixing and chopping, and sitting together sharing a meal together, the impact is multi-faceted.  Children appreciate the concept of living sustainably, show willingness to experiment with foods, a heightened self-confidence, readiness to absorb and recall related information and display an appetite for learning more.<br/> <br/>

In the safe school environment, the Get Kids Cooking @ school teacher-led classes help children use a range of cooking skills to prepare, cook and eat healthy snacks and meals. Students can then transfer their knowledge to other cooking situations and re-create these dishes at home with confidence. Nutrition messages taught at school lend weight to the authority of information.  Higher levels of cooking skills and food knowledge are associated with higher vegetable consumption and healthier eating.<br/> <br/>

Schools are a sensible and popular setting to implement programs for equipping children with cooking skills because they offer continuous, intensive contact with children during their formative years."
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
              smimage={missForer2}
              lgimage={missForer2Large}
              name="Miss Forer"
              position={{ color: "info", label: "Part time Domestic Science" }}
              description="Our English classes wern't my favourite class as we had lots of test on spellings and that may well mhave ben the reason why I'm not quite as good at spelling as I probably should be but we still try and keep pegging at it. Hence if you see a spelllin mistake amoungst this text or a grammar slip up Iam entirely to blame and don't hold my teachers responsiable at all.<br/> <br/>
              
              Spelling and grammar is super important in today's world but has somewhat taken a backseat given all the new slf correcting system we now have as you type. remember in the days we attended C Of E Middle School the most sophisticated technlogy we had was a BBC Computer or a scientific calculator.   "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={25}>
            <HorizontalTeamCard2
              smimage={MMBookSm}
              lgimage={MMBookLg}
              name="Mrs Broadbent"
              position={{ color: "info", label: "Dinner Lady part time domestic science" }}
              description=" "
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h2" color="white">
              Cooking Class
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Some of your thoughts about Domestic Science Class
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={3} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={DSFBClip}
              lgimage={DSFBClip}
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

export default DomesticScience;
