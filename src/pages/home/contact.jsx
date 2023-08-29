import { Box, Button, Container, styled } from "@mui/material";
import { PrimaryColors } from "../../const";
import SendIcon from "@mui/icons-material/Send";
import { NavLink } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const Contact = () => {
  const handleMail = (e) => {
    window.location.href = "mailto:kriziacamilleuayan@gmail.com";
    e.preventDefault();
  };

  return (
    <MainContainer
      sx={{
        clipPath: {
          xs: "none",
          sm: "polygon(50% 15%, 100% 0, 100% 100%, 0 100%, 0 0)",
        },
        paddingTop: { xs: "80px", sm: "300px" },
      }}
    >
      <Container>
        <Box>
          <ScrollAnimation animateIn="animate__slideInDown" animateOnce={true}>
            <h2>Interested in working together?</h2>
            <p>It&apos;s always a pleasure to hear new and innovative ideas!</p>
          </ScrollAnimation>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "24px",
              flexDirection: "column",
            }}
            gap="32px"
          >
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
              <MailButton onClick={handleMail}>
                Mail me
                <SendIcon
                  sx={{
                    fontSize: 40,
                    paddingLeft: "12px",
                  }}
                />
              </MailButton>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
              <NavLink to="/resume">
                <ResumeButton>or check out my Resume!</ResumeButton>
              </NavLink>
            </ScrollAnimation>
          </Box>
        </Box>
      </Container>
    </MainContainer>
  );
};

export default Contact;

const ResumeButton = styled(Button)({
  color: "lightgray",
  "&:hover": {
    textDecoration: "underline",
  },
});

const MailButton = styled(Button)({
  border: "1px white solid",
  color: "white",
  borderRadius: "50px",
  fontSize: "30px",
  padding: "8px 32px",
  textTransform: "capitalize",
  transition: "0.3s",
  width: "fit-content",

  "&:hover": {
    background: "#ffffff42",
    borderRadius: "0",
  },
});

const MainContainer = styled(Box)({
  background: PrimaryColors[4],
  paddingBottom: "30px",
  marginTop: "-150px",
  marginBottom: "-1px",

  h2: {
    margin: "0",
    color: PrimaryColors[0],
    textAlign: "center",
    fontFamily: "Source Code Pro Variable",
    fontSize: "2rem",
  },

  p: {
    color: "white",
    textAlign: "center",
    fontFamily: "Montserrat",
    fontSize: "1.2rem",
  },
});
