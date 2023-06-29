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
            route: "/pages/headteachers",
            component: <HeadTeachers />,
          },

          {
            name: "Deputy Head Teachers",
            route: "/pages/teachers/dhTeachers",
            component: <DhTeachers />,
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
            route: "/pages/teachingstaff/allteachers",
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
            route: "/pages/auxstaff/caretakers1",
            component: <Caretakers1 />,
          },
          {
            name: "Dinner Ladies",
            route: "/pages/auxstaff/dinnerladies1",
            component: <DinnerLadies1 />,
          },
          {
            name: "Dinner Ladies",
            route: "/pages/auxstaff/dinnerladies2",
            component: <DinnerLadies2 />,
          },
          {
            name: "Kitchen Staff",
            route: "/pages/auxstaff/kitchenstaff1",
            component: <KitchenStaff1 />,
          },
          {
            name: "Kitchen Staff",
            route: "/pages/auxstaff/kitchenstaff2",
            component: <KitchenStaff2 />,
          },
          {
            name: "Library Staff",
            route: "/pages/auxstaff/librarystaff1",
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
            route: "/pages/subjects/science",
            component: <Science />,
          },
          {
            name: "English Class",
            route: "/pages/subjects/english",
            component: <English />,
          },
          {
            name: "Maths Class",
            route: "/pages/subjects/maths",
            component: <Maths />,
          },
          {
            name: "Physical Education",
            route: "/pages/subjects/physicaleducation",
            component: <PE />,
          },
          {
            name: "Music Class",
            route: "/pages/subjects/music",
            component: <Music />,
          },
          {
            name: "C.D.T Class",
            route: "/pages/subjects/woodwork",
            component: <WoodWork />,
          },
          {
            name: "Domestic Science",
            route: "/pages/subjects/domesticscience",
            component: <DomesticScience />,
          },
          {
            name: "Art Class",
            route: "/pages/subjects/art",
            component: <Art />,
          },
          {
            name: "Religious Education Class",
            route: "/pages/subjects/religiouseducation",
            component: <ReligiousEducation />,
          },
          {
            name: "French Class",
            route: "/pages/subjects/French",
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
            route: "/pages/trips/singleton",
            component: <Singleton />,
          },
          {
            name: "Totland Trip",
            route: "/pages/trips/totland",
            component: <Totland />,
          },
          {
            name: "Malham Trip",
            route: "/pages/trips/malham",
            component: <Malham />,
          },
          {
            name: "Poole In Dorset Adventure Center Trip",
            route: "/pages/trips/poole",
            component: <Poole />,
          },
          {
            name: "Carisbrooke Castle Trips",
            route: "/pages/trips/carisbrooke",
            component: <Carisbrooke />,
          },
          {
            name: "Newport Roman Villa Trips",
            route: "/pages/trips/romanvilla",
            component: <RomanVilla />,
          },
          {
            name: "Apollo Theatre Trips",
            route: "/pages/trips/apollo",
            component: <Apollo />,
          },
          {
            name: " Brading Trips",
            route: "/pages/trips/bradingandvarious",
            component: <BradingandVarious />,
          },
          {
            name: "Osbourne House Trips",
            route: "/pages/trips/osbournehouse",
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
            route: "/pages/teachingstaff/allteachers",
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
            route: "/pages/computer1",
            component: <Computer1 />,
          },
          {
            name: "A row of BBC Computers",
            route: "/pages/computer2",
            component: <Computer2 />,
          },
          {
            name: "New And Updated Keyboards",
            route: "/pages/computer3",
            component: <Computer3 />,
          },
          {
            name: "Floopy Disc Revolution",
            route: "/pages/computer4",
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
            route: "/pages/attention1",
            component: <Attention1 />,
          },
          {
            name: "The Closing Tragedy",
            route: "/pages/attention2",
            component: <Attention2 />,
          },
          {
            name: "Marvels Build Into The School",
            route: "/pages/attention3",
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
            route: "/pages/templates/firealarms/schoolroutine",
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
            route: "/pages/templates/firealarms/firealarm1",
            component: <FireAlarm1 />,
          },
          {
            name: "HomeworkDiary",
            route: "/pages/templates/firealarms/homework",
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
        route: "/pages/maps",
        component: <Maps />,
      },
      {
        name: "School Maps original Map",
        route: "/pages/maps1",
        component: <Maps1 />,
      },
      {
        name: "School Maps plain map",
        route: "/pages/maps2",
        component: <Maps2 />,
      },
      {
        name: "School Maps Christ The King",
        route: "/pages/maps3",
        component: <Maps3 />,
      },
      {
        name: "School Maps Recreation of final map",
        route: "/pages/maps4",
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
        route: "/pages/historic",
        component: <Historic />,
      },
      {
        name: "Historic School During further Redevolpment",
        route: "/pages/historic1",
        component: <Historic1 />,
      },
      {
        name: "Historic School View Overlaid",
        route: "/pages/historic2",
        component: <Historic2 />,
      },
      {
        name: "Historic School View Overlaid",
        route: "/pages/historic3",
        component: <Historic3 />,
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
        route: "/pages/earlyschoolimages",
        component: <EarlyschoolImages />,
      },
      {
        name: "Miss Forer Germany Visit",
        route: "/pages/missforergermany",
        component: <MissForerGermany />,
      },
      {
        name: "Around The School, Performances",
        route: "/pages/aroundtheschoolperformances",
        component: <AroundTheSchoolPerformances />,
      },
      {
        name: "School Trips Malham(Miss Forer's Collection)",
        route: "/pages/schooltripsmalhamf",
        component: <SchoolTripsMalhamF />,
      },
      {
        name: "School Trips Island (Miss Forer's Collection)",
        route: "/pages/schooltripsgallery",
        component: <SchoolTripsGallery />,
      },
      {
        name: "Singleton Trips (Mr Felton's Collection)",
        route: "/pages/singletongallery",
        component: <SingletonGallery />,
      },
      {
        name: "Malham Trips (Mr Felton's Collection 1985-1990)",
        route: "/pages/schoolmalhammrf1",
        component: <SchoolMalhamMRF1 />,
      },
      {
        name: "Mr Feltons Collection 1990 0nwards",
        route: "/pages/schoolmalhammrf2",
        component: <SchoolMalhamMRF2 />,
      },
      {
        name: "Various Images of the School",
        route: "/pages/variousgallery",
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
        route: "/pages/demolitiongallery",
        component: <DemolitionGallery />,
      },
      {
        name: "Rebuliding On The School Site",
        route: "/pages/rebuildinggallery",
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
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "contact us",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          {
            name: "author",
            route: "/pages/landing-pages/author",
            component: <Author />,
          },
        ],
      },
    ],
  },
];

export default routes;
