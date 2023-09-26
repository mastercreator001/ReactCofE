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
import DG1Sm from "assets/images/DemolitionGallery/DG1Sm.jpg";
import DG2Sm from "assets/images/DemolitionGallery/DG2Sm.jpg";
import DG3Sm from "assets/images/DemolitionGallery/DG3Sm.jpg";
import DG4Sm from "assets/images/DemolitionGallery/DG4Sm.jpg";
import DG5Sm from "assets/images/DemolitionGallery/DG5Sm.jpg";
import DG6Sm from "assets/images/DemolitionGallery/DG6Sm.jpg";
import DG7Sm from "assets/images/DemolitionGallery/DG7Sm.jpg";
import DG8Sm from "assets/images/DemolitionGallery/DG8Sm.jpg";
import DG9Sm from "assets/images/DemolitionGallery/DG9Sm.jpg";
import DG10Sm from "assets/images/DemolitionGallery/DG10Sm.jpg";
import DG11Sm from "assets/images/DemolitionGallery/DG11Sm.jpg";
// Images Large
import DG1Lg from "assets/images/DemolitionGallery/DG1Lg.jpg";
import DG2Lg from "assets/images/DemolitionGallery/DG2Lg.jpg";
import DG3Lg from "assets/images/DemolitionGallery/DG3Lg.jpg";
import DG4Lg from "assets/images/DemolitionGallery/DG4Lg.jpg";
import DG5Lg from "assets/images/DemolitionGallery/DG5Lg.jpg";
import DG6Lg from "assets/images/DemolitionGallery/DG6Lg.jpg";
import DG7Lg from "assets/images/DemolitionGallery/DG7Lg.jpg";
import DG8Lg from "assets/images/DemolitionGallery/DG8Lg.jpg";
import DG9Lg from "assets/images/DemolitionGallery/DG9Lg.jpg";
import DG10Lg from "assets/images/DemolitionGallery/DG10Lg.jpg";
import DG11Lg from "assets/images/DemolitionGallery/DG11Lg.jpg";

