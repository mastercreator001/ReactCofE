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
import missBarabraWatson from "assets/images/Allteachers/missBarabraWatson.png";
import missBarabraWatsonLarge from "assets/images/Allteachers/missBarabraWatsonLarge.png";
import missDennis from "assets/images/Allteachers/missDennis.png";
import missDennisLarge from "assets/images/Allteachers/missDennisLarge.png";
import missForer2 from "assets/images/Allteachers/missForer2.png";
import missForer2Large from "assets/images/Allteachers/missForer2Large.png";
import missGoodship from "assets/images/Allteachers/missGoodship.png";
import missGoodshipLarge from "assets/images/Allteachers/missGoodshipLarge.png";
import mrFelton from "assets/images/Allteachers/mrFelton.png";
import mrFeltonLarge from "assets/images/Allteachers/mrFeltonLarge.png";
import mrChristensen from "assets/images/Allteachers/mrChristensen.png";
import mrChristensenLarge from "assets/images/Allteachers/mrChristensenLarge.png";
import monk1 from "assets/images/Allteachers/monk1.png";
import monk1Large from "assets/images/Allteachers/monk1Large.png";
import mrsBall from "assets/images/Allteachers/mrsBall.png";
import mrsBallLarge from "assets/images/Allteachers/mrsBallLarge.png";
import mrMoorse from "assets/images/Allteachers/mrMoorse.png";
import mrMoorseLarge from "assets/images/Allteachers/mrMoorseLarge.png";
import mrsBrock from "assets/images/Allteachers/mrsBrock.png";
import mrsBrockLarge from "assets/images/Allteachers/mrsBrockLarge.png";
import mrsHayles from "assets/images/Allteachers/mrsHayles.png";
import mrsHaylesLarge from "assets/images/Allteachers/mrsHaylesLarge.png";
import mrsMurdoch from "assets/images/Allteachers/mrsMurdoch.png";
import mrsMurdochLarge from "assets/images/Allteachers/mrsMurdochLarge.png";
import mrsChalloner from "assets/images/Allteachers/mrsChalloner.png";
import mrsChallonerLarge from "assets/images/Allteachers/mrsChallonerLarge.png";
import mrsPassmore from "assets/images/Allteachers/mrsPassmore.png";
import mrsPassmoreLarge from "assets/images/Allteachers/mrsPassmoreLarge.png";
import mrsReynolds1 from "assets/images/Allteachers/mrsReynolds1.png";
import mrsReynolds1Large from "assets/images/Allteachers/mrsReynolds1Large.png";
import mrsWatkins from "assets/images/Allteachers/mrsWatkins.png";
import mrsWatkinsLarge from "assets/images/Allteachers/mrsWatkinsLarge.png";
import mrWalker from "assets/images/Allteachers/mrWalker.png";
import mrWalkerLarge from "assets/images/Allteachers/mrWalkerLarge.png";
import mrTansley2 from "assets/images/Allteachers/mrTansley2.png";
import mrTansley2Large from "assets/images/Allteachers/mrTansley2Large.png";
import mrBlank from "assets/images/Dhteachers/mrBlank.png";
import mrsCrump from "assets/images/Allteachers/mrsCrump.png";
import mrsCrumpLarge from "assets/images/Allteachers/mrsCrumpLarge.png";
import mrHawes from "assets/images/Allteachers/mrHawes.png";
import mrHawesLarge from "assets/images/Allteachers/mrHawesLarge.png";
import mrsBlank from "assets/images/headTeachers/mrsBlank.png";
import mrsDarby from "assets/images/Allteachers/mrsDarby.png";
import mrsDarbyLarge from "assets/images/Allteachers/mrsDarbyLarge.png";
import mrsEmery from "assets/images/Allteachers/mrsEmery.png";
import mrsEmeryLarge from "assets/images/Allteachers/mrsEmeryLarge.png";

