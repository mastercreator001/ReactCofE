/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/
// @mui material components
import Icon from "@mui/material/Icon";

// Pages

import SignIn from "pages/Templates/SignIn";
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
import HeadTeachers from "pages/Templates/Teachers/HeadTeachers";
import Science from "pages/Templates/Subjects/Science";
import DhTeachers from "pages/Templates/Teachers/DhTeachers";
import Maps from "pages/Templates/Maps/Maps";
import Historic from "pages/Templates/Historic/Historic";
import Historic1 from "pages/Templates/Historic/Historic1";
import Historic2 from "pages/Templates/Historic/Historic2";
import Historic3 from "pages/Templates/Historic/Historic3";
import Attention1 from "pages/Templates/Attention/Attention1";
import Attention2 from "pages/Templates/Attention/Attention2";
import Attention3 from "pages/Templates/Attention/Attention3";
import AllTeachers from "pages/Templates/Teachingstaff/AllTeachers";
import Maps1 from "pages/Templates/Maps/Maps1";
import DinnerLadies1 from "pages/Templates/auxStaff/DinnerLadies1";
import DinnerLadies3 from "pages/Templates/auxStaff/DinnerLadies3";
import DinnerLadies2 from "pages/Templates/auxStaff/DinnerLadies2";
import KitchenStaff1 from "pages/Templates/auxStaff/KitchenStaff1";
import KitchenStaff2 from "pages/Templates/auxStaff/KitchenStaff2";
import Caretakers1 from "pages/Templates/auxStaff/Caretakers1";
import Maps2 from "pages/Templates/Maps/Maps2";
import Maps3 from "pages/Templates/Maps/Maps3";
import Maps4 from "pages/Templates/Maps/Maps4";
import Librarystaff1 from "pages/Templates/auxStaff/Librarystaff1";
import NavTabs from "layouts/sections/navigation/nav-tabs";
import FireAlarm1 from "pages/Templates/FireAlarms/FireAlarm1";
import SchoolRoutine from "pages/Templates/FireAlarms/SchoolRoutine";
import Computer1 from "pages/Templates/Computer/Computer1";
import Computer2 from "pages/Templates/Computer/Computer2";
import Computer3 from "pages/Templates/Computer/Computer3";
import Computer4 from "pages/Templates/Computer/Computer4";
import English from "pages/Templates/Subjects/English";
import Maths from "pages/Templates/Subjects/Maths";
import PE from "pages/Templates/Subjects/PhysicalEducation";
import Music from "pages/Templates/Subjects/Music";
import WoodWork from "pages/Templates/Subjects/WoodWork";
import DomesticScience from "pages/Templates/Subjects/DomesticScience";
import Art from "pages/Templates/Subjects/Art";
import ReligiousEducation from "pages/Templates/Subjects/ReligiousEducation";
import French from "pages/Templates/Subjects/French";
import Singleton from "pages/Templates/Trips/Singleton";
import Totland from "pages/Templates/Trips/Totland";
import Malham from "pages/Templates/Trips/Malham";
import Poole from "pages/Templates/Trips/Poole";
import Carisbrooke from "pages/Templates/Trips/Carisbrooke";
import RomanVilla from "pages/Templates/Trips/RomanVilla";
import Apollo from "pages/Templates/Trips/Apollo";
import BradingandVarious from "pages/Templates/Trips/BradingandVarious";
import OsbourneHouse from "pages/Templates/Trips/OsbourneHouse";
import HomeWork from "pages/Templates/FireAlarms/HomeWork";
import EarlyschoolImages from "pages/Templates/Galleries/EarlyschoolImages";
import MissForerGermany from "pages/Templates/Galleries/MissForerGermany";
import AroundTheSchoolPerformances from "pages/Templates/Galleries/AroundTheSchoolPerformances";
import SchoolTripsMalhamF from "pages/Templates/Galleries/SchoolTripsMalhamF";
import SchoolTripsGallery from "pages/Templates/Galleries/SchoolTripsGallery";
import SingletonGallery from "pages/Templates/Galleries/SingletonGallery";
import SchoolMalhamMRF1 from "pages/Templates/Galleries/SchoolMalhamMRF1";
import SchoolMalhamMRF2 from "pages/Templates/Galleries/SchoolMalhamMRF2";
import VariousGallery from "pages/Templates/Galleries/VariousGallery";
import DemolitionGallery from "pages/Templates/Galleries/DemolitionGallery";
import RebuildingGallery from "pages/Templates/Galleries/RebuildingGallery";
//Audio Files

