import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ImagesPath from "../../Constants/ImagesPath";
import colors from "../../styles/colors";
const InitialScreen = () => {
  ImagesPath;
  return (
    <ImageBackground
      style={{ flex: 1, justifyContent: "flex-end" }}
      source={ImagesPath.bgImage}
    >
      <SafeAreaView>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  btn: {
    height: 48,
    backgroundColor: colors.red,
    alignItems: "center",
    justifyContent: "center",
  },
  btn1: {
    height: 48,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
  },
});
