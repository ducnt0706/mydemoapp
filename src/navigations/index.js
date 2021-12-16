import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Homepage from '../screens/Homepage';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

const Navigation = (props) => {
    const { initialRouteName } = props;
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName={initialRouteName}
            >
                <Stack.Screen name="Home" component={Homepage} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
