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

//const imagesPrefix =
"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

import harrisonImage from "../../../../assets/images/headTeachers/harrison.jpg";
import feltonImage from "../../../../assets/images/headTeachers/feltonimg.jpg";
import teachersGroup from "../../../../assets/images/Allteachers/teachersGroup.jpg";
import teachingStaff from "../../../../assets/images/Allteachers/teachingStaff.jpg";
import careTaker from "../../../../assets/images/Auxstaff/careTaker.png";
import kitchenStaff1 from "../../../../assets/images/Auxstaff/kitchenStaff1.jpg";
import kitchenStaff2 from "../../../../assets/images/Auxstaff/kitchenStaff2.jpg";
import mrsTout from "../../../../assets/images/Auxstaff/mrsTout.png";
import libraryStaff from "../../../../assets/images/Auxstaff/libraryStaff.jpg";
import mrsSmith from "../../../../assets/images/Auxstaff/mrsSmith.jpg";
//import frenchTeacher from "../../../../assets/images/Dhteachers/frenchTeacher.jpg";
import science from "../../../../assets/images/logos/science.png";
import maths from "../../../../assets/images/logos/maths.png";
import english from "../../../../assets/images/logos/english.png";
import physicalEducation from "../../../../assets/images/logos/physicalEducation.png";
import music from "../../../../assets/images/logos/music.png";
import woodwork from "../../../../assets/images/logos/woodwork.png";
import artClass from "../../../../assets/images/logos/artClass.png";
import cookingclass from "../../../../assets/images/logos/cooking class.png";
import religiousEducation from "../../../../assets/images/logos/religiousEducation.png";
import frenchClass from "../../../../assets/images/logos/frenchClass.png";
import advancedMap from "../../../../assets/images/school maps/advancedMap.jpg";
import bookMap from "../../../../assets/images/school maps/bookMap.jpg";
import finalMapCTK from "../../../../assets/images/school maps/finalMapCTK.png";
import finalMapCTK1 from "../../../../assets/images/school maps/finalMapCTK1.png";
import finalMapCTK2 from "../../../../assets/images/school maps/finalMapCTK2.png";
import schoolPlanfinal from "../../../../assets/images/school maps/schoolPlanfinal.png";
import bbcComputer1 from "../../../../assets/images/ComputerImages/bbcComputer1.jpg";
import bbcComputer2 from "../../../../assets/images/ComputerImages/bbcComputer2.png";
import bbcComputer3 from "../../../../assets/images/ComputerImages/bbcComputer3.png";
import floopyDisc from "../../../../assets/images/ComputerImages/floopyDisc.png";
import schoolopening from "../../../../assets/images/Attentioncatchers/schoolopening.jpg";
import trinitymiddlefire22 from "../../../../assets/images/Attentioncatchers/trinitymiddlefire22.jpg";
import octogonWindow from "../../../../assets/images/Attentioncatchers/octogonWindow.jpg";
import weald from "../../../../assets/images/schoolTrips/weald.jpg";
import totlandYouthhostel from "../../../../assets/images/schoolTrips/totlandYouthhostel.png";
import newfieldHall from "../../../../assets/images/schoolTrips/newfieldHall.png";
import pooleFlag from "../../../../assets/images/schoolTrips/pooleFlag.png";
import carisbrookeCastle from "../../../../assets/images/schoolTrips/carisbrookeCastle.png";
import romanVillanewport from "../../../../assets/images/schoolTrips/romanVillanewport.png";
import tripsOut from "../../../../assets/images/schoolTrips/tripsOut.jpg";
import osbourneHouse from "../../../../assets/images/schoolTrips/osbourneHouse.png";
import apolloTheatre from "../../../../assets/images/schoolTrips/apolloTheatre.png";
import schoolmapcurrentoverview from "../../../../assets/images/historicSchool/schoolmapcurrentoverview.png";
import schoolhistorictotaloverview1 from "../../../../assets/images/historicSchool/schoolhistorictotaloverview1.png";
import overhead2015 from "../../../../assets/images/historicSchool/overhead2015.png";
import Overview1 from "../../../../assets/images/historicSchool/Overview1.png";
import schoolClosing4 from "../../../../assets/images/historicSchool/schoolClosing4.png";
import cofeoverviewduring from "../../../../assets/images/historicSchool/cofeoverviewduring.png";

