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
import Malham1990 from "assets/images/Galleries/Malham1990.jpg";
import MG1MRF1sm from "assets/images/MalhamGallery1/MG1MRF1sm.jpg";
import MG1MRF2sm from "assets/images/MalhamGallery1/MG1MRF2sm.jpg";
import MG1MRF3sm from "assets/images/MalhamGallery1/MG1MRF3sm.jpg";
import MG1MRF4sm from "assets/images/MalhamGallery1/MG1MRF4sm.jpg";
import MG1MRF5sm from "assets/images/MalhamGallery1/MG1MRF5sm.jpg";
import MG1MRF6sm from "assets/images/MalhamGallery1/MG1MRF6sm.jpg";
import MG1MRF7sm from "assets/images/MalhamGallery1/MG1MRF7sm.jpg";
import MG1MRF8sm from "assets/images/MalhamGallery1/MG1MRF8sm.jpg";
import MG1MRF9sm from "assets/images/MalhamGallery1/MG1MRF9sm.jpg";

// Images Large
import Malham1990Large from "assets/images/Galleries/Malham1990Large.jpg";
import MG1MRF1lg from "assets/images/MalhamGallery1/MG1MRF1lg.jpg";
import MG1MRF2lg from "assets/images/MalhamGallery1/MG1MRF2lg.jpg";
import MG1MRF3lg from "assets/images/MalhamGallery1/MG1MRF3lg.jpg";
import MG1MRF4lg from "assets/images/MalhamGallery1/MG1MRF4lg.jpg";
import MG1MRF5lg from "assets/images/MalhamGallery1/MG1MRF5lg.jpg";
import MG1MRF6lg from "assets/images/MalhamGallery1/MG1MRF6lg.jpg";
import MG1MRF7lg from "assets/images/MalhamGallery1/MG1MRF7lg.jpg";
import MG1MRF8lg from "assets/images/MalhamGallery1/MG1MRF8lg.jpg";
import MG1MRF9lg from "assets/images/MalhamGallery1/MG1MRF9lg.jpg";

function SchoolMalhamMRF1() {
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
              Mr Feltons Malham Trips 1990 onwards
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Malham With Mr Feltons Collection
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={Malham1990}
              lgimage={Malham1990Large}
              name="Mr Feltons slides of Malham "
              position={{ color: "info", label: "Mr Feltons slides of Malham" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG1MRF1sm}
              lgimage={MG1MRF1lg}
              name="Mr Feltons slides of Malham "
              position={{ color: "info", label: "Mr Feltons slides of Malham" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG1MRF2sm}
              lgimage={MG1MRF2lg}
              name="Mr Feltons slides of Malham "
              position={{ color: "info", label: "Mr Feltons slides of Malham" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG1MRF3sm}
              lgimage={MG1MRF3lg}
              name="Mr Feltons slides of Malham "
              position={{ color: "info", label: "Mr Feltons slides of Malham" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG1MRF4sm}
              lgimage={MG1MRF4lg}
              name="Mr Feltons slides of Malham "
              position={{ color: "info", label: "Mr Feltons slides of Malham" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG1MRF5sm}
              lgimage={MG1MRF5lg}
              name="Mr Feltons slides of Malham "
              position={{ color: "info", label: "Mr Feltons slides of Malham" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG1MRF6sm}
              lgimage={MG1MRF6lg}
              name="Mr Feltons slides of Malham "
              position={{ color: "info", label: "Mr Feltons slides of Malham" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG1MRF9sm}
              lgimage={MG1MRF9lg}
              name="Mr Feltons slides of Malham "
              position={{ color: "info", label: "Mr Feltons slides of Malham" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG1MRF7sm}
              lgimage={MG1MRF7lg}
              name="Mr Feltons slides of Malham "
              position={{ color: "info", label: "Mr Feltons slides of Malham" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              Inspirational and informative, shots from Yorkshire
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Malham shots from Mr Felton
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG1MRF8sm}
              lgimage={MG1MRF8lg}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "Mr Feltons slides of Malham" }}
              description="
               "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SchoolMalhamMRF1;
