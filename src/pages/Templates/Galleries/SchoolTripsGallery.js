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

// Images Small
import SchoolTrips from "assets/images/Galleries/SchoolTrips.jpg";
import STripsIOW1sm from "assets/images/SchoolTripsIOW/STripsIOW1sm.jpg";
import STripsIOW2sm from "assets/images/SchoolTripsIOW/STripsIOW2sm.jpg";
import STripsIOW3sm from "assets/images/SchoolTripsIOW/STripsIOW3sm.jpg";
import STripsIOW4sm from "assets/images/SchoolTripsIOW/STripsIOW4sm.jpg";
import STripsIOW5sm from "assets/images/SchoolTripsIOW/STripsIOW5sm.jpg";
import STripsIOW6sm from "assets/images/SchoolTripsIOW/STripsIOW6sm.jpg";
import STripsIOW7sm from "assets/images/SchoolTripsIOW/STripsIOW7sm.jpg";
import STripsIOW8sm from "assets/images/SchoolTripsIOW/STripsIOW8sm.jpg";
import STripsIOW9sm from "assets/images/SchoolTripsIOW/STripsIOW9sm.jpg";

// Images Large
import SchoolTripsLarge from "assets/images/Galleries/SchoolTripsLarge.jpg";
import STripsIOW1lg from "assets/images/SchoolTripsIOW/STripsIOW1lg.jpg";
import STripsIOW2lg from "assets/images/SchoolTripsIOW/STripsIOW2lg.jpg";
import STripsIOW3lg from "assets/images/SchoolTripsIOW/STripsIOW3lg.jpg";
import STripsIOW4lg from "assets/images/SchoolTripsIOW/STripsIOW4lg.jpg";
import STripsIOW5lg from "assets/images/SchoolTripsIOW/STripsIOW5lg.jpg";
import STripsIOW6lg from "assets/images/SchoolTripsIOW/STripsIOW6lg.jpg";
import STripsIOW7lg from "assets/images/SchoolTripsIOW/STripsIOW7lg.jpg";
import STripsIOW8lg from "assets/images/SchoolTripsIOW/STripsIOW8lg.jpg";
import STripsIOW9lg from "assets/images/SchoolTripsIOW/STripsIOW9lg.jpg";

function SchoolTripsGallery() {
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
              Miss Forer And the schools local trips
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Local trips around the Island With Miss Forers Collection
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SchoolTrips}
              lgimage={SchoolTripsLarge}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Iow Local Trips Miss Forer" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={STripsIOW1sm}
              lgimage={STripsIOW1lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Iow Local Trips Miss Forer" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={STripsIOW2sm}
              lgimage={STripsIOW2lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Iow Local Trips Miss Forer" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={STripsIOW3sm}
              lgimage={STripsIOW3lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Iow Local Trips Miss Forer" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={STripsIOW4sm}
              lgimage={STripsIOW4lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Iow Local Trips Miss Forer" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={STripsIOW5sm}
              lgimage={STripsIOW5lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Iow Local Trips Miss Forer" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={STripsIOW6sm}
              lgimage={STripsIOW6lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Iow Local Trips Miss Forer" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={STripsIOW7sm}
              lgimage={STripsIOW7lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Iow Local Trips Miss Forer" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={STripsIOW8sm}
              lgimage={STripsIOW8lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Iow Local Trips Miss Forer" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              Local School trips out and about the Island
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Iow Based trips Carisbrooke, Brading
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={STripsIOW9sm}
              lgimage={STripsIOW9lg}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "Iow Local Trips Miss Forer" }}
              description="
               "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SchoolTripsGallery;
