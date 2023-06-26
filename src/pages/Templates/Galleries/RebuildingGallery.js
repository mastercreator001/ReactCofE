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
import RB1Sm from "assets/images/RebuildingGallery/RB1Sm.jpg";
import RB2Sm from "assets/images/RebuildingGallery/RB2Sm.jpg";
import RB3Sm from "assets/images/RebuildingGallery/RB3Sm.jpg";
import RB4Sm from "assets/images/RebuildingGallery/RB4Sm.jpg";
import RB5Sm from "assets/images/RebuildingGallery/RB5Sm.jpg";
import RB6Sm from "assets/images/RebuildingGallery/RB6Sm.jpg";
import RB7Sm from "assets/images/RebuildingGallery/RB7Sm.jpg";
import RB8Sm from "assets/images/RebuildingGallery/RB8Sm.jpg";
import RB9Sm from "assets/images/RebuildingGallery/RB9Sm.jpg";
import RB10Sm from "assets/images/RebuildingGallery/RB10Sm.jpg";

// Images Large
import RB1Lg from "assets/images/RebuildingGallery/RB1Lg.jpg";
import RB2Lg from "assets/images/RebuildingGallery/RB2Lg.jpg";
import RB3Lg from "assets/images/RebuildingGallery/RB3Lg.jpg";
import RB4Lg from "assets/images/RebuildingGallery/RB4Lg.jpg";
import RB5Lg from "assets/images/RebuildingGallery/RB5Lg.jpg";
import RB6Lg from "assets/images/RebuildingGallery/RB6Lg.jpg";
import RB7Lg from "assets/images/RebuildingGallery/RB7Lg.jpg";
import RB8Lg from "assets/images/RebuildingGallery/RB8Lg.jpg";
import RB9Lg from "assets/images/RebuildingGallery/RB9Lg.jpg";
import RB10Lg from "assets/images/RebuildingGallery/RB10Lg.jpg";

function RebuildingGallery() {
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
              Rebuilding on the Old School Site
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              ABK meets C Of E Middle equals Christ The King
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={RB1Sm}
              lgimage={RB1Lg}
              name="The Rebuilding Phase of the school Site to transition into an overflow Carpark for the Christ The King Main complex "
              position={{ color: "info", label: "Redevelopment Images" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={RB2Sm}
              lgimage={RB2Lg}
              name="The Rebuilding Phase of the school Site to transition into an overflow Carpark for the Christ The King Main complex "
              position={{ color: "info", label: "Redevelopment Images" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={RB3Sm}
              lgimage={RB3Lg}
              name="The Rebuilding Phase of the school Site to transition into an overflow Carpark for the Christ The King Main complex "
              position={{ color: "info", label: "Redevelopment Images" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={RB4Sm}
              lgimage={RB4Lg}
              name="The Rebuilding Phase of the school Site to transition into an overflow Carpark for the Christ The King Main complex "
              position={{ color: "info", label: "Redevelopment Images" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={RB5Sm}
              lgimage={RB5Lg}
              name="The Rebuilding Phase of the school Site to transition into an overflow Carpark for the Christ The King Main complex "
              position={{ color: "info", label: "Redevelopment Images" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={RB6Sm}
              lgimage={RB6Lg}
              name="The Rebuilding Phase of the school Site to transition into an overflow Carpark for the Christ The King Main complex "
              position={{ color: "info", label: "Redevelopment Images" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={RB7Sm}
              lgimage={RB7Lg}
              name="The Rebuilding Phase of the school Site to transition into an overflow Carpark for the Christ The King Main complex "
              position={{ color: "info", label: "Redevelopment Images" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={RB8Sm}
              lgimage={RB8Lg}
              name="The Rebuilding Phase of the school Site to transition into an overflow Carpark for the Christ The King Main complex "
              position={{ color: "info", label: "Redevelopment Images" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={RB9Sm}
              lgimage={RB9Lg}
              name="The Rebuilding Phase of the school Site to transition into an overflow Carpark for the Christ The King Main complex "
              position={{ color: "info", label: "Redevelopment Images" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              Progression to A new Road Level Car park
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Close up of the buildings only
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={RB10Sm}
              lgimage={RB10Lg}
              name="Demolition and the sunsequent rebuilding phase of the school."
              position={{ color: "info", label: "RB1Sm School Images" }}
              description="
               "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={RB10Sm}
              lgimage={RB10Lg}
              name="Demolition and the sunsequent rebuilding phase of the school."
              position={{ color: "info", label: "RB1Sm School Images" }}
              description="
               "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default RebuildingGallery;
