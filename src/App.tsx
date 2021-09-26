import React from "react";
import { View } from "react-native";

import { ThemeProvider } from "styled-components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import useUi from "./contexts/ui/useUi";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import RootNav from "./navigators/RootNav";

//Components
import Loading from "./components/Loading";

const App: React.FC = () => {
  const { theme } = useUi();
  const insets = useSafeAreaInsets();

  const [loaded] = useFonts({
    RobotoMono: require("./fonts/RobotoMono.ttf"),
  });

  if (!loaded) return <Loading />;

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar style={theme.title === "light" ? "dark" : "light"} />
        <View
          style={{
            height: insets.top,
            width: "100%",
            backgroundColor: theme.colors.appBar,
          }}
        />
        <RootNav />
        <View
          style={{
            height: insets.bottom,
            width: "100%",
            backgroundColor: theme.colors.appBar,
          }}
        />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
