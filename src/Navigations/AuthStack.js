import React from "react";
import { InitialScreen, Login, Signup, Home } from "../Screens";
import navigationStrings from "../Constants/navigationStrings";
export default function (Stack) {
<<<<<<< Updated upstream
	return (
		<>
			<Stack.Screen
				name={navigationStrings.INITIAL_SCREEN}
				component={InitialScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={navigationStrings.LOGIN}
				component={Login}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={navigationStrings.SIGNUP}
				component={Signup}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={navigationStrings.HOME}
				component={Home}
				options={{ headerShown: false }}
			/>
		</>
	);
=======
  return (
    <>
      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.INITIAL_SCREEN}
        component={InitialScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.SIGNUP}
        component={Signup}
        options={{ headerShown: false }}
      />
    </>
  );
>>>>>>> Stashed changes
}