import MrFeltonaudio from "pages/Templates/AudioFiles/MrFeltonaudio";
import MissForeraudio from "pages/Templates/AudioFiles/MissForeraudio";
import MrsChalloneraudio from "pages/Templates/AudioFiles/MrsChalloneraudio";
import MrHawesaudio from "pages/Templates/AudioFiles/MrHawesaudio";
import MrWalkeraudio from "pages/Templates/AudioFiles/MrWalkeraudio";
import MrsColenuttaudio from "pages/Templates/AudioFiles/MrsColenuttaudio";
import MrHoughtonaudio from "pages/Templates/AudioFiles/MrHoughtonaudio";
import Randomaudio from "pages/Templates/AudioFiles/Randomaudio";
import MrsMurdochaudio from "pages/Templates/AudioFiles/MrsMurdochaudio";

//Class List Files
import Class1977 from "pages/Templates/ClassLists/Class1977";
import Class1978 from "pages/Templates/ClassLists/Class1978";
import Class1979 from "pages/Templates/ClassLists/Class1979";
import Class1980 from "pages/Templates/ClassLists/Class1980";
import Class1981 from "pages/Templates/ClassLists/Class1981";
import Class1982 from "pages/Templates/ClassLists/Class1982";
import Class1983 from "pages/Templates/ClassLists/Class1983";
import Class1984 from "pages/Templates/ClassLists/Class1984";
import Class1985 from "pages/Templates/ClassLists/Class1985";
import Class1986 from "pages/Templates/ClassLists/Class1986";
import Class1987 from "pages/Templates/ClassLists/Class1987";
import Class1988 from "pages/Templates/ClassLists/Class1988";
import Class1989 from "pages/Templates/ClassLists/Class1989";
import Class1990 from "pages/Templates/ClassLists/Class1990";

