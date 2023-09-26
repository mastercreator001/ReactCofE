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

// Images
import finalMapCTK1 from "assets/images/school maps/finalMapCTK1.png";
import finalMapCTK1Large from "assets/images/school maps/finalMapCTK1Large.png";
import finalMapCTK2 from "assets/images/school maps/finalMapCTK2.png";
import finalMapCTK2Large from "assets/images/school maps/finalMapCTK2Large.png";

function Maps4() {
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
              School Maps SVG recreation of the schools internal layout.
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Full site view
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={finalMapCTK1}
              lgimage={finalMapCTK1Large}
              name="This is remade addition of an original map recreated"
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="The school in it's final phase of existence was utilised by the new amalgmation of C of E Middle and the former A.B.K school. C of E was utilised during heavy construction works on the A.B.K site and called the lower campus. The map you see here is an SVG recreation of the provious one but clearly demonstartes the changes that have happend within the school over it's lifetime. <br/> <br/>

              Note the new staff room and the staff room workig area attached to the music room which allowed for the teaching staff to have class preparation time and space for marking and other work needed to faciitate class activities. Hard buliding were also made in the school such as the support staff area behind the boys changing area and the additonal porta cabins added to the site to allow for expansion.<br/> <br/>
              
              The map you see is one of the final internal layouts of the school prior to it's decomissioning and handing over to contractors for demolition."
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              A close up of the schools internal final layout.
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Close up of the buildings and classes only
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={finalMapCTK2}
              lgimage={finalMapCTK2Large}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "2007-2008 internal layout" }}
              description="Take note of the new buildings and the sepration of some class rooms from the older maps. The ICT rooms have doubled in size and the additional toliets were added at the end of the main corridor heading towards the end of the school between the classrooms. I cannot comment when they were added to the school but the additional facilities were need as the school grew and we all need them. This addiitonal toilet block correct part of the issue of the issue of partition walls between classrooms and the inherent lack of sound proffing a fixed wall provided the school.<br/> <br/>
              
              Other improvements were added to the school as in the world of computing it was essential that this was a subject that was added to the schools teaching rosta. In my four years within the school the computer were new and it was a nw technology trumped by Mrs Crump, however the computer room upon it's inception was a very samll area of the schools corridor. Hence the fact the school around the late 1980's were equipped with BBc computers the classes and the capability to teach computer technology was incresed as well. In line with other schools comuter and computer science as it was later to become made a massive contribution to the schools teaching adgenda.  "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Maps4;
