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

// Images
import yhaFront from "assets/images/TripsAway/yhaFront.jpg";
import yhaTotland from "assets/images/TripsAway/yhaTotland.jpg";
import Totland20 from "assets/images/TripsAway/Totland20.jpg";
import Totland10 from "assets/images/TripsAway/Totland10.jpg";

function dhTeachers() {
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
              School Trips To Totland YCA
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              YCA used to be called YMCA but the Buildngi familiur ?
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={yhaFront}
              lgimage={yhaFront}
              name="Front of the Building"
              position={{ color: "info", label: "Wecome to YCA Totland year 2 trip away" }}
              description="Set in an Area of Outstanding Natural Beauty, YHA Isle of Wight Totland has the best of both worlds - a seaside village location with many beautiful walking spots, but with Newport, the bustling Island Capital, just a 20-minute drive away. This makes it an ideal spot from which to explore the island.

You cannot visit the Isle of Wight and not see the iconic Needles – a series of chalk stacks which protrude into the sea. The view from the chalky cliffs is amazing!

The beaches and villages all have pubs, cafes, coffee shops and restaurants, for guests to grab a bite to eat and relax after a day’s exploring the beautiful area.."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={yhaTotland}
              lgimage={yhaTotland}
              name="Rememeber Totland now"
              position={{ color: "info", label: "Lovely garden for 2nd years to Have fun in." }}
              description="Hostel facilities:
Ambulant accessible
BBQ area<br/> <br/>
Classroom(s),
Coach parking nearby<br/> <br/>
Contactless payments,
Cycle store<br/> <br/>
Dining room,
Evening meals<br/> <br/>
Free on-street parking,
Free parking on premises<br/> <br/>
Full mobile coverage,
Games<br/> <br/>
Garden/grounds,
Group meals<br/> <br/>
Library,
Licensed bar<br/> <br/>
Luggage store,
Medium garden/grounds<br/> <br/>
Meeting rooms,
Minibus parking nearby<br/> <br/>
Minibus parking on premises,
Near bus stop<br/> <br/>
Near ferry port,
Outdoor seating<br/> <br/>
Packed lunch,
Sea view<br/> <br/>
Self-catering kitchen,
Shared drying room<br/> <br/>
Shared laundry room,
Shared lounge<br/> <br/>
Shared TV,
Sole use<br/> <br/>
Unlimited breakfast,
WiFi<br/> <br/>"
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={Totland20}
              lgimage={Totland20}
              name="Not too shabby "
              position={{ color: "info", label: "Lovely and well equipped buildng for us." }}
              description="Hostel need to know
Reception opening hours: From 07:00 - 10:00 and 17: 00 - 21:00.<br/> <br/>

Food and drink: Breakfast is served to guests daily from 08:00 - 09:00. Evening meals are also available from 18:00 - 19:00, with pizzas also served until 21:00.<br/> <br/>

Self-catering: Guests have access to a self-catering kitchen.<br/> <br/>

Transport: A ferry is required to travel to the Isle of Wight. The nearest ferry is Lymington (New Forest) – Yarmouth and is a 30min crossing. Yarmouth Town is 3 miles from the hostel.<br/> <br/>

Parking: There is a gravel carpark outside the hostel with space for 8 cars which is free to guests. Free street parking is also available opposite our building for one large coach or 3 minibuses or 6 extra cars.<br/> <br/>

WiFi: Free WiFi is available in shared social spaces and all our rooms.<br/> <br/>

Dogs: Dogs are permitted at YHA Isle of Wight Totland when hiring the whole hostel through YHA Exclusive Hire. Add up to 4 dogs to your booking in the checkout. Assistance dogs are welcome - please notify us at the time of booking."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={Totland10}
              lgimage={Totland10}
              name="Just about enough room for everyone."
              position={{
                color: "info",
                label: "We had so much fun at Totland, do you remember ?",
              }}
              description="YHA Isle of Wight Totland has great access to gorgeous beaches, walking routes and top coastal attractions. If you're planning a self-led school trip, there’s a wealth of interesting things to do nearby.<br/> <br/>

Free Wi-Fi is available to keep school groups connected, and there’s a room available to use for studying or meetings. We’ve got board games, TV and a well-stocked library too.<br/> <br/>

Book your YHA School Trip."
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default dhTeachers;
