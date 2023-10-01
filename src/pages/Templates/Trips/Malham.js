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

//Small Images
import newfieldFront1sm from "assets/images/TripsAway/newfieldFront1sm.jpg";
import newfieldHallHallsm from "assets/images/TripsAway/newfieldHallHallsm.jpg";
import newfieldHallRear2sm from "assets/images/TripsAway/newfieldHallRear2sm.jpg";
import newfieldSunsetsm from "assets/images/TripsAway/newfieldSunsetsm.jpg";
//Large Images
import newfieldFront1lg from "assets/images/TripsAway/newfieldFront1lg.jpg";
import newfieldHallHalllg from "assets/images/TripsAway/newfieldHallHalllg.jpg";
import newfieldHallRear2lg from "assets/images/TripsAway/newfieldHallRear2lg.jpg";
import newfieldSunsetlg from "assets/images/TripsAway/newfieldSunsetlg.jpg";
function Malham() {
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
              Malham Trip.
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Malham Year 3 trip away for a week.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={newfieldFront1sm}
              lgimage={newfieldFront1lg}
              name="Malham"
              position={{ color: "info", label: "Third years trip away to the Torkshire Dales" }}
              description="Newfield Hall is a stone mansion located in the southern part of the Yorkshire Dales National Park, near the village of Malham.02 It was built in 1856 and has a pillared entrance, baronial hall, and courtyards. The hotel is owned and operated by HF Holidays Ltd and has 48 bedrooms, including single, twin, and family rooms, all with en-suite facilities.<br/> <br/>
              
              The hotel is situated in two acres of mature grounds, close to Malham Cove and surrounded by beautiful rolling countryside, which inspired Wordsworth to write a sonnet and Charles Kingsley to pen The Water Babies.2 It was designed by Lancaster architect E. G. Paley for William Nicholson Alcock at a cost of £36,000."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={newfieldHallHallsm}
              lgimage={newfieldHallHalllg}
              name="Newfield Hall"
              position={{
                color: "info",
                label: "Newfield Hall, once a YCA hotel accomadation Students.",
              }}
              description="Built in 1855 on land once belonging to the Lambert estate, the first resident of Newfield Hall was retired Skipton lawyer William Nicholson Alcock, whose father was a partner in founding the Craven Bank in 1791 (this later joined the Barclays family by way of Martins Bank in 1968). He moved in the following year, and this remained his home until his death in 1878. The estate then passed to his nephew, William, a captain in the Yorkshire Yeomanry, who immediately advertised for a tenant in the August 1878 edition of The Manchester Guardian.<br/> <br/>
              
              He described the house as ‘a commodious family mansion’ complete with grounds ‘laid out with great taste’. It sparked little rental interest and the hall eventually sold to retired worsted spinner and manufacturer William Illingworth in 1890 and then to JW Morkil, future High Sheriff of the West Riding, in 1901. It has been part of our HF Holidays line-up since 1934 and has enjoyed a series of refurbishments over the years. <br/> <br/>

Nowadays, there’s 46 well-appointed guest rooms in three categories (Classic, Premium, and Superior) spread across the main building and the tastefully converted coach house. You’ll find two cosy lounges, a licensed bar, books and games to borrow during your stay, and a light-filled dining room for a wide range of dishes made with fresh and seasonal ingredients. Elsewhere, there’s a handy boot and drying room, a multi-purpose activity room used as an artist’s studio and games room, plus well-kept grounds perfect for a post-dinner stroll. Many of the original design features remain, including the pillared entrance, impressive hall, and sweeping staircase.

<br/> <br/>There’s also a Discovery Point offering a wide range of local area maps, route guides, and easy-to-follow information for self-guided walks as well as a newly refreshed heritage room with displays of old HF Holidays brochures, photographs, walks programmes, and other memorabilia. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={newfieldHallRear2sm}
              lgimage={newfieldHallRear2lg}
              name="Facilities Offered at Newfield Hall"
              position={{ color: "info", label: "Five Star Facilities" }}
              description="Rooms
Designed with your comfort in mind, Newfield Hall has 46 well-appointed guest rooms available in three categories: Classic, Premium, and Superior. <br/> <br/>

Classic Rooms are comfortable en-suite guest rooms, ideal for a peaceful night's sleep. Amenities include free Wi-Fi, tea and coffee-making facilities, toiletries (hand wash, shampoo, and shower gel), and a TV. <br/> <br/>

Premium Rooms are more spacious en-suite guest rooms. Amenities include free Wi-Fi, tea and coffee-making facilities, toiletries (hand wash, shampoo, body lotion, shower gel), and a 32-inch TV. Extras include bathrobes, slippers, and comfortable mattresses.<br/> <br/>

Superior Rooms are even more spacious en-suite guest rooms offering upgraded views of the surrounds. Amenities include free Wi-Fi, tea and coffee-making facilities, toiletries (hand wash, shampoo, body lotion, shower gel), and a 32-inch TV. Extras include bathrobes, slippers, and comfortable mattresses.<br/> <br/>

We love: The guest rooms spread across the main building and the tastefully converted coach house. Rooms 3 and 6 are both corner rooms offering original features and large bay windows overlooking the gardens and beyond (Room 6 has its own telescope). <br/> <br/>

The Choose Your Room service is available at our UK country houses, allowing you the option of choosing and confirming a specific room for an extra charge of £30 per room. This is subject to availability. Upgrade supplements apply. <br/> <br/>

Check in & check out
You are welcome to check in from 4:00pm at the earliest. On arrival, you’ll enjoy a complimentary cream tea and get to meet your fellow guests, our HF Holidays Leaders, and the rest of the friendly team. <br/> <br/> 

On the day of departure, we kindly ask all guests to check out by 10:00am. You’ll be asked to settle your bill prior to leaving. You may, of course, make a charitable donation to our HF Holidays Pathways Fund if you wish. Please note that we only accept card payments."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={newfieldSunsetsm}
              lgimage={newfieldSunsetlg}
              name="So Much To see and do in the Dales of Yorkshire"
              position={{
                color: "info",
                label: "About your stay",
              }}
              description="
A warm welcome
We want you to feel comfortable from the moment you arrive. You’ll find a welcome pack in your room with guest registration forms, menus, order forms for dinners and picnic lunches, the Wi-Fi password, and the front door code. Our houses are locked at night, so we recommend noting the Duty Manager’s number on arrival in case of an emergency (or getting locked out).<br/> <br/> 

Evening entertainment
While evening entertainment varies from house to house, the HF Holidays Big Pub Quiz held after dinner on Wednesdays is a weekly staple. Your HF Holidays Leader may be around for tips on guided and self-guided walking routes as well as visit-worthy local attractions. <br/> <br/>

Walks talks
Our HF Holidays Leaders host guided walking information briefings before and after dinner on arrival days. This is followed by a group Walks Talk for information on the following day’s walking delights (usually held before and after dinner, so you can join whenever suits). Self-guided walking guests are, of course, welcome.  <br/> <br/>

The walking day 
Prior to setting off on walks, your HF Holidays Leader will run you through a short safety briefing. There’s also an up-to-date weather forecast on display at the house to ensure you have appropriate clothing and footwear. If you choose to do your own walks or are on a self-guided walking holiday, we ask that you please complete an Independent Walker Card each day. These can be found near the Discovery Point in the house. "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Malham;
