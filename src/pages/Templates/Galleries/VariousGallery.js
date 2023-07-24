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

// Images Small

import VGallery1sm from "assets/images/VariousGalleryImages/VGallery1sm.jpg";
import VGallery2sm from "assets/images/VariousGalleryImages/VGallery2sm.jpg";
import VGallery3sm from "assets/images/VariousGalleryImages/VGallery3sm.jpg";
import VGallery4sm from "assets/images/VariousGalleryImages/VGallery4sm.jpg";
import VGallery5sm from "assets/images/VariousGalleryImages/VGallery5sm.jpg";
import VGallery6sm from "assets/images/VariousGalleryImages/VGallery6sm.jpg";
import VGallery7sm from "assets/images/VariousGalleryImages/VGallery7sm.jpg";
import VGallery8sm from "assets/images/VariousGalleryImages/VGallery8sm.jpg";
import VGallery9sm from "assets/images/VariousGalleryImages/VGallery9sm.jpg";
import VGallery10sm from "assets/images/VariousGalleryImages/VGallery10sm.jpg";
import VGallery11sm from "assets/images/VariousGalleryImages/VGallery11sm.jpg";
import VGallery12sm from "assets/images/VariousGalleryImages/VGallery12sm.jpg";
import VGallery13sm from "assets/images/VariousGalleryImages/VGallery13sm.jpg";
import VGallery14sm from "assets/images/VariousGalleryImages/VGallery14sm.jpg";
import HorizontalTeamCard2 from "examples/Cards/TeamCards/HorizontalTeamCard2";

// Images Large

import VGallery1lg from "assets/images/VariousGalleryImages/VGallery1lg.jpg";
import VGallery2lg from "assets/images/VariousGalleryImages/VGallery2lg.jpg";
import VGallery3lg from "assets/images/VariousGalleryImages/VGallery3lg.jpg";
import VGallery4lg from "assets/images/VariousGalleryImages/VGallery4lg.jpg";
import VGallery5lg from "assets/images/VariousGalleryImages/VGallery5lg.jpg";
import VGallery6lg from "assets/images/VariousGalleryImages/VGallery6lg.jpg";
import VGallery7lg from "assets/images/VariousGalleryImages/VGallery7lg.jpg";
import VGallery8lg from "assets/images/VariousGalleryImages/VGallery8lg.jpg";
import VGallery9lg from "assets/images/VariousGalleryImages/VGallery9lg.jpg";
import VGallery10lg from "assets/images/VariousGalleryImages/VGallery10lg.jpg";
import VGallery11lg from "assets/images/VariousGalleryImages/VGallery11lg.jpg";
import VGallery12lg from "assets/images/VariousGalleryImages/VGallery12lg.jpg";
import VGallery13lg from "assets/images/VariousGalleryImages/VGallery13lg.jpg";
import VGallery14lg from "assets/images/VariousGalleryImages/VGallery14lg.jpg";

function VariousGallery() {
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
              Various School Pictures
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery1sm}
              lgimage={VGallery1lg}
              name="Various Images from the school "
              position={{ color: "info", label: "Various School Images" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery2sm}
              lgimage={VGallery2lg}
              name="Various Images from the school "
              position={{ color: "info", label: "Various School Images" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery3sm}
              lgimage={VGallery3lg}
              name="Various Images from the school "
              position={{ color: "info", label: "Various School Images" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery4sm}
              lgimage={VGallery4lg}
              name="Various Images from the school "
              position={{ color: "info", label: "Various School Images" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery5sm}
              lgimage={VGallery5lg}
              name="Various Images from the school "
              position={{ color: "info", label: "Various School Images" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery6sm}
              lgimage={VGallery6lg}
              name="Various Images from the school "
              position={{ color: "info", label: "Various School Images" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery7sm}
              lgimage={VGallery7lg}
              name="Various Images from the school "
              position={{ color: "info", label: "Various School Images" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery8sm}
              lgimage={VGallery8lg}
              name="Various Images from the school "
              position={{ color: "info", label: "Various School Images" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery9sm}
              lgimage={VGallery9lg}
              name="Various Images from the school "
              position={{ color: "info", label: "Various School Images" }}
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
              smimage={VGallery10sm}
              lgimage={VGallery10lg}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "Various School Images" }}
              description="
               "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery11sm}
              lgimage={VGallery11lg}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "Various School Images" }}
              description="
               "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery12sm}
              lgimage={VGallery12lg}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "Various School Images" }}
              description="
               "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery13sm}
              lgimage={VGallery13lg}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "Various School Images" }}
              description="
               "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery14sm}
              lgimage={VGallery14lg}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "Various School Images" }}
              description="
               "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default VariousGallery;
