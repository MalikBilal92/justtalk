import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import StatusPopUp from "../../Components/StatusPopUP";
import styles from "../styles";
const Home = () => {
	const [myNum, setNum] = useState(10);
	const changeNum = () => {
		setNum(20);
	};
	const [handleshow, setHandleshow] = useState(false);
	console.log("numValue", myNum);

	return (
		<View style={styles.myStyle}>
			<Text>Please subscribe my channel</Text>
			<Button title="Press me" onPress={() => setHandleshow(!handleshow)} />
			{handleshow && <StatusPopUp />}
		</View>
	);
};

//make this component available to the app
export default Home;
