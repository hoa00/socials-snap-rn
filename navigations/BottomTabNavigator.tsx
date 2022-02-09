import Ionicons from '@expo/vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SnapStackNavContainer from './SnapStackNavigator';
import LibraryStackNavContainer from './LibraryStackNavigator';

export default function BottomTabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="SnapTab"
        component={SnapStackNavContainer}
        options={{
          tabBarLabel: 'Snap!!',
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            // You can return any component that you like here!
            return (
              <Ionicons
                name={focused ? 'ios-download' : 'ios-download-outline'}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="LibraryTab"
        component={LibraryStackNavContainer}
        options={{
          tabBarLabel: 'Library!!',
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            // You can return any component that you like here!
            return (
              <Ionicons
                name={focused ? 'ios-albums' : 'ios-albums-outline'}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
