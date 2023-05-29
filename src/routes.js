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
import Teachers from "pages/Templates/Teachers/Team";
import Science from "pages/Templates/Subjects/Science";
import DhTeachers from "pages/Templates/Teachers/DhTeachers";
import Maps from "pages/Templates/Maps/Maps";
import Historic from "pages/Templates/Historic/Historic";
import Historic1 from "pages/Templates/Historic/Historic1";
import Historic2 from "pages/Templates/Historic/Historic2";
import Historic3 from "pages/Templates/Historic/Historic3";
import Attention from "pages/Templates/Attention/Attention";
import Trips from "pages/Templates/Trips/Trips";
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
// Sections
import PageHeaders from "layouts/sections/page-sections/page-headers";
import Features from "layouts/sections/page-sections/featuers";
import Navbars from "layouts/sections/navigation/navbars";
import NavTabs from "layouts/sections/navigation/nav-tabs";
import Pagination from "layouts/sections/navigation/pagination";
import Inputs from "layouts/sections/input-areas/inputs";
import Forms from "layouts/sections/input-areas/forms";
import Alerts from "layouts/sections/attention-catchers/alerts";
import Modals from "layouts/sections/attention-catchers/modals";
import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";

//import Avatars from "layouts/sections/elements/avatars";
//import Badges from "layouts/sections/elements/badges";
import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
import Buttons from "layouts/sections/elements/buttons";
import Dropdowns from "layouts/sections/elements/dropdowns";
import ProgressBars from "layouts/sections/elements/progress-bars";
import Toggles from "layouts/sections/elements/toggles";
import Typography from "layouts/sections/elements/typography";
import Computer1 from "pages/Templates/Computer/Computer1";
import Computer2 from "pages/Templates/Computer/Computer2";
import Computer3 from "pages/Templates/Computer/Computer3";
import Computer4 from "pages/Templates/Computer/Computer4";
import English from "pages/Templates/Subjects/English";
import Maths from "pages/Templates/Subjects/Maths";

const routes = [
  {
    name: "pages",
    icon: <Icon>dashboard</Icon>,
    columns: 2,
    rowsPerColumn: 4,
    collapse: [
      {
        name: " Nav Pages",
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
  {
    name: "sections",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "School Staff",
        description: "See all sections",
        dropdown: true,
        collapse: [
          {
            name: "Head Teachers",
            route: "/pages/teachers",
            component: <Teachers />,
          },

          {
            name: "Deputy Head Teachers",
            route: "/pages/teachers/dhTeachers",
            component: <DhTeachers />,
          },
          {
            name: "Teaching Staff",
            route: "/pages/teachingstaff/allteachers",
            component: <AllTeachers />,
          },
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
          {
            name: "History",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "School Maps",
            route: "/sections/page-sections/features",
            component: <Features />,
          },
          {
            name: "Gallery",
            route: "/sections/page-sections/features",
            component: <Features />,
          },
          {
            name: "Demolition",
            route: "/sections/page-sections/features",
            component: <Features />,
          },
        ],
      },
      {
        name: "Docs",
        description: "See all navigations",
        dropdown: true,
        collapse: [
          {
            name: "School Subjects",
            route: "/pages/subjects/science",
            component: <Science />,
          },
          {
            name: "School Subjects",
            route: "/pages/subjects/english",
            component: <English />,
          },
          {
            name: "School Subjects",
            route: "/pages/subjects/maths",
            component: <Maths />,
          },
          {
            name: "School Maps",
            route: "/pages/maps",
            component: <Maps />,
          },
          {
            name: "School Maps",
            route: "/pages/maps1",
            component: <Maps1 />,
          },
          {
            name: "School Maps",
            route: "/pages/maps2",
            component: <Maps2 />,
          },
          {
            name: "School Maps",
            route: "/pages/maps3",
            component: <Maps3 />,
          },
          {
            name: "School Maps",
            route: "/pages/maps4",
            component: <Maps4 />,
          },
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
          {
            name: "Computer Programming",
            route: "/pages/computer1",
            component: <Computer1 />,
          },
          {
            name: "Computer Programming",
            route: "/pages/computer2",
            component: <Computer2 />,
          },
          {
            name: "Computer Programming",
            route: "/pages/computer3",
            component: <Computer3 />,
          },
          {
            name: "Computer Programming",
            route: "/pages/computer4",
            component: <Computer4 />,
          },
          {
            name: "Attention Catching Articles",
            route: "/pages/attention",
            component: <Attention />,
          },
          {
            name: "School Trips",
            route: "/pages/trips",
            component: <Trips />,
          },
          {
            name: "School Documents",
            route: "/sections/navigation/navbars",
            component: <Navbars />,
          },
          {
            name: "The School Day",
            name1: "School Routines, lunch Breaktimes",
            route: "/sections/navigation/nav-tabs",
            component: <NavTabs />,
          },
          {
            name: "Fire Alarms",
            route: "/sections/navigation/pagination",
            component: <Pagination />,
          },
        ],
      },
      {
        name: "teachers",
        description: "See all input areas",
        dropdown: true,
        collapse: [
          {
            name: "inputs",
            route: "/sections/input-areas/inputs",
            component: <Inputs />,
          },
          {
            name: "forms",
            route: "/sections/input-areas/forms",
            component: <Forms />,
          },
        ],
      },
      {
        name: "attention catchers",
        description: "See all examples",
        dropdown: true,
        collapse: [
          {
            name: "alerts",
            route: "/sections/attention-catchers/alerts",
            component: <Alerts />,
          },
          {
            name: "modals",
            route: "/sections/attention-catchers/modals",
            component: <Modals />,
          },
          {
            name: "tooltips & popovers",
            route: "/sections/attention-catchers/tooltips-popovers",
            component: <TooltipsPopovers />,
          },
        ],
      },
      {
        name: "Maps",
        description: "See school maps in developmet",
        dropdown: true,
        collapse: [
          {
            name: "avatars",
            route: "/pages/maps",
            component: <Maps />,
          },
          {
            name: "badges",
            route: "/pages/maps/maps1",
            component: <Maps1 />,
          },
          {
            name: "breadcrumbs",
            route: "/sections/elements/breadcrumbs",
            component: <BreadcrumbsEl />,
          },
          {
            name: "buttons",
            route: "/sections/elements/buttons",
            component: <Buttons />,
          },
          {
            name: "dropdowns",
            route: "/sections/elements/dropdowns",
            component: <Dropdowns />,
          },
          {
            name: "progress bars",
            route: "/sections/elements/progress-bars",
            component: <ProgressBars />,
          },
          {
            name: "toggles",
            route: "/sections/elements/toggles",
            component: <Toggles />,
          },
          {
            name: "typography",
            route: "/sections/elements/typography",
            component: <Typography />,
          },
        ],
      },
    ],
  },
  {
    name: "docs",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "getting started",
        description: "All about overview, quick start, license and contents",
        href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
      },
      {
        name: "foundation",
        description: "See our colors, icons and typography",
        href: "https://www.creative-tim.com/learning-lab/react/colors/material-kit/",
      },
      {
        name: "components",
        description: "Explore our collection of fully designed components",
        href: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
      },
      {
        name: "plugins",
        description: "Check how you can integrate our plugins",
        href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/",
      },
    ],
  },
];

export default routes;
