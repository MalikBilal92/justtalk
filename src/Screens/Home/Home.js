import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	SafeAreaView,
} from "react-native";
import { height, totalSize, width } from "react-native-dimension";
import ImagesPath from "../../Constants/ImagesPath";
import navigationStrings from "../../Constants/navigationStrings";
function Home() {
	const refRBSheet = useRef();
	const navigation = useNavigation();
	const [data, setData] = useState("");
	console.log("data on home", data);
	const angle = 360 / 7;
	const circleDiameter = width(78);
	const circleRadius = width(39);
	const [handleshow, setHandleshow] = useState(false);

	const arr = [
		{
			image: ImagesPath.houseParty,
			name: "House Party",
		},
		{
			image: ImagesPath.kittyChats,
			name: "Kitty Chats",
		},
		{
			image: ImagesPath.foodClub,
			name: "Food Club",
		},
		{
			image: ImagesPath.bdParty,
			name: "Birthday Party",
		},
		{
			image: ImagesPath.raveRoom,
			name: "Rave Room",
		},
		{
			image: ImagesPath.pineAppleParty,
			name: "Pineapple Party",
		},
		{
			image: ImagesPath.frindSquad,
			name: "Friends Squad",
		},
	];
	return (
		<SafeAreaView style={{ flex: 1 }}>
			{/* <StatusBar backgroundColor={"#F6CD5B"} /> */}
			<View style={{ flex: 0.2 }}>
				<Text style={styles.chatRoomText}>These Chatrooms, You Bet!</Text>
				<Text style={styles.jionRoomText}>Join Any Room Now</Text>
			</View>

			<View style={{ flex: 0.7, alignItems: "center" }}>
				<View
					style={{
						width: circleDiameter,
						aspectRatio: 1,
						borderWidth: 2,
						borderColor: "#F6CD5B",
						borderRadius: circleRadius,
						justifyContent: "center",
						alignItems: "center",
						marginTop: height(6),
					}}
				>
					<Image source={ImagesPath.logo} style={styles.imageStyle} />
					{arr.map((item, index) => {
						return (
							<TouchableOpacity
								onPress={() => {
									console.log("pressed", item),
										setData(item),
										setHandleshow(!handleshow);
								}}
								style={{
									justifyContent: "center",
									alignItems: "center",
									position: "absolute",
									transform: [
										{ rotate: `${angle * index}deg` },
										{ translateY: -circleRadius },
										{ rotate: `-${angle * index}deg` },
									],
								}}
							>
								<Image source={item.image} style={styles.circleImageStyle} />
								<Text style={styles.roomNameText}>{item.name}</Text>
							</TouchableOpacity>
						);
					})}
				</View>

				{handleshow && (
					<ContentPopUp
						name={data.name}
						Description={"136 members joined the room"}
						image={data.image}
						omPress={navigation.navigate(navigationStrings.INITIAL_SCREEN, {
							data: data,
						})}
					/>
				)}
			</View>
		</SafeAreaView>
	);
}

export default Home;

const styles = StyleSheet.create({
	chatRoomText: {
		textAlign: "center",
		fontSize: totalSize(2.8),
		color: "#111820",
		marginTop: height(4),
	},
	jionRoomText: {
		textAlign: "center",
		fontSize: totalSize(2),
		color: "#111820",
		marginVertical: height(2),
	},
	rbBGImageStyle: {
		backgroundColor: "#fff",
		borderTopLeftRadius: 45,
		borderTopRightRadius: 45,
	},
	rbNameMainView: {
		width: width(100),
		backgroundColor: "#fff",
		marginTop: height(32.5),
	},
	rbNameText: {
		marginTop: height(3),
		textAlign: "center",
		color: "#111820",
		fontSize: totalSize(3),
	},
	membersText: {
		marginTop: height(2),
		textAlign: "center",
		color: "#111820",
		fontSize: totalSize(1.9),
	},
	circleImageStyle: {
		height: totalSize(8),
		width: totalSize(8),
		borderRadius: 100,
	},
	roomNameText: {
		fontSize: totalSize(1.3),
		color: "#111820",
		// marginTop: height(0.5),
	},
	imageStyle: { height: totalSize(15), width: totalSize(15) },
});
