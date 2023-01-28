import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import ContentPopUp from "../../Components/ContentPopUp";
import styles from "../styles";
const Home = () => {
	const [handleshow, setHandleshow] = useState(false);
	console.log("numValue", myNum);

	return (
		<View style={styles.myStyle}>
			<Text>Please subscribe my channel</Text>
			<Button title="Press me" onPress={() => setHandleshow(!handleshow)} />
			{handleshow && <ContentPopUp />}
		</View>
	);
};

//make this component available to the app
export default Home;
