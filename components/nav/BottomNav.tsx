import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calendar from '../screens/Calendar';
import Entries from '../screens/Entries';
import More from '../screens/More';
import Stats from '../screens/Stats';
import React from 'react';

const Tab = createBottomTabNavigator();

function BottomNav() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Calendar" component={Calendar} />
                <Tab.Screen name="Entries" component={Entries} />
                <Tab.Screen name="Stats" component={Stats} />
                <Tab.Screen name="More" component={More} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default BottomNav