import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
// import styles from "../Screens/styles";

const BtnComp = ({ name, onPress, textColor, buttonColor }) => {
	// const { name, onPress } = props;
	return (
		<TouchableOpacity
			style={{
				backgroundColor: buttonColor,
				padding: 8,
				width: "50%",
				alignItems: "center",
				marginVertical: 20,
				borderRadius: 30,
			}}
			onPress={onPress}
		>
			<Text style={{ color: textColor, fontSize: 20, height: 25 }}>{name}</Text>
		</TouchableOpacity>
	);
};
export default BtnComp;
