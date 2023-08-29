import Button from "@mui/material/Button";
import { GameButton } from "../../components/button";
import { Box, Container } from "@mui/material";
import Granim from "react-granim";
import bgCover from "../../assets/bg2.jpg";
import { granimGradient } from "../../const";

const Home = () => {
  const props = {
    id: "canvas-image-blending",
    direction: "top-bottom",
    isPausedWhenNotInView: true,
    image: {
      source: bgCover,
      blendingMode: "multiply",
    },
    states: {
      "default-state": {
        gradients: granimGradient,
        transitionSpeed: 7000,
      },
    },
  };

  return (
    <>
      <Granim {...props} />
      <Container>
        <Box sx={{ my: 2 }}>
          <div>hell</div>

          <GameButton
            variant="contained"
            className="animate__animated animate__fadeInDown"
          >
            this is GameButton
          </GameButton>

          <Button variant="contained">Text</Button>

          <a href="/resume">Your Name</a>

          {[...new Array(22)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container>
    </>
  );
};

export default Home;
