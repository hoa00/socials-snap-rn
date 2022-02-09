import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SnapStackNavContainer from './SnapStackNavigator';
import LibraryStackNavContainer from './LibraryStackNavigator';
//
// const SCREENS = {
//   Home: {title: '⬇️ Socials Snap 📲', component: HomeView},
//   Library: {title: 'Library!', component: LibraryView},
//   SimpleStack: {title: 'Posting url to server!', component: PostingUrlView},
// };

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="SnapTab"
          component={SnapStackNavContainer}
          options={{tabBarLabel: 'Snap!!', headerShown: false}}
        />
        <Tab.Screen
          name="LibraryTab"
          component={LibraryStackNavContainer}
          options={{tabBarLabel: 'Library!!', headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
