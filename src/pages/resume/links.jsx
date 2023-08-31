import { View, StyleSheet, Text, Link } from "@react-pdf/renderer";
import { github, linkedIn, portfolio } from "../../const";

const Links = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.header}>Links</Text>
      <Link style={styles.detail} src={portfolio}>
        Portfolio
      </Link>
      <Link style={styles.detail} src={github}>
        Github
      </Link>
      <Link style={styles.detail} src={linkedIn}>
        LinkedIn
      </Link>
    </View>
  );
};

export default Links;

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
    color: "white",
  },
});
