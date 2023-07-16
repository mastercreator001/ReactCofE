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
import MissFGVisit1sm from "assets/images/missFGVisit/MissFGVisit1sm.jpg";
import MissFGVisit2sm from "assets/images/missFGVisit/MissFGVisit2sm.jpg";
import MissFGVisit3sm from "assets/images/missFGVisit/MissFGVisit3sm.jpg";
import MissFGVisit4sm from "assets/images/missFGVisit/MissFGVisit4sm.jpg";
import MissFGVisit5sm from "assets/images/missFGVisit/MissFGVisit5sm.jpg";
import MissFGVisit6sm from "assets/images/missFGVisit/MissFGVisit6sm.jpg";
import MissFGVisit7sm from "assets/images/missFGVisit/MissFGVisit7sm.jpg";
import MissFGVisit8sm from "assets/images/missFGVisit/MissFGVisit8sm.jpg";
import MissFGVisit9sm from "assets/images/missFGVisit/MissFGVisit9sm.jpg";
import MissFGVisit10sm from "assets/images/missFGVisit/MissFGVisit10sm.jpg";
// Images Large
import MissFGVisit1lg from "assets/images/missFGVisit/MissFGVisit1lg.jpg";
import MissFGVisit3lg from "assets/images/missFGVisit/MissFGVisit3lg.jpg";
import MissFGVisit2lg from "assets/images/missFGVisit/MissFGVisit2lg.jpg";
import MissFGVisit4lg from "assets/images/missFGVisit/MissFGVisit4lg.jpg";
import MissFGVisit5lg from "assets/images/missFGVisit/MissFGVisit5lg.jpg";
import MissFGVisit6lg from "assets/images/missFGVisit/MissFGVisit6lg.jpg";
import MissFGVisit7lg from "assets/images/missFGVisit/MissFGVisit7lg.jpg";
import MissFGVisit8lg from "assets/images/missFGVisit/MissFGVisit8lg.jpg";
import MissFGVisit9lg from "assets/images/missFGVisit/MissFGVisit9lg.jpg";
import MissFGVisit10lg from "assets/images/missFGVisit/MissFGVisit10lg.jpg";

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
              smimage={MissFGVisit10sm}
              lgimage={MissFGVisit10lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissFGVisit1sm}
              lgimage={MissFGVisit1lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissFGVisit2sm}
              lgimage={MissFGVisit2lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissFGVisit3sm}
              lgimage={MissFGVisit3lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissFGVisit4sm}
              lgimage={MissFGVisit4lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissFGVisit5sm}
              lgimage={MissFGVisit5lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissFGVisit6sm}
              lgimage={MissFGVisit6lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissFGVisit7sm}
              lgimage={MissFGVisit7lg}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="Images."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MissFGVisit8sm}
              lgimage={MissFGVisit8lg}
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
              smimage={MissFGVisit9sm}
              lgimage={MissFGVisit9lg}
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
