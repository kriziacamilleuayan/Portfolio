import { View, StyleSheet, Text } from "@react-pdf/renderer";

const Languages = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.header}>Languages</Text>
      <Text style={styles.detail}>Tagalog</Text>
      <Text style={styles.detail}>English</Text>
    </View>
  );
};

export default Languages;

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
});
