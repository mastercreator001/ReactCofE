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
import DG1Sm from "assets/images/DemolitionGallery/DG1Sm.jpg";
import DG2Sm from "assets/images/DemolitionGallery/DG2Sm.jpg";
import DG3Sm from "assets/images/DemolitionGallery/DG3Sm.jpg";
import DG4Sm from "assets/images/DemolitionGallery/DG4Sm.jpg";
import DG5Sm from "assets/images/DemolitionGallery/DG5Sm.jpg";
import DG6Sm from "assets/images/DemolitionGallery/DG6Sm.jpg";
import DG7Sm from "assets/images/DemolitionGallery/DG7Sm.jpg";
import DG8Sm from "assets/images/DemolitionGallery/DG8Sm.jpg";
import DG9Sm from "assets/images/DemolitionGallery/DG9Sm.jpg";
import DG10Sm from "assets/images/DemolitionGallery/DG10Sm.jpg";
import DG11Sm from "assets/images/DemolitionGallery/DG11Sm.jpg";
// Images Large
import DG1Lg from "assets/images/DemolitionGallery/DG1Lg.jpg";
import DG2Lg from "assets/images/DemolitionGallery/DG2Lg.jpg";
import DG3Lg from "assets/images/DemolitionGallery/DG3Lg.jpg";
import DG4Lg from "assets/images/DemolitionGallery/DG4Lg.jpg";
import DG5Lg from "assets/images/DemolitionGallery/DG5Lg.jpg";
import DG6Lg from "assets/images/DemolitionGallery/DG6Lg.jpg";
import DG7Lg from "assets/images/DemolitionGallery/DG7Lg.jpg";
import DG8Lg from "assets/images/DemolitionGallery/DG8Lg.jpg";
import DG9Lg from "assets/images/DemolitionGallery/DG9Lg.jpg";
import DG10Lg from "assets/images/DemolitionGallery/DG10Lg.jpg";
import DG11Lg from "assets/images/DemolitionGallery/DG11Lg.jpg";

function DemolitionGallery() {
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
              Demolition Gallery
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Demolition School Pictures
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={DG1Sm}
              lgimage={DG1Lg}
              name="Demolition Images from the school "
              position={{ color: "info", label: "Demolition School Images" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={DG2Sm}
              lgimage={DG2Lg}
              name="Demolition Images from the school "
              position={{ color: "info", label: "Demolition School Images" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={DG3Sm}
              lgimage={DG3Lg}
              name="Demolition Images from the school "
              position={{ color: "info", label: "Demolition School Images" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={DG4Sm}
              lgimage={DG4Lg}
              name="Demolition Images from the school "
              position={{ color: "info", label: "Demolition School Images" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={DG5Sm}
              lgimage={DG5Lg}
              name="Demolition Images from the school "
              position={{ color: "info", label: "Demolition School Images" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={DG6Sm}
              lgimage={DG6Lg}
              name="Demolition Images from the school "
              position={{ color: "info", label: "Demolition School Images" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={DG7Sm}
              lgimage={DG7Lg}
              name="Demolition Images from the school "
              position={{ color: "info", label: "Demolition School Images" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={DG8Sm}
              lgimage={DG8Lg}
              name="Demolition Images from the school "
              position={{ color: "info", label: "Demolition School Images" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={DG9Sm}
              lgimage={DG9Lg}
              name="Demolition Images from the school "
              position={{ color: "info", label: "Demolition School Images" }}
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
              smimage={DG10Sm}
              lgimage={DG10Lg}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "DG1Lg School Images" }}
              description="
               "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={DG11Sm}
              lgimage={DG11Lg}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "DG1Lg School Images" }}
              description="
               "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default DemolitionGallery;