function AllTeachers() {
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
              Teaching Staff
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              All teaching staff throught the years
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={missBarabraWatson}
              lgimage={missBarabraWatsonLarge}
              name="Miss Barbera Watson"
              position={{ color: "info", label: " Physical Education Teacher" }}
              description="Hello Miss Watson a teacher who served the school as many of the other did but in a rather unique capacity it seems. She ran the schools ornnthologists club Dedication and good principles must have been deeper than a student would have noticed as they certainly did retain their staff at C of E middle. Incase you didn't know Ornithologists study every aspect of birds, including bird songs, flight patterns, physical appearance, and migration patterns. Birds are genetically related to dinosaurs, which is something else an Ornithologist might study."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={missDennis}
              lgimage={missDennisLarge}
              name="Miss Dennis"
              position={{ color: "info", label: " Religious Education Teacher " }}
              description="Hello Miss Dennis a teacher who served the school as many of the other did. Dedication and good principles must have been deeper than a student would have noticed as they certainly did retain their staff at C of E middle. Know I don't have allot of information on Miss Dennis so I need your help and I will add your comments or factual information you can present from the comments into the post as we go. Miss Dennis was teaching at C of E middle during my time between 1987 and 1990 but when did she start and leave can you help fill in those blanks for me. Whag was her specialist subject as these seem to vary over the years as teachers seemed to cover subject for absences and floated between. That especially taken on for a particular gifted one, was if RE or will I be proven wrong ?? Please feel free to add your thoughts and any good factual information would be appreciated so we can amend the post and add detail. Was Miss Dennis a vicar at Parkhurst upon leaving C of E Middle school of may be you know her and can help with a time line of her following movements."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrFelton}
              lgimage={mrFeltonLarge}
              name="Mr Felton"
              position={{ color: "info", label: "Cdt teacher/Deputy Head" }}
              description="The process and structure of a school is very important to its overall success and running and although I can only comment on my time at the school Mr Felton served as deputy head teacher for a substantial time during the school's existence. He was in place as the head teacher under Mr Knight's term and well into and I believe through Mr Harrissons as well. Mr Felton was always a strong personality and an authority figure in my time at the school. He like any other teacher had a dual teaching talent and although Mr Felton was a Deputy Head he was also found in the D.T or Design Technology department. Perhaps you remember the pencil Holder car you had the chance to make under his tuition or maybe the Parrot, it's a case if you know you just know I'm afraid.

Mr Felton was somewhat of a familiar face in the school and also on many school trips he was also an architect as well in the creation and organization of the trips. Imagine a large group of students and lots of activities to organize, although this was a yearly trip to Malham and Poole in Dorset trip for year 4's it still needing organization and staffing.

Mr Felton was on my trip to Malham, and it was as fun as you could imagine especially as it was one of the first trips away from home for allot of young people so seeing familiar faces were an absolute comfort. Mr Felton eventually retired after I left the school but served the school for decades and is now happily enjoying retirement on the Island with his wife."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={missGoodship}
              lgimage={missGoodshipLarge}
              name="Miss Goodship"
              position={{ color: "info", label: "Music Teacher" }}
              description="MORE INFORMATION REQUIRED MISS GOODSHIP."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrsBlank}
              lgimage={mrsBlank}
              name="Mrs Callagari"
              position={{ color: "info", label: "Geography Teacher" }}
              description="MORE INFORMATION REQUIRED MISS GOODSHIP."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={missForer2}
              lgimage={missForer2Large}
              name="Miss Forer"
              position={{ color: "info", label: "Deputy Head, Year head" }}
              description="Miss Forer, what can you say apart from her falling into a Matriarch category.

Miss Forer started at the school joining for the opening of the school it was Definity a new start and a new challenge as it was the only Church Of England Faith based school on the Island at the time and welcomed students between 9-13 The school started out with 1 head teacher 1 deputy head and 2 full time staff which Miss Forer was head of all years at the opening in the 1971 with an initial intake of 210 students.

