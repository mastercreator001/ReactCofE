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
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import schoolhistorictotaloverview1 from "assets/images/schoolhistorictotaloverview1.png";

function BuiltByDevelopers() {
  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${schoolhistorictotaloverview1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container item xs={122} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography variant="h4" color="white" fontWeight="bold">
            Want to return to our Facebook group
          </MKTypography>
          <MKTypography variant="h1" color="white" mb={1}>
            Say Hello To Friends Old And New
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
            Hello to Welly Road back again and on a new website for all to see enjoy.
          </MKTypography>
          <MKTypography
            component="a"
            href="https://www.facebook.com/groups/172663070820628"
            target="_blank"
            rel="noreferrer"
            variant="body2"
            color="white"
            fontWeight="regular"
            sx={{
              display: "flex",
              alignItems: "center",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translateX(3px)`,
                transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
              },

              "&:hover .material-icons-round, &:focus .material-icons-round": {
                transform: `translateX(6px)`,
              },
            }}
          >
            Memory Corner link. <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
