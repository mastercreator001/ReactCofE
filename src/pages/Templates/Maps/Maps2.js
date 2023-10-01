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
import bookMap from "assets/images/school maps/bookMap.jpg";
import bookMaplarge from "assets/images/school maps/bookMapLarge.jpg";

function Maps2() {
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
              School Maps
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              All maps of the school are current for the date they relate too and although additions
              have been added they represent the base design of the school from 1971-2009.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={bookMap}
              lgimage={bookMaplarge}
              name="This is an original map recreated"
              position={{ color: "info", label: " A scan of the original map " }}
              description="Of the most basic design was the map I present to you today and this is an original and uneditied map. The scanned school map you can see on display here was originally inside a pamphlett for the school which was distrubited from the church to celebrate the school's opening. In the design it clearly shows the limited footprint of the school and it's distinct lack of familarity as in the school's later days the other block were added and further development took place. <br/><br/>
              
              The map was most basic as time and design costs were clearly kept to a minimum unlike perhaps today wen you can add additions upto a couple of days before and run cpies off printer within the facility you may have access to. Printers need much tie to run a section of print and it could be fairly expensive as type setters were still used and even the most basic of computers were in there infancy. <br/> <br/>
              
              The basic design is easy to read and I'm sure it was mote than adequate for the time to show the basic layout of the school as it stood at that point in time. We all have to thaks Miss Forer for this little time capsule of the school as Miss Forer was there from the very start of the school and was there throught it's main history as C OF E only leaving a couple of years before the school became Christ The King Campus property."
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Maps2;
