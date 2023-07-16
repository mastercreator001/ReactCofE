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
import overheadBig2015 from "assets/images/historicSchool/overhead2015Big.png";
import overheadBig2015Large from "assets/images/historicSchool/overhead2015BigLarge.png";
function Historic() {
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
              Historic School View From The Air
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Church Of England Middle School In Full Operation
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={overheadBig2015}
              lgimage={overheadBig2015Large}
              name="The School In full operation"
              position={{ color: "info", label: "1900 onwards through to 2008 " }}
              description="The image displayed is of the school in full operation nd I would guess around 1990's to the laearly 2000's as the school can be seen with additonal parking at the top end of the site. As the classes grew as did the teacher's needed to staff the classes hence the need for more parking. While the school had a well favored route for buses and was on a main route the expense and sometimes inconvience and security grew it became betrer to take your kids to school as well. <br/><br/>.
              
              Notice also the tennis courtts have been coopted to be used as a tennis courts as well in the above photo. This indeed ,as well be a later photo as the amalgmation phase of the school allowed for the joining of C Of E Middle School with the Former Arch Bishop King School together also adding to the parking issues while construction was happening on the former middle's school site. I alos noted a path was constructed from the new overfill parking on the site to allow for staff to walk inside the school site and not having to trnasit over the grass of the school as well. <br/><br/>
              
              Do you notice anything more about this picture, let us know in the contact us section."
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Historic;
