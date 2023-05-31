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
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import osbourneHouse1 from "assets/images/TripsAway/osbourneHouse1.jpg";
import osbourneHouse2 from "assets/images/TripsAway/osbourneHouse2.jpg";
import osbourneHouse3 from "assets/images/TripsAway/osbourneHouse3.jpg";
import osbourneHouse4 from "assets/images/TripsAway/osbourneHouse4.jpg";

function OsbourneHouse() {
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
              Osbourne House
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              An Island educational Staple.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={osbourneHouse1}
              name="The Front of the royal palce"
              position={{ color: "info", label: "" }}
              description="View from the solent to the main wings of the residence."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={osbourneHouse2}
              name="Royal Dinning Room."
              position={{
                color: "info",
                label: "Durbar Room",
              }}
              description="A room for for entertaining royal guests."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={osbourneHouse3}
              name="Top Floor Royal Nursing"
              position={{
                color: "info",
                label: "The Royal Nursery",
              }}
              description="The Royal Nursey was one of oppulance and gradur as the royal children wanted for no luxury."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard
              image={osbourneHouse4}
              name="Swiss Retreat"
              position={{
                color: "info",
                label: "Swiss Cottage on the Osbourne Estate.",
              }}
              description="A lovoely Walk to the Swiss Cottage for some lovely clean air."
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default OsbourneHouse;
