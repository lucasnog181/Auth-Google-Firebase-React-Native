import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home'
import Splash from '../screens/Splash'


const Stack = createStackNavigator();


function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}

export default StackRoutes;