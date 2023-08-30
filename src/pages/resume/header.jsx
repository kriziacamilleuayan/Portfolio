import { View, StyleSheet, Text } from "@react-pdf/renderer";

const Header = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.name}>Krizia Camille Uayan</Text>
      <Text style={styles.position}>Front End Engineer</Text>
      <View style={styles.separator} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  view: {
    fontFamily: "Montserrat",
    textAlign: "center",
    paddingBottom: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  name: {
    fontSize: "16px",
    marginBottom: "16px",
  },

  position: {
    fontSize: "10px",
    fontFamily: "SourceCodePro",
  },

  separator: {
    width: 40,
    marginTop: 15,
    borderBottom: "1px solid white",
  },
});
