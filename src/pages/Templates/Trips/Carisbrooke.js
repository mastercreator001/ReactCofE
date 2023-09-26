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

// Images
import carisbrookeCastle1 from "assets/images/TripsAway/carisbrookeCastlel1.jpg";
import carisbrookeCastle2 from "assets/images/TripsAway/carisbrookeCastle2.jpg";
import carisbrookeCastle3 from "assets/images/TripsAway/carisbrookeCastle3.jpg";
import carisbrookeCastle4 from "assets/images/TripsAway/carisbrookeCastle4.jpg";

function Carisbrooke() {
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
              Carisbrooke Castle
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Carisbrooke Castle various year groups.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={carisbrookeCastle1}
              lgimage={carisbrookeCastle1}
              name="The Castle of Castles"
              position={{ color: "info", label: "Various Trips to Carisbrooke." }}
              description="As school trips go I'm certain I must have done at least 2 or three while at school amnd the castle althouh ipressive to my age group it was local acessiable and a good chance not to be in school learning. I do rememebr looking doen the well and thinking huh a good excuse not to be in class if I was stuck in a well huh. School was obviously no breeze as the acessiablity and locality of the Castle and it' history was of great interest to the school as  a leaening opportunity and a day out and about too. We did many a fact sheet about the castle over the years and I still visit to this day. Do you remmeber the varying trips out to the castle ?"
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={carisbrookeCastle2}
              lgimage={carisbrookeCastle2}
              name="Climb the Keep if you dared."
              position={{
                color: "info",
                label: "The Norman Castle",
              }}
              description="
Shortly after the Norman conquest, the burh was converted into a castle to secure the island for the Norman invaders. A defended enclosure was formed in one corner of the Saxon burh by digging deep ditches within it.<br/> <br/>

In 1100 the Isle of Wight became part of a powerful lordship, created by Henry I (reigned 1100–35) for Baldwin de Redvers, one of his key supporters. The island remained in his family until 1293. It was probably Baldwin who created the present massive motte-and-bailey castle which still dominates the hilltop.<br/> <br/>

After Henry I’s death Baldwin supported his daughter, Matilda, in her claim to the throne when the king’s nephew, Stephen, took it for himself, resulting in civil war. In 1136 Baldwin probably intended to defend Carisbrooke, but was forced to surrender to King Stephen when its water supply ran dry.<br/> <br/>

By this time the castle had stone walls on its banks,[3] but its internal layout is uncertain. The castle chapel, also a parish in its own right, was probably on the site of the present chapel, with an enclosure behind it in what is now the Privy Garden. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={carisbrookeCastle3}
              lgimage={carisbrookeCastle3}
              name="Inside the Walls"
              position={{ color: "info", label: "A Chnaging Role" }}
              description="
Thereafter the significance of the castle declined as defences moved back to the coast. Carisbrooke was the occasional residence of the governors of the Isle of Wight, some of whom, notable Lord Cutts (governor 1692–1706) and the Earl of Cadogan (1715–26), carried out repairs and alterations. In 1738 the Chapel of St Nicholas was demolished and rebuilt in Georgian style.<br/> <br/>

By the mid-19th century the castle was no longer used as a residence, but still had a residual military role as a base for the Isle of Wight Artillery Militia. The roof and floors of the gatehouse had been removed and Carey’s building had been reduced to a ruin. Many of the remaining buildings were in poor repair. It was by then also becoming much visited as a tourist attraction. It passed into the care of the Office of Works in 1856.<br/> <br/>

The first restoration was carried out by Philip Hardwick in that year. He converted the Constable’s Lodging, at the southern end of the hall range, and the L-shaped block in the south-east corner of the castle to their present form before the funding ran out. He also demolished the Chapel of St Nicholas to create a romantic ruin."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={carisbrookeCastle4}
              lgimage={carisbrookeCastle4}
              name="The Court Yard"
              position={{
                color: "info",
                label: "Carisbrooke As A monument.",
              }}
              description="


The major influence on the castle’s present form, however, was Percy Stone, an architect who was also the island’s historian. He published the first study of the castle’s history and architecture in 1891.[12] He was helped by renewed royal interest in the castle when Princess Beatrice, Queen Victoria’s youngest daughter, was appointed governor in 1896 in succession to her husband, Prince Henry of Battenberg.<br/> <br/>

Stone first restored the gatehouse, replacing its roof and one upper floor, to make the first Isle of Wight Museum, opened in 1898 in memory of Prince Henry. In 1904 he restored the Chapel of St Nicholas to its present quasi-medieval form. Its internal appearance, however, results from its use as the island’s war memorial commemorating the 2,000 men from the Isle of Wight killed in both world wars.<br/> <br/>

In 1913 Princess Beatrice had the hall range and Constable’s Lodging adapted and modernised to become her summer residence, which she continued to use until 1938.

Since the Second World War, the castle has remained largely as a monument. It is used occasionally for island ceremonies but is primarily a tourist destination. It is also the home of the Isle of Wight Museum, which moved after Princess Beatrice’s death in 1944 into the more spacious accommodation of the hall range, where it remains."
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Carisbrooke;
