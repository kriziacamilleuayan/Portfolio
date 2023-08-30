import { View, StyleSheet, Text } from "@react-pdf/renderer";

const Details = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.header}>Details</Text>
      <Text style={styles.detail}>Makati City, 1214</Text>
      <Text style={styles.detail}>Philippines</Text>
      <Text style={styles.detail}>+639069495811</Text>
      <Text style={styles.email}>kriziacamilleuayan@gmail.com</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  view: {
    fontFamily: "Montserrat",
    paddingBottom: 30,
  },

  header: {
    fontSize: "14px",
    marginBottom: "4px",
    fontFamily: "SourceCodePro",
  },

  detail: {
    fontSize: "9px",
    paddingTop: "6px",
  },
  email: {
    fontSize: "8px",
    paddingTop: "6px",
  },
});
