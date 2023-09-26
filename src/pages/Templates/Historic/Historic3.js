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
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard2 from "examples/Cards/TeamCards/HorizontalTeamCard2";

// Images
import schoolClosing4 from "assets/images/historicSchool/schoolClosing4.png";
import schoolClosing4Large from "assets/images/historicSchool/schoolClosing4Large.png";

function Historic3() {
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
              Historic School View From Entrance Pathway
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Church Of England Middle School Awaiting Demolition
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={schoolClosing4}
              lgimage={schoolClosing4Large}
              name="The School receives It's first set of equiptment to allow the demolition crews to start stripping the internal of the building."
              position={{ color: "info", label: "September 2018 Schools Awaits demolition Crews" }}
              description="One of the final images of the school in it's complete state and this picture was taken just prior to the demolition phase starting. Note te large rubber feet in the foreground shot waiting for temporary fencing to be errected to seal off the site to memebers of the public while the demolition starts. The image may well have been take by an ex student who attended the farewell to C of E Middle as there were only a couple of days between the school owning the site and the contractors taking posession of the site.<br/><br/>
              
              The way the demoliion cycle works are all agreed prior in cntracts and the contractors take posession of the site on an agreed date and all posesions need to be removed prior to this point. If anything is left on site the contractors dispose of it as rubbish or are free to remove if for future use . The Contractors must have taken control of the site days after this picture was taken given the presence of demoliton equiptment.<br/><br/>
              
              Farewell to C of E Middle School or at the time as most would have known the site As the Lower campus of Christ The King. A touching note left on one the of the school white boards read `Farewell Christ The King Lower Thanks for Everything`, a sad end to a fablous school. "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Historic3;
