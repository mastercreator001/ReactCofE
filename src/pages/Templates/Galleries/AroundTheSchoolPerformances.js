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
import SchoolPerformances from "assets/images/Galleries/SchoolPerformances.jpg";
import SchoolPerformancesLarge from "assets/images/Galleries/SchoolPerformancesLarge.jpg";

function AroundTheSchoolPerformances() {
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
              Around The School Performances
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              School Productions
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SchoolPerformances}
              lgimage={SchoolPerformancesLarge}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "School Performances On Site" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SchoolPerformances}
              lgimage={SchoolPerformancesLarge}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "School Performances On Site" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SchoolPerformances}
              lgimage={SchoolPerformancesLarge}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "School Performances On Site" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SchoolPerformances}
              lgimage={SchoolPerformancesLarge}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "School Performances On Site" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SchoolPerformances}
              lgimage={SchoolPerformancesLarge}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "School Performances On Site" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SchoolPerformances}
              lgimage={SchoolPerformancesLarge}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "School Performances On Site" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SchoolPerformances}
              lgimage={SchoolPerformancesLarge}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "School Performances On Site" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SchoolPerformances}
              lgimage={SchoolPerformancesLarge}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "School Performances On Site" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SchoolPerformances}
              lgimage={SchoolPerformancesLarge}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "School Performances On Site" }}
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
              smimage={SchoolPerformances}
              lgimage={SchoolPerformancesLarge}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "School Performances On Site" }}
              description="
               "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AroundTheSchoolPerformances;
