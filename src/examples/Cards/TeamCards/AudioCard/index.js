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

import ReactAudioPlayer from "react-audio-player";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import ModalImage from "react-modal-image-responsive";

import parse from "html-react-parser";

function AudioCard({ smimage, lgimage, position, subheading, description, audiofile }) {
  return (
    <Card sx={{ mt: 8 }}>
      <Grid container>
        <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
          <MKBox width="100%" pt={2} pb={1} px={2}>
            <ModalImage small={smimage} large={lgimage} />
            {/* <MKBox
              component="img"
              src={image}
              alt={name}
              width="100%"
              borderRadius="md"
              shadow="lg"
            /> */}
          </MKBox>
        </Grid>
        <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
          <MKBox pt={{ xs: 2, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
            <MKTypography variant="h5">{name}</MKTypography>
            <MKTypography variant="h6" color={position.color} mb={5}>
              {position.label}
            </MKTypography>
            <MKTypography variant="h6" color={position.color} mb={5}>
              {subheading}
            </MKTypography>
            <MKTypography variant="body2" color="text">
              <ReactAudioPlayer src={audiofile} controls />
              <br />
              <br />
              {parse(description)}
            </MKTypography>
          </MKBox>
        </Grid>
      </Grid>
    </Card>
  );
}

// Typechecking props for the AudioCard
AudioCard.propTypes = {
  smimage: PropTypes.string.isRequired,
  lgimage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  audiofile: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  position: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,

  description: PropTypes.string.isRequired,
};

export default AudioCard;
