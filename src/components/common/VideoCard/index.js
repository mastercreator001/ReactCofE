/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function VideoCard({ video, title, description, action }) {
  const cardActionStyles = {
    display: "flex",
    alignItems: "center",
    width: "max-content",
    video: "/",
    "& .material-icons, .material-icons-round,": {
      transform: `translateX(2px)`,
      transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
    },

    "&:hover .material-icons, &:focus .material-icons, &:hover .material-icons-round, &:focus .material-icons-round":
      {
        transform: `translateX(6px)`,
      },
  };

  return (
    <Card
      sx={{
        background: "white",
        boxShadow: "5",
        overflow: "visible",
      }}
    >
      {action.type === "internal" ? (
        <video src={video} controls />
      ) : (
        <MuiLink href={action.route} target="_blank" rel="noreferrer">
          <video src={video} controls />
        </MuiLink>
      )}
      <MKBox ml={1} pt={2} pb={3}>
        {action.type === "internal" ? (
          <Link to={action.route} sx={cardActionStyles}>
            <MKTypography variant="h5" gutterBottom>
              {title}
            </MKTypography>
          </Link>
        ) : (
          <MuiLink href={action.route} target="_blank" rel="noreferrer" sx={cardActionStyles}>
            <MKTypography variant="h5" gutterBottom>
              {title}
            </MKTypography>
          </MuiLink>
        )}
        <MKTypography variant="body2" component="p" color="black" mb={3}>
          {description}
        </MKTypography>
        {action.type === "internal" ? (
          <MKTypography
            component={Link}
            to={action.route}
            variant="body2"
            fontWeight="regular"
            color={action.color}
            textTransform="capitalize"
            sx={cardActionStyles}
          >
            {action.label}
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
        ) : (
          <MKTypography
            component={MuiLink}
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="body2"
            fontWeight="regular"
            color={action.color}
            textTransform="capitalize"
            sx={cardActionStyles}
          >
            {action.label}
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
        )}
      </MKBox>
    </Card>
  );
}

// Typechecking props for the videoCard
VideoCard.propTypes = {
  title: PropTypes.string.isRequired,
  video: PropTypes.Video,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal", "mp.4"]),
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "video",
      "inherit",
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "text",
    ]).isRequired,
  }).isRequired,
};

export default VideoCard;
