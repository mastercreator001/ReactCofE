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
import HorizontalTeamCard2 from "examples/Cards/TeamCards/HorizontalTeamCard2";

// Small Images
import mrsChalloner from "assets/images/Allteachers/mrsChalloner.png";
import missDennis from "assets/images/Allteachers/missDennis.png";
import AssembliesSm from "assets/images/ReligiousEducation/AssembliesSm.jpg";
// Large Images
import missDennisLarge from "assets/images/Allteachers/missDennisLarge.png";
import mrsChallonerLarge from "assets/images/Allteachers/mrsChallonerLarge.png";
import AssembliesLg from "assets/images/ReligiousEducation/AssembliesLg.jpg";

//FB Clips
import REFBClip from "assets/images/facebookClippings/REFBClip.jpg";
function ReligiousEducation() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={8}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 3 }} mt={10}>
            <MKTypography variant="h3" color="white">
              Religious Education Class
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              A Class in belief systems present throught the world.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={mrsChalloner}
              lgimage={mrsChallonerLarge}
              name="Why Do We Need to learn Religious Education At School"
              position={{ color: "info", label: "Mrs Challoner head of Religious Education" }}
              description="Religious Education (RE) is a compulsory subject in the state education system in England, despite it not being part of the national curriculum. Schools are required to teach a programme of religious studies according to local and national guidelines.<br/> <br/>

Religious education in England is mandated by the Education Act 1944 as amended by the Education Reform Act 1988 and the School Standards and Framework Act 1998. The provision of religious education is compulsory in all state-funded schools, but it is not compulsory for any children to take the subject. The subject consists of the study of different religions, religious leaders, and other religious and moral themes. The syllabus is agreed locally by a Standing Advisory Council on Religious Education, and it may reflect the predominant place of Christianity in religious life, but also it might give an equal platform to all of the major world religions. All parents have the right to withdraw a child from religious education, which schools must approve.<br/> <br/>

Additionally, all schools are required by law to provide a daily act of collective worship, of which at least 51% must be Christian in basis over the course of the academic year. This is separate and unrelated to RE lessons. Sarah Smalley, the chair of the Association of Religious Education Inspectors, Advisors and Consultants, stated that some schools did have problems fulfilling the requirement for worship due to what they thought was a lack of space to gather the entire school for worship,although Smalley noted that there is actually no requirement for such a gathering, as smaller groups are allowed. The National Union of Teachers suggested in 2008 that parents should have a right to have specific schooling in their own faith and that imams, rabbis and priests should be invited to offer religious instruction to pupils in all state schools.<br/> <br/>

Each government jurisdiction in England has a Local Agreed Syllabus which serves as a mandate for the scope and sequence of subject teaching for each Key Stage, and possibly for each school year; use of the syllabi is only mandated for certain types of schools, such as Voluntary Controlled schools. Voluntary Aided and independent schools are free to outline their own course of study; the schools most likely to actually use the syllabi maintained schools and Voluntary Aided nondenominational schools. The Qualifications and Curriculum Authority has also produced the non-statutory National Framework for Religious Education, which provides guidelines for the provision of RE at all key stages, and models the eight-levels as applied in National Curriculum subjects"
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white"></MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}></MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={missDennis}
              lgimage={missDennisLarge}
              name="Miss Dennis"
              position={{ color: "info", label: "Now Reverand Dennis" }}
              description="Religious Education can be a contentious subject but for a faith school it s a corner stone of the system. My Family were religious me not so much in my later life but having a school founded and built around a strong religious footing can help build  a school and tie it all together in a faith bound network. Also an added benefit of C Of E was the finances of the church can be used to improve the lives of the schol stuents through bursaries granted to the school as an option for the under privilaged students to be also able to attend such as parent funded trips such as Malham and such.<br/> <br/>
              
              Having only recently spoken to Mr Felton he mentioned an number of times the school was able to tap into church funded routes to enable students to attend all events. Religious education is a full faith based system but it wasn't a prerequisate to work at C OF E, nor a limit to your sucess job path through the school. It has beeen mentioned that teachers who wern't part of a church were not inhibited or restricted from progression as other had. I have a story of some teachers applying for A.B.K and their personal pathways through the school being limited as non beiever as they may well be catagorised. <br/> <br/>
              
              As it's a common fact Mr Harrision rose to head teacher and he was a believer in the Quaker faith system so as the teaching of a faith ina faith based school is a very importnat part of the cirricilum."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={AssembliesSm}
              lgimage={AssembliesLg}
              name="One of the many School assemblies"
              position={{ color: "info", label: "One of the many School assemblies" }}
              description="SchoolAssemblies and the benefits of Passing the word of God. wheater you were a beleiever or wern't one the school and the faith it demonstarted were a great community bonding and none more so than having the assembly. The school assemblies were held weekly and were a combination of hymms and singing and faith based speaches which were innspiring and great for the school and he school spirit.<br/> <br/>
              
              Personally I haven't continued a faith based existence but it has been very beneficial in my life as I'm a firm believer if the school we went to wasn't faith based the love and nurturing given by staff and the care wouldn't have been so well established. I  had a four year turnaround at C Of E the same as everyone else but the likes of Mrs Challoner and Miss Dennis (now Reverand Dennis) were clear as to how much the school was to both them and the ability of delivering god's word to students was.<br/> <br/>
              
              The school is now gone but the message experiences and the love that was given to each and every student is a sign of faith love and existence. Yes you could claim they were just dling their respective jobs but undeniably their individual times spent at the school teaching the subjects they love is a testament to how sucessful C of E was for me. "
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h2" color="white">
              Religious Education Class
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Some of your thoughts about R.E Class
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={3} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2 smimage={REFBClip} name="" position={{}} description="" />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ReligiousEducation;
