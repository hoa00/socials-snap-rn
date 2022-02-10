import {Button, StyleSheet, Text, View} from 'react-native';
import CountDownComponent from '../../../components/count-down/count-down.component';

interface IPostingUrlViewProps {
  route?: any;
  navigation?: any;
}

type ICloseButtonHandler = () => void;

export default function PostingUrlView({
  route,
  navigation,
}: IPostingUrlViewProps) {
  const closeButtonHandler: ICloseButtonHandler = () => {
    navigation.navigate('SnapHome');
  };

  const {inputUrl} = route.params;

  console.log('inputUrl', inputUrl);

  return (
    <View style={styles.modalContainer}>
      <Text>PostingUrlView</Text>
      <Text>Day la view hien thi quang cao full trang?</Text>
      <CountDownComponent<ICloseButtonHandler>
        onFinished={closeButtonHandler}
      />
      <Button title="Close" onPress={closeButtonHandler} color="#ccc" />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
