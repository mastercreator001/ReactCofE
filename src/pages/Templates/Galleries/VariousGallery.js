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

// Images Small

import VGallery1sm from "assets/images/VariousGalleryImages/VGallery1sm.jpg";
import VGallery2sm from "assets/images/VariousGalleryImages/VGallery2sm.jpg";
import VGallery3sm from "assets/images/VariousGalleryImages/VGallery3sm.jpg";
import VGallery4sm from "assets/images/VariousGalleryImages/VGallery4sm.jpg";
import VGallery5sm from "assets/images/VariousGalleryImages/VGallery5sm.jpg";
import VGallery6sm from "assets/images/VariousGalleryImages/VGallery6sm.jpg";
import VGallery7sm from "assets/images/VariousGalleryImages/VGallery7sm.jpg";
import VGallery8sm from "assets/images/VariousGalleryImages/VGallery8sm.jpg";
import VGallery9sm from "assets/images/VariousGalleryImages/VGallery9sm.jpg";
import VGallery10sm from "assets/images/VariousGalleryImages/VGallery10sm.jpg";
import VGallery11sm from "assets/images/VariousGalleryImages/VGallery11sm.jpg";
import VGallery12sm from "assets/images/VariousGalleryImages/VGallery12sm.jpg";
import VGallery13sm from "assets/images/VariousGalleryImages/VGallery13sm.jpg";
import VGallery14sm from "assets/images/VariousGalleryImages/VGallery14sm.jpg";
import HorizontalTeamCard2 from "components/common/PrimaryTemplate";

// Images Large

import VGallery1lg from "assets/images/VariousGalleryImages/VGallery1lg.jpg";
import VGallery2lg from "assets/images/VariousGalleryImages/VGallery2lg.jpg";
import VGallery3lg from "assets/images/VariousGalleryImages/VGallery3lg.jpg";
import VGallery4lg from "assets/images/VariousGalleryImages/VGallery4lg.jpg";
import VGallery5lg from "assets/images/VariousGalleryImages/VGallery5lg.jpg";
import VGallery6lg from "assets/images/VariousGalleryImages/VGallery6lg.jpg";
import VGallery7lg from "assets/images/VariousGalleryImages/VGallery7lg.jpg";
import VGallery8lg from "assets/images/VariousGalleryImages/VGallery8lg.jpg";
import VGallery9lg from "assets/images/VariousGalleryImages/VGallery9lg.jpg";
import VGallery10lg from "assets/images/VariousGalleryImages/VGallery10lg.jpg";
import VGallery11lg from "assets/images/VariousGalleryImages/VGallery11lg.jpg";
import VGallery12lg from "assets/images/VariousGalleryImages/VGallery12lg.jpg";
import VGallery13lg from "assets/images/VariousGalleryImages/VGallery13lg.jpg";
import VGallery14lg from "assets/images/VariousGalleryImages/VGallery14lg.jpg";

