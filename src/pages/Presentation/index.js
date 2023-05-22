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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import overhead2015 from "../../assets/images/historicSchool/overhead2015.png";

function Presentation() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.facebook.com/groups/172663070820628",
        }}
        sticky
      />
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: `url(${overhead2015})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={10}
            lg={4}
            justifyContent="center"
            mx="auto"
            sx={{ boxShadow: 2 }}
            bgcolor="#150c0c87"
            p="10px"
          >
            <MKTypography
              variant="h1"
              color="white"
              mt={-1}
              mb={-1}
              ml={4}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Wellington Road, <br /> Church Of England Middle School
            </MKTypography>
            <MKTypography
              variant="body1"
              color="blue"
              textAlign="center"
              px={{ xs: -12, lg: 12 }}
              mt={-2}
            ></MKTypography>
          </Grid>
        </Container>
        <Container>
          <Grid
            container
            item
            xs={10}
            lg={6}
            justifyContent="center"
            mx="auto"
            sx={{ boxShadow: 2 }}
            bgcolor="#150c0c87"
            p="8px"
          >
            <MKTypography
              variant="h1"
              color="white"
              mt={-1}
              mb={-1}
              ml={4}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["2xl"],
                },
              })}
            >
              Welcome back to <br />
              Welly Road Middle school{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="green"
              textAlign="center"
              px={{ xs: -12, lg: 12 }}
              mt={-2}
            ></MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Information />
        <DesignBlocks />
        <Pages />
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <Container>
          <Grid container spacing={3}></Grid>
        </Container>
        <Testimonials />
        <Download />
        <MKBox pt={18} pb={6}></MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