function DemolitionGallery() {
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
              Demolition Gallery
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Demolition School Pictures
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={DG1Sm}
              lgimage={DG1Lg}
              name="Demolition Images from the school "
              position={{ color: "info", label: "Initial strip out of the school." }}
              description="The Schools demolition came as a shock to me personally as I hadn't been following the progression of the schools in the road and had paid even less attntion to the fate of C of E Middle School. In truth did you know the school had changed from C Of E Middle School to Christ The King let alone the school was to be demolished, I didn't.<br/> <br/>
              
              The Demolition of the school begins the same as any other demolition as due to Health And Safety regualtions you need to survey the school for dangerous substances and provide a safe working environment for the workers.The same was of course true for the demoiltion phase of the school."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={DG2Sm}
              lgimage={DG2Lg}
              name="Demolition Images from the school "
              position={{
                color: "info",
                label: "All lights, and small items removed including the windows. ",
              }}
              description="Things move swiftly on with the severance of mains power gas and utilities serving the old site it is safe to remove  or detroy internal elements of the building, this is the first phase. Small fittings from the school are removed and these days a fair proportion of the school is recycled and needs to be to be efficent and meet certain tagets set by companies for The Green Recycling revolution.<br/> <br/>
              
              Any empty building due to be demolished will have redundant furniture inside and it all needs to be removed by hand as you cansee if the first two images. Behind the safety barriers all the workers remove light items but dependant on the survey you can only go so far.    "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={DG3Sm}
              lgimage={DG3Lg}
              name="Demolition Images from the school "
              position={{ color: "info", label: "Heavy Demolition begins, roof and walls." }}
              description="In this image it would be too late to say the Asbestos word but a key removal factor in the demolition process these days as building built in the 50's and though 70's were big users of Asbestos. The problem being is that Asbetsosis Carcegenic to humans and in powder form can lead on to breating difficulties later on in life. C OF E was insulated in the roof spaces and in some cases the roof lining inside a fiberglass fabric roof covering.<br/> <br/>
              
              Sadly Asbestos was widely used in the building industry and it's deadly effects weren't understood until later it ewas a great insulator and was resisant to fire at  very high temperatures. The removal process for demoltions is fairly simple, remove it. Sounds easy yes , no sadly you need to seal the room to an airtight compartment and literlly hover scrub and remove every ounce before proper demolition can begin."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={DG4Sm}
              lgimage={DG4Lg}
              name="Demolition Images from the school "
              position={{ color: "info", label: "Demolition progresses to the other blocks." }}
              description="Although C Of E Middle was a stare of the art school and ideed a purpose built school specifically for the students and staff needs the Asbestos made demolition more complex. After the Asbestos is removed the workers who have full body suits to remove it can withdraw the air sealed bubble and let the workers finsh the site clearence. Te picture shows how simple the building was in its constructiion.<br/> <br/>
              
              Using a steel frmework for the roof and to bridge gaps the school had a double skin of outer brick and mortar and an inner of celcon bricks for insulation with a plaster board interior for the inner surface. the roof was made of a mixture of heavy ply and fiberglass roof coating forming the outer boundary covered by a roofing sheets to waterproof the site."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={DG5Sm}
              lgimage={DG5Lg}
              name="Demolition Images from the school "
              position={{
                color: "info",
                label: "Nearly down and almost complete apart from the hall corridor.",
              }}
              description="As previously mentioned the demeoliton phase of the school clears the site and recycles items such as steel and brink to be used as either for recycling the steel for reuse and the rubble hence the walls are used for hardcore rubble. On the Carisbrooke site the rubble was crused onsite using a machine to crush ot to it's desired widths and then shipped off either to new customers or held at a depot for reuse at a later date. Indeed on the C Of E site the site was relatively small and hence the loads were seperated by a diiger into recycling piles and sent to be crushed or respectively recycled off site.<br/> <br/>
              
              The roofing material is not something that can be reused and is then added to a seperate pile of waste that cnnot be used again and is land filled. As you can see in the picture the digger drags the disposal bin around to be able to drag and drop the waste into ti's respective container hence speeding up the process."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={DG6Sm}
              lgimage={DG6Lg}
              name="Demolition Images from the school "
              position={{
                color: "info",
                label: "All valueables removed from the school, including the music room window",
              }}
              description="One the danergous substances and the Asbestos have been removed the process is fairly simple the digger driver using much skill (which I witnessed) moved from area to area according to a pre agreed plan. It is usually remove the roof and seperate out the roofing cover the wood and the steel supports and place them into their respective bins and the slowly bring down the walls.<br/> <br/>
              
              These days nothing is siimple and with the diggers come watchmen to see help and monitor the progress of the drivers to help remove if an when possible assist. It's the world we live in today and Health And Saftey has much moroved the out comes for manual workers. I watched the drivers removed roof beams shake them and split it all down to it's respective materials which was a feat in it's self.   "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={DG7Sm}
              lgimage={DG7Lg}
              name="Demolition Images from the school "
              position={{ color: "info", label: "Piles of rubble awaiting removal from the site." }}
              description="As you can see while one person works on one part of the site others are keenly working on others. Sire sfatey has come along way since the eigities and since the site was due for a full clearence the power was disconnected at the box in the street or the power was cut to the entire propert and isolated in a waterproof storage box depedant on the sites redevelopment. Typically cutting the services is essential to the saftey of the workers and ad this site was for a full clearence this is exactly what was done.  "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={DG8Sm}
              lgimage={DG8Lg}
              name="Demolition Images from the school "
              position={{ color: "info", label: "Demolition School Images" }}
              description="Heavy equiptment on site has been a safety and a  effiency oint for the business who were in charge of the demolition and the eventual redevelopment of the site. As with all things chain of custody is vitally important and the school was just another assignment. Some of you who may rememeber the reunion and the final farewell to C oF E Middle (Christ The King Lower Campus) was cancelled from a friday to a Wednesday and this was due to the contractors eihter moivng forward the date of the handover or another failure of communication on the logisitcs front. This lead to the event being moved and very poor number s being able to make it with lots of annoyance amoung ex students and staff.<br/> <br/>
              
              This is because it is all a contract and indeed once the agremment between Christ The King and the developer Sir Robert Mc Alpine  was agreed it became the property of Mc Alpine and all keys and acces to the former school site are revoked until the site is completed and handed back over to the school once again. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={DG9Sm}
              lgimage={DG9Lg}
              name="New materials arrive on site for the redevelopment process. "
              position={{
                color: "info",
                label: "New materials arrive on site for the redevelopment process.",
              }}
              description="There are a couple of ways to demolish a site belive it or not, where you have a pland and where you don't. The first is a plan to redevelop the site which happened at C of E where the site was to be cleared and the site has a preagreed future use. To this end not only was the school demolished all of the footing for the school were removed foundation, underground services and it was all relaid as per the agreement in the planning proceess. <br/> <br/>
              
              As seemed obvious to all the students who passed through the school over the years the school cut into the hill via the use of the supporting playground steps and to make the car park that was to sit on the site of the old school we need to levek the land.<br/> <br/>
              
              Yes your correct the school sits on hill but the ground had to be made up to fill in the old site with new hardcore rubble and compacted time and time again to provide a firm foundation for the new car park. I watched lorry after lorry approach unload and you can see the stacks of new rubble on site after all elements of the school were removed.     "
            />
          </MKBox>
        </Grid>
        <Grid container mt="30px">
          <Grid item xs={12} md={9} sx={{ mb: 6 }} mt={10}>
            <MKTypography variant="h3" color="white">
              Near complete removal of the school buildings and foundations
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Close up of what remains of the buildings
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={DG10Sm}
              lgimage={DG10Lg}
              name="Total decimation of the site "
              position={{ color: "info", label: "Nothing but rubble left." }}
              description=" The school was literally raised to the ground and more but this was all part of the contract and indeed has been a part of the Sir Robert McAlpine portfolio of work which they do. You can see a worker surveying through the rubble looking for materials other thn brick to be removed into their respective piles for the enivetable recycling process.<br/> <br/>
              
              Shortly after taking this image the diggers moved in and dragging their recyling bins strted collecting the blocks and brick and neatly stacking them ready for removal. As seen in the following picture they were all stored and delivered at the exit of the school site occupying space which would once have been Mr Hawes classrooms and the Science block. "
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1} mt={10}>
            <HorizontalTeamCard2
              smimage={DG11Sm}
              lgimage={DG11Lg}
              name="Total destruction and awaiting more materials for comencement of work."
              position={{
                color: "info",
                label: "A selection of old and new, school is out forever.",
              }}
              description="The Term school is out forever will never be more true than the conclusion of this section as the school wasn't just removed it was obliterated. Little traces of the buildings has been pretty effectively erased including the foundations or footings as well as all the pipework and utility lines too. The redevelopment of the site was one of intial removal and then the ground was leveled to match the previous undisturbed hillside match and then the site was mached with the incline of the road and the car park layed out as a flat surface with a gradual decline on the entrance towards Carisbrooke High School end with the gradual exit matching the road level surface on the original entrance of the old school being used as a bus exit (although this has been widened ) the actual school car park has used the exit for the old school as the entrance for the new car park as well as the exit as this is used for staff and visitor parking to Christ The King only.
               "
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default DemolitionGallery;
