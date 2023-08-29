import { Box, Container, styled } from "@mui/material";
import { PrimaryColors } from "../../const";
import DrawIcon from "@mui/icons-material/Draw";
import CodeIcon from "@mui/icons-material/Code";
import ScrollAnimation from "react-animate-on-scroll";

const Skills = () => {
  return (
    <MainContainer
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        marginTop: { xs: "0", sm: "-300px" },
      }}
    >
      <SkillsContainer
        sx={{
          width: { xs: "100%", sm: "40%" },
          margin: { xs: "0", sm: "24px" },
        }}
      >
        <ScrollAnimation animateIn="animate__slideInDown" animateOnce={true}>
          <DrawIcon sx={iconStyle} />
          <h2>Designer</h2>
          <p className="subHeader">Let the imagination comes to life</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__slideInLeft" animateOnce={true}>
          <Box>
            <p>User Interface</p>
            <p>User Experience</p>
            <p>Figma</p>
            <p>Adobe Photoshop</p>
            <p>Clip Studio Paint</p>
            <p>Bootstrap</p>
            <p>Tailwind CSS</p>
            <p>Chakra UI</p>
            <p>Material UI</p>
            <p>Materialize CSS</p>
            <p>Sass</p>
            <p>styled-components</p>
            <p>emotion</p>
          </Box>
        </ScrollAnimation>
      </SkillsContainer>
      <SkillsContainer
        sx={{
          width: { xs: "100%", sm: "40%" },
          margin: { xs: "24px 0", sm: "24px" },
        }}
      >
        <ScrollAnimation animateIn="animate__slideInDown" animateOnce={true}>
          <CodeIcon sx={iconStyle} />
          <h2>Developer</h2>
          <p className="subHeader">Write clean and functional code</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__slideInRight" animateOnce={true}>
          <Box>
            <p>React</p>
            <p>TypeScript</p>
            <p>JavaScript</p>
            <p>React Native</p>
            <p>NextJS</p>
            <p>Redux</p>
            <p>RxJS</p>
            <p>git</p>
            <p>Python</p>
            <p>Github</p>
            <p>Gitlab</p>
            <p>Visual Studio Code</p>
            <p>Storybook</p>
          </Box>
        </ScrollAnimation>
      </SkillsContainer>
    </MainContainer>
  );
};

export default Skills;

const iconStyle = {
  fontSize: 60,
  color: "white",
  background: PrimaryColors[1],
  borderRadius: "50%",
  padding: "8px",
};

const MainContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  marginTop: "-250px",
});

const SkillsContainer = styled(Box)({
  textAlign: "center",
  border: `1px solid ${PrimaryColors[1]}`,
  fontFamily: "Montserrat",
  padding: "24px",
  zIndex: 2,
  background: "white",
  margin: "24px",
  borderRadius: "3px",
  color: "#3a3a3a",

  div: {
    paddingTop: "8px",
  },

  h2: {
    fontFamily: "Source Code Pro Variable",
    fontSize: "1.5rem",
    color: PrimaryColors[3],
  },

  ".subHeader": {
    fontWeight: "bold",
  },
});
