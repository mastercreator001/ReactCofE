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

// react-router-dom components
import { Link } from "react-router-dom";

// Material Kit 2 React examples
import RotatingCard from "components/common/RotatingCard";
import RotatingCardFront from "components/common/RotatingCard/RotatingCardFront";
import RotatingCardBack from "components/common/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "components/common/IconHeader";

// Images
import overhead2015 from "../../../assets/images/historicSchool/overhead2015.png";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={overhead2015.png}
                icon="touch_app"
                title={
                  <>
                    Hello Welly Road
                    <br />
                    It has been a while.
                  </>
                }
                description="What's your Favourite lesson or the one you learn't to love? What was your least favourite lesson, let us know in the contact us section."
              />
              <RotatingCardBack
                image={overhead2015.png}
                title="Welcome back to your School"
                description="The school may have been demolished but the memories will last forever. Any stories of memories please do let us know in the contact us section or submit your stories."
                action={{
                  type: "internal",
                  route: "/contact-us",
                  label: "Submit your stories",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Link to="/pages/headteachers">
                  <DefaultInfoCard
                    image="people"
                    icon="people"
                    title="School Staff"
                    description="A school is only ever as goood as the teachers you have teaching, find the staff and add suggestions for staff not included in the current list."
                  />
                </Link>
              </Grid>
              <Grid item xs={12} md={6}>
                <Link to="/pages/historic">
                  <DefaultInfoCard
                    icon="home"
                    title="The School's History"
                    description="The definitive guide to the school and the history formed during the 38 years the school was open for, perhaps you can add to what we have."
                  />
                </Link>
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <Link to="/pages/earlyschoolimages">
                  <DefaultInfoCard
                    icon="panorama"
                    title="Galleries"
                    description="Lots of photos from the school giving you an insight into the running and the daily life of the school. Any old photos most welcomed via the links on the contact page"
                  />
                </Link>
              </Grid>
              <Grid item xs={12} md={6}>
                <Link to="/pages/demolitiongallery">
                  <DefaultInfoCard
                    icon="domain"
                    title="The Demolition of the school"
                    description="Regardless of how you felt about the school the eventual demolition is a sad moment here we take a look into the destruction process."
                  />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
