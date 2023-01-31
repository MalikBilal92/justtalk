import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import {
	GiftedChat,
	InputToolbar,
	Send,
	Avatar,
} from "react-native-gifted-chat";
import { Icon } from "@rneui/themed";
import { height, totalSize, width } from "react-native-dimension";
import { Octicon } from "@primer/octicons-react";
import { useNavigation } from "@react-navigation/native";
import ImagesPath from "../../Constants/ImagesPath";
import navigationStrings from "../../Constants/navigationStrings";

const ChatScreen = ({ route }) => {
	const [messages, setMessages] = useState([]);
	const { title, id, members, image } = route.params;
	console.log("parrram", route.params);
	const { name } = "Rana Noman Abbas";
	// const { image } = ImagesPath.houseParty;
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
		<>
			<View style={styles.chatScreenHeader}>
				<TouchableOpacity
					onPress={() => navigation.navigate(navigationStrings.HOME)}
					style={{
						marginHorizontal: width(3),
					}}
				>
					<Icon name="chevron-back" type="ionicon" color="#000" size={25} />
				</TouchableOpacity>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Image source={image} style={styles.headerImageStyle} />
					<View style={{ marginLeft: width(3) }}>
						<Text style={styles.headerNameText}>{title}</Text>
						<Text style={styles.headerMemberText}>
							{members + " "}
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
								textInputStyle={{
									color: "#ffff",
									marginTop: 13,
									marginLeft: 25,
								}}
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

			{/* <View>
				// <Text>Rana Noman Abbas</Text>
				//{" "}
			</View> */}
		</>
	);
};

export default ChatScreen;

const styles = StyleSheet.create({
	chatScreenHeader: {
		flexDirection: "row",
		height: totalSize(12.5),
		backgroundColor: "#F6CD5B",
		alignItems: "center",
		paddingTop: 50,
	},
	headerImageStyle: {
		height: totalSize(5),
		width: totalSize(5),
		borderRadius: 100,
		// marginLeft: 15,
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
