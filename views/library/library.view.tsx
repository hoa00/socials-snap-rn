import {Text, View} from 'react-native';
import FilesView from './files.view';

export default function LibraryView() {
  return (
    <View>
      <Text>Library View Components</Text>
      <Text>This view maybe display your downloaded (snapped) videos</Text>
      <FilesView />
    </View>
  );
}
