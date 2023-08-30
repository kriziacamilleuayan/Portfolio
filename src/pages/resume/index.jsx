import { Box } from "@mui/system";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import DocumentResume from "./documentResume";
import { Container, styled, Button, Skeleton } from "@mui/material";
import { PrimaryColors } from "../../const";
import ScrollAnimation from "react-animate-on-scroll";

const Resume = () => {
  return (
    <>
      <TriangleTop className="nameContainer animate__animated animate__fadeInLeftBig animate__slower" />
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          gap="24px"
        >
          <DownloadLink
            document={<DocumentResume />}
            fileName="FE Engineer - Krizia Camille Uayan.pdf"
            className="nameContainer animate__animated animate__bounceInDown animate__slower"
            style={{ textDecoration: "none" }}
          >
            {({ loading }) =>
              loading ? (
                <Skeleton variant="rectangular" width="100%" height={118} />
              ) : (
                <Button>Download Resume</Button>
              )
            }
          </DownloadLink>
          <PDFViewer width="100%" height={700} style={pdfStyle}>
            <DocumentResume />
          </PDFViewer>
        </Box>
      </Container>

      <ScrollAnimation
        animateIn="animate__fadeInRightBig animate__slower"
        animateOnce={true}
      >
        <TriangleBottom />
      </ScrollAnimation>
    </>
  );
};

export default Resume;

const TriangleTop = styled(Box)({
  clipPath: "polygon(0 0, 0 100%, 100% 0)",
  width: "100%",
  height: "150px",
  background: PrimaryColors[1],
  zIndex: "0",
});

const TriangleBottom = styled(Box)({
  clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
  width: "100%",
  height: "150px",
  background: PrimaryColors[1],
  zIndex: "0",
});

const DownloadLink = styled(PDFDownloadLink)({
  color: PrimaryColors[3],

  button: {
    fontFamily: "Montserrat",
    border: `2px ${PrimaryColors[2]} solid`,
    color: "white",
    background: PrimaryColors[2],
    padding: "8px 24px",
    fontSize: "1.5rem",
    borderRadius: "30px",
    textDecoration: "none",
    transition: "0.3s",

    "&:hover": {
      color: PrimaryColors[2],
      borderRadius: "0",
    },
  },
});

const pdfStyle = {
  border: "1px solid lightgray",
  marginBottom: "24px",
  background: "pink",
};
