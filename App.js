import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import Text from "./src/components/text/text";
import Home from "./src/screens/home";
import { colors } from "./src/theme/colors";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetails from "./src/screens/productDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    "SFPro-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
    "SFPro-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
    "SFPro-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
  });

  if (!loaded) {
    return <Text>Font is loading</Text>;
  }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={ProductDetails} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="white" />
    </>
  );
}
