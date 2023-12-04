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
import DefaultNavbar from "components/common/Navbars/DefaultNavbar";
import DefaultFooter from "components/common/Footers/DefaultFooter";

// Routes
//import routes from "routes";
import footerRoutes from "footer.routes";
import routes from "routes";
// @mui material components

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/richard-McMaster.jpg";

function TermsandConditions() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="light"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <DefaultNavbar
          routes={routes}
          // action={{
          //   type: "external",
          //   route: "https://www.facebook.com/groups/172663070820628",
          // }}
          sticky
        />
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xl: 16, md: 20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Richard McMaster" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h2">Welly Road And Using Our Site.</MKTypography>
              </MKBox>
              <Grid container spacing={3} mb={3}>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    &nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    The Rules
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    &nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Fair Use Policy
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    &nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Not For Profit Use
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    &nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Our Use Of Submitted Images
                  </MKTypography>
                </Grid>
              </Grid>
              <MKTypography variant="body1" fontWeight="light" color="text">
                <h2>
                  <strong>Terms and Conditions for using our site</strong>
                </h2>
                <br />
                <p>Welcome to Welly Road!</p>
                <br />
                <p>
                  These terms and conditions outline the rules and regulations for the use of C OF E
                  Middle School (Welly Road){"'"}s Website, located at www.wellyroad.com.
                </p>
                <br></br>

                <p>
                  By accessing this website we assume you accept these terms and conditions.
                  <br></br> DO NOT continue to use Welly Road if you do not agree to take all of the
                  terms and conditions stated on this page.
                </p>
                <br></br>

                <p>
                  All Content submitted is knowingly used on the site free and may not be used
                  elsewhere without the written permission of the site owner. All materials
                  uploaded, images, stories, audio content remain the sole right of the publisher
                  and all content uploaded onto the Face book group C of E Memory Corner will become
                  part of the C of E Middle School site ( www.wellyroad.com) as mutual entities and
                  any information and or materials shall be shared equally between said entities.
                  Any Images and or content is not for profit and for historical interest only. All
                  and or any material given to the group will become part of the historical record
                  and materials submitted by the user will agree to it being shared among the sites
                  mentioned above free to be displayed or utilized as the publisher see fit.{" "}
                </p>
                <br></br>

                <p>
                  The following terminology applies to these Terms and Conditions, Privacy Statement
                  and Disclaimer Notice and all Agreements: {'"'}Client{'"'}, {'"'}You{'"'} and
                  {'"'}Your{'"'} refers to you, the person log on this website and compliant to the
                  Company
                  {"'"}s terms and conditions. {'"'}The Company{'"'}, {'"'}Ourselves{'"'}, {'"'}We
                  {'"'}, {'"'}Our{'"'} and {'"'}Us{'"'}, refers to our Company. {'"'}Party{'"'},
                  {'"'}Parties{'"'}, or {'"'}Us{'"'}, refers to both the Client and ourselves. All
                  terms refer to the offer, acceptance and consideration of payment necessary to
                  undertake the process of our assistance to the Client in the most appropriate
                  manner for the express purpose of meeting the Client{"'"}s needs in respect of
                  provision of the Company{"'"}s stated services, in accordance with and subject to,
                  prevailing law of gb. Any use of the above terminology or other words in the
                  singular, plural, capitalization and/or he/she or they, are taken as
                  interchangeable and therefore as referring to same.
                </p>
                <br></br>

                <h3>
                  <strong>Cookies</strong>
                </h3>
                <br></br>

                <p>
                  We employ the use of cookies. By accessing Welly Road, you agreed to use cookies
                  in agreement with the C OF E Middle School (Welly Road){"'"}s Privacy Policy.{" "}
                </p>
                <br></br>

                <p>
                  Most interactive websites use cookies to let us retrieve the user{"'"}s details
                  for each visit. Cookies are used by our website to enable the functionality of
                  certain areas to make it easier for people visiting our website. Some of our
                  affiliate/advertising partners may also use cookies.
                </p>
                <br></br>

                <h3>
                  <strong>License</strong>
                </h3>
                <br></br>

                <p>
                  Unless otherwise stated, C OF E Middle School (Welly Road) and/or its licensors
                  own the intellectual property rights for all material on Welly Road. All
                  intellectual property rights are reserved. You may access this from Welly Road for
                  your own personal use subjected to restrictions set in these terms and conditions.
                </p>
                <br></br>

                <p>You must not:</p>
                <ul>
                  <li>Republish material from Welly Road</li>
                  <li>Sell, rent or sub-license material from Welly Road</li>
                  <li>Reproduce, duplicate or copy material from Welly Road</li>
                  <li>Redistribute content from Welly Road</li>
                </ul>
                <br></br>

                <p>
                  Parts of this website offer an opportunity for users to post and exchange opinions
                  and information in certain areas of the website. C OF E Middle School (Welly Road)
                  does not filter, edit, publish or review Comments prior to their presence on the
                  website. Comments do not reflect the views and opinions of C OF E Middle School
                  (Welly Road),its agents and/or affiliates. Comments reflect the views and opinions
                  of the person who post their views and opinions. To the extent permitted by
                  applicable laws, C OF E Middle School (Welly Road) shall not be liable for the
                  Comments or for any liability, damages or expenses caused and/or suffered as a
                  result of any use of and/or posting of and/or appearance of the Comments on this
                  website.
                </p>
                <br></br>

                <p>
                  C OF E Middle School (Welly Road) reserves the right to monitor all Comments and
                  to remove any Comments which can be considered inappropriate, offensive or causes
                  breach of these Terms and Conditions.
                </p>
                <br></br>

                <p>You warrant and represent that:</p>
                <br></br>

                <ul>
                  <li>
                    You are entitled to post the Comments on our website and have all necessary
                    licenses and consents to do so;
                  </li>
                  <li>
                    The Comments do not invade any intellectual property right, including without
                    limitation copyright, patent or trademark of any third party;
                  </li>
                  <li>
                    The Comments do not contain any defamatory, libelous, offensive, indecent or
                    otherwise unlawful material which is an invasion of privacy
                  </li>
                  <li>
                    The Comments will not be used to solicit or promote business or custom or
                    present commercial activities or unlawful activity.
                  </li>
                </ul>
                <br></br>

                <p>
                  You hereby grant C OF E Middle School (Welly Road) a non-exclusive license to use,
                  reproduce, edit and authorize others to use, reproduce and edit any of your
                  Comments in any and all forms, formats or media.
                </p>
                <br></br>

                <h3>
                  <strong>Hyperlinking to our Content</strong>
                </h3>
                <br></br>

                <p>
                  The following organizations may link to our Website without prior written
                  approval:
                </p>
                <br></br>

                <ul>
                  <li>Government agencies;</li>
                  <li>Search engines;</li>
                  <li>News organizations;</li>
                  <li>
                    Online directory distributors may link to our Website in the same manner as they
                    hyperlink to the Websites of other listed businesses; and
                  </li>
                  <li>
                    System wide Accredited Businesses except soliciting non-profit organizations,
                    charity shopping malls, and charity fundraising groups which may not hyperlink
                    to our Web site.
                  </li>
                </ul>

                <p>
                  These organizations may link to our home page, to publications or to other Website
                  information so long as the link: (a) is not in any way deceptive; (b) does not
                  falsely imply sponsorship, endorsement or approval of the linking party and its
                  products and/or services; and (c) fits within the context of the linking party
                  {"'"}s site.
                </p>

                <p>
                  We may consider and approve other link requests from the following types of
                  organizations:
                </p>

                <ul>
                  <li>commonly-known consumer and/or business information sources;</li>
                  <li>dot.com community sites;</li>
                  <li>associations or other groups representing charities;</li>
                  <li>online directory distributors;</li>
                  <li>internet portals;</li>
                  <li>accounting, law and consulting firms; and</li>
                  <li>educational institutions and trade associations.</li>
                </ul>

                <p>
                  We will approve link requests from these organizations if we decide that: (a) the
                  link would not make us look unfavorably to ourselves or to our accredited
                  businesses; (b) the organization does not have any negative records with us; (c)
                  the benefit to us from the visibility of the hyperlink compensates the absence of
                  C OF E Middle School (Welly Road); and (d) the link is in the context of general
                  resource information.
                </p>

                <p>
                  These organizations may link to our home page so long as the link: (a) is not in
                  any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval
                  of the linking party and its products or services; and (c) fits within the context
                  of the linking party{"'"}s site.
                </p>

                <p>
                  If you are one of the organizations listed in paragraph 2 above and are interested
                  in linking to our website, you must inform us by sending an e-mail to C OF E
                  Middle School (Welly Road). Please include your name, your organization name,
                  contact information as well as the URL of your site, a list of any URLs from which
                  you intend to link to our Website, and a list of the URLs on our site to which you
                  would like to link. Wait 2-3 weeks for a response.
                </p>

                <p>Approved organizations may hyperlink to our Website as follows:</p>

                <ul>
                  <li>By use of our corporate name; or</li>
                  <li>By use of the uniform resource locator being linked to; or</li>
                  <li>
                    By use of any other description of our Website being linked to that makes sense
                    within the context and format of content on the linking party{"'"}s site.
                  </li>
                </ul>

                <p>
                  No use of C OF E Middle School (Welly Road){"'"}s logo or other artwork will be
                  allowed for linking absent a trademark license agreement.
                </p>
                <br></br>

                <h3>
                  <strong>iFrames</strong>
                </h3>
                <br></br>

                <p>
                  Without prior approval and written permission, you may not create frames around
                  our Webpages that alter in any way the visual presentation or appearance of our
                  Website.
                </p>
                <br></br>

                <h3>
                  <strong>Content Liability</strong>
                </h3>
                <br></br>

                <p>
                  We shall not be hold responsible for any content that appears on your Website. You
                  agree to protect and defend us against all claims that is rising on your Website.
                  No link(s) should appear on any Website that may be interpreted as libelous,
                  obscene or criminal, or which infringes, otherwise violates, or advocates the
                  infringement or other violation of, any third party rights.
                </p>
                <br></br>

                <h3>
                  <strong>Reservation of Rights</strong>
                </h3>
                <br></br>

                <p>
                  We reserve the right to request that you remove all links or any particular link
                  to our Website. You approve to immediately remove all links to our Website upon
                  request. We also reserve the right to amen these terms and conditions and it{"'"}s
                  linking policy at any time. By continuously linking to our Website, you agree to
                  be bound to and follow these linking terms and conditions.
                </p>

                <h3>
                  <br></br>
                  <strong>Removal of links from our website</strong>
                </h3>
                <br></br>

                <p>
                  If you find any link on our Website that is offensive for any reason, you are free
                  to contact and inform us any moment. We will consider requests to remove links but
                  we are not obligated to or so or to respond to you directly.
                </p>

                <p>
                  We do not ensure that the information on this website is correct, we do not
                  warrant its completeness or accuracy; nor do we promise to ensure that the website
                  remains available or that the material on the website is kept up to date.
                </p>
                <br></br>

                <h3>
                  <strong>Disclaimer</strong>
                </h3>
                <br></br>

                <p>
                  To the maximum extent permitted by applicable law, we exclude all representations,
                  warranties and conditions relating to our website and the use of this website.
                  Nothing in this disclaimer will:
                </p>

                <ul>
                  <li>limit or exclude our or your liability for death or personal injury;</li>
                  <li>
                    limit or exclude our or your liability for fraud or fraudulent
                    misrepresentation;
                  </li>
                  <li>
                    limit any of our or your liabilities in any way that is not permitted under
                    applicable law; or
                  </li>
                  <li>
                    exclude any of our or your liabilities that may not be excluded under applicable
                    law.
                  </li>
                </ul>

                <p>
                  The limitations and prohibitions of liability set in this Section and elsewhere in
                  this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all
                  liabilities arising under the disclaimer, including liabilities arising in
                  contract, in tort and for breach of statutory duty.
                </p>

                <p>
                  As long as the website and the information and services on the website are
                  provided free of charge, we will not be liable for any loss or damage of any
                  nature.
                </p>
                <br />
                <MKTypography
                  component="a"
                  href="#"
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  mt={3}
                  sx={{
                    width: "max-content",
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                ></MKTypography>
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </MKBox>
  );
}

export default TermsandConditions;
