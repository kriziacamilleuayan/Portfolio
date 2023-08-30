import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { PrimaryColors } from "../../const";

const data = [
  {
    title: "Junior Software Developer, I-Asiatic Innovations",
    date: "November 2016 - February 2018",
    list: [
      "Enhanced previous versions of application UI using ReactJS, Redux, Bootstrap CSS Modules for better user experience",
      "Designed and implemented marketing website designs for clients' businesses",
      "Created payment and adjudication modules for loan management system",
      "Implemented compliance documents workflow from generation, upload to audit",
    ],
  },
  {
    title: "Software Developer, Unexus Medical Solutions Inc.",
    date: "April 2018 - June 2019",
    list: [
      "Created an application with the use of ReactJS for web,  React-Native for mobile, React Redux and Sass",
      "Enhanced user interface for better viewing on IOS and Android with different screen sizes",
      "Created a form builder with the use of Redux Forms for reports and data input",
      "Maintained AES/RSA data encryption for security",
    ],
  },
  {
    title: "Software Engineer, XSplit",
    date: "June 2019 - March 2023",
    list: [
      "Created a video presentation application with the use of React, Typescript, Redux, RxJS, Tailwind, Electron, Lingui and Rudderstack",
      "Developed features that allows users to add Google Slides, Spotify, Elgato Lights, audio visualizer, text overlay on a streaming application",
      "Collaborated with translators for the application's internationalization with the use of Crowdin",
      "Created features that manage presentations, re-sync projects, add overlays such as images, text, video, camera, windows and screens and web pages",
      "Enhanced UI components of a camera application using React and Figma",
    ],
  },
  {
    title: "Full-Stack Software Engineer, Phitopolis",
    date: "March 2023 - August 2023",
    list: [
      "Created a new look and feel, design flow, layouts and components design for the whole website application with Figma",
      "Collaborated on a website application with the use of React, Typescript, Next.js, Chakra UI, Python and Storybook",
      "Implemented a workflow for the UI and UX revamp on a website application such that all components would be themeable with minimal effort",
    ],
  },
];

const Employment = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.header}>Employment History</Text>
      {data.map((item) => {
        return (
          <View key={item.title}>
            <Text style={styles.subHeader}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <View style={styles.detailsContainer}>
              {item.list.map((item2, i) => (
                <View style={styles.row} key={i}>
                  <View style={styles.bullet}>
                    <Text>{"\u2022" + " "}</Text>
                  </View>
                  <Text style={styles.details}>{item2}</Text>
                </View>
              ))}
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Employment;

const styles = StyleSheet.create({
  view: {
    fontFamily: "Montserrat",
    paddingBottom: 30,
  },

  header: {
    fontSize: "14px",
    fontFamily: "SourceCodePro",
    marginBottom: "4px",
    color: PrimaryColors[3],
  },

  subHeader: {
    fontSize: "10px",
    marginTop: "8px",
    color: PrimaryColors[4],
  },

  date: {
    fontSize: "7px",
    color: "#adadad",
  },

  detailsContainer: {
    paddingLeft: "8px",
    paddingTop: "4px",
  },

  details: {
    fontSize: "9px",
    width: "100%",
  },

  row: {
    display: "flex",
    flexDirection: "row",

    padding: "2px 0",
  },

  bullet: {
    marginTop: "-7px",
  },
});
