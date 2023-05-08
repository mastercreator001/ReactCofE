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

// Material Kit 2 React examples

// Images
function Featuring() {
  return (
    <MKBox component="section" pt={0} pb={0}>
      <Container>
        <Grid container spacing={0} sx={{ mb: 0 }}></Grid>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}></Grid>
      </Container>
    </MKBox>
  );
}

export default Featuring;
