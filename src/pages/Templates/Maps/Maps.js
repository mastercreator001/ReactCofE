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
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard2 from "examples/Cards/TeamCards/HorizontalTeamCard2";
import schoolPlanfinal from "assets/images/school maps/schoolPlanfinal.png";
import schoolPlanfinallarge from "assets/images/school maps/schoolPlanFinallarge.png";

function Maps() {
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
              School Maps
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              All maps of the school are current for the date they relate too and although additions
              have been added they represent the base design of the school from 1971-2009.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={schoolPlanfinal}
              lgimage={schoolPlanfinallarge}
              name="This Map is an Svg recreation of a previous map"
              position={{ color: "info", label: "The earliest map of the school known" }}
              description="The school map you can see on display here was originally inside a pamphlett for the school which was distrubited from the church to celebrate the school's opening. In the design it clearly shows the limited footprint of the school and it's distinct lack of familarity as in the school's later days the other block were added and further development took place.<br/> <br/>
              
              The school wasn't originally designed for such a big roll as had been anticipated and the fact that the school was so popular was a benefit to it's sucess and further development. The additional block were added between 1971 and 1974 but I cannot find any actual dates for this work to have been undertaken.<br/> <br/>

              The Map I created was a computer drawn map of the school copied over the original using a program called Inkscape and it allow for the most finate of detals to be added. Although this was a fairly simple task I decided early on to change the background to blue to excentuate the fact it was the earliest known of the school.<br/> <br/>

              Notice the missing 1H classes parellel to the cooking site now forms a bin store and receessed acces to the local calssrooms. I have chatted with teaachers and cannot find ount anymore information as to the additional 2 classrooms. Obviously the school was updated and added onto over the following years but the additional 2 classrooms were the earliest to the school.
            "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Maps;
