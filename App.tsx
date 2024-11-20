const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ChatHistory from "./screens/ChatHistory";
import DailyCheckUp from "./components/DailyCheckUp";
import CognitiveReframingExercise from "./screens/CognitiveReframingExercise";
import NewSessionChat from "./screens/NewSessionChat";
import HomescreenDesktop from "./screens/HomescreenDesktop";
import Resources from "./screens/Resources";
import NewSessionChat3 from "./screens/NewSessionChat3";
import CognitiveReframingLOADING from "./screens/CognitiveReframingLOADING";
import CognitiveReframingDone from "./screens/CognitiveReframingDone";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-ExtraBold": require("./assets/fonts/OpenSans-ExtraBold.ttf"),
    "OpenSans-BoldItalic": require("./assets/fonts/OpenSans-BoldItalic.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="ChatHistory"
              component={ChatHistory}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DailyCheckUp"
              component={DailyCheckUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CognitiveReframingExercise"
              component={CognitiveReframingExercise}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewSessionChat"
              component={NewSessionChat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomescreenDesktop"
              component={HomescreenDesktop}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Resources"
              component={Resources}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewSessionChat2"
              component={NewSessionChat3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CognitiveReframingLOADING"
              component={CognitiveReframingLOADING}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CognitiveReframingDone"
              component={CognitiveReframingDone}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