Miss Forer performed many different teaching jobs inside the school aside from the year head role. During my time at the school, she was a form tutor also a Domestic science teacher a French teacher and I do believe she was also an English teacher as well. Aside from that she was also instrumental in being the driving force behind the drama department and worked along side Mrs Brock to help make productions like The Evacuees get produced. Link to the production https://youtu.be/tMUhge07wZc.

The Evacuees was I'm sure a stressful occasion for all staff involved and the logistics were I'm sure quite the challenge. Miss Forer Stayed in the school until the 2003 when she retired from the school, and I can happily say is enjoying her retirement."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrsDarby}
              lgimage={mrsDarbyLarge}
              name="Mrs Darby"
              position={{ color: "info", label: "Special help tutor" }}
              description="MORE INFORMATION REQUIRED MRS DERBY."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrChristensen}
              lgimage={mrChristensenLarge}
              name="Mr Christensen"
              position={{ color: "info", label: "Physical Education Teacher" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={monk1}
              lgimage={monk1Large}
              name="Mr Monk"
              position={{ color: "info", label: "Science Teacher" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrMoorse}
              lgimage={mrMoorseLarge}
              name="Mr Moorse"
              position={{ color: "info", label: "Science Teacher" }}
              description="Mr Moorse We are moving back into the science department of the 80's and taking a look at Mr Moorse. I know he's about but can't contact him currently so if you can please do ask if he would like to join the group. Mr Moorse was a lab technician in the science department helping Mr Tansley with the amazing experiments we were all in awe about and intrducing us to the world of Scientific discovery. Science was fun as it was interesting curious and mysterious all at the same time. Mr Moorse joined the school in the mid to late eighties and had been a relatively young chap at the time. Ambitious and keen so when he joined us in out Malham trip in 1989 you expected fun and he didn't disappoint. Playing football with the boys and being one of the lads he had an unfortunate accident and damaged his leg. Resulting in him being taken to the hospital by a teacher and coming back with his leg either heavily or bandaged or in plaster. Opps being the operative word perhaps some one with a longer memory can help me with this. Mr Moorse left C Of E Middle School to become a deputy head at Osbourne Middle school and eventually transferred to Cowes Enterprise College and started teaching Maths, a man of many talents Science, Maths and a born leader. He has been very productive over the years as I have read in previous posts upon leaving C of E he moved onto bigger better jobs. So if we can build a picture of him joining leaving and a full set of fun memories of this memorable teacher please do."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrsBall}
              lgimage={mrsBallLarge}
              name="Mrs Ball"
              position={{ color: "info", label: "Physical Education Teacher" }}
              description="Today we have Mrs Ball or at least as far as memory serves we do. I believe she was a physical education teacher so we're hoping to get some great memories of this well deserved teacher. I'm sure she was at the school in the mid to end of the eighties and certainly into the later years at the school working into the formation of Christ The King College and now forms part of the school history. Mrs Ball was popular amoung the students and was famed for her netball and hockey classes also having been married to (ironically I hear you say) Mr Ball who was also a P.E teacher at Carisbrooke High having teaching differing age grops I'm sure they had some intersting conversations. Perhaps you know more than I do or did she teach more than just P.E I'm not sure myself but maybe you can add to her time at C of E please as we were entering into teachers and staff outside my area of knowledge so if you can add then please do."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrBlank}
              lgimage={mrBlank}
              name="Mr Hind"
              position={{ color: "info", label: "Physical Education Teacher" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrsBrock}
              lgimage={mrsBrockLarge}
              name="Mrs Brock"
              position={{ color: "info", label: "Music Teacher" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrsMurdoch}
              lgimage={mrsMurdochLarge}
              name="Mrs Murdoch"
              position={{ color: "info", label: "Domestic Science Class" }}
              description="I have for you today Mrs Murdoch, a member of staff who has undoubtedly touched many hearts as teachers generally seemed to. However that said there aren't many teachers who have also added to our waist lines as well. Mrs Murdoch originally came for interview at the school with Mr Knight and had no particular job in mind but when asked about domestic science and the opportunity to take classes it was seized upon for a one year trial. And yes you guessed it 21 years later upon Mrs Murdoch's retirement domestic science was still being taught in the school. The smells made throughout the school fave the atmosphere of home and a want to always be in that class off only to actually discover the recipe that was being cooked and satisfy curiosity. I hope many memories will be shared of this great lady whom I feel sure is still cooking and has been a wonderful tutor over the years my self included. Sometimes called super gran after the television series her broad Scottish accent and her outward commitment to doing her very best has left everyone who dealt with her nothing but good memories and probably satisfactory waist lines. I'm keen to hear if Mrs Murdoch has inspired or just added to people's love of cooking or perhaps careers in the end. She was a fantastic form group tutor as I was in 2m but also a great teacher brought along to Totland Youth Hostel having added to the happy experience. Mrs Murdoch is the pinnacle of teaching for me and I'm definatly a big fan so hardly impartial."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrsHayles}
              lgimage={mrsHaylesLarge}
              name="Mrs Hayles"
              position={{ color: "info", label: "Maths Teacher" }}
              description="My memory of Mrs Hayles is spotty despite the fact that she was my tutor group teacher in 3h yes you guessed it. She was also an integral part of the school and the teaching staff, can you add to her career path progression specialist subjects or some fond memories of her and her contribution to your education. I remember we had a limited time special offer and it was a rare one. We had the opportunity to buy a scientific calculator and as my year group teacher Mrs Hayles was in charge of letting us know about it, I remember hassling my parents to get one as I was a super offer. And yes it was the calculator you could type SHELL OIL or HELLO backwards on your calcultors do remember those? If we could have some awesome memories of this special lady it would be great maybe where she us now what she has done since if you know."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrsChalloner}
              lgimage={mrsChallonerLarge}
              name="Mrs Challoner"
              position={{ color: "info", label: "Religious Education Teacher" }}
              description="Welcome back, as they say music is the heart and soul and for this lady it seems to be a literal statement. Yes that right we are visiting Mrs Brock as it has been previously mentioned to me Mrs Brock was a music teacher composer and very talent individual whom music is everything. Speaking with Miss Forer who never fails to impress in herself she cannot sing Mrs Michelle Brock talents loud enough. Having been at the school for a number of years her leadership through the musical department has been nothing short of seismic. I was at the school and she was instrumental in the choreography execution and even writing of pieces used in school plays and many others including The evacuees 1990, To everything a season (Miss Forer' s leaving show 1996) Yanomamo and old Tyme music and ocean world I'm certain I am not doing her justice as many more production would have taken place so if you know of one please do feel free to let me know of the performances Mrs Brock worked on and I will amend the post. I believe Mrs Brock took over from Mrs Goodship but we will revisit the music department again soon. Was Mrs Brock involved in the Old Tyme Music Hall production held at Sandown pavilion ? I'm sure we will find relive many memories in this post were you good at music did you get help learn a knew instrument at all. Your memories count and a message to members of C of E Middle School this is a special place for students and teacher alike let's keep it that way as a group for us. Please only add members who went to the school and can contribute to the group as this is our place and it is special."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrsPassmore}
              lgimage={mrsPassmoreLarge}
              name="Mrs Passmore"
              position={{ color: "info", label: "Art Teacher" }}
              description="Let's take a trip into the art department and today we are visiting Mrs Passmore. What happened to her I remember her being my art teacher during my 87 through 90 time at the school but she seems to have been there for only a while. It seems she joined as a temporary teacher in 1984 as a replacment for the previous teacher Mr O Donaghue who never returned, thanks Sarah. Do you know her or where she went or perhaps your related to her. Or maybe you can add a part of the puzzle were missing here. Does anyone know the previous teacher or teachers who worked in the department with her. I must admit I had a childhood affection on Mrs Passmore as she was so caring and lovely when we did assignments in the art group. I was never too good at school but we did ok and art was a subject Mrs Passmore was good at as we did working with papermache and making statues, wax prints, pastel work and light defined pencil work with all the different pressures and grades of pencils. Art was definitely her thing as well good job I hear you say yep but does anyone remember using those small cutters and making print pads. I do remember being told to work away from myself as the blades were sharp. I also remember her driving her yellow Mercedes Benz and as I recall a very expensive car in the day so maybe she was a teacher for the live of the job. I'm keen to hear of your thoughts for this memorable teacher and would love to find out if she inspired you to do something artsy with your life."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrBlank}
              lgimage={mrBlank}
              name="Mr Patterson"
              position={{ color: "info", label: "Art Teacher" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrBlank}
              lgimage={mrBlank}
              name="Mr O,Donnahew"
              position={{ color: "info", label: "Art Teacher" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrsReynolds1}
              lgimage={mrsReynolds1Large}
              name="Mrs Reynolds"
              position={{ color: "info", label: "French Teacher" }}
              description="Sad but true it with sadness I say Mrs Reynolds is no longer with us but I'm sure she is fondly remembered by you guys and girls. I'm afraid exclusively the fact she was an ace teacher who totally rocked with religious education she was also a form tutor . She has been a friend a teacher a confidant and much much more. My dealings with Mrs Reynolds are limited as I never had her as a tutor or as far as my limited memory goes a teacher that said I feel sure we will discover new things we all forgot and can celebrate a fantastic part of the C of E community at trinity. Mrs Reynolds has been famed as a brilliant french teacher and was highly accomplished at her chosen subject, praised by staff and students alike. Thank you Mrs Reynolds for teaching the unteachable."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrsWatkins}
              lgimage={mrsWatkinsLarge}
              name="Mrs Montgomery (Mrs Watkins, Mrs Cobby)"
              position={{ color: "info", label: "English ,French, & History Teacher " }}
              description="Hello to Mrs Watkins she remarried into Mrs Cobby and is now Mrs Montgomery so from here to the end of the post we shall use her new name just so it doesn't get to confusing . Mrs Montgomery joined the school in April 1980 to cover Mr Luckett 's time table so it wasn't a long term thing but fortunately enough we have kept her for longer. She progressed from there to Mrs Googes classed while she was away on maternity leave. Her time table progressed over the years and she stayed with us making many happy memories and contributing to the school through her teaching talent and participation in many school activities like Malham. Mrs Montgomery was a specialist teacher and taught years 3 and 4 or 7 and 8 dependant on your years served. Teaching English French and history she stayed at the school covering many subjects anc becoming an integral part of the staff. After I imagine was only supposed to be a short term posting to the school. Having been there for so long as was the tradition for teachers it seems at C of E she contributed to the education of many thousand of students over the years and making happy memories along the way. Remember Mrs Watkins is now Mrs Montgomery so please do feel free to say thank you as she's looking at the post. Staying in one place if any thing is a sign of commitment love of the job and the students. Linda Montgomery sadly left the school in 2012 after 32 years service but is happily in the group and still a part of the community."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrWalker}
              lgimage={mrWalkerLarge}
              name="Mr Walker"
              position={{ color: "info", label: "French Teacher" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrTansley2}
              lgimage={mrTansley2Large}
              name="Mr Tansley"
              position={{ color: "info", label: "Science Teacher" }}
              description="We are visiting the science department today and a true icon of that department. I remember him as I'm sure many of you will as a cleaver man who was not only good at his job but a fun man to be around as well. I remember watching a science film in the science block and the tape getting stuck in the vhs player. I suggested using sellotape to remove the casette and to my and I think more his suprise it a really worked. He congratulated me and I felt ever so proud being thanked by a smart man. He as with other teachers was part of the core staff staying for years even decades but has now sadly passed away. Does anyone have more information on when he started and left the school as he was there for decades. Mr Tansley as I remember had at least one son at the school maybe you played with him or can add some memories of his time interacting with his dad. I can tell you he lived literally around the corner from the at the top of and round the corner of Mountbatten Drive as im sure I played with his son. If we could have any names some memories or funny events it would be most appreciated. I think we can also say Mr Tansley was always a well dressed man sporting the tank tops of the time, surely they were in fashion at some point ?."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrsCrump}
              lgimage={mrsCrumpLarge}
              name="Mrs Crump (Manche)"
              position={{ color: "info", label: "Maths Teacher" }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrHawes}
              lgimage={mrHawesLarge}
              name="Mr Hawes"
              position={{
                color: "info",
                label: "English, Sex Education and Religious Education Teacher",
              }}
              description="We have limited information but we believe Mr Seaward served as a temporary deputy head upon the retirment of Mr Felton. If anyone has any information on the school leadership structure it would be most appreciated. We would very much like to add more information into the website to get it as accurate as possible but also to pay recognition to staff that have served the school over the years. If anyone has any pictures of said staff it would be very much appreciated. Please feel free to contact us in the links on the contact us page."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrBlank}
              lgimage={mrBlank}
              name="Mr Besley"
              position={{ color: "info", label: "Maths Teacher ?" }}
              description="MORE INFORMATION REQUIRED MR BESLEY."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrsBlank}
              lgimage={mrsBlank}
              name="Mrs Besley (formerly Hagan)"
              position={{ color: "info", label: " Maths Teacher ?" }}
              description="MORE INFORMATION REQUIRED MRS BESLEY."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrsBlank}
              lgimage={mrsBlank}
              name="Miss Howe"
              position={{ color: "info", label: "Teacher" }}
              description="MORE INFORMATION REQUIRED MR BESLEY."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrsBlank}
              lgimage={mrsBlank}
              name="Mr Hind"
              position={{ color: "info", label: "Physical Education Teacher" }}
              description="MORE INFORMATION REQUIRED MR HIND."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrsBlank}
              lgimage={mrsBlank}
              name="Ms Sue Rayner"
              position={{ color: "info", label: "Physical Education Teacher" }}
              description="MORE INFORMATION REQUIRED MS SUE RAYNER."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrBlank}
              lgimage={mrBlank}
              name="Mr Baggot"
              position={{ color: "info", label: "Physical Education Teacher" }}
              description="MORE INFORMATION REQUIRED MR BAGGOT."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrsBlank}
              lgimage={mrsBlank}
              name="Miss Honor"
              position={{ color: "info", label: "Physical Education Teacher" }}
              description="MORE INFORMATION REQUIRED MISS HONOR."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrBlank}
              lgimage={mrBlank}
              name="Chris Hodgkinson"
              position={{ color: "info", label: "Science Tec Teacher" }}
              description="MORE INFORMATION REQUIRED MISS HONOR."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrsEmery}
              lgimage={mrsEmeryLarge}
              name="Mrs Maureen Emery"
              position={{ color: "info", label: "Head Teacher's P.A" }}
              description="A slightly shorter post this one as although I'm sure she made a massive behind the scenes contribution I cannot in all honesty add lots to this profile. Maureen worked as the head teachers personal assistant and was also frequently called upon to help out as supervisors alongside her husband on school trips such as the peak district.
The lady in question is called Mrs Emery and all I know or have been told is that she was operational staff. So we can draw she was doing all the stuff behind the scenes that mad with all work. 
I have established she joined the school in the mid to late eighties and was there certainly in the early 1990 but little more than that I'm afraid.  Do you know more than me as it would be great to get a little more information please. ."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard1
              smimage={mrsBlank}
              lgimage={mrsBlank}
              name="Kathy Peaty"
              position={{
                color: "info",
                label: "Science Tec Teacher  network manager /ICT support",
              }}
              description="MORE INFORMATION REQUIRED MISS HONOR."
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AllTeachers;