const routes = [
  {
    name: "School Sections",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "Head Teachers and Deputy Heads",
        description: "See all sections",
        dropdown: true,
        collapse: [
          {
            name: "Head Teachers",
            route: "/headteachers",
            component: <HeadTeachers />,
          },

          {
            name: "Deputy Head Teachers",
            route: "/teachers/dhTeachers",
            component: <DhTeachers />,
          },
        ],
      },
      {
        name: "account",
        collapse: [
          {
            name: "sign in",
            route: "/login",
            component: <SignIn />,
          },
        ],
      },
      {
        name: "All Teachers",
        description: "Teaching Staff, Tutors, Year Heads",
        dropdown: true,
        collapse: [
          {
            name: "Teaching Staff",
            route: "/teachingstaff/allteachers",
            component: <AllTeachers />,
          },
        ],
      },
      {
        name: "Auxillary Staff",
        description: "Caretakers, Dinner Ladies Kitchen Staff",
        dropdown: true,
        collapse: [
          {
            name: "Caretakers",
            route: "/auxstaff/caretakers1",
            component: <Caretakers1 />,
          },
          {
            name: "Dinner Ladies",
            route: "/auxstaff/dinnerladies1",
            component: <DinnerLadies1 />,
          },
          {
            name: "Dinner Ladies",
            route: "/auxstaff/dinnerladies3",
            component: <DinnerLadies3 />,
          },
          {
            name: "Dinner Ladies",
            route: "/auxstaff/dinnerladies2",
            component: <DinnerLadies2 />,
          },
          {
            name: "Kitchen Staff",
            route: "/auxstaff/kitchenstaff1",
            component: <KitchenStaff1 />,
          },
          {
            name: "Kitchen Staff",
            route: "/auxstaff/kitchenstaff2",
            component: <KitchenStaff2 />,
          },
          {
            name: "Library Staff",
            route: "/auxstaff/librarystaff1",
            component: <Librarystaff1 />,
          },
        ],
      },
      {
        name: "School Subjects",
        description: "Subjects taught at the school",
        dropdown: true,
        collapse: [
          {
            name: "Science Class",
            route: "/subjects/science",
            component: <Science />,
          },
          {
            name: "English Class",
            route: "/subjects/english",
            component: <English />,
          },
          {
            name: "Maths Class",
            route: "/subjects/maths",
            component: <Maths />,
          },
          {
            name: "Physical Education",
            route: "/subjects/physicaleducation",
            component: <PE />,
          },
          {
            name: "Music Class",
            route: "/subjects/music",
            component: <Music />,
          },
          {
            name: "C.D.T Class",
            route: "/subjects/woodwork",
            component: <WoodWork />,
          },
          {
            name: "Domestic Science",
            route: "/subjects/domesticscience",
            component: <DomesticScience />,
          },
          {
            name: "Art Class",
            route: "/subjects/art",
            component: <Art />,
          },
          {
            name: "Religious Education Class",
            route: "/subjects/religiouseducation",
            component: <ReligiousEducation />,
          },
          {
            name: "French Class",
            route: "/subjects/French",
            component: <French />,
          },
          {
            name: "The School Day",
            name1: "School Routines, lunch Breaktimes",
            route: "/sections/navigation/nav-tabs",
            component: <NavTabs />,
          },
        ],
      },
      {
        name: "School Trips ",
        description: "Singleton Totland Malham ",
        dropdown: true,
        collapse: [
          {
            name: "Singleton Trip",
            route: "/trips/singleton",
            component: <Singleton />,
          },
          {
            name: "Totland Trip",
            route: "/trips/totland",
            component: <Totland />,
          },
          {
            name: "Malham Trip",
            route: "/trips/malham",
            component: <Malham />,
          },
          {
            name: "Poole In Dorset Adventure Center Trip",
            route: "/trips/poole",
            component: <Poole />,
          },
          {
            name: "Carisbrooke Castle Trips",
            route: "/trips/carisbrooke",
            component: <Carisbrooke />,
          },
          {
            name: "Newport Roman Villa Trips",
            route: "/trips/romanvilla",
            component: <RomanVilla />,
          },
          {
            name: "Apollo Theatre Trips",
            route: "/trips/apollo",
            component: <Apollo />,
          },
          {
            name: " Brading Trips",
            route: "/trips/bradingandvarious",
            component: <BradingandVarious />,
          },
          {
            name: "Osbourne House Trips",
            route: "/trips/osbournehouse",
            component: <OsbourneHouse />,
          },
        ],
      },
      {
        name: "Demolition",
        description: "Schools Demolition",
        dropdown: true,
        collapse: [
          {
            name: "To be created",
            route: "/teachingstaff/allteachers",
            component: <AllTeachers />,
          },
        ],
      },
      {
        name: "BBC Computers",
        description: "Familur Sights",
        dropdown: true,
        collapse: [
          {
            name: "A Massive Leap Forward",
            route: "/computer1",
            component: <Computer1 />,
          },
          {
            name: "A row of BBC Computers",
            route: "/computer2",
            component: <Computer2 />,
          },
          {
            name: "New And Updated Keyboards",
            route: "/computer3",
            component: <Computer3 />,
          },
          {
            name: "Floopy Disc Revolution",
            route: "/computer4",
            component: <Computer4 />,
          },
        ],
      },

      {
        name: "Attention Catchers Articles",
        description: "Interesting Facts",
        dropdown: true,
        collapse: [
          {
            name: "The Story Behind The Music Room",
            route: "/attention1",
            component: <Attention1 />,
          },
          {
            name: "The Closing Tragedy",
            route: "/attention2",
            component: <Attention2 />,
          },
          {
            name: "Marvels Build Into The School",
            route: "/attention3",
            component: <Attention3 />,
          },
        ],
      },
      {
        name: "The School Day Routines",
        description: "Break Time Lunch Time and Home Time",
        dropdown: true,
        collapse: [
          {
            name: "The School Day",
            name1: "School Routines, lunch Breaktimes",
            route: "/firealarms/schoolroutine",
            component: <SchoolRoutine />,
          },
        ],
      },
      {
        name: "Fire Alarms",
        description: "Testing and Photos",
        dropdown: true,
        collapse: [
          {
            name: "Fire Alarms and Testing",
            route: "/firealarms/firealarm1",
            component: <FireAlarm1 />,
          },
          {
            name: "HomeworkDiary",
            route: "/firealarms/homework",
            component: <HomeWork />,
          },
        ],
      },
    ],
  },
  {
    icon: <Icon>assistant_navigation</Icon>,
    name: "Maps",
    description: "See school maps in development",
    dropdown: true,
    collapse: [
      {
        name: "School Maps Svg Recreation",
        route: "/maps",
        component: <Maps />,
      },
      {
        name: "School Maps original Map",
        route: "/maps1",
        component: <Maps1 />,
      },
      {
        name: "School Maps plain map",
        route: "/maps2",
        component: <Maps2 />,
      },
      {
        name: "School Maps Christ The King",
        route: "/maps3",
        component: <Maps3 />,
      },
      {
        name: "School Maps Recreation of final map",
        route: "/maps4",
        component: <Maps4 />,
      },
    ],
  },
  {
    icon: <Icon>article</Icon>,
    name: "Historic School Maps",
    description: "See school maps in development",
    dropdown: true,
    collapse: [
      {
        name: "Historic School View",
        route: "/historic",
        component: <Historic />,
      },
      {
        name: "Historic School During further Redevolpment",
        route: "/historic/redevolpment",
        component: <Historic1 />,
      },
      {
        name: "Historic School View Overlaid",
        route: "/historic/overlaid",
        component: <Historic2 />,
      },
      {
        name: "Historic School View Overlaid",
        route: "/historic/overlaid2",
        component: <Historic3 />,
      },
    ],
  },
  {
    icon: <Icon>burst_mode</Icon>,
    name: "Audio Gallery",
    description: "All School Audio ",
    dropdown: true,
    collapse: [
      {
        name: "Mr Felton Audio (1971-1980)",
        route: "/audio/MrFeltonaudio",
        component: <MrFeltonaudio />,
      },
      {
        name: "Miss Forer Audio",
        route: "/audio/MissForeraudio",
        component: <MissForeraudio />,
      },
      {
        name: "Mrs Murdoch Audio",
        route: "/audio/MrsMurdochaudio",
        component: <MrsMurdochaudio />,
      },
      {
        name: "Mrs Challoner Audio",
        route: "/MrsChalloneraudio",
        component: <MrsChalloneraudio />,
      },
      {
        name: "Mr Hawes Audio",
        route: "/audio/MrHawesaudio",
        component: <MrHawesaudio />,
      },
      {
        name: "Mr Walker Audio",
        route: "/audio/MrWalkeraudio",
        component: <MrWalkeraudio />,
      },
      {
        name: "Mr Houghton Audio",
        route: "/MrHoughtonaudio",
        component: <MrHoughtonaudio />,
      },
      {
        name: "Mrs Colenutt Audio",
        route: "/audio/MrsColenuttaudio",
        component: <MrsColenuttaudio />,
      },
      {
        name: "Random Audio",
        route: "/audio/Randomaudio",
        component: <Randomaudio />,
      },
    ],
  },
  {
    icon: <Icon>burst_mode</Icon>,
    name: "Class List",
    description: "1997 - 1993",
    dropdown: true,
    collapse: [
      {
        name: "Class of 1977",
        route: "/classlists/1977",
        component: <Class1977 />,
      },
      {
        name: "Class of 1978",
        route: "/classlists/1978",
        component: <Class1978 />,
      },
      {
        name: "Class of 1979",
        route: "/classlists/1979",
        component: <Class1979 />,
      },
      {
        name: "Class of 1980",
        route: "/classlists/1980",
        component: <Class1980 />,
      },
      {
        name: "Class of 1981",
        route: "/classlists/1981",
        component: <Class1981 />,
      },
      {
        name: "Class of 1982",
        route: "/classlists/1982",
        component: <Class1982 />,
      },
      {
        name: "Class of 1983",
        route: "/classlists/1983",
        component: <Class1983 />,
      },
      {
        name: "Class of 1984",
        route: "/classlists/1984",
        component: <Class1984 />,
      },
      {
        name: "Class of 1985",
        route: "/classlists/1985",
        component: <Class1985 />,
      },
      {
        name: "Class of 1986",
        route: "/classlists/1986",
        component: <Class1986 />,
      },
      {
        name: "Class of 1987",
        route: "/classlists/1987",
        component: <Class1987 />,
      },
      {
        name: "Class of 1988",
        route: "/classlists/1988",
        component: <Class1988 />,
      },
      {
        name: "Class of 1989",
        route: "/classlists/1989",
        component: <Class1989 />,
      },
      {
        name: "Class of 1990",
        route: "/classlists/1990",
        component: <Class1990 />,
      },
    ],
  },
  {
    icon: <Icon>burst_mode</Icon>,
    name: "School Gallery",
    description: "All School Images ",
    dropdown: true,
    collapse: [
      {
        name: "Early School Images (1971-1980)",
        route: "/gallery/earlyschoolimages",
        component: <EarlyschoolImages />,
      },
      {
        name: "Miss Forer Germany Visit",
        route: "/gallery/missforergermany",
        component: <MissForerGermany />,
      },
      {
        name: "Around The School, Performances",
        route: "/gallery/aroundtheschoolperformances",
        component: <AroundTheSchoolPerformances />,
      },
      {
        name: "School Trips Malham(Miss Forer's Collection)",
        route: "/gallery/schooltripsmalhamf",
        component: <SchoolTripsMalhamF />,
      },
      {
        name: "School Trips Island (Miss Forer's Collection)",
        route: "/gallery/schooltripsgallery",
        component: <SchoolTripsGallery />,
      },
      {
        name: "Singleton Trips (Mr Felton's Collection)",
        route: "/gallery/singletongallery",
        component: <SingletonGallery />,
      },
      {
        name: "Malham Trips (Mr Felton's Collection 1985-1990)",
        route: "/gallery/schoolmalhammrf1",
        component: <SchoolMalhamMRF1 />,
      },
      {
        name: "Mr Feltons Collection 1990 0nwards",
        route: "/gallery/schoolmalhammrf2",
        component: <SchoolMalhamMRF2 />,
      },
      {
        name: "Various Images of the School",
        route: "/gallery/variousgallery",
        component: <VariousGallery />,
      },
    ],
  },
  {
    icon: <Icon>building</Icon>,
    name: "School Demolition Gallery",
    description: "Schools demolition to be made ",
    dropdown: true,
    collapse: [
      {
        name: "Demolition of the School",
        route: "/demolitiongallery",
        component: <DemolitionGallery />,
      },
      {
        name: "Rebuliding On The School Site",
        route: "/rebuildinggallery",
        component: <RebuildingGallery />,
      },
    ],
  },
  {
    name: "Info Pages",
    icon: <Icon>dashboard</Icon>,
    columns: 2,
    rowsPerColumn: 4,
    collapse: [
      {
        name: " Information Pages",
        collapse: [
          {
            name: "about us",
            route: "/about-us",
            component: <AboutUs />,
          },
          {
            name: "contact us",
            route: "/contact-us",
            component: <ContactUs />,
          },
          {
            name: "author",
            route: "/author",
            component: <Author />,
          },
        ],
      },
    ],
  },
];

export default routes;
