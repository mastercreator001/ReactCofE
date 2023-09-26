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
import Overview1 from "assets/images/historicSchool/Overview1.png";
import Overview1Large from "assets/images/historicSchool/Overview1Large.png";

function Historic2() {
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
              Historic School View From The Air
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Church Of England Middle School Demolished With Overlay
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={Overview1}
              lgimage={Overview1Large}
              name="The School Sadly demolished with overlay of site plan"
              position={{ color: "info", label: "Head Teacher 1971-1982" }}
              description="And now we come closer to the present day tis image was caprured by the Google satelites in July 2021 and shows the entire for the ost part pretty much finished and landscaped to completiition and very close to being used once again. As the site was demolised in 2019 I thouhght it may be fun to overlay the schools framework on the old site to be able to compare the old with the new. The school seeemed small in the days I attended but I'd have to say it may well be because I was in fact small at the time.<br/> <br/>
              
              Seeing the comparisson shows the sites current usage and the iportance of a commuting community these days and as a by product a need to park ones convayence upon arrival. During the construction of the Christ The King Complex despite the provision of extra parking that was utilised on te lower campus the parking issues plagued the site and a smaller carpark was made in the Victoria Recreation Ground which perhaps wasn't the best idea as it was frequetly water logged and became very boggy for people brave epuhg to use it. The Recration ground was returned to it's former state upon the works on the old C of E site and is nw part of the field once again. "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Historic2;
