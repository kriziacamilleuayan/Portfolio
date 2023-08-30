import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { PrimaryColors } from "../../const";

const Education = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.header}>Education</Text>
      <View>
        <Text style={styles.subHeader}>
          Bachelor of Science in Information Technology, Polytechnic University
          of the Philippines, Manila
        </Text>
        <Text style={styles.date}>June 2013 - May 2017</Text>
      </View>
    </View>
  );
};

export default Education;

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
    marginBottom: "4px",
    color: PrimaryColors[4],
    marginTop: "4px",
  },

  date: {
    fontSize: "7px",
    color: "#adadad",
  },

  details: {
    fontSize: "9px",
    width: "100%",
  },
});
