import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import ContentPopUp from "../../Components/ContentPopUp";
import styles from "../styles";
const Home = () => {
	const [handleshow, setHandleshow] = useState(false);
	console.log("numValue", myNum);

function Home() {
	const refRBSheet = useRef();
	// const arr=new Array(7);
	const [data, setData] = useState("");
	console.log("data on home", data);
	const angle = 360 / 7;
	const circleDiameter = width(78);
	const circleRadius = width(39);
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
		<Wrapper isMain style={[{}]}>
			<StatusBar backgroundColor={'#F6CD5B'} />
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
					<Image source={appImages.logo} style={styles.imageStyle} />
					{arr.map((item, index) => {
						return (
							<TouchableOpacity
								onPress={() => {
									console.log("pressed", item),
										setData(item),
										refRBSheet.current.open();
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
				<RBSheet
					ref={refRBSheet}
					closeOnDragDown={true}
					closeOnPressMask={true}
					height={height(57.5)}
					customStyles={{
						container: {
							justifyContent: "center",
							alignItems: "center",
							borderTopLeftRadius: 45,
							borderTopRightRadius: 45,
							// backgroundColor:'red'
						},
						wrapper: {
							backgroundColor: "transparent",
						},
					}}
				>
					<BackgroundImage source={data.image} style={styles.rbBGImageStyle}>
						<View style={styles.rbNameMainView}>
							<Text style={styles.rbNameText}>{data.name}</Text>
							<Text style={styles.membersText}>
								136 members joined the room
							</Text>
							<View style={{ paddingHorizontal: width(9) }}>
								<Buttons.Colored
									text="START TALK"
									textStyle={{ fontSize: fontSize.h8, color: colors.welcome }}
									buttonStyle={{
										backgroundColor: colors.yellow,
										marginVertical: height(5),
									}}
									onPress={() => (
										refRBSheet.current.close(),
										navigate(routes.chat, { data: data })
									)}
								/>
							</View>
							<Spacer isDoubleBase />
						</View>
					</BackgroundImage>
				</RBSheet>
			</View>
		</Wrapper>
	);
}

export default Home;

const styles = StyleSheet.create({
	chatRoomText: {
		textAlign: "center",
		fontFamily: fontFamily.appTextBold,
		fontSize: totalSize(2.8),
		color: colors.welcome,
		marginTop: height(4),
	},
	jionRoomText: {
		textAlign: "center",
		fontFamily: fontFamily.appTextBold,
		fontSize: totalSize(2),
		color: colors.welcome,
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
		fontFamily: fontFamily.appTextBold,
		color: colors.black,
		fontSize: totalSize(3),
	},
	membersText: {
		marginTop: height(2),
		textAlign: "center",
		fontFamily: fontFamily.appTextRegular,
		color: colors.black,
		fontSize: totalSize(1.9),
	},
	circleImageStyle: {
		height: totalSize(6),
		width: totalSize(6),
		borderRadius: 100,
	},
	roomNameText: {
		fontFamily: fontFamily.appTextBold,
		fontSize: totalSize(1.3),
		color: colors.welcome,
		marginTop: height(1),
	},
	imageStyle: { height: totalSize(15), width: totalSize(15) },
});
