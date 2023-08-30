import { Box } from "@mui/system";
import { PrimaryColors } from "../../const";
import { Container, styled } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ height: "100vh" }}>
      <Header>About Me.</Header>
    </Container>
  );
};

const Header = styled("h1")({});

export default About;
