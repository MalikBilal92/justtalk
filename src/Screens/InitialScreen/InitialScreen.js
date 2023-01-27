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

const InitialScreen = ({ navigation }) => {
	ImagesPath;
	// const { navigation } = props.navigation;
	return (
		<View style={{ flex: 1, justifyContent: "center" }}>
			<SafeAreaView>
				<TouchableOpacity
					style={styles.btn}
					onPress={() => navigation.navigate("login")}
				>
					<Text style={styles.text}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btn1}
					onPress={() => navigation.navigate("home")}
				>
					<Text style={styles.text}>Sign Up</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</View>
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
		marginTop: 50,
		backgroundColor: colors.blue,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: colors.white,
	},
});
