// ./src/components/Header.tsx
import  View  from "react-native";
import { Text } from "react-native-paper";
import { StyleSheet } from "react-native";


const Header = (props: JSX.IntrinsicAttributes) => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.header}
        {...props}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  header: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: "center",
    marginBottom: 12,
  },
});

export default Header;