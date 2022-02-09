import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import {Dispatch, SetStateAction} from 'react';
import CountDownComponent from '../../components/count-down/count-down.component';

interface IPostingUrlViewProps {
  setChangeShow: Dispatch<SetStateAction<boolean>>;
  visible: boolean;
}

type ICloseButtonHandler = () => void;

export default function PostingUrlView({
  setChangeShow,
  visible,
}: IPostingUrlViewProps) {
  const closeButtonHandler: ICloseButtonHandler = () => {
    setChangeShow(false);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <Text>PostingUrlView</Text>
        <Text>Day la view hien thi quang cao full trang?</Text>
        <CountDownComponent<ICloseButtonHandler>
          onFinished={closeButtonHandler}
        />
        <Button title="Close" onPress={closeButtonHandler} color="#ccc" />
      </View>
    </Modal>
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
