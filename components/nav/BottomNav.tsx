import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Calendar from '../screens/Calendar';
import Entries from '../screens/Entries';
import More from '../screens/More';
import Stats from '../screens/Stats';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

function BottomNav() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
            <NavigationContainer >
                <Tab.Navigator
                    barStyle={{ backgroundColor: '#000', paddingBottom: 15 }}
                    initialRouteName="Calendar"
                    activeColor="#e91e63">
                    <Tab.Screen name="Calendar" component={Calendar}
                        options={{
                            tabBarLabel: 'Calendar',
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="calendar" color={color} size={26} />
                            ),
                        }} />
                    <Tab.Screen name="Entries" component={Entries}
                        options={{
                            tabBarLabel: 'Entries',
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="book" color={color} size={26} />
                            ),
                        }} />
                    <Tab.Screen name="Stats" component={Stats}
                        options={{
                            tabBarLabel: 'Stats',
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="chart-arc" color={color} size={26} />
                            ),
                        }} />
                    <Tab.Screen name="More" component={More}
                        options={{
                            tabBarLabel: 'More',
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="cog" color={color} size={26} />
                            ),
                        }} />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}

export default BottomNav