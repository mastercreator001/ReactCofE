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
import SingletonTrips1sm from "assets/images/SingletonGallery/SingletonTrips1sm.png";
import SingletonTrips2sm from "assets/images/SingletonGallery/SingletonTrips2sm.png";
import SingletonTrips3sm from "assets/images/SingletonGallery/SingletonTrips3sm.jpg";
import SingletonTrips4sm from "assets/images/SingletonGallery/SingletonTrips4sm.jpg";
import SingletonTrips5sm from "assets/images/SingletonGallery/SingletonTrips5sm.jpg";
import SingletonTrips6sm from "assets/images/SingletonGallery/SingletonTrips6sm.jpg";
import SingletonTrips7sm from "assets/images/SingletonGallery/SingletonTrips7sm.jpg";
import SingletonTrips8sm from "assets/images/SingletonGallery/SingletonTrips8sm.jpg";
import SingletonTrips9sm from "assets/images/SingletonGallery/SingletonTrips9sm.jpg";

// Images Large
import SingletonTrips1lg from "assets/images/SingletonGallery/SingletonTrips1lg.png";
import SingletonTrips2lg from "assets/images/SingletonGallery/SingletonTrips2lg.png";
import SingletonTrips3lg from "assets/images/SingletonGallery/SingletonTrips3lg.jpg";
import SingletonTrips4lg from "assets/images/SingletonGallery/SingeltonTrips4lg.jpg";
import SingletonTrips5lg from "assets/images/SingletonGallery/SingletonTrips5lg.jpg";
import SingletonTrips6lg from "assets/images/SingletonGallery/SingletonTrips6lg.jpg";
import SingletonTrips7lg from "assets/images/SingletonGallery/SingletonTrips7lg.jpg";
import SingletonTrips8lg from "assets/images/SingletonGallery/SingletonTrips8lg.jpg";
import SingletonTrips9lg from "assets/images/SingletonGallery/SingletonTrips9lg.jpg";
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
              smimage={SingletonTrips1sm}
              lgimage={SingletonTrips1lg}
              name="Trips away To the Weald and Downland Museum "
              position={{ color: "info", label: "Singleton Gallery Photos" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SingletonTrips2sm}
              lgimage={SingletonTrips2lg}
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
              smimage={SingletonTrips3sm}
              lgimage={SingletonTrips3lg}
              name="Trips away To the Weald and Downland Museum "
              position={{ color: "info", label: "Singleton Gallery Photos" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SingletonTrips4sm}
              lgimage={SingletonTrips4lg}
              name="Trips away To the Weald and Downland Museum "
              position={{ color: "info", label: "Singleton Gallery Photos" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SingletonTrips5sm}
              lgimage={SingletonTrips5lg}
              name="Trips away To the Weald and Downland Museum "
              position={{ color: "info", label: "Singleton Gallery Photos" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SingletonTrips6sm}
              lgimage={SingletonTrips6lg}
              name="Trips away To the Weald and Downland Museum "
              position={{ color: "info", label: "Singleton Gallery Photos" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SingletonTrips7sm}
              lgimage={SingletonTrips7lg}
              name="Trips away To the Weald and Downland Museum "
              position={{ color: "info", label: "Singleton Gallery Photos" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={SingletonTrips8sm}
              lgimage={SingletonTrips8lg}
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
              smimage={SingletonTrips9sm}
              lgimage={SingletonTrips9lg}
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
