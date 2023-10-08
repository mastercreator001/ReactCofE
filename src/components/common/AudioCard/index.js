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
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import ModalImage from "react-modal-image-responsive";

import parse from "html-react-parser";

function AudioCard({ smimage, lgimage, position, subheading, description, audiofile }) {
  return (
    <Grid container item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
      <MKTypography variant="h6" color={position.color} mb={5}>
        {subheading}
      </MKTypography>
      <Grid item xs={12} md={12} lg={12} sx={{ mt: -6 }}>
        <MKBox width="100%" pt={2} pb={1} px={2}>
          <ModalImage small={smimage} large={lgimage} />
          <ReactAudioPlayer src={audiofile} controls />
        </MKBox>
        <MKTypography variant="body2" color="text">
          {parse(description)}
        </MKTypography>
      </Grid>
    </Grid>
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
