import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';


const Tab = createBottomTabNavigator();

function BottomNav() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
                <Tab.Screen name="Details" component={DetailsScreen} options={{ title: 'Details' }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default BottomNav