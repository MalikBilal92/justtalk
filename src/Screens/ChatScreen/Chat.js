import React, { useState } from "react";
import {
	View,
	Text,
	StatusBar,
	TouchableOpacity,
	Image,
	StyleSheet,
} from "react-native";
import { height, totalSize, width } from "react-native-dimension";
import {
	GiftedChat,
	InputToolbar,
	Send,
	Avatar,
} from "react-native-gifted-chat";
import navigationStrings from "../../Constants/navigationStrings";
import { useNavigation } from "@react-navigation/native";
import ImagesPath from "../../Constants/ImagesPath";
// import { ChevronLeftIcon } from "@primer/octicons-react";

// const arr = [
// 	{
// 		id: 1,
// 		image: ImagesPath.houseParty,
// 		poster: ImagesPath.housePartyPosters,
// 		name: "House Party",
// 	},
// 	{
// 		id: 2,
// 		poster: ImagesPath.kittyChatsPosters,
// 		image: ImagesPath.kittyChats,
// 		name: "Kitty Chats",
// 	},
// 	{
// 		id: 3,
// 		poster: ImagesPath.foodClubPosters,
// 		image: ImagesPath.foodClub,
// 		name: "Food Club",
// 	},
// 	{
// 		id: 4,
// 		poster: ImagesPath.bdPartyPosters,
// 		image: ImagesPath.bdParty,
// 		name: "Birthday Party",
// 	},
// 	{
// 		id: 5,
// 		poster: ImagesPath.raveRoomPosters,
// 		image: ImagesPath.raveRoom,
// 		name: "Rave Room",
// 	},
// 	{
// 		id: 6,
// 		poster: ImagesPath.pineApplePartyPosters,
// 		image: ImagesPath.pineAppleParty,
// 		name: "Pineapple Party",
// 	},
// 	{
// 		id: 7,
// 		poster: ImagesPath.frindSquadPosters,
// 		image: ImagesPath.frindSquad,
// 		name: "Friends Squad",
// 	},
// ];
function Chat({ route }) {
	const [messages, setMessages] = useState([]);
	const [name, image, id, members] = route;
	console.log("parrram", route);
	const navigation = useNavigation();

	const onSend = (messages = []) => {
		console.log("Message sent is :---", messages);
		const msg = messages[0];
		const mymsg = {
			...msg,
			username: name,
			createdAt: new Date(),
		};
		setMessages((previousMessages) =>
			GiftedChat.append(previousMessages, mymsg)
		);
	};

	return (
		<View isMain style={[{}]}>
			<StatusBar backgroundColor={colors.yellow} />
			<View style={styles.chatScreenHeader}>
				<TouchableOpacity
					onPress={() => navigation.navigate(navigationStrings.HOME)}
					style={{ marginHorizontal: width(3) }}
				>
					{/* <ChevronLeftIcon color="#000" size={25} /> */}
				</TouchableOpacity>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Image
						source={{
							uri: image,
						}}
						style={styles.headerImageStyle}
					/>
					<View style={{ marginLeft: width(3) }}>
						<Text style={styles.headerNameText}>{name}</Text>
						<Text style={styles.headerMemberText}>
							{members}
							members
						</Text>
					</View>
				</View>
			</View>

			<View style={{ flex: 1 }}>
				<GiftedChat
					messages={messages}
					onSend={(messages) => onSend(messages)}
					user={{
						_id: id || "qwerhjk",
					}}
					renderInputToolbar={(props) => {
						return (
							<InputToolbar
								{...props}
								containerStyle={{
									borderWidth: 1,
									marginHorizontal: width(1.7),
									borderRadius: 50,
									backgroundColor: "#111820",
									marginVertical: height(1),
									marginBottom: height(2),
								}}
								textInputStyle={{ color: "#ffff" }}
							/>
						);
					}}
					renderSend={(props) => (
						<Send
							{...props}
							containerStyle={{
								height: 45,
								width: 45,
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "#F6CD5B",
								borderRadius: 100,
								marginRight: -2,
							}}
						>
							<Image
								source={ImagesPath.sent}
								style={{
									width: 26,
									height: 26,
								}}
							/>
						</Send>
					)}
					renderAvatar={(props) => {
						return <Avatar {...props} />;
					}}
					renderMessage={(props) => {
						// console.log('-=-=-=-=', props);
						return (
							<View
								style={{
									// minHeight: 20,
									// backgroundColor: 'green',
									alignItems:
										props?.user?._id != props?.currentMessage?.user?._id
											? "flex-start"
											: "flex-end",
									alignSelf:
										props?.user?._id != props?.currentMessage?.user?._id
											? "flex-start"
											: "flex-end",
								}}
							>
								<Text
									style={{
										marginHorizontal: width(5),
										fontSize: totalSize(1.3),
										color: "#111820",
									}}
								>
									{name}
								</Text>
								<View
									key={Math.random()}
									style={{
										minHeight: 20,
										backgroundColor: "#fff",
										elevation: 3,
										borderRadius: 30,
										marginHorizontal: width(1.7),
										marginBottom: height(4),
										flexDirection:
											props?.user?._id != props?.currentMessage?.user?._id
												? "row"
												: "row-reverse",
										alignSelf:
											props?.user?._id != props?.currentMessage?.user?._id
												? "flex-start"
												: "flex-end",
									}}
								>
									<Image
										source={
											props?.currentMessage?.user?.avatar
												? { uri: props?.currentMessage?.user?.avatar }
												: ImagesPath.dummy
										}
										style={{
											height: height(6),
											width: height(6),
											borderRadius: 100,
										}}
									/>

									<View
										style={{
											padding: 10,
											alignSelf: "center",
										}}
									>
										<Text
											style={{
												fontSize: totalSize(1.6),
												color: "#111820",
												maxWidth: width(55),
												textAlign:
													props?.user?._id != props?.currentMessage?.user?._id
														? "left"
														: "right",
											}}
										>
											{props?.currentMessage?.text}
										</Text>
									</View>
								</View>
							</View>
						);
					}}
				/>
			</View>
		</View>
	);
}

export default Chat;

const styles = StyleSheet.create({
	chatScreenHeader: {
		flexDirection: "row",
		height: totalSize(10),
		backgroundColor: "#F6CD5B",
		alignItems: "center",
	},
	headerImageStyle: {
		height: totalSize(6),
		width: totalSize(6),
		borderRadius: 100,
	},
	headerNameText: {
		fontSize: totalSize(1.9),
		// fontFamily: fontFamily.appTextBold,
		color: "#111820",
	},
	headerMemberText: {
		fontSize: totalSize(1.4),
		// fontFamily: fontFamily.appTextRegular,
		color: "#111820",
	},
});
