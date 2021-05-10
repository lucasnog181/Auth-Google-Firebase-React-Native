
import React from "react";
import Dashboard from "../screens/Dash";

import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Dashboard" component={Dashboard} />
    </AppStack.Navigator>
);


export default AppRoutes;