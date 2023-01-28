//import liraries
import { useState } from "react";
import {
	Button,
	StyleSheet,
	Modal,
	View,
	Text,
	Image,
	Dimensions,
	SafeAreaView,
} from "react-native";
import navigationStrings from "../Constants/navigationStrings";
import ImagesPath from "../Constants/ImagesPath";
import BtnComp from "./btnComp";
const { width } = Dimensions.get("window");

// create a component
const StatusPopUp = ({ navigation }) => {
	const [isModalVisible, setModalVisible] = useState(true);

	const toggleModalVisibility = () => {
		setModalVisible(!isModalVisible);
		navigation.navigate("login");
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
						<Image
							style={styles.doneImage}
							source={ImagesPath.confirmationDone}
						/>
						<Text style={styles.heading}>
							Password reset link sent to your email
						</Text>
						<BtnComp
							name="Continue"
							onPress={toggleModalVisibility}
							buttonColor="#363333"
							textColor="white"
						></BtnComp>
					</View>
				</View>
			</Modal>
		</SafeAreaView>
	);
};

// define your styles
const styles = StyleSheet.create({
	viewWrapper: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(0, 0, 0, 0.2)",
	},
	modalView: {
		alignItems: "center",
		// justifyContent: "center",
		// position: "absolute",
		top: "40%",
		left: "40%",
		elevation: 5,
		transform: [{ translateX: -(width * 0.4) }, { translateY: -90 }],
		height: 400,
		width: width,
		backgroundColor: "#fff",
		borderRadius: 60,
	},
	doneImage: {
		width: 100,
		height: 100,
		marginVertical: 30,
	},
	heading: {
		fontSize: 24,
		fontStyle: "Bold",
		fontWeight: "bold",
		marginVertical: 25,
		textAlign: "center",
		marginHorizontal: 70,
	},
});

//make this component available to the app
export default StatusPopUp;
