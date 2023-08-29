import { Button } from "@mui/base";
import { Box } from "@mui/system";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import DocumentResume from "./documentResume";

const Resume = () => {
  return (
    <Box
      style={{
        background: "light-gray",
        height: "100vh",
      }}
    >
      <div>resume</div>
      <PDFViewer width={500} height={500}>
        <DocumentResume />
      </PDFViewer>

      <PDFDownloadLink document={<DocumentResume />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? (
            "Loading document..."
          ) : (
            <Box component={Button}>Download now!</Box>
          )
        }
      </PDFDownloadLink>
    </Box>
  );
};

export default Resume;
