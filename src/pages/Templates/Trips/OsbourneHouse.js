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

//Small Images
import osbourneHouse1sm from "assets/images/TripsAway/osbourneHouse1sm.jpg";
import osbourneHouse2sm from "assets/images/TripsAway/osbourneHouse2sm.jpg";
import osbourneHouse3sm from "assets/images/TripsAway/osbourneHouse3sm.jpg";
import osbourneHouse4sm from "assets/images/TripsAway/osbourneHouse4sm.jpg";
import osbourneHouse5sm from "assets/images/TripsAway/osbourneHouse5sm.jpg";
//Large Images
import osbourneHouse1lg from "assets/images/TripsAway/osbourneHouse1lg.jpg";
import osbourneHouse2lg from "assets/images/TripsAway/osbourneHouse2lg.jpg";
import osbourneHouse3lg from "assets/images/TripsAway/osbourneHouse3lg.jpg";
import osbourneHouse4lg from "assets/images/TripsAway/osbourneHouse4lg.jpg";
import osbourneHouse5lg from "assets/images/TripsAway/osbourneHouse5lg.jpg";
function OsbourneHouse() {
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
              Osbourne House
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              An Island educational Staple.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={osbourneHouse1sm}
              lgimage={osbourneHouse1lg}
              name="The Front of the Royal Palace"
              position={{ color: "info", label: "My Experiences" }}
              description="As in Most cases The Island had a amazing resource and it would be shall we say neglectful for the school not to have taken the opportunity to utilise this resource. A fromer royal residence is an amazing attraction for children to study particually C Of E Middle school kids. I remeber frequent trips to osbourne and the option opps necessaity to fill out the obligatory forms and fact sheets to facilitate leaning.<br/> <br/>
              
              But I think in my case more an option to be outside school. I did enjoy school honestly but I personally liked the practical and adventuring side of life rather than an academic understanding of the history. I have included below exerts from Wikiopdia to outline the history and provinece of the school. Perhaps you have some more productive memories of school more tha I did. If you do or would like to submit some picture for inclusion into the website please do get in touch.   "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={osbourneHouse2sm}
              lgimage={osbourneHouse2lg}
              name="Royal Dinning Room."
              position={{
                color: "info",
                label: "Durbar Room",
              }}
              description="Osborne House is a former royal residence in East Cowes, Isle of Wight, United Kingdom. The house was built between 1845 and 1851 for Queen Victoria and Prince Albert as a summer home and rural retreat. Albert designed the house himself, in the style of an Italian Renaissance palazzo. The builder was Thomas Cubitt, the London architect and builder whose company built the main facade of Buckingham Palace for the royal couple in 1847. An earlier smaller house on the site was demolished to make way for a new and far larger house, though the original entrance portico survives as the main gateway to the walled garden.<br/> <br/>

Queen Victoria died at Osborne House on 22 January 1901, aged 81. Following her death, King Edward VII, who had never liked Osborne, presented the house to the state on the day of his coronation, with the royal pavilion being retained as a private museum to Victoria. From 1903 to 1921, part of the estate around the stables was used as a junior officer training college for the Royal Navy, known as the Royal Naval College, Osborne. Another section of the house was used as a convalescent home for officers. In 1933, many of the temporary buildings at Osborne were demolished. <br/> <br/>

In 1954, Queen Elizabeth II gave permission for the first floor rooms (the private apartments) in the royal pavilion to be opened to the public. In 1986, English Heritage assumed management of Osborne House. In 1989, the second floor of the house was also opened to the public."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={osbourneHouse3sm}
              lgimage={osbourneHouse3lg}
              name="Top Floor Royal Nursing"
              position={{
                color: "info",
                label: "Osbourne's History",
              }}
              description="Royal retreat
Queen Victoria and Prince Albert bought Osborne House on the Isle of Wight from Lady Isabella Blachford in October 1845. They wanted a home removed from the stresses of court life. Victoria had spent two holidays on the Isle of Wight as a young girl, when her mother, the Duchess of Kent, rented Norris Castle, the estate next door to Osborne. The setting of the three-storey Georgian house appealed to Victoria and Albert. In particular, the views of the Solent reminded Albert of the Bay of Naples in Italy. They soon realised that the house was too small for their needs and decided, with advisors, to replace the house with a new, larger residence.<br/> <br/>

Queen Victoria's bathing machine (now restored)
The new Osborne House was built between 1845 and 1851 in the Italian Renaissance style, complete with two belvedere towers. Prince Albert designed the house himself in conjunction with Thomas Cubitt, the London architect and builder, whose company also built the main façade of Buckingham Palace.[3] The couple paid for much of the furnishing of the new house from the sale of the Royal Pavilion at Brighton.[4] The Prince Consort participated directly in laying out the estate, gardens and woodlands, to prove his knowledge of forestry and landscaping. At the more official royal residences, he had been overruled by the Commissioners of Woods and Forests, who had official responsibilities for the grounds.<br/> <br/>

Below the gardens on Osborne Bay was a private beach, where the Queen kept her own private bathing machine. According to a news report: The queen's bathing machine was unusually ornate, with a front veranda and curtains which would conceal her until she had entered the water. The interior had a changing room and a plumbed-in WC."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={osbourneHouse4sm}
              lgimage={osbourneHouse4lg}
              name="Swiss Retreat"
              position={{
                color: "info",
                label: "Swiss Cottage on the Osbourne Estate.",
              }}
              description="The grounds also included a Swiss Cottage  for the royal children. The cottage was dismantled and brought piece by piece from Switzerland to Osborne where it was reassembled. There, the royal children were encouraged to garden. Each child was given a rectangular plot in which to grow fruit, vegetables and flowers. They sold their produce to their father. Prince Albert used this as a way to teach the basics of economics. The children also learned to cook in the Swiss Cottage, which was equipped with a fully functioning kitchen. Both parents saw this kind of education as a way of grounding their children in the activities of daily life shared by the people in the kingdom despite their royal status.<br/> <br/>

In 1859, Prince Albert designed a new and larger quadrangular stable block, which was built by Cubitts on the former cricket pitch. The building is listed Grade II* on the National Heritage List for England.<br/> <br/>

After Prince Albert died at Windsor Castle in December 1861, Queen Victoria continued to visit Osborne House because it was one of her favourite homes.<br/> <br/>

In 1876, as a tribute to Queen Victoria, the Government House in the colony (now State) of Victoria, Australia, was constructed as a copy of Osborne House.<br/> <br/>

On 14 January 1878, Alexander Graham Bell demonstrated an early version of the telephone to the queen at Osborne House,[13] placing calls to Cowes, Southampton and London. They were the first publicly witnessed long-distance telephone calls in Britain. The queen tried the device and considered the process to be quite extraordinary although the sound was rather faint. She later asked to buy the equipment that was used, but Bell offered to make a set of telephones specifically for her."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={osbourneHouse5sm}
              lgimage={osbourneHouse5lg}
              name="A gift to the Nation"
              position={{
                color: "info",
                label: "A gift to the nation.",
              }}
              description="The grounds also included a Swiss Cottage  for the royal children. The cottage was dismantled and brought piece by piece from Switzerland to Osborne where it was reassembled. There, the royal children were encouraged to garden. Each child was given a rectangular plot in which to grow fruit, vegetables and flowers. They sold their produce to their father. Prince Albert used this as a way to teach the basics of economics. The children also learned to cook in the Swiss Cottage, which was equipped with a fully functioning kitchen. Both parents saw this kind of education as a way of grounding their children in the activities of daily life shared by the people in the kingdom despite their royal status.<br/> <br/>

In 1859, Prince Albert designed a new and larger quadrangular stable block, which was built by Cubitts on the former cricket pitch. The building is listed Grade II* on the National Heritage List for England.<br/> <br/>

After Prince Albert died at Windsor Castle in December 1861, Queen Victoria continued to visit Osborne House because it was one of her favourite homes.<br/> <br/>

In 1876, as a tribute to Queen Victoria, the Government House in the colony (now State) of Victoria, Australia, was constructed as a copy of Osborne House.<br/> <br/>

On 14 January 1878, Alexander Graham Bell demonstrated an early version of the telephone to the queen at Osborne House,[13] placing calls to Cowes, Southampton and London. They were the first publicly witnessed long-distance telephone calls in Britain. The queen tried the device and considered the process to be quite extraordinary although the sound was rather faint. She later asked to buy the equipment that was used, but Bell offered to make a set of telephones specifically for her."
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default OsbourneHouse;
