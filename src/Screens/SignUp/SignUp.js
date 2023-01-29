import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";
import ImagesPath from "../../Constants/ImagesPath";
import navigationStrings from "../../Constants/navigationStrings";
const SignUp = () => {
	const [handleshow, setHandleshow] = useState(false);

	const navigation = useNavigation();
	return (
		<View style={styles.myStyle}>
			<Image source={ImagesPath.iconImage} style={{ marginTop: 100 }} />
			<Text style={styles.txt}>Welcome to Signup!</Text>
			<View>
				<Text>Username</Text>

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
			<View>
				<Text>Confirm Password</Text>
				<TextInput
					style={styles.TextInput}
					secureTextEntry={true}
					placeholder="Password"
				/>
			</View>
			<View style={styles.row}>
				<Text style={styles.ft1}> Accept T&C, Privacy Policy</Text>
			</View>

			<View>
				<TouchableOpacity
					style={styles.button1}
					onPress={() => navigation.navigate(navigationStrings.LOGIN)}
				>
					<Text style={styles.ft2}>SIGNUP</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.fv}>
				<Text style={styles.acc}>Already have an account?</Text>
				<TouchableOpacity
					style={styles.button3}
					onPress={() => navigation.navigate(navigationStrings.LOGIN)}
				>
					<Text style={styles.ft3}>LOGIN</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

//make this component available to the app
export default SignUp;
