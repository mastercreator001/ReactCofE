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
import MissFMalham from "assets/images/Galleries/MissFMalham.jpg";
import MalhamForer1sm from "assets/images/MalhamForer/MalhamForer1sm.jpg";
import MalhamForer2sm from "assets/images/MalhamForer/MalhamForer2sm.jpg";
import MalhamForer3sm from "assets/images/MalhamForer/MalhamForer3sm.jpg";
import MalhamForer4sm from "assets/images/MalhamForer/MalhamForer4sm.jpg";
import MalhamForer5sm from "assets/images/MalhamForer/MalhamForer5sm.jpg";
import MalhamForer6sm from "assets/images/MalhamForer/MalhamForer6sm.jpg";
import MalhamForer7sm from "assets/images/MalhamForer/MalhamForer7sm.jpg";
import MalhamForer8sm from "assets/images/MalhamForer/MalhamForer8sm.jpg";
import MalhamForer9sm from "assets/images/MalhamForer/MalhamForer9sm.jpg";
import MalhamForer10sm from "assets/images/MalhamForer/MalhamForer10sm.jpg";
// Images Large
import MalhamForer1lg from "assets/images/MalhamForer/MalhamForer1lg.jpg";
import MalhamForer2lg from "assets/images/MalhamForer/MalhamForer2lg.jpg";
import MalhamForer3lg from "assets/images/MalhamForer/MalhamForer3lg.jpg";
import MalhamForer4lg from "assets/images/MalhamForer/MalhamForer4lg.jpg";
import MalhamForer5lg from "assets/images/MalhamForer/MalhamForer5lg.jpg";
import MalhamForer6lg from "assets/images/MalhamForer/MalhamForer6lg.jpg";
import MalhamForer7lg from "assets/images/MalhamForer/MalhamForer7lg.jpg";
import MalhamForer8lg from "assets/images/MalhamForer/MalhamForer8lg.jpg";
import MalhamForer9lg from "assets/images/MalhamForer/MalhamForer9lg.jpg";
import MalhamForer10lg from "assets/images/MalhamForer/MalhamForer10lg.jpg";

import MissFMalhamLarge from "assets/images/Galleries/MissFMalhamLarge.jpg";

function SchoolTripsMalhamF() {
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
              Miss Forer Malham Trips
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Malham With Miss Forers Collection
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissFMalham}
              lgimage={MissFMalhamLarge}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Miss Forer Malham Trip" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MalhamForer1sm}
              lgimage={MalhamForer1lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Miss Forer Malham Trip" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MalhamForer2sm}
              lgimage={MalhamForer2lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Miss Forer Malham Trip" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MalhamForer3sm}
              lgimage={MalhamForer3lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Miss Forer Malham Trip" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MalhamForer4sm}
              lgimage={MalhamForer4lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Miss Forer Malham Trip" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MalhamForer5sm}
              lgimage={MalhamForer5lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Miss Forer Malham Trip" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MalhamForer6sm}
              lgimage={MalhamForer6lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Miss Forer Malham Trip" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MalhamForer7sm}
              lgimage={MalhamForer7lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Miss Forer Malham Trip" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MalhamForer8sm}
              lgimage={MalhamForer8lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "Miss Forer Malham Trip" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              School Maps SVG recreation of the schools internal layout.
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Close up of the buildings only
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MalhamForer9sm}
              lgimage={MalhamForer9lg}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "Miss Forer Malham Trip" }}
              description="
               "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MalhamForer10sm}
              lgimage={MalhamForer10lg}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "Miss Forer Malham Trip" }}
              description="
               "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SchoolTripsMalhamF;
