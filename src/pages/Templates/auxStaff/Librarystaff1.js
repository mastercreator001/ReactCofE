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

// Images
import mrsBlank from "assets/images/headTeachers/mrsBlank.png";
// Images Small
import mrsColenutt from "assets/images/Auxstaff/mrsColenutt.png";
// Images Large
import mrsColenuttLarge from "assets/images/Auxstaff/mrsColenutt.Large.png";

function Librarystaff1() {
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
              Library staff at C of E Middle
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Mrs Colenutt plus 1
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1} mt={10}>
              <HorizontalTeamCard2
                smimage={mrsBlank}
                lgimage={mrsBlank}
                name="1st Librarian"
                position={{ color: "info", label: "??" }}
                description="TEXT TO BE ADDED FOR THE 1ST Libririan any help please  ???"
              />
            </MKBox>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={mrsColenutt}
              lgimage={mrsColenuttLarge}
              subheading=" hello hello"
              name="Mrs Colenutt"
              position={{ color: "info", label: "Librarian Mrs Colenutt" }}
              description="Ok I'm hoping I got this wright Mrs Colenutt was in command of the library the very source of power in the school and indeed the world. <br/> <br/>
As the saying goes knowledge is power and to read is to learn and to learn is to know, with knowledge you can have anything, hence the saying.<br/> <br/>
I have little memory of this lovely lady but I do know she served the school well as a dedicated staff member who committed her time to the library of the school. She may have had other school functions that I'm unaware of in the school so let's see if we can build some memories of her.<br/> <br/> 
Maybe you know of her time here or family.<br/> <br/> 
I'm sorry for the lower than usual knowledge but I started the staff profiles on the ones I remembered and now it getting harder ."
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Librarystaff1;
