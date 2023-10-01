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

// Routes
import routes from "routes";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard2 from "components/common/PrimaryTemplate";

// Images Small
import Malham1990 from "assets/images/Galleries/Malham1990.jpg";
import MG1MRF1sm from "assets/images/MalhamGallery1/MG1MRF1sm.jpg";
import MG1MRF2sm from "assets/images/MalhamGallery1/MG1MRF2sm.jpg";
import MG1MRF3sm from "assets/images/MalhamGallery1/MG1MRF3sm.jpg";
import MG1MRF4sm from "assets/images/MalhamGallery1/MG1MRF4sm.jpg";
import MG1MRF5sm from "assets/images/MalhamGallery1/MG1MRF5sm.jpg";
import MG1MRF6sm from "assets/images/MalhamGallery1/MG1MRF6sm.jpg";
import MG1MRF7sm from "assets/images/MalhamGallery1/MG1MRF7sm.jpg";
import MG1MRF8sm from "assets/images/MalhamGallery1/MG1MRF8sm.jpg";
import MG1MRF9sm from "assets/images/MalhamGallery1/MG1MRF9sm.jpg";

// Images Large
import Malham1990Large from "assets/images/Galleries/Malham1990Large.jpg";
import MG1MRF1lg from "assets/images/MalhamGallery1/MG1MRF1lg.jpg";
import MG1MRF2lg from "assets/images/MalhamGallery1/MG1MRF2lg.jpg";
import MG1MRF3lg from "assets/images/MalhamGallery1/MG1MRF3lg.jpg";
import MG1MRF4lg from "assets/images/MalhamGallery1/MG1MRF4lg.jpg";
import MG1MRF5lg from "assets/images/MalhamGallery1/MG1MRF5lg.jpg";
import MG1MRF6lg from "assets/images/MalhamGallery1/MG1MRF6lg.jpg";
import MG1MRF7lg from "assets/images/MalhamGallery1/MG1MRF7lg.jpg";
import MG1MRF8lg from "assets/images/MalhamGallery1/MG1MRF8lg.jpg";
import MG1MRF9lg from "assets/images/MalhamGallery1/MG1MRF9lg.jpg";

function SchoolMalhamMRF1() {
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
              Mr Feltons Malham Trips 1990 onwards
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Malham With Mr Feltons Collection
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={Malham1990}
              lgimage={Malham1990Large}
              name="Mr Feltons slides of Malham "
              position={{ color: "info", label: "Mr Feltons slides of Malham" }}
              description="Four teachers returning from a walking from the orienterring exercise most of the students undertook. Do you remember this occasion. As I remember Mr Felton and other teachers furnished a group of students with a ma a compass and a sense of direction to head back to Newfield Hall.<br/> <br/>
              
              Most made it and some students were sent back out to recover the missing students( it was made very clear to stay in your groups). No harm no foul but imagine it being done today Id' imagine it would be next to impossible without planning and a teacher or two in toe as well. <br/> <br/>
              
              We have Mr Felton on the far left Mr Monk next to him but do you recognise the other teachers ?"
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG1MRF1sm}
              lgimage={MG1MRF1lg}
              name="Mr Feltons slides of Malham "
              position={{ color: "info", label: "Mr Feltons slides of Malham" }}
              description="A view of Newfield Hall from the rear, note that extensive modernisiation has now taken place and the site no longer accomadates school groups. The bunk beads have long since been removed and it is now a very posh hotel run by HF Holidays so sadly no schools like ours."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG1MRF2sm}
              lgimage={MG1MRF2lg}
              name="Mr Feltons slides of Malham "
              position={{ color: "info", label: "Mr Feltons slides of Malham" }}
              description=" A side view of the main entrance of Newfield Hall, As mentioned above it is now a very popular but expensive hotel."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG1MRF3sm}
              lgimage={MG1MRF3lg}
              name="Mr Feltons slides of Malham "
              position={{ color: "info", label: "Mr Feltons slides of Malham" }}
              description="Ah as you can see Mr Walker is helping a very tired student to wake up and get ready for breakfast. I'm not sure where they got the bell from but got it they did. Note all the other students in shot seem very awake already. Do you recognise any of the students?"
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG1MRF4sm}
              lgimage={MG1MRF4lg}
              name="Mr Feltons slides of Malham "
              position={{ color: "info", label: "Mr Feltons slides of Malham" }}
              description="A view of the extensive beauty and isloation that is the Yorkshire Dales, perhaps near Gordale Scar as this was on the walking agenda for most of the groups attending the Malham visit. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG1MRF5sm}
              lgimage={MG1MRF5lg}
              name="Mr Feltons slides of Malham "
              position={{ color: "info", label: "Mr Feltons slides of Malham" }}
              description="Beautiful scenery of the cut through aproaches on one of the many walks in the Dales, perhaps the orienteering expedition heading back to Newfield Hall, do you recognise the scene?"
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG1MRF6sm}
              lgimage={MG1MRF6lg}
              name="Mr Feltons slides of Malham "
              position={{ color: "info", label: "Mr Feltons slides of Malham" }}
              description="A group of students traversing the rocky path to an eventual and probably well deserved lunch at the Hall. Note all the wet weather gear we were required to bring along. I rember having a very specific check list for just such this occasion. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG1MRF9sm}
              lgimage={MG1MRF9lg}
              name="Mr Feltons slides of Malham "
              position={{ color: "info", label: "Mr Feltons slides of Malham" }}
              description="Well I never have seen such a big rat in all my life but being able to live this one down might have been the harder thing to have done. Do you recognise this student and the accompaniys ones as it would be great to reunite the students with this happy memory. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG1MRF7sm}
              lgimage={MG1MRF7lg}
              name="Mr Feltons slides of Malham "
              position={{ color: "info", label: "Mr Feltons slides of Malham" }}
              description="A rocky out cropping and a sheer drop and some student hopefully being carefully monitored by the teachers. They all must have made it home safely as I don't remember any fatalities on the school trips ? "
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              Inspirational shots from The Yorkshire Dales
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Malham shots from Mr Felton
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={MG1MRF8sm}
              lgimage={MG1MRF8lg}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "Mr Feltons slides of Malham" }}
              description="The sheer vastness of the Yorshire Dales is not to be under estimated as you can tell from this picture. I'm sure the students would have been pretty chuffed at the achievement of getting to the top of the hill/Mountain, is there any mountains in Yorkshire?."
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SchoolMalhamMRF1;
