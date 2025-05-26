import { View, StyleSheet, Text } from "@react-pdf/renderer";

const Skills = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.header}>Skills</Text>
      <Text style={styles.detail}>React</Text>
      <Text style={styles.detail}>React Native</Text>
      <Text style={styles.detail}>Redux</Text>
      <Text style={styles.detail}>React Query</Text>
      <Text style={styles.detail}>Next.js</Text>
      <Text style={styles.detail}>TypeScript</Text>
      <Text style={styles.detail}>JavaScript</Text>
      <Text style={styles.detail}>Prisma</Text>
      <Text style={styles.detail}>Git</Text>
      <Text style={styles.detail}>HTML & CSS</Text>
      <Text style={styles.detail}>Figma</Text>
    </View>
  );
};

export default Skills;

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
