import Button from "@mui/material/Button";
import { GameButton } from "../components/button";
import Navbar from "../components/navbar";
import { Box, Container } from "@mui/material";

const Root = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Box sx={{ my: 2 }}>
          <div>hell</div>

          <GameButton variant="contained">this is GameButton</GameButton>

          <Button variant="contained">Text</Button>
          <a href={`/resume`}>Your Name</a>
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

export default Root;
