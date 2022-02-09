import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SnapView from '../views/snap/snap.view';

export default function SnapStackNavContainer() {
  const SnapStack = createNativeStackNavigator();

  return (
    <SnapStack.Navigator>
      <SnapStack.Screen
        name="SnapHome"
        component={SnapView}
        options={{
          title: '📲 Socials Snap ⬇️',
        }}
      />
    </SnapStack.Navigator>
  );
}
