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
import Singleton from "assets/images/Galleries/Singleton.jpg";
// Images Large
import SingletonLarge from "assets/images/Galleries/SingletonLarge.jpg";

function SingletonGallery() {
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
              Mr Felton Singleton Gallery
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Singleton Gallery
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={Singleton}
              lgimage={SingletonLarge}
              name="Trips away To the Weald and Downland Museum "
              position={{ color: "info", label: "Singleton Gallery Photos" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={Singleton}
              lgimage={SingletonLarge}
              name="Trips away To the Weald and Downland Museum "
              position={{ color: "info", label: "Singleton Gallery Photos" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={Singleton}
              lgimage={SingletonLarge}
              name="Trips away To the Weald and Downland Museum "
              position={{ color: "info", label: "Singleton Gallery Photos" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={Singleton}
              lgimage={SingletonLarge}
              name="Trips away To the Weald and Downland Museum "
              position={{ color: "info", label: "Singleton Gallery Photos" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={Singleton}
              lgimage={SingletonLarge}
              name="Trips away To the Weald and Downland Museum "
              position={{ color: "info", label: "Singleton Gallery Photos" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={Singleton}
              lgimage={SingletonLarge}
              name="Trips away To the Weald and Downland Museum "
              position={{ color: "info", label: "Singleton Gallery Photos" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={Singleton}
              lgimage={SingletonLarge}
              name="Trips away To the Weald and Downland Museum "
              position={{ color: "info", label: "Singleton Gallery Photos" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={Singleton}
              lgimage={SingletonLarge}
              name="Trips away To the Weald and Downland Museum "
              position={{ color: "info", label: "Singleton Gallery Photos" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={Singleton}
              lgimage={SingletonLarge}
              name="Trips away To the Weald and Downland Museum "
              position={{ color: "info", label: "Singleton Gallery Photos" }}
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
              smimage={Singleton}
              lgimage={SingletonLarge}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "Singleton Gallery Photos" }}
              description="
               "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SingletonGallery;
