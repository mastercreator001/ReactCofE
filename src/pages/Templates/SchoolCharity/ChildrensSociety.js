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
import DefaultFooter from "components/common/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import CharityWeekCard from "components/common/CharityWeekCard";

//Small Images

import ChildrensS1SM from "assets/images/CharityEvents/ChildrensS1SM.jpg";
import ChildrensS2SM from "assets/images/CharityEvents/ChildrensS2SM.jpg";
import ChildrensS3SM from "assets/images/CharityEvents/ChildrensS3SM.jpg";
import ChildrensS4SM from "assets/images/CharityEvents/ChildrensS4SM.jpg";
import ChildrensS5SM from "assets/images/CharityEvents/ChildrensS5SM.jpg";

//Large Images

import ChildrensS1LG from "assets/images/CharityEvents/ChildrensS1LG.jpg";
import ChildrensS2LG from "assets/images/CharityEvents/ChildrensS2LG.jpg";
import ChildrensS3LG from "assets/images/CharityEvents/ChildrensS3LG.jpg";
import ChildrensS4LG from "assets/images/CharityEvents/ChildrensS4LG.jpg";
import ChildrensS5LG from "assets/images/CharityEvents/ChildrensS5LG.jpg";

function ChildrensSociety() {
  return (
    <MKBox
      component="center"
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
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={20}>
            <MKTypography variant="h1" color="white">
              School Charity Week at Carisbrooke Castle
            </MKTypography>
            <MKTypography variant="body1" color="light" opacity={0.8}>
              Childrens Society at Carisbrooke Castle
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={10} ml={13}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={ChildrensS1SM}
                lgimage={ChildrensS1LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Childrens charity society event at Carisbrooke Castle",
                }}
                title="Children's Society Event"
                position={{ color: "info", label: "Childrens society event at Carisbrroke Castle" }}
                description="Something different for you today as I happened upon a amazing post on the Newport and Carisbrooke Heriatge Society and saw a picture I thought maybe of interest to students in April 1988, did you attend ?
An event was held at Carisbrooke Castle for the children's society and the picture features an assortment of our students.   I have permission to use the picture from a chap call Ray Langley  and it was featured in the County Press in April 1988, thanks to Sue Horner for noting the date.
I have sectioned the picture and done a close up video which moves around the entire picture so you may see yourself if you look carefully. 
As usual like post comment and discuss."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={12} lg={10} ml={13}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={ChildrensS2SM}
                lgimage={ChildrensS2LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Mrs Crump in the middle",
                }}
                title="Mrs Crump in the middle"
                position={{ color: "info", label: "Mrs Crump in the middle, close up shot 2" }}
                description="Mouse over image and click to enlarge"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={10} ml={13}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={ChildrensS3SM}
                lgimage={ChildrensS3LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Close up shot 3",
                }}
                title="Close up shot 3"
                position={{ color: "info", label: "Close up shot 3" }}
                description="Mouse over image and click to enlarge"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={10} ml={13}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={ChildrensS4SM}
                lgimage={ChildrensS4LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Close up shot 4",
                }}
                title="Close up shot 4"
                position={{ color: "info", label: "Close up shot 4" }}
                description="Mouse over image and click to enlarge"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={10} ml={13}>
            <MKBox mb={1} mt={10}>
              <CharityWeekCard
                smimage={ChildrensS5SM}
                lgimage={ChildrensS5LG}
                action={{
                  type: "internal",
                  route: "/",
                  color: "white",
                  label: "Close up shot 5",
                }}
                title="Close up shot 5"
                position={{ color: "info", label: "Close up shot 5" }}
                description="Mouse over image and click to enlarge"
              />
            </MKBox>
          </Grid>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              School Memories school friends
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={1}>
              Memories of a school Event at Carisbrooke Castle
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </MKBox>
  );
}

export default ChildrensSociety;
