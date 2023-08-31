import { Box, styled } from "@mui/material";
import { Container } from "@mui/system";
import { PrimaryColors } from "../../const";
import ScrollAnimation from "react-animate-on-scroll";

const Introduction = () => {
  return (
    <MainContainer
      sx={{
        clipPath: {
          xs: "none",
          sm: "polygon(0% 0%, 100% 0%, 100% 85%, 50% 65%, 0 85%)",
        },
        paddingBottom: { xs: "80px", sm: "300px" },
      }}
    >
      <Container>
        <Box>
          <ScrollAnimation animateIn="animate__fadeInDown" animateOnce={true}>
            <h2>
              You can call me <span style={{ color: "white" }}>Krizia</span>,
              nice to meet you!
            </h2>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animateOnce={true}
            delay={2}
          >
            <p>
              In 2016, I began my career as a front-end engineer. I&apos;ve
              worked for a variety of start-up businesses and teamed up with
              smart individuals to develop websites, mobile apps, and desktop
              programs for both business and consumer use. In addition to
              coding, I have a keen sense for layout and design, and I
              constantly keep the user experience in mind. When it comes to
              front-end, I am always intrigued, and constantly try to learn
              more.
            </p>
          </ScrollAnimation>
        </Box>
      </Container>
    </MainContainer>
  );
};

export default Introduction;

const MainContainer = styled(Box)({
  background: PrimaryColors[3],
  paddingTop: "80px",
  paddingBottom: "300px",
  marginBottom: "24px",

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
