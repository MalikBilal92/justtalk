import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";
const Home = () => {
	const [myNum, setNum] = useState(10);
	const changeNum = () => {
		setNum(20);
	};
	console.log("numValue", myNum);

	return (
		<View style={styles.myStyle}>
			<Text>Please subscribe my channel</Text>
			<Button title="Press me" onPress={changeNum} />
		</View>
	);
};

//make this component available to the app
export default Home;
