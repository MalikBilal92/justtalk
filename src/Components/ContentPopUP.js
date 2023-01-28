//import liraries
import { useState } from "react";
import {
	Button,
	StyleSheet,
	Modal,
	View,
	TextInput,
	Dimensions,
	SafeAreaView,
} from "react-native";
import navigationStrings from "../Constants/navigationStrings";

const { width } = Dimensions.get("window");

// create a component
const ContentPopUp = ({ navigation }) => {
	const [isModalVisible, setModalVisible] = useState(true);

	const toggleModalVisibility = () => {
		setModalVisible(!isModalVisible);
		// navigation.navigate("signup");
	};

	return (
		<SafeAreaView>
			<Modal
				animationType="slide"
				transparent
				visible={isModalVisible}
				presentationStyle="overFullScreen"
			>
				<View style={styles.viewWrapper}>
					<View style={styles.modalView}>
						<TextInput
							placeholder="Set Counter..."
							// value={inputCountValue}
							style={styles.textInput}
							onChangeText={(value) => setInputCountValue(value)}
						/>
						<Button title="Close" onPress={toggleModalVisibility} />
					</View>
				</View>
			</Modal>
		</SafeAreaView>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#2c3e50",
	},
	viewWrapper: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(0, 0, 0, 0.2)",
	},
	modalView: {
		alignItems: "center",
		justifyContent: "center",
		// position: "absolute",
		top: "40%",
		left: "40%",
		elevation: 5,
		transform: [{ translateX: -(width * 0.4) }, { translateY: -90 }],
		height: 350,
		width: width,
		backgroundColor: "#fff",
		borderRadius: 7,
	},
});

//make this component available to the app
export default ContentPopUp;
