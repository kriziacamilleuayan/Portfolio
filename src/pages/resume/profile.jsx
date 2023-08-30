import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { PrimaryColors } from "../../const";

const Profile = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.header}>Profile</Text>
      <View>
        <Text style={styles.summary}>
          I seek to pursue opportunities that allow me to enhance my front end
          development skills and cultivate a positive workplace while learning
          from, and building, a collaborative team environment.
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
