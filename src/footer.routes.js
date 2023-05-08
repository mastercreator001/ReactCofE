// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images

const date = new Date().getFullYear();

export default {
  brand: {
    name: "C Of E Production",
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/groups/172663070820628",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/creativetimofficial",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCv8hKKkRIAM2xyVyPJYJmSw",
    },
  ],
  menus: [
    {
      name: "C Of E Middle",
      items: [{ name: "about us", href: "https://www.facebook.com/groups/172663070820628" }],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "melon_man2000@hotmail.com" },
        { name: "Mastercreator001", href: "https://github.com/mastercreator001" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Mastercreator001{" "}
      <MKTypography
        component="a"
        href="https://www.facebook.com/groups/172663070820628"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Richard Creator
      </MKTypography>
      .
    </MKTypography>
  ),
};
