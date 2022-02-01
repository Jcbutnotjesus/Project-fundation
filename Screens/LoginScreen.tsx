import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { Button, Colors, Headline, TextInput } from "react-native-paper";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisble, setIsVisible] = useState(true);

  return (
    <View>
      <View style={styles.header}>
        <Headline style={styles.headerText}>SpaceCraft</Headline>
      </View>
      <View style={styles.content}>
      <TextInput
      label="Email"
      value={email}
      onChangeText={(text: React.SetStateAction<string>) => setEmail(text)}
      style="height:16px, padding:10px"
    />

<TextInput
      label="Password"
      value={password}
      onChangeText={(text: React.SetStateAction<string>) => setPassword(text)}
      style="padding-bot:10px"
    />
        <Button
          onPress={console.log("yolo")}
          mode="contained"
        >
          Login
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
  header: {
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    backgroundColor: Colors.blue200,
  },
  headerText: {
    color: Colors.white,
    fontWeight: "bold",
    textTransform: "uppercase",
  }
});

export default LoginScreen;