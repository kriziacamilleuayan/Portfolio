import { Font, Page, View, Document, StyleSheet } from "@react-pdf/renderer";
import { PrimaryColors } from "../../const";
import Header from "./header";
import Profile from "./profile";

import MontserratRegular from "./fonts/Montserrat-Regular.ttf";
import MontserratBold from "./fonts/Montserrat-Bold.ttf";
import MontserratSemiBold from "./fonts/Montserrat-SemiBold.ttf";
import SourceCodeProRegular from "./fonts/SourceCodePro-Regular.ttf";
import SourceCodeProBold from "./fonts/SourceCodePro-Bold.ttf";
import SourceCodeProSemiBold from "./fonts/SourceCodePro-SemiBold.ttf";
import Details from "./details";
import Skills from "./skills";
import Links from "./links";
import Languages from "./languages";
import Employment from "./employment";
import Education from "./education";

Font.register({
  family: "Montserrat",
  fonts: [
    {
      src: MontserratRegular,
    },
    {
      src: MontserratSemiBold,
      fontWeight: "semiBold",
    },
    {
      src: MontserratBold,
      fontWeight: "bold",
    },
  ],
});

Font.register({
  family: "SourceCodePro",
  fonts: [
    {
      src: SourceCodeProRegular,
    },
    {
      src: SourceCodeProBold,
      fontWeight: "semiBold",
    },
    {
      src: SourceCodeProSemiBold,
      fontWeight: "bold",
    },
  ],
});

const Resume = (props) => (
  <Page {...props} style={styles.page}>
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Header />
        <Details />
        <Skills />
        <Links />
        <Languages />
      </View>
      <View style={styles.rightColumn}>
        <Profile />
        <Employment />
        <Education />
      </View>
    </View>
  </Page>
);

const DocumentResume = () => (
  <Document
    author="Krizia Camille Uayan"
    keywords="front end engineer, resume"
    subject="Resume - Krizia Camille Uayan"
    title="Resume - Krizia Camille Uayan"
  >
    <Resume size="A4" />
  </Document>
);

export default DocumentResume;

const styles = StyleSheet.create({
  page: {
    padding: 0,
  },
  container: {
    flex: 1,
    flexDirection: "row",
  },
  leftColumn: {
    flexDirection: "column",
    width: "30%",
    paddingTop: 30,
    paddingBottom: 30,
    paddingRight: 25,
    paddingLeft: 25,
    backgroundColor: PrimaryColors[1],
    color: "white",
    height: "100%",
  },
  rightColumn: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 25,
    paddingRight: 25,
    color: "#353535",
    width: "70%",
  },
});
