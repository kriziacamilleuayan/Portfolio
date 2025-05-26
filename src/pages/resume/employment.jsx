import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { PrimaryColors } from "../../const";

const data = [
  {
    title: "Junior Software Developer, I-Asiatic Innovations",
    date: "November 2016 - February 2018",
    list: [
      "Improved the user interface of existing applications using ReactJS, Redux, Bootstrap, and CSS Modules to enhance user experience",
      "Designed and built marketing websites for various client businesses",
      "Developed payment and adjudication features for a loan management system",
      "Implemented a workflow for compliance documents including generation, upload, and audit",
    ],
  },
  {
    title: "Software Developer, Unexus Medical Solutions Inc.",
    date: "April 2018 - June 2019",
    list: [
      "Built a cross-platform application using ReactJS for web and React Native for mobile, along with Redux and Sass",
      "Improved user interface responsiveness for various screen sizes on both iOS and Android",
      "Developed a form builder using Redux Forms for efficient report generation and data input",
      "Maintained data security through AES and RSA encryption methods",
    ],
  },
  {
    title: "Software Engineer, XSplit",
    date: "June 2019 - March 2023",
    list: [
      "Developed a video presentation tool using React, Typescript, Redux, RxJS, Tailwind, Electron, Lingui, and Rudderstack",
      "Created features that allow users to integrate Google Slides, Spotify, Elgato Lights, audio visualizations, and text overlays into a streaming application",
      "Worked with translators to support internationalization through the Crowdin platform",
      "Implemented tools to manage presentations and synchronize projects, with overlays such as images, text, videos, camera feeds, application windows, and web pages",
      "Improved user interface components of a camera-focused application using React and Figma",
    ],
  },
  {
    title: "Full-Stack Software Engineer, Viridian Technologies",
    date: "October 2023 - Present",
    list: [
      "Develops features, layouts, and components for a mobile application using React Native, GraphQL, React Query, Native Base, and Typescript",
      "Builds and maintains components and layouts for a web application using React, Next.js, GraphQL, React Query, Vite, and Typescript",
      "Creates backend logic and handles database operations using Prisma, PostgreSQL, and Typescript",
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
