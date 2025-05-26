import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { PrimaryColors } from "../../const";

const Profile = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.header}>Profile</Text>
      <View>
        <Text style={styles.summary}>
          I enjoy turning design ideas into responsive, accessible, and polished
          interfaces. I am looking for opportunities where I can deepen my
          skills, explore new technologies, and contribute to a collaborative
          team that values creativity, growth, and continuous learning.
        </Text>
      </View>
    </View>
  );
};

export default Profile;

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

  summary: {
    fontSize: "9px",
    width: "100%",
  },
});
