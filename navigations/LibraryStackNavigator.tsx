import LibraryView from '../views/library/library.view';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function LibraryStackNavContainer() {
  const LibraryStack = createNativeStackNavigator();
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen
        name="Library"
        component={LibraryView}
        options={{
          title: 'Library?',
        }}
      />
    </LibraryStack.Navigator>
  );
}
