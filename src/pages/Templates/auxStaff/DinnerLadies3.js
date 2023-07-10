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

//Small Images
import The3sm from "assets/images/Auxstaff/The3sm.png";
//Large Images
import The3lg from "assets/images/Auxstaff/The3lg.png";

//FB Clip
import The3FBClip from "assets/images/facebookClippings/The3FBClip.jpg";

function DinnerLadies3() {
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
              Dinner Ladies at C of E Middle
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Mrs Trevett, Mrs Broadhurst & Mrs Pragnell
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={The3sm}
              lgimage={The3lg}
              name="Pragnell,Broadhurst,Trevett"
              position={{ color: "info", label: "Dinner ladies" }}
              subheading="Mrs Broadbent, Mrs Pragnell, Mrs Trevett."
              description="These three ladies went about tier day jobs with a spring in their steps and a distinct love for their jobs as noted in the comments below. Although not main stream teachers they were still at the forefrond of the school as any good school would work on there stomaches and the best was to ensure a good education would be to have a full belly.<br/> <br/>
              
              They did this well and although I cannot say I new them I appreciate their efforts in the school, perhaps you have a word or two to say about these lovely ladies. Maybe mail me and we can get a bit more history to these ladies, message on the contact us links.  "
            />
          </MKBox>
        </Grid>
        <Grid item xs={3} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2 smimage={The3FBClip} name="" position={{}} description="" />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default DinnerLadies3;
