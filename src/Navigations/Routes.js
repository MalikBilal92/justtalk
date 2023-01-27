import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./AuthStack";
const Stack = createNativeStackNavigator();

const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>{AuthStack(Stack)}</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;

// const styles = StyleSheet.create({});
