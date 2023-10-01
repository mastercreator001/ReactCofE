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
// Material Kit 2 React examples
import DefaultNavbar from "components/common/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard2 from "components/common/PrimaryTemplate";

// Images Small
import kitchenStaff2 from "assets/images/Auxstaff/kitchenStaff2.jpg";
// Images Large
import kitchenStaff2Large from "assets/images/Auxstaff/kitchenStaff2Large.jpg";

function KitchenStaff2() {
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
      <DefaultNavbar
        routes={routes}
        // action={{
        //   type: "external",
        //   route: "https://www.facebook.com/groups/172663070820628",
        // }}
        sticky
      />

      <Container>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              Kitchen Staff at C of E Middle
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              CURRENTLY UNKNOWN
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1} mt={10}>
              <HorizontalTeamCard2
                smimage={kitchenStaff2}
                lgimage={kitchenStaff2Large}
                name="kitchen lady"
                position={{ color: "info", label: "Ca1977-1981" }}
                description="Not a mission today but any helpful hints reminders or names would be of most help. We have been scrolling through the old school photos and have copied some of the dinner ladies who were at the school and keeping everyone fed and I would like to see if we can generate some names and if possible some stories we have had of them.<br/> <br/>
                
                I personally was sent to school with a packed lunch as it was deemed to expensive for me to have school dinnera but I'm hoping there are still some out there who remember the ladies of the kitchen. 
                
                Generic text from Facebook???"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default KitchenStaff2;
