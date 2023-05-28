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
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import kitchenStaff1 from "assets/images/Auxstaff/kitchenStaff1.jpg";

function KitchenStaff1() {
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
              Kitchen staff at C of E Middle
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Mr Houghton
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1} mt={10}>
              <HorizontalTeamCard
                image={kitchenStaff1}
                name="kitchen lady"
                position={{ color: "info", label: "Ca1977-1981" }}
                description="TEXT TO BE ADDED FOR THE KITCHEN STAFF ???"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default KitchenStaff1;
