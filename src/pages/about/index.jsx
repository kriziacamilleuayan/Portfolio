import { Box } from "@mui/material";
import { PrimaryColors } from "../../const";
import { Container, styled } from "@mui/material";
import { getNumYears } from "../../helper";
import pic from "./../../assets/mochi.jpeg";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";
import { useEffect } from "react";

const About = () => {
  const years = getNumYears();
  const sequence = ["Krizia Camille Uayan?"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TriangleTop className="nameContainer animate__animated animate__fadeInRightBig animate__slower" />
      <Container sx={{ minHeight: "70vh" }}>
        <Box>
          <Header
            sx={{
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <span className="animate__animated animate__fadeInRightBig">
              Who is{" "}
            </span>
            <TypeAnimation sequence={sequence} speed={10} style={nameStyle} />
          </Header>
        </Box>
        <Flex
          gap="24px"
          sx={{
            flexDirection: { xs: "column-reverse", sm: "row" },
          }}
        >
          <Box className="left">
            <p className="animate__animated animate__fadeInLeftBig">
              I’ve been building websites for over {years} years, mostly with
              startups where I got to take on fun challenges and help shape
              great user experiences. As a front end engineer, I love creating
              clean, simple, and user friendly interfaces that are easy to use
              and nice to look at.
            </p>
            <p className="animate__animated animate__fadeInLeftBig animate__delay-1s">
              What keeps me excited is making things better. I like simplifying
              code, improving performance, and finding smoother ways for users
              to get things done. I’m always learning and trying out new tools
              and tech like React, Material UI, Typescript, Prisma and more.
            </p>
            <p className="animate__animated animate__fadeInLeftBig animate__delay-2s">
              I’m a big fan of working with teams that support each other. I’m
              easy to work with, open to feedback, and always happy to help.
              Whether it’s sharing ideas, working through problems together, or
              just celebrating the little wins, I think the best work happens
              when everyone feels like they’re part of something.
            </p>
            <p className="animate__animated animate__fadeInLeftBig animate__delay-2s">
              And lastly here is a picture of Mochi.
            </p>
          </Box>
          <Box className="right animate__animated animate__rotateIn animate__delay-1s">
            <img src={pic} alt="Krizia Camille Uayan" loading="lazy" />
          </Box>
        </Flex>
      </Container>
      <ScrollAnimation
        animateIn="animate__fadeInLeftBig animate__slower"
        animateOnce={true}
      >
        <TriangleBottom />
      </ScrollAnimation>
    </>
  );
};

const TriangleTop = styled(Box)({
  clipPath: "polygon(0 0, 100% 100%, 100% 0)",
  width: "100%",
  height: "150px",
  background: PrimaryColors[2],
  zIndex: "0",
});

const TriangleBottom = styled(Box)({
  clipPath: "polygon(100% 100%, 0 0, 0 100%)",
  width: "100%",
  height: "150px",
  background: PrimaryColors[2],
  zIndex: "0",
});

const Flex = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  ".left": {
    flexGrow: 2,
    fontSize: "20px",
    fontFamily: "Montserrat",
    color: "#3a3a3a",
  },

  ".right": {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",

    img: {
      maxHeight: "300px",
      borderRadius: "50%",
      border: `5px ${PrimaryColors[2]} solid`,
      transition: "0.3s",

      "&:hover": {
        borderRadius: "0",
      },
    },
  },
});

const Header = styled("h1")({
  color: PrimaryColors[3],
  fontFamily: "Source Code Pro Variable",
  fontSize: "3rem",
});

const nameStyle = {
  fontSize: "1em",
  display: "inline-block",
  color: PrimaryColors[2],
  fontFamily: "Source Code Pro Variable",
};

export default About;
