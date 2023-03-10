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
import { useNavigation } from "@react-navigation/native";
// create a component
const StatusPopUp = () => {
	const [isModalVisible, setModalVisible] = useState(true);
	const navigation = useNavigation();
	const toggleModalVisibility = () => {
		setModalVisible(!isModalVisible);
		navigation.navigate(navigationStrings.LOGIN);
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
						<Image style={styles.checkImage} source={ImagesPath.checkCircle} />
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
		top: "40%",
		left: "40%",
		elevation: 5,
		transform: [{ translateX: -(width * 0.4) }, { translateY: -90 }],
		height: 400,
		width: width,
		backgroundColor: "#fff",
		borderRadius: 60,
	},
	checkImage: {
		width: 65,
		height: 65,
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
