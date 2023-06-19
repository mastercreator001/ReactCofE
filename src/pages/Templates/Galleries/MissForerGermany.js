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
import MissForerGermany1 from "assets/images/Galleries/MissForerGermany1.jpg";
import MissForerGermanyLarge1 from "assets/images/Galleries/MissForerGermanyLarge1.jpg";

function MissForerGermany() {
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
              Miss Forer Germany Visit
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Germany Visit Images
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissForerGermany1}
              lgimage={MissForerGermanyLarge1}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissForerGermany1}
              lgimage={MissForerGermanyLarge1}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissForerGermany1}
              lgimage={MissForerGermanyLarge1}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissForerGermany1}
              lgimage={MissForerGermanyLarge1}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissForerGermany1}
              lgimage={MissForerGermanyLarge1}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissForerGermany1}
              lgimage={MissForerGermanyLarge1}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissForerGermany1}
              lgimage={MissForerGermanyLarge1}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissForerGermany1}
              lgimage={MissForerGermanyLarge1}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissForerGermany1}
              lgimage={MissForerGermanyLarge1}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "2007-2008 internal layout" }}
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
              smimage={MissForerGermany1}
              lgimage={MissForerGermanyLarge1}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="
               "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default MissForerGermany;
