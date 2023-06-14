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
import HorizontalTeamCard1 from "examples/Cards/TeamCards/HorizontalTeamCard1";

// Images
import bbcComputer1 from "assets/images/ComputerImages/bbcComputer1.jpg";
import bbcComputer1Large from "assets/images/ComputerImages/bbcComputer1Large.jpg";

function Computer1() {
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
              Computer Programming
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Does anyone rememeber these computers with the floppy disc drive?
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={bbcComputer1}
              lgimage={bbcComputer1Large}
              name="Bbc Computers"
              position={{ color: "info", label: "A massive leap forward" }}
              description="The BBC Computer Literacy Project was created in the 1980s to explore the world of computing as it was at the time. The project ran for nearly a decade, during the birth of the home computer, and included interviews with Steve Jobs, Bill Gates, Steve Wozniak, Bob Moog, and Roger Foster. As part of the project, the BBC commissioned its iconic BBC Micro computer, which became the cornerstone of computing in education throughout the 1980s.0 The Model B had 32 KB of user RAM and was built by Acorn Computers. The BBC Micro was notable for its ruggedness, expandability, and the quality of its operating system.1 It was launched in December 1981 as part of the BBC's Computer Literacy Project."
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Computer1;
