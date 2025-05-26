import { Box, styled } from "@mui/material";
import Granim from "react-granim";
import { TypeAnimation } from "react-type-animation";
import { PrimaryColors, granimGradient } from "../../const";

const Banner = () => {
  const props = {
    id: "canvas-image-blending",
    direction: "diagonal",
    isPausedWhenNotInView: true,
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
    "Zia",
    1000,
    "Krizia Uayan",
    2000,
    "Camille Uayan",
    1000,
    "Krizia Camille Uayan",
    25000,
  ];
  return (
    <MainContainer>
      <Granim {...props} height="100vh" />
      <>
        <BannerContainer>
          <BannerContent>
            <Box
              className="bannerText"
              sx={{
                alignItems: { xs: "center", sm: "flex-end" },
                "h3,h2, .nameContainer": {
                  textAlign: { xs: "center", sm: "left" },
                },
              }}
            >
              <h3 className="animate__animated animate__fadeInRightBig animate__slow">
                Hi, my name is
              </h3>
              <Box className="nameContainer animate__animated animate__fadeInRightBig animate__slower">
                <TypeAnimation
                  sequence={sequence}
                  wrapper="h1"
                  className="animate__animated animate__fadeInRightBig"
                  speed={25}
                  style={{
                    fontSize: "2em",
                    display: "inline-block",
                    color: PrimaryColors[0],
                  }}
                  repeat={Infinity}
                />
              </Box>
              <h2 className="animate__animated animate__fadeInRightBig animate__slow">
                <span className="iam">I am a </span>
                <span className="position">
                  <span style={{ color: "lightblue" }}>{`<`}</span>
                  Front-End Engineer
                  <span style={{ color: "lightblue" }}>{`/>`}</span>
                </span>
              </h2>
            </Box>
            <Box
              sx={{
                clipPath: {
                  xs: "",
                  sm: "polygon(100% 0%, 100% 51%, 100% 100%, 75% 100%, 50% 50%, 75% 0)",
                },
              }}
              className="animate__animated animate__fadeInRightBig bannerLeft"
            >
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
      fontFamily: "Source Code Pro Variable",
      margin: 0,
    },

    "h2, h3": {
      fontWeight: "normal",

      ".iam": {
        fontFamily: "Montserrat",
      },

      ".position": {
        color: PrimaryColors[0],
        fontWeight: "bolder",
        fontFamily: "Source Code Pro Variable",
      },
    },
  },

  ".bannerLeft": {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    top: "0",
    right: "0",
  },
});