function VariousGallery() {
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
              Various Images of the site over the time.
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Various School Pictures
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery1sm}
              lgimage={VGallery1lg}
              name="Various Images from the school "
              position={{ color: "info", label: "Various School Images" }}
              description="A very familur image as I would have imagined, over the years and probably long before the school became popluar I would guess we were all famous for the Yellow Ice Cream Cone on top the the music room. That is at least my memory of the school over the years. The only option to differentiate between the four schools up there was to improvise and the Ice Cream Code helped everyone do just that."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery2sm}
              lgimage={VGallery2lg}
              name="Various Images from the school "
              position={{ color: "info", label: "Various School Images" }}
              description="A image of the music room taken from the opening pamphlet of the school and colourised, although the color isn't perhaps a perfect match to the school it became a defining image representing the school over the many years it served the community."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery3sm}
              lgimage={VGallery3lg}
              name="Various Images from the school "
              position={{ color: "info", label: "Various School Images" }}
              description="A video still image of the side of the school showing the hall and the left aspect of the site. Sadly they are not very good images but they were screenshotted from a VHS tape that has sadly degraded overtime."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery4sm}
              lgimage={VGallery4lg}
              name="Various Images from the school "
              position={{ color: "info", label: "Various School Images" }}
              description="A second still from the same video tape moving towards the front aspect of the site, in view the music room and the head teahers office nd the admin side of the building. I recorded this for Video Studies project I was doing while a student at Carisbrooke High School."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery5sm}
              lgimage={VGallery5lg}
              name="Various Images from the school "
              position={{ color: "info", label: "Various School Images" }}
              description="The last of the still images from the VHS taop shooing the dinning are and front carpark. In my days room one was for Mr Hawes and the 1st year students but later on it was the 5th years as the start of the school and after the take over of the site by The Christ King amalgmation it was still used as a subject room but for a much older year groups."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery6sm}
              lgimage={VGallery6lg}
              name="Various Images from the school "
              position={{ color: "info", label: "Various School Images" }}
              description="Two very similar images together that show the schools front aspect and the height diffence from the road to the school height recessed in the site and lower. The school which is now a carpark has been infilled and raied to match the road height throught."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery7sm}
              lgimage={VGallery7lg}
              name="Various Images from the school "
              position={{ color: "info", label: "Various School Images" }}
              description="The second of two images just zoomed in a little as you can tell the rather lack luster look of the cone and the clear lack of love it has seen over the years. Sadly an accleration of the neglect and lack of maintenance sprialled towards it later years and eventual demolition. Noted by a former teacher who attended the open day and described the site as very shabby and neglected."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery8sm}
              lgimage={VGallery8lg}
              name="Various Images from the school "
              position={{ color: "info", label: "Various School Images" }}
              description="It's an amazing shot and the Google Camera car has done a greta job of giving us a look at the school in full flow. The carpark is full and the site is in full operation, the photo must have been taken in the early to mid 2000's as the choice of car and the change of livery on the school boards clearlty shows the Christ The King as being in charge."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery9sm}
              lgimage={VGallery9lg}
              name="Various Images from the school "
              position={{ color: "info", label: "Various School Images" }}
              description="A rare shot inside the school at the Farewell to Christ The King College site gathering, sadly a not very well attended closing down event due to logistical issues. A sad farewell to a much loved site and I would have loved to have been there and gave the site a final farewell."
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              School Maps SVG recreation of the schools internal layout.
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Close up of the buildings only
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery10sm}
              lgimage={VGallery10lg}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "Various School Images" }}
              description="The Google Camera car in full swing looking at the front of the site as it swings past, again mid 2000's as the livery change of the school.The site is lookkng farly well looked after and may be before the final decision was to made to choose which site to close A.B.K or C of E Middle School."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery11sm}
              lgimage={VGallery11lg}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "Various School Images" }}
              description="As you may be able to tell this image was taken during the demolition process and the Hall was one of the last sections to de removed. By having a closer look you can see the general neglect that has come upon the school but the playground is unswept and the siding on the top of the hall is all broken but I'm sure happy memories still come back when we have a look. The play ground was used for many a school fair or a the odd play in the earlier days of the school so allot of history was lost upon the schools removal.<br/> <br/>

              The general vie show just how varying the site was and the reasoning behind it was still a mystery, perhaps a cost effective option of to lower the school's height so as not to be as intrusive to the neighbours possibly. Maybe we shall never know but this photo shows the differing heights better than any other I have seen. 
               "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery12sm}
              lgimage={VGallery12lg}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "Various School Images" }}
              description="The Google camera car sweeping along the road has another capture of the school before moving up the road towards the now demolished Carisbrooke High School. The camera car has proven very useful capturing aspects of the school that otherwise may not have been seen as the car sweeps by it uses rotating camera to capture a series of 360 images and then reaasemblies them for use as a Street view image you can now see."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery13sm}
              lgimage={VGallery13lg}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "Various School Images" }}
              description=" We can just about see the school still behind the healthy hedge of the school. The hedge provide a good level of privacy for the school and the students over the years as the early shots show a small fence and to that date a non existent hedge. It is still in plae today and forms a barrier between the pavement and the carpark, flanked by a new fence too."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={VGallery14sm}
              lgimage={VGallery14lg}
              name="A close up of the map above recreated as an svg file"
              position={{ color: "info", label: "Various School Images" }}
              description="The last of the Google camera cars images listed before the demolition of the school showing a gap in the fence for the grass cutting tractors to enter the site during the summer grow."
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default VariousGallery;
