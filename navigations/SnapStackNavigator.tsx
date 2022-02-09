import HomeView from '../views/home/home.view';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function SnapStackNavContainer() {
  const SnapStack = createNativeStackNavigator();

  return (
    <SnapStack.Navigator>
      <SnapStack.Screen
        name="SnapHome"
        component={HomeView}
        options={{
          title: '⬇️ Socials Snap 📲',
        }}
      />
    </SnapStack.Navigator>
  );
}
