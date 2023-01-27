import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import styles from "../styles";
import ImagesPath from "../../Constants/ImagesPath";
import { Image } from "react-native";

const Login = () => {
	return (
		<View style={styles.myStyle}>
			<Text>Code working Perfectly but your partner is Just Dash</Text>
			<Image source={ImagesPath.iconImage} style={{ marginTop: 100 }} />
			<Text style={styles.txt}>Welcome to Login!</Text>
			<View>
				<Text>Email</Text>

				<TextInput style={styles.TextInput} placeholder="Username" />
			</View>
			<View>
				<Text>Password</Text>
				<TextInput
					style={styles.TextInput}
					secureTextEntry={true}
					placeholder="Password"
				/>
			</View>
		</View>
	);
};

export default Login;
