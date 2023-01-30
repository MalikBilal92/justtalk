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
import BtnComp from "./btnComp";
const { width } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
// create a component
const ContentPopUp = ({ name, Description, image, data }) => {
	const [isModalVisible, setModalVisible] = useState(true);
	const navigation = useNavigation();
	const toggleModalVisibility = () => {
		setModalVisible(!isModalVisible);
		navigation.navigate(navigationStrings.CHATSCREEN);
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
						<Image style={styles.doneImage} source={image} />
						<Text style={styles.heading}>{name}</Text>
						<Text style={styles.des}>{Description}</Text>
						<BtnComp
							name="Start Talk"
							onPress={toggleModalVisibility}
							buttonColor="#F6CD5B"
							textColor="black"
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
		top: "35%",
		left: "40%",
		elevation: 5,
		transform: [{ translateX: -(width * 0.4) }, { translateY: -90 }],
		height: 500,
		width: width,
		backgroundColor: "#fff",
		borderRadius: 60,
	},
	doneImage: {
		width: 450,
		borderTopLeftRadius: 75,
		borderTopRightRadius: 75,
		height: 250,
	},
	heading: {
		fontSize: 24,
		fontStyle: "Bold",
		fontWeight: "bold",
		marginVertical: 25,
		textAlign: "center",
		marginHorizontal: 70,
	},
	des: {
		fontSize: 16,
		marginVertical: 5,
		textAlign: "center",
		marginHorizontal: 70,
	},
});

//make this component available to the app
export default ContentPopUp;
