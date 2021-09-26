import React from "react";
import { View, ActivityIndicator } from "react-native";

import useUi from "../contexts/ui/useUi";

const index: React.FC = () => {
  const { theme } = useUi();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator color={theme.colors.primary} size='large' />
    </View>
  );
};

export default index;
