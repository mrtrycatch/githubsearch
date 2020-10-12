import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/main';
import User from './pages/user';

const PagesStack = createStackNavigator();

const PagesStackScreen = () => (
    <PagesStack.Navigator
        screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#7159C1' },
            headerTintColor: '#FFF',
            headerBackTitleVisible: false,
        }}
    >
        <PagesStack.Screen
            name="Main"
            options={{
                title: 'Usuários',
            }}
            component={Main}
        />
        <PagesStack.Screen
            name="User"
            options={({ route }) => ({ title: route.params.user.name })}
            component={User}
        />
    </PagesStack.Navigator>
);

export default () => (
    <NavigationContainer>
        <PagesStackScreen />
    </NavigationContainer>
);
