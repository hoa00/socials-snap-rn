import {NavigationContainer} from '@react-navigation/native';

import BottomTabNavigator from './BottomTabNavigator';

// const SCREENS = {
//   Home: {title: '⬇️ Socials Snap 📲', component: HomeView},
//   Library: {title: 'Library!', component: LibraryView},
//   SimpleStack: {title: 'Posting url to server!', component: PostingUrlView},
// };

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