export default [
  {
    title: "Staff Heads/teachers&support staff",
    description: "A page of senior staff members support staff and more ",
    items: [
      {
        image: harrisonImage,
        name: "Head Teachers",
        route: "/pages/teachers",
      },
      {
        image: feltonImage,
        name: "Deputy Head Teachers",
        route: "/pages/teachers/dhTeachers",
      },
      {
        image: teachersGroup,
        name: "Teaching Staff",
        route: "/pages/teachingstaff/allteachers",
      },
      {
        image: teachingStaff,
        name: "Teaching Staff",
        route: "/sections/page-sections/page-headers",
      },
      {
        image: careTaker,
        name: "Caretakers",
        route: "/pages/auxstaff/caretakers1",
      },
      {
        image: mrsSmith,
        name: "Dinner Ladies Mrs Smith",
        route: "/pages/auxstaff/dinnerladies1",
      },
      {
        image: mrsTout,
        name: "Dinner Ladies Mrs Tout ",
        route: "/pages/auxstaff/dinnerladies2",
      },
      {
        image: kitchenStaff1,
        name: "Kitchen Staff ",
        route: "/pages/auxstaff/kitchenstaff1",
      },
      {
        image: kitchenStaff2,
        name: "Kitchen Staff ",
        route: "/pages/auxstaff/kitchenstaff2",
      },
      {
        image: libraryStaff,
        name: "Library Staff",
        route: "/pages/auxstaff/librarystaff1",
      },
    ],
  },
  {
    title: "Subjects held in the curriculum",
    description: "The School held subjects for ten subjects",
    items: [
      {
        image: science,
        name: "Science",
        route: "/pages/subjects/science",
      },
      {
        image: maths,
        name: "Maths",
        route: "/pages/subjects/maths",
      },
      {
        image: english,
        name: "English",
        route: "/pages/subjects/english",
      },
      {
        image: physicalEducation,
        name: "Physical Education",
        route: "/sections/navigation/pagination",
      },
      {
        image: music,
        name: "Music",
        route: "/sections/navigation/pagination",
      },
      {
        image: woodwork,
        name: "Wood Work",
        route: "/sections/navigation/pagination",
      },
      {
        image: cookingclass,
        name: "Domestic Science",
        route: "/sections/navigation/pagination",
      },
      {
        image: artClass,
        name: "Art",
        route: "/sections/navigation/pagination",
      },
      {
        image: religiousEducation,
        name: "Religious Education",
        route: "/sections/navigation/pagination",
      },
      {
        image: frenchClass,
        name: "French",
        route: "/sections/navigation/pagination",
      },
    ],
  },
  {
    title: "School Maps",
    description:
      "A selection of maps from the schools development from the design phase through to the schools closure.",
    items: [
      {
        image: schoolPlanfinal,
        name: "A reworked Svg map of the school. ",
        route: "/pages/maps",
      },
      {
        image: advancedMap,
        name: "Original map of the school pre opening.",
        route: "/pages/maps1",
      },
      {
        image: bookMap,
        name: "Opening Pamphlet hand drawn map of the school.",
        route: "/pages/maps2",
      },
      {
        image: finalMapCTK,
        name: "A final updated map of the school, converted from Trinity Middle School to Christ The King Lower Campus. Final map of the layout",
        route: "/pages/maps3",
      },
      {
        image: finalMapCTK1,
        finalMapCTK2,
        name: "A final updated map of the school, converted from Trinity Middle School to Christ The King Lower Campus. Final map of the layout",
        route: "/pages/maps4",
      },
    ],
  },
  {
    title: "Historic School Views",
    description:
      "The school from the air showing the school in it's original form and after demolition.",
    items: [
      {
        image: overhead2015,
        name: "Image of the school in full operation. ",
        route: "/pages/historic",
      },
      {
        image: cofeoverviewduring,
        name: "A image from the air during the demolition process. ",
        route: "/pages/historic1",
      },
      {
        image: Overview1,
        name: "A image of the school demolished overlaid with outline of the original. ",
        route: "/pages/historic2",
      },
      {
        image: schoolClosing4,
        name: "A image of the school demolished overlaid with outline of the original. ",
        route: "/pages/historic3",
      },
    ],
  },
  {
    title: "Computer Programming",
    description:
      "Cutting Edge BBC Computers were used at the school and it was at the very most sospistcated type available to schools at the time.",
    items: [
      {
        image: bbcComputer1,
        name: "BBC computers, does anyone remember them and what we played",
        route: "/pages/computer1",
      },
      {
        image: bbcComputer2,
        name: "Seems familur to everyone",
        route: "/pages/computer2",
      },
      {
        image: bbcComputer3,
        name: "A more advanced set up",
        route: "/pages/computer3",
      },
      {
        image: floopyDisc,
        name: "Floopy discs cutting edge at the time.",
        route: "/pages/computer4",
      },
    ],
  },
  {
    title: "Attention Catching Articles",
    description: "80+ carefully crafted small elements that come with multiple colors and shapes",
    items: [
      {
        image: schoolopening,
        name: "The story behind the music room",
        description: "Some Important articles you may have missed.",
        route: "/pages/attention",
      },
      {
        image: trinitymiddlefire22,
        name: "The Closing Tragedy",
        route: "/pages/attention",
      },
      {
        image: octogonWindow,
        name: "Marvels within the school",
        route: "/pages/attention",
      },
    ],
  },
  {
    title: "School Trips Year 1-4 or 8-11",
    description:
      "Certain Trips became a stape of school life, Carisbrooke Castle Totland or Malham.",
    items: [
      {
        image: weald,
        name: "1st Years Singleton trip.",
        route: "/pages/trips",
      },
      {
        image: totlandYouthhostel,
        name: "2nd years Totland YMCA Hostel.",
        route: "/pages/trips",
      },
      {
        image: newfieldHall,
        name: "3rd years Malham Yorkshire (HighField House).",
        route: "/pages/trips",
      },
      {
        image: pooleFlag,
        name: "4th years Poole in Dorset Adveture Center.",
        route: "/pages/trips",
      },
      {
        image: carisbrookeCastle,
        name: "Carisbrooke Castle, mutiple trips.",
        route: "/pages/trips",
      },
      {
        image: romanVillanewport,
        name: "Newport Roman Villa trips",
        route: "/pages/trips",
      },
      {
        image: apolloTheatre,
        name: "Apollo Theatre in Newport.",
        route: "/pages/trips",
      },
      {
        image: tripsOut,
        name: "Various Trips out across the Island",
        route: "/pages/trips",
      },
      {
        image: osbourneHouse,
        name: "Osbourne House.",
        route: "/pages/trips",
      },
      {
        image: apolloTheatre,
        name: "Various Trips out to Brading and across the Island.",
        route: "/pages/trips",
      },
      {
        image: schoolmapcurrentoverview,
        name: "School Back in the Eighities ",
        route: "/pages/trips",
      },
      {
        image: schoolhistorictotaloverview1,
        name: "Historic school",
        route: "/pages/trips",
      },
    ],
  },
];
