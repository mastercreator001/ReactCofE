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
import DefaultFooter from "examples/Footers/DefaultFooter";

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
import AudioCard from "examples/Cards/TeamCards/AudioCard";

// Images Small
import ESG1SM from "assets/images/EarlySchoolGall/ESG1SM.jpg";
import ESG2SM from "assets/images/EarlySchoolGall/ESG2SM.jpg";
import ESG3SM from "assets/images/EarlySchoolGall/ESG3SM.jpg";
import ESG4SM from "assets/images/EarlySchoolGall/ESG4SM.jpg";
import ESG5SM from "assets/images/EarlySchoolGall/ESG5SM.jpg";
import ESG6SM from "assets/images/EarlySchoolGall/ESG6SM.jpg";
import ESG7SM from "assets/images/EarlySchoolGall/ESG7SM.jpg";
import ESG8SM from "assets/images/EarlySchoolGall/ESG8SM.jpg";
import ESG9SM from "assets/images/EarlySchoolGall/ESG9SM.jpg";
// Images Large
import ESG1LG from "assets/images/EarlySchoolGall/ESG1LG.jpg";
import ESG2LG from "assets/images/EarlySchoolGall/ESG2LG.jpg";
import ESG3LG from "assets/images/EarlySchoolGall/ESG3LG.jpg";
import ESG4LG from "assets/images/EarlySchoolGall/ESG4LG.jpg";
import ESG5LG from "assets/images/EarlySchoolGall/ESG5LG.jpg";
import ESG6LG from "assets/images/EarlySchoolGall/ESG6LG.jpg";
import ESG7LG from "assets/images/EarlySchoolGall/ESG7LG.jpg";
import ESG8LG from "assets/images/EarlySchoolGall/ESG8LG.jpg";
import ESG9LG from "assets/images/EarlySchoolGall/ESG9LG.jpg";

// Import Audio
import MrH1 from "assets/audio/FallingForward.mp3";

function MissForeraudio() {
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
              Miss Forer audio Memories
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Miss Forer audio corner Miss Forer audio corner
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <AudioCard
              smimage={ESG1SM}
              lgimage={ESG1LG}
              name="Mr Feltons memories of the school "
              position={{ color: "info", label: "Mr Feltons Memories of the school" }}
              description="Wow what a view, well I guess this may have been the opinion of some of the students who attended C Of E middle School. Classes were great at C Of E but Carisbrooke High was on another level as ou roll was 400 and Carisbrooke's was 1500 an intimidating prospect beyond the playground. "
              audiofile={MrH1}
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <AudioCard
              smimage={ESG2SM}
              lgimage={ESG2LG}
              name="Mr Feltons Memories of the school  "
              position={{ color: "info", label: "1971-through to early 1980's" }}
              description="Three ladies all in a row, maybe you know them or why they were being photographed. mid to late 1970's or eary 1980's"
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <AudioCard
              smimage={ESG3SM}
              lgimage={ESG3LG}
              name="Mr Feltons Memories of the school "
              position={{ color: "info", label: "1971-through to early 1980's" }}
              description="Class teacher and students who were and when is the question? Maybe you can help."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <AudioCard
              smimage={ESG4SM}
              lgimage={ESG4LG}
              name="Mr Feltons Memories of the school "
              position={{ color: "info", label: "1971-through to early 1980's" }}
              description="Out and about in the cdt area, no doubt working on one of Mr Felton's creations."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <AudioCard
              smimage={ESG5SM}
              lgimage={ESG5LG}
              name="Mr Feltons Memories of the school"
              position={{ color: "info", label: "1971-through to early 1980's" }}
              description="We had a pond, well yes we did actually although this was later removed and filled in. I couldn't say if it was student safety or investment but the Pond dissapeared.It was located near the Science classroomsand can be seen on the old maps in the near bottom corner to the side of 1H or room 1."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <AudioCard
              smimage={ESG6SM}
              lgimage={ESG6LG}
              name="Mr Feltons Memories of the school "
              position={{ color: "info", label: "1971-through to early 1980's" }}
              description="Ah a different time, Miss Forer would regularly let sudents walk her dog either  on site or bring hime to school so students could interact with him. However today this is sdaly not the case. Two lucky students using their breaks wisely."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <AudioCard
              smimage={ESG7SM}
              lgimage={ESG7LG}
              name="Mr Feltons Memories of the school"
              position={{ color: "info", label: "1971-through to early 1980's" }}
              description="Ah lunchtimes and school dinners, the school had a limited cafteria section and it was often the school had staggered lunch breaks to allow for this."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <AudioCard
              smimage={ESG8SM}
              lgimage={ESG8LG}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "1971-through to early 1980's" }}
              description="Students enjoying there lunch time away from the books and socialising with the other students and teachrs alike."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <AudioCard
              smimage={ESG9SM}
              lgimage={ESG9LG}
              name="Old school Images of the school staff and students "
              position={{ color: "info", label: "1971-through to early 1980's" }}
              description=" Another lunch time shot of the kids enjoying themeselves away from the pressures of school work"
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              EARLY SCHOOL YEARS PICTURES
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Close up of the buildings only
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

export default MissForeraudio;
