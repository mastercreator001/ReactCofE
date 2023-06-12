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
import bookMap from "assets/images/school maps/bookMap.jpg";
import bookMaplarge from "assets/images/school maps/bookMapLarge.jpg";

function Maps2() {
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
              School Maps
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              All my own text about maps
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={bookMap}
              lgimage={bookMaplarge}
              name="This is an original map recreated"
              position={{ color: "info", label: "Head Teacher 1971-1982" }}
              description="Mr Knight was as many have said firm fair and strict which you would expect of a school master or headteacher. Having started the school and selected many of the original staff he created the school and it's success. 
    His passing is at the grand old age of 93 with his family around him to comfort him into his new life beyond ours. 
    We can no longer see him or feel him but he is still with us all. 
    I have had the privilege to speak to Mrs Hilary Knight and she has asked me to pass along her thanks for all the kind messages but has also written a short piece that has been included below.
    AS WRITTEN BY Mrs Hilary Knight 
    It is 50 years since Tony Knight came to The Isle of Wight and was privileged to start the C of E Middle School and to guide it’s early years and it’s wonderful dedicated and carefully picked staff. He was deeply committed to its aims and always concerned to make Welly Road the best he could for each and all. 
    He had so may proud and happy memories. 
    Sadly he has departed this world after 93 well lived and enjoyed years. This photo was taken on his 90 th birthday.
    By Hilary Knight wife and lifetime partner of Mr Tony Knight. 
    Please any thoughts comments and memories can be added and I'm sure will be read by the family."
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Maps2;
