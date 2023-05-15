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

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

import harrisonImage from "../../../../assets/images/headTeachers/harrison.jpg";
import feltonImage from "../../../../assets/images/headTeachers/feltonimg.jpg";

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
        name: "Deputy Heads",
        route: "/sections/page-sections/features",
      },
      {
        image: `${imagesPrefix}/pricing.jpg`,
        name: "Teaching Staff",
        route: "/sections/page-sections/features",
      },
      {
        image: `${imagesPrefix}/headers.jpg`,
        name: "Teaching Staff",
        route: "/sections/page-sections/page-headers",
      },
      {
        image: `${imagesPrefix}/headers.jpg`,
        name: "Caretakers",
        route: "/sections/page-sections/page-headers",
      },
      {
        image: `${imagesPrefix}/headers.jpg`,
        name: "Dinner ladies",
        route: "/sections/page-sections/page-headers",
      },
      {
        image: `${imagesPrefix}/headers.jpg`,
        name: "Kitchen Staff 1",
        route: "/sections/page-sections/page-headers",
      },
      {
        image: `${imagesPrefix}/headers.jpg`,
        name: "Kitchen Staff 2",
        route: "/sections/page-sections/page-headers",
      },
      {
        image: `${imagesPrefix}/headers.jpg`,
        name: "Library Staff",
        route: "/sections/page-sections/page-headers",
      },
      {
        image: `${imagesPrefix}/headers.jpg`,
        name: "English teacher Miss Forer",
        route: "/sections/page-sections/page-headers",
      },
    ],
  },
  {
    title: "Subjects held in the curriculum",
    description: "The School held subjects for ten subjects",
    items: [
      {
        image: `${imagesPrefix}/navbars.jpg`,
        name: "Science",
        route: "/sections/navigation/navbars",
      },
      {
        image: `${imagesPrefix}/nav-tabs.jpg`,
        name: "Maths",
        route: "/sections/navigation/nav-tabs",
      },
      {
        image: `${imagesPrefix}/pagination.jpg`,
        name: "English",
        route: "/sections/navigation/pagination",
      },
      {
        image: `${imagesPrefix}/pagination.jpg`,
        name: "Physical Education",
        route: "/sections/navigation/pagination",
      },
      {
        image: `${imagesPrefix}/pagination.jpg`,
        name: "Music",
        route: "/sections/navigation/pagination",
      },
      {
        image: `${imagesPrefix}/pagination.jpg`,
        name: "Wood Work",
        route: "/sections/navigation/pagination",
      },
      {
        image: `${imagesPrefix}/pagination.jpg`,
        name: "Domestic Science",
        route: "/sections/navigation/pagination",
      },
      {
        image: `${imagesPrefix}/pagination.jpg`,
        name: "Art",
        route: "/sections/navigation/pagination",
      },
      {
        image: `${imagesPrefix}/pagination.jpg`,
        name: "Religious Education",
        route: "/sections/navigation/pagination",
      },
      {
        image: `${imagesPrefix}/pagination.jpg`,
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
        image: `${imagesPrefix}/pagination.jpg`,
        name: "A reworked Svg map of the school. ",
        route: "/sections/navigation/pagination",
      },
      {
        image: `${imagesPrefix}/pagination.jpg`,
        name: "Original map of the school pre opening.",
        route: "/sections/navigation/pagination",
      },
      {
        image: `${imagesPrefix}/pagination.jpg`,
        name: "Opening Pamphlet hand drawn map of the school.",
        route: "/sections/navigation/pagination",
      },
      {
        image: `${imagesPrefix}/pagination.jpg`,
        name: "A final updated map of the school, converted from Trinity Middle School to Christ The King Lower Campus. Final map of the layout",
        route: "/sections/navigation/pagination",
      },
    ],
  },
  {
    title: "Historic School Views",
    description:
      "The school from the air showing the school in it's original form and after denolition.",
    items: [
      {
        image: `${imagesPrefix}/pagination.jpg`,
        name: "Image of the school in full operation. ",
        route: "/sections/navigation/pagination",
      },
      {
        image: `${imagesPrefix}/pagination.jpg`,
        name: "A image from the air during the demolition process. ",
        route: "/sections/navigation/pagination",
      },
      {
        image: `${imagesPrefix}/pagination.jpg`,
        name: "A image of the school demolished overlaid with outline of the original. ",
        route: "/sections/navigation/pagination",
      },
    ],
  },
  {
    title: "Computer Programming",
    description:
      "Cutting Edge BBC Computers were used at the school and it was at the very most sospistcated type available to schools at the time.",
    items: [
      {
        image: `${imagesPrefix}/alerts.jpg`,
        name: "BBC computers, does anyone remember them and what we played",
        route: "/sections/attention-catchers/alerts",
      },
      {
        image: `${imagesPrefix}/toasts.jpg`,
        name: "Seems familur to everyone",
        route: "/sections/attention-catchers/alerts",
      },
      {
        image: `${imagesPrefix}/popovers.jpg`,
        name: "A more advanced set up",
        route: "/sections/attention-catchers/tooltips-popovers",
      },
      {
        image: `${imagesPrefix}/modals.jpg`,
        name: "Floopy discs cutting edge at the time.",
        route: "/sections/attention-catchers/modals",
      },
    ],
  },
  {
    title: "Attention Catching Articles",
    description: "80+ carefully crafted small elements that come with multiple colors and shapes",
    items: [
      {
        image: `${imagesPrefix}/buttons.jpg`,
        name: "The story behind the music room",
        description: "Some Important articles you may have missed.",
        route: "/sections/elements/buttons",
      },
      {
        image: `${imagesPrefix}/avatars.jpg`,
        name: "The Closing Tragedy",
        route: "/sections/elements/avatars",
      },
      {
        image: `${imagesPrefix}/dropdowns.jpg`,
        name: "Marvels within the school",
        route: "/sections/elements/dropdowns",
      },
    ],
  },
  {
    title: "School Trips Year 1-4 or 8-11",
    description:
      "Certain Trips became a stape of school life, Carisbrooke Castle Totland or Malham.",
    items: [
      {
        image: `${imagesPrefix}/switch.jpg`,
        name: "1st Years Singleton trip.",
        route: "/sections/elements/toggles",
      },
      {
        image: `${imagesPrefix}/social-buttons.jpg`,
        name: "2nd years Totland YMCA Hostel.",
        route: "/sections/elements/breadcrumbs",
      },
      {
        image: `${imagesPrefix}/breadcrumbs.jpg`,
        name: "3rd years Malham Yorkshire (HighField House).",
        route: "/sections/elements/breadcrumbs",
      },
      {
        image: `${imagesPrefix}/badges.jpg`,
        name: "4th years Poole in Dorset Adveture Center.",
        route: "/sections/elements/badges",
      },
      {
        image: `${imagesPrefix}/progress.jpg`,
        name: "Carisbrooke Castle, mutiple trips.",
        route: "/sections/elements/progress-bars",
      },
      {
        image: `${imagesPrefix}/tables.jpg`,
        name: "Newport Roman Villa trips",
        route: "/sections/elements/breadcrumbs",
      },
      {
        image: `${imagesPrefix}/typography.jpg`,
        name: "Apollo Theatre in Newport.",
        route: "/sections/elements/typography",
      },
      {
        image: `${imagesPrefix}/typography.jpg`,
        name: "Osbourne House.",
        route: "/sections/elements/typography",
      },
      {
        image: `${imagesPrefix}/typography.jpg`,
        name: "Various Trips out to Brading and across the Island.",
        route: "/sections/elements/typography",
      },
    ],
  },
];
