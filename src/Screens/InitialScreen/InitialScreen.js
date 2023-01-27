import {
<<<<<<< Updated upstream
	StyleSheet,
	Text,
	View,
	ImageBackground,
	SafeAreaView,
	TouchableOpacity,
=======
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Image
>>>>>>> Stashed changes
} from "react-native";
import React from "react";
import ImagesPath from "../../Constants/ImagesPath";
import colors from "../../styles/colors";
<<<<<<< Updated upstream
const InitialScreen = ({ navigation }) => {
	ImagesPath;
	// const { navigation } = props.navigation;
	return (
		<ImageBackground
			style={{ flex: 1, justifyContent: "flex-end" }}
			source={ImagesPath.bgImage}
		>
			<SafeAreaView>
				<TouchableOpacity
					style={styles.btn}
					onPress={() => navigation.navigate("Home")}
				>
					<Text style={styles.text}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.btn1}>
					<Text style={styles.text}>Sign Up</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</ImageBackground>
	);
=======
const InitialScreen = () => {
  ImagesPath;
  return (
    <ImageBackground
      style={{ flex: 1, justifyContent: "flex-end" }}
      source={ImagesPath.bgImage}
    >
      <SafeAreaView>
        <TouchableOpacity style={styles.btn} onPress={{naiv}}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
>>>>>>> Stashed changes
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
