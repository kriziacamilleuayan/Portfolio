import { Box, styled } from "@mui/material";
import Granim from "react-granim";
import bgCover from "../../assets/banner.jpg";
import { granimGradient } from "../../const";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  const props = {
    id: "canvas-image-blending",
    direction: "left-right",
    isPausedWhenNotInView: true,
    image: {
      source: bgCover,
      blendingMode: "screen",
    },
    states: {
      "default-state": {
        gradients: granimGradient,
        transitionSpeed: 7000,
      },
    },
  };

  const props2 = {
    id: "canvas-image-blending2",
    direction: "left-right",
    isPausedWhenNotInView: true,
    states: {
      "default-state": {
        gradients: granimGradient,
        transitionSpeed: 7000,
      },
    },
  };

  const sequence = [
    "KRizia Ca",
    1000,
    "Krizia Uayan",
    2000,
    "Camille Uay",
    1000,
    "Krizia Camille Uayan",
    25000,
  ];
  return (
    <MainContainer>
      <Granim {...props} />
      <>
        <BannerContainer>
          <BannerContent>
            <Box className="bannerText">
              <h3 className="animate__animated animate__fadeInRightBig animate__slow">
                Hi, my name is
              </h3>
              <Box className="nameContainer animate__animated animate__fadeInRightBig animate__slower">
                <TypeAnimation
                  sequence={sequence}
                  wrapper="h1"
                  className="animate__animated animate__fadeInRightBig"
                  speed={25}
                  style={{ fontSize: "2em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </Box>
              <h2 className="animate__animated animate__fadeInRightBig animate__slow">
                I am a <span>Front-End Engineer</span>.
              </h2>
            </Box>
            <Box className="animate__animated animate__fadeInRightBig bannerLeft">
              <Granim {...props2} />
            </Box>
          </BannerContent>
        </BannerContainer>
      </>
    </MainContainer>
  );
};

export default Banner;

const MainContainer = styled(Box)({
  position: "relative",
  minHeight: "100vh",
});

const BannerContainer = styled(Box)({
  position: "absolute",
  width: "100%",
  height: "100%",
});

const BannerContent = styled(Box)({
  width: "100%",
  height: "100vh",
  color: "white",
  fontFamily: "Montserrat",
  position: "relative",

  ".bannerText": {
    position: "absolute",
    right: "0",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "column",
    height: "100vh",
    paddingRight: "32px",
    paddingLeft: "32px",

    ".nameContainer": {
      border: "1px white solid",
      padding: "0 8px",
      width: "100%",
    },

    h1: {
      fontFamily: "'Press Start 2P', cursive",
      margin: 0,
    },

    "h2, h3": {
      fontFamily: "Montserrat",
      span: {
        color: "blue",
        fontFamily: "Source Code Pro Variable",
      },
    },
  },

  ".bannerLeft": {
    width: "100vw",
    height: "100vh",
    clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)",
    position: "absolute",
    top: "0",
    right: "0",
  },
});
