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
import ESG1SM from "assets/images/EarlySchoolGall/ESG1SM.jpg";
import ESG2SM from "assets/images/EarlySchoolGall/ESG2SM.jpg";
import ESG3SM from "assets/images/EarlySchoolGall/ESG3SM.jpg";
import ESG4SM from "assets/images/EarlySchoolGall/ESG4SM.jpg";
import ESG5SM from "assets/images/EarlySchoolGall/ESG5SM.jpg";
import ESG6SM from "assets/images/EarlySchoolGall/ESG6SM.jpg";
import ESG7SM from "assets/images/EarlySchoolGall/ESG7SM.jpg";
import ESG8SM from "assets/images/EarlySchoolGall/ESG8SM.jpg";
import ESG9SM from "assets/images/EarlySchoolGall/ESG9SM.jpg";
// Images Large
import ESG1LG from "assets/images/EarlySchoolGall/ESG1LG.jpg";
import ESG2LG from "assets/images/EarlySchoolGall/ESG2LG.jpg";
import ESG3LG from "assets/images/EarlySchoolGall/ESG3LG.jpg";
import ESG4LG from "assets/images/EarlySchoolGall/ESG4LG.jpg";
import ESG5LG from "assets/images/EarlySchoolGall/ESG5LG.jpg";
import ESG6LG from "assets/images/EarlySchoolGall/ESG6LG.jpg";
import ESG7LG from "assets/images/EarlySchoolGall/ESG7LG.jpg";
import ESG8LG from "assets/images/EarlySchoolGall/ESG8LG.jpg";
import ESG9LG from "assets/images/EarlySchoolGall/ESG9LG.jpg";

function EarlyschoolImages() {
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
              Early School Images
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Old School Images
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={ESG1SM}
              lgimage={ESG1LG}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={ESG2SM}
              lgimage={ESG2LG}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={ESG3SM}
              lgimage={ESG3LG}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={ESG4SM}
              lgimage={ESG4LG}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={ESG5SM}
              lgimage={ESG5LG}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={ESG6SM}
              lgimage={ESG6LG}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={ESG7SM}
              lgimage={ESG7LG}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={ESG8SM}
              lgimage={ESG8LG}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={ESG9SM}
              lgimage={ESG9LG}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              EARLY SCHOOL YEARS PICTURES
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Close up of the buildings only
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default EarlyschoolImages;
