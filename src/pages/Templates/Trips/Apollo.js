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
import romanVilla1 from "assets/images/TripsAway/romanVilla1.jpg";
import romanVilla2 from "assets/images/TripsAway/romanVilla2.jpg";
import romanVilla3 from "assets/images/TripsAway/romanVilla3.jpg";
// Large Images
import romanVilla4 from "assets/images/TripsAway/romanVilla4.jpg";

function Apollo() {
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
              Apollo Theare Newport
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Various School trips and productions.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={romanVilla1}
              lgimage={romanVilla1}
              name=""
              position={{ color: "info", label: "" }}
              description=""
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={romanVilla2}
              lgimage={romanVilla2}
              name=""
              position={{
                color: "info",
                label: "",
              }}
              description=" "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={romanVilla3}
              lgimage={romanVilla3}
              name=""
              position={{
                color: "info",
                label: "",
              }}
              description=""
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={romanVilla4}
              lgimage={romanVilla4}
              name=""
              position={{
                color: "info",
                label: "",
              }}
              description=""
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Apollo;
