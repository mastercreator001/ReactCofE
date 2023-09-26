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

// Routes
import routes from "routes";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard2 from "examples/Cards/TeamCards/HorizontalTeamCard2";

// Images Small
import schoolClosing1 from "assets/images/Attentioncatchers/schoolClosing1.png";
import trinitymiddlefire22 from "assets/images/Attentioncatchers/trinitymiddlefire22.jpg";
import schoolClosure5 from "assets/images/Attentioncatchers/schoolClosure5.png";
// Images Large
import schoolClosure5Large from "assets/images/Attentioncatchers/schoolClosure5Large.png";
import schoolClosing1Large from "assets/images/Attentioncatchers/schoolClosing1Large.png";
import trinitymiddlefire22Large from "assets/images/Attentioncatchers/trinitymiddlefire22Large.jpg";

function Attention2() {
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
          <Grid item xs={12} md={9} sx={{ mb: 3 }} mt={10}>
            <MKTypography variant="h3" color="white">
              The Closing Tragedy
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Arson and questions, a unfitting end to a great school.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={trinitymiddlefire22}
              lgimage={trinitymiddlefire22Large}
              name="The Start of the was fire spoted by former pupil turned fire man."
              position={{ color: "info", label: "As quoted from The Island Echo Coverage" }}
              description="A blaze that broke out at the former Trinity Middle School site in Newport late last night (Monday) is not being investigated by Police at the request of the site owners, it has been confirmed.<br/> <br/>

As first reported by Island Echo, firefighters were called to the Christ the King College lower campus Wellington Road, Carisbrooke shortly before 23:20 following reports of a fire within a derelict single-storey school building.<br/> <br/>

Island Echo understands that a firefighter returning home after drill night spotted the smoke issuing and alerted the control room.<br/> <br/>

The incident was very quickly scaled up from 4 pumps to 10, with crews from every station on the Isle of Wight involved in tackling the blaze. An aerial ladder platform was also drafted in alongside the Incident Command Unit, several senior officers and the service’s workshop team.<br/> <br/>

A further 4 appliances from Beaulieu, St Mary’s, Cosham and Southsea were brought over from Hampshire to provide additional fire cover overnight.<br/> <br/>

A total of 28 breathing apparatus, 2 hose reel jets, 1 main jet and the specialist COBRA equipment were used to bring the fire under control with more than 50 firefighters on scene. Positive Pressure Ventilation was used to clear toxic smoke from the building.<br/> <br/>

The fire in the roof space measured 50m x 70m.



"
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
              smimage={schoolClosure5}
              lgimage={schoolClosure5Large}
              name="The Aftermath of the fire"
              position={{
                color: "info",
                label: "Extensive devestation despite the firefighters efforts",
              }}
              description="Shortly after 04:00 this morning the fire had been extinguished and by 05:15 the incident was brought to a close with all appliances returning to their home stations – some 6 hours after the incident began.<br/> <br/>

A spokesperson for Hampshire Constabulary has told Island Echo:<br/> <br/>

“We were called regarding the small fire at an address in Wellington Road, at 11.18pm yesterday.<br/> <br/>

“No significant damage was caused.<br/> <br/>

“The site is due to be demolished soon and as such the owners do not request any further police action”.<br/> <br/>

Thankfully, no one has been injured as a result of the incident.<br/> <br/>

The Isle of Wight Council’s Cabinet member for public protection, Councillor Tig Outlaw, said:<br/> <br/>

“I would like to thank our fire and rescue service for their professionalism and swift action in dealing with this incident at this derelict site.

“Clearly the cause will be fully investigated, and the site, which was under the responsibility of contractors, will remain closed off.

“It Is not believed the incident will affect the running of the school when it reopens next term”.<br/> <br/>

The Isle of Wight Fire and Rescue Service are treated in the incident as suspected arson.  "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={25}>
            <HorizontalTeamCard2
              smimage={schoolClosing1}
              lgimage={schoolClosing1Large}
              name="A shell of it's former self"
              position={{ color: "info", label: "Investigation and closed soon after." }}
              description="Even though the council and police started an investigation into the balze the owners of the site |Christ The King had asked the police to not investigate and the case was only closed as supected arson to the building.<br/> <br/>
              
              Although the building was awaiting demolition I would have hope the school would have persued a police inwuiry to attempt to identify the criminals responsible however this was not the case. The building was resecured and handed over to the contractors for demolition preparation, although these works were slightly hampered by the damaged sustained to the roof of the building being in a dangerous condition post fire damage."
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Attention2;
