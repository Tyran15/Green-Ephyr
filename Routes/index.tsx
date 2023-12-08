import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import TabRoutes from "./Tab.Navigator";

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}

export default Routes;
