import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { height, totalSize, width } from "react-native-dimension";
import ImagesPath from "../../Constants/ImagesPath";
import ContentPopUp from "../../Components/ContentPopUp";
import navigationStrings from "../../Constants/navigationStrings";
function Home() {
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
			poster: ImagesPath.housePartyPosters,
			name: "House Party",
		},
		{
			poster: ImagesPath.kittyChatsPosters,
			image: ImagesPath.kittyChats,
			name: "Kitty Chats",
		},
		{
			poster: ImagesPath.foodClubPosters,
			image: ImagesPath.foodClub,
			name: "Food Club",
		},
		{
			poster: ImagesPath.bdPartyPosters,
			image: ImagesPath.bdParty,
			name: "Birthday Party",
		},
		{
			poster: ImagesPath.raveRoomPosters,
			image: ImagesPath.raveRoom,
			name: "Rave Room",
		},
		{
			poster: ImagesPath.pineApplePartyPosters,
			image: ImagesPath.pineAppleParty,
			name: "Pineapple Party",
		},
		{
			poster: ImagesPath.frindSquadPosters,
			image: ImagesPath.frindSquad,
			name: "Friends Squad",
		},
	];
	return (
		<View style={{ flex: 1 }}>
			<View style={{ backgroundColor: "#F6CD5B", height: 140 }}>
				<Image
					source={ImagesPath.logo2}
					style={{
						width: 180,
						height: 50,
						marginTop: 65,
						marginLeft: 20,
						position: "absolute",
					}}
				/>
			</View>
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
						image={data.poster}
						data={data}
					/>
				)}
			</View>
		</View>
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
