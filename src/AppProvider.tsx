import React from "react";

import { MainProvider } from "./contexts/main";
import { UiProvider } from "./contexts/ui";

import { SafeAreaProvider } from "react-native-safe-area-context";

const AppProvider: React.FC = ({ children }) => {
  return (
    <SafeAreaProvider>
      <UiProvider>
        <MainProvider>{children}</MainProvider>
      </UiProvider>
    </SafeAreaProvider>
  );
};

export default AppProvider;
