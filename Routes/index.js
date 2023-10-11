import { NavigationContainer } from "@react-navigation/native";

import TabRoutes from "./Tab.Navigator";

export default function Routes(){
    return (
        <NavigationContainer>
          <TabRoutes />
        </NavigationContainer>
    )
}