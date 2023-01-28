import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
	myStyle: {
		flex: 1,
		backgroundColor: "white",
		// justifyContent: "center",
		alignItems: "center",
	},
	txt: {
		fontSize: "30",
		fontWeight: "600",
		marginTop: 50,
		marginLeft: 20,
	},
	TextInput: {
		width: 340,
		paddingVertical: 7,
		fontSize: 18,
		height: 43,
		fontSize: 14,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "#eaeaea",
		backgroundColor: "#fafafa",
		paddingLeft: 10,
	},
	btn: {

		backgroundColor: 'black',
		color: "blue"
		// fontSize:24,
		// width:20,
		// height:20,
	},
	text: {
		color: 'Black',
	},
	ft: {
		marginTop: 20,
		marginLeft: 90,
		fontWeight: "bold"
	},
	ft1: {
		marginTop: 20,

	},
	ft2: {
		marginTop: 12,
		marginRight: 8,
		fontWeight: "bold",
		textAlign: "center",
		color: "white"
	},
	ft3: {
		marginTop: 12,
		marginRight: 8,
		fontWeight: "bold",
		textAlign: "center",
		color: "black"
	},
	row: {
		flexDirection: "row"
	},
	button1: {
		marginTop: 25,
		width: 260,
		// paddingVertical: 7,

		height: 45,
		borderRadius: 99,
		borderWidth: 2,
		borderColor: "black",
		backgroundColor: "black",
		// paddingLeft: 10,
	},
	button3: {
		marginTop: 25,
		width: 260,
		// paddingVertical: 7,

		height: 45,
		borderRadius: 99,
		borderWidth: 2,
		borderColor: "#eaeaea",
		backgroundColor: "#fafafa",
	},
	acc: {
		textAlign: "center",
		marginTop: 10
	},
	fv: {
		marginTop: 180
	},
	text: {
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "center",
		marginTop: 150
	},
	txtt: {
		marginLeft: 30,
		marginTop: 50
	},
	button4: {
		marginTop: 25,
		width: 260,
		// paddingVertical: 7,
		marginLeft: 50,
		height: 45,
		borderRadius: 99,
		borderWidth: 2,
		borderColor: "black",
		backgroundColor: "black",
	},
	views: {
		alignItems: "center"
	}
});

export default styles;
