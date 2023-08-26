import Button from "@mui/material/Button";
import { GameButton } from "../components/button";
import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import Granim from "react-granim";
import bgCover from "../assets/bg.jpg";

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
        gradients: [
          ["#29323c", "#485563"],
          ["#FF6B6B", "#556270"],
          ["#80d3fe", "#7ea0c4"],
          ["#f0ab51", "#eceba3"],
        ],
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

          <GameButton variant="contained">this is GameButton</GameButton>

          <Button variant="contained">Text</Button>

          <Link to={`/resume`}>
            <a>Your Name</a>
          </Link>

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
