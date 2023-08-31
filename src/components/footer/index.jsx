import { Box, Container, IconButton, styled } from "@mui/material";
import { PrimaryColors, github, linkedIn, mailTo } from "../../const";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ScrollAnimation from "react-animate-on-scroll";

const Footer = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  const handleMail = (e) => {
    window.location.href = mailTo;
    e.preventDefault();
  };

  const currYear = new Date().getFullYear();

  return (
    <FooterBox>
      <FooterContainer maxWidth="xxl">
        <ScrollAnimation animateIn="animate__rotateIn" animateOnce={true}>
          <ButtonSocials size="large" onClick={() => handleClick(github)}>
            <GitHubIcon />
          </ButtonSocials>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__rotateIn" animateOnce={true}>
          <ButtonSocials size="large" onClick={() => handleClick(linkedIn)}>
            <LinkedInIcon />
          </ButtonSocials>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__rotateIn" animateOnce={true}>
          <ButtonSocials size="large" onClick={handleMail}>
            <MailOutlineIcon />
          </ButtonSocials>
        </ScrollAnimation>
      </FooterContainer>

      <SubFooterBox>
        <Container maxWidth="xxl">
          <p>
            Krizia Camille Uayan <span>©{currYear}</span>
          </p>
        </Container>
      </SubFooterBox>
    </FooterBox>
  );
};

export default Footer;

const FooterBox = styled(Box)({
  height: "200px",
  background: PrimaryColors[4],
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  zIndex: 2,
});

const SubFooterBox = styled(Box)({
  borderTop: `1px ${PrimaryColors[3]} solid`,
  bottom: "0",
  padding: "4px",
  textAlign: "center",

  p: {
    color: PrimaryColors[1],
  },

  span: {
    color: PrimaryColors[2],
  },
});

const FooterContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

const ButtonSocials = styled(IconButton)({
  border: "1px white solid",
  padding: "8px",
  color: "white",
  margin: "16px",
  transition: "0.3s",

  "&:hover": {
    borderRadius: "0",
    background: "#ffffff42",
  },
});
