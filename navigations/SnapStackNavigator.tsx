import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SnapView from '../views/snap/snap.view';
import PostingUrlView from '../views/snap/posting-url/posting-url.view';

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
      <SnapStack.Screen
        name="PostingUrl"
        component={PostingUrlView}
        options={{
          title: 'PostingUrlView!!!',
        }}
      />
    </SnapStack.Navigator>
  );
}
