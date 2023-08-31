import { Box } from "@mui/material";
import { PrimaryColors } from "../../const";
import { Container, styled } from "@mui/material";
import { getNumYears } from "../../helper";
import pic from "./../../assets/krizia.jpg";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  const years = getNumYears();

  const sequence = ["Krizia Camille Uayan?", 25000];

  return (
    <Container sx={{ minHeight: "70vh" }}>
      <Box>
        <Header
          sx={{
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <span className="animate__animated animate__fadeInRightBig">
            Who is
          </span>
          <TypeAnimation
            sequence={sequence}
            speed={1}
            style={{
              fontSize: "1em",
              display: "inline-block",
              marginLeft: "24px",
              color: PrimaryColors[2],
            }}
          />
        </Header>
      </Box>
      <Flex
        gap="24px"
        sx={{
          flexDirection: { xs: "column-reverse", sm: "row" },
        }}
      >
        <Box className="left">
          <p>
            Since starting my journey as an engineer over {years} years ago, I
            have worked with many startups; challenging myself to produce the
            highest quality, professional UX and UI. As a front end engineer, I
            endeavor to create simplistic, efficient, and elegant web
            applications that attract users.
          </p>
          <p>
            Enhancing, improving, and simplifying code is part of what drives me
            to do what I do, but I always strive to advance my knowledge by
            constantly learning new languages, technologies, and frameworks to
            advance my skillset like React, Material UI, Typescript, Python, and
            much more.
          </p>
          <p>
            I thrive when working in collaborative, cooperative team
            environments and love giving my coworkers opportunities to shine.
          </p>
        </Box>
        <Box className="right">
          <img src={pic} alt="Krizia Camille Uayan" loading="lazy" />
        </Box>
      </Flex>
    </Container>
  );
};

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

export default About;
