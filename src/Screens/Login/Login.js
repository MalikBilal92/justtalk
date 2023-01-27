import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import styles from "../Home/styles";
import ImagesPath from "../../Constants/ImagesPath";
import { Image } from "react-native";

const Login = () => {
	return (
		<View style={styles.myStyle}>
			<Text>Code working Perfectly but your partner is Just Dash</Text>
			{/* <Image source={ImagesPath.iconImage} style={{ marginTop: 100 }} />
			<Text style={style.txt}>Welcome to Login!</Text>
			<View>
				<Text>Email</Text>

				<TextInput
					style={{
						paddingHorizontal: 250,
						borderWidth: 1,
						borderRadius: 1,
						fontSize: 18,
						paddingVertical: 7,
						height: 43,
						fontSize: 14,
						borderRadius: 5,
						borderWidth: 1,
						borderColor: "#eaeaea",
						backgroundColor: "#fafafa",
						paddingLeft: 10,
						marginTop: 5,
						marginBottom: 5,
					}}
					placeholder="Username"
				/>
			</View>
			<View>
				<Text>Password</Text>
				<TextInput
					style={{
						paddingHorizontal: 250,
						borderWidth: 1,
						borderRadius: 1,
						fontSize: 18,
						paddingVertical: 7,
						height: 43,
						fontSize: 14,
						borderRadius: 5,
						borderWidth: 1,
						borderColor: "#eaeaea",
						backgroundColor: "#fafafa",
						paddingLeft: 10,
						marginTop: 5,
						marginBottom: 5,
					}}
					placeholder="Password"
				/>
			</View>
			<Text style={{ fontVariant: "bold" }}>Forgot Password?</Text> */}
		</View>
	);
};
const style = StyleSheet.create({
	txt: {
		fontSize: "30",
		fontWeight: "600",
		marginTop: 50,
		marginLeft: 20,
	},
	TextInput: {},
});

export default Login;
