import {Button, StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import {DownloadProgressData} from 'expo-file-system';

import CountDownComponent from '../../../components/count-down/count-down.component';
import FileDownload, {
  APP_DIRECTORY_URI,
  filesInDirectory,
} from '../../../utils/file-system.utils';

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

  const [downloadProgress, setDownloadProgress] = useState<number | null>(null);

  const {inputUrl} = route.params;

  console.log('inputUrl', inputUrl);

  const downloadProgressCB = (
    currentDownloadProgress: DownloadProgressData,
  ) => {
    const progress =
      currentDownloadProgress.totalBytesWritten /
      currentDownloadProgress.totalBytesExpectedToWrite;
    console.log('progress', progress);
    setDownloadProgress(progress);
  };

  const startDownload = async () => {
    const URI = 'http://techslides.com/demos/sample-videos/small.mp4';
    try {
      const {uri} = await FileDownload(URI, downloadProgressCB).downloadAsync();
      console.log('Finished downloading to ', uri);
    } catch (e) {
      console.error(e);
    }
  };

  const showFiles = () => {
    if (!APP_DIRECTORY_URI) return;

    filesInDirectory(APP_DIRECTORY_URI).then((res) => {
      console.log('res', res);
    });
  };

  return (
    <View style={styles.modalContainer}>
      <Text>PostingUrlView</Text>
      <Text>Day la view hien thi quang cao full trang?</Text>
      {/*<CountDownComponent<ICloseButtonHandler>*/}
      {/*  onFinished={closeButtonHandler}*/}
      {/*/>*/}
      <Button title="Start DL" onPress={startDownload} />
      <Button title="Show files DL" onPress={showFiles} />
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
