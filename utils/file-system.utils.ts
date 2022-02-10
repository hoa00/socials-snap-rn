import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';

const URI = 'http://techslides.com/demos/sample-videos/small.mp4';

export default function downloadResumable(
  uri: string,
  callback:
    | FileSystem.FileSystemNetworkTaskProgressCallback<FileSystem.DownloadProgressData>
    | undefined,
): FileSystem.DownloadResumable {
  // Get file name by last element of "/"
  const fileNameFromURI = uri.split('/').pop();

  return FileSystem.createDownloadResumable(
    uri,
    FileSystem.documentDirectory + fileNameFromURI,
    {},
    callback,
  );
}

export const filesInDirectory = FileSystem.readDirectoryAsync;
export const APP_DIRECTORY_URI = FileSystem.documentDirectory;

// Đoạn ví dụ Bắt đầu download
// try {
//   const {uri} = await downloadResumable.downloadAsync();
//   console.log('Finished downloading to ', uri);
// } catch (e) {
//   console.error(e);
// }

// Đoạn ví dụ Tạm dừng download
// try {
//   await downloadResumable.pauseAsync();
//   console.log('Paused download operation, saving for future retrieval');
//   AsyncStorage.setItem(
//     'pausedDownload',
//     JSON.stringify(downloadResumable.savable()),
//   );
// } catch (e) {
//   console.error(e);
// }

// Đoạn ví dụ Resume download
// try {
//   const {uri} = await downloadResumable.resumeAsync();
//   console.log('Finished downloading to ', uri);
// } catch (e) {
//   console.error(e);
// }

//To resume a download across app restarts, assuming the the DownloadResumable.savable() object was stored:
// const downloadSnapshotJson = await AsyncStorage.getItem('pausedDownload');
// const downloadSnapshot = JSON.parse(downloadSnapshotJson);
// const downloadResumable = new FileSystem.DownloadResumable(
//   downloadSnapshot.url,
//   downloadSnapshot.fileUri,
//   downloadSnapshot.options,
//   callback,
//   downloadSnapshot.resumeData,
// );
//
// try {
//   const {uri} = await downloadResumable.resumeAsync();
//   console.log('Finished downloading to ', uri);
// } catch (e) {
//   console.error(e);
// }
