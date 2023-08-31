import { Box } from "@mui/system";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import DocumentResume from "./documentResume";
import { Container, styled, Button } from "@mui/material";
import { PrimaryColors } from "../../const";
import ScrollAnimation from "react-animate-on-scroll";
import { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TriangleTop className="nameContainer animate__animated animate__fadeInLeftBig animate__slower" />
      <Container sx={{ minHeight: "calc(100vh - 56px)" }}>
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
            className="nameContainer animate__animated animate__bounceInDown"
            style={{ textDecoration: "none" }}
          >
            {({ loading }) =>
              loading ? (
                <Button disabled className="buttonDL disabled">
                  Loading ...
                </Button>
              ) : (
                <Button className="buttonDL download">Download Resume</Button>
              )
            }
          </DownloadLink>
          <Box sx={{ display: { sm: "contents", xs: "none" } }}>
            <PDFViewer width="100%" height={700} style={pdfStyle}>
              <DocumentResume />
            </PDFViewer>
          </Box>
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

  ".buttonDL": {
    fontFamily: "Montserrat",
    padding: "8px 24px",
    fontSize: "1.5rem",
    borderRadius: "30px",
    textDecoration: "none",
    transition: "0.3s",
  },

  ".download": {
    color: "white",
    background: PrimaryColors[2],
    border: `2px ${PrimaryColors[2]} solid`,

    "&:hover": {
      color: PrimaryColors[2],
      borderRadius: "0",
      background: "transparent",
    },

    ".disabled": {
      border: "2px gray solid",
    },
  },
});

const pdfStyle = {
  border: "1px solid lightgray",
  marginBottom: "24px",
  background: "pink",
};
