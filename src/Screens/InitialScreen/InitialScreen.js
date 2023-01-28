import {
	StyleSheet,
	Text,
	View,

	SafeAreaView,
	TouchableOpacity,
} from "react-native";
import { useState } from "react";
import ContentPopUp from "../../Components/ContentPopUP";
import colors from "../../styles/colors";


const InitialScreen = ({ navigation }) => {
	const [handleshow, setHandleshow] = useState(false);

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
					onPress={() => setHandleshow(!handleshow)}
				>
					<Text style={styles.text}>Sign Up</Text>
				</TouchableOpacity>
				{handleshow && <ContentPopUp />}
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
