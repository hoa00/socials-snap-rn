import {View, StyleSheet, FlatList, Text} from 'react-native';

import {
  APP_DIRECTORY_URI,
  filesInDirectory,
} from '../../utils/file-system.utils';
import {useEffect, useState} from 'react';

const getFiles = () => {
  if (!APP_DIRECTORY_URI) return;
  return filesInDirectory(APP_DIRECTORY_URI);
};

export default function FilesView() {
  const [listFiles, setFiles] = useState([]);

  useEffect(() => {
    getFiles().then((result) => {
      setFiles(
        result.map((file) => {
          return {
            title: file,
            id: file,
          };
        }),
      );
    });
  }, [getFiles]);

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({item}) => <Item title={item.title} />;

  return <FlatList data={listFiles} renderItem={renderItem} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 14,
  },
});
