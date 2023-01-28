import {
	Button,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import styles from "../styles";
import ImagesPath from "../../Constants/ImagesPath";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import navigationStrings from "../../Constants/navigationStrings";

const Login = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.myStyle}>
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
			<View style={styles.row}>
				<Text style={styles.ft1}> Remember me</Text>

				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						navigation.navigate(navigationStrings.FORGOTPASSWORD);
					}}
				>
					<Text style={styles.ft}>Forgot Password?</Text>
				</TouchableOpacity>
			</View>

			<View>
				<TouchableOpacity
					style={styles.button1}
					onPress={() => {
						navigation.navigate(navigationStrings.HOME);
					}}
				>
					<Text style={styles.ft2}>LOG IN</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.fv}>
				<Text style={styles.acc}>Don't have an account?</Text>
				<TouchableOpacity
					style={styles.button3}
					onPress={() => {
						navigation.navigate(navigationStrings.NEWACCOUNT);
					}}
				>
					<Text style={styles.ft3}>CREATE AN ACCOUNT</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Login;
