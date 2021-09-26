import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Home from "../screens/home";

const RootStack = createStackNavigator();

import screenOpts from "../utils/defaultScreenOpts";

const RootNav: React.FC = () => {
  return (
    <RootStack.Navigator screenOptions={screenOpts}>
      <RootStack.Screen name='Home' component={Home} />
    </RootStack.Navigator>
  );
};

export default RootNav;
