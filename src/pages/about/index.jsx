import { Box } from "@mui/material";
import { PrimaryColors } from "../../const";
import { Container, styled } from "@mui/material";
import { getNumYears } from "../../helper";
import pic from "./../../assets/krizia.jpg";
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
              Since starting my journey as an engineer over {years} years ago, I
              have worked with many startups; challenging myself to produce the
              highest quality, professional UX and UI. As a front end engineer,
              I endeavor to create simplistic, efficient, and elegant web
              applications that attract users.
            </p>
            <p className="animate__animated animate__fadeInLeftBig animate__delay-1s">
              Enhancing, improving, and simplifying code is part of what drives
              me to do what I do, but I always strive to advance my knowledge by
              constantly learning new languages, technologies, and frameworks to
              advance my skillset like React, Material UI, Typescript, Python,
              and much more.
            </p>
            <p className="animate__animated animate__fadeInLeftBig animate__delay-2s">
              I thrive when working in collaborative, cooperative team
              environments and love giving my coworkers opportunities to shine.
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
