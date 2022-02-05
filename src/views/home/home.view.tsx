import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from 'react';

export default function HomeView() {
  const [inputData, setInputData] = useState<string>('');
  const [postUrl, setPostUrl] = useState<string | null>(null);

  const inputDataHandler = (text: string) => {
    setInputData(text || '');
  };

  const btnClickHandler = () => {
    setPostUrl(inputData || '');
  };

  const renderPostUrl = () => {
    if (postUrl) {
      return (
        <View style={{margin: 10}}>
          <Text>⬇️ You url: {postUrl}</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textHeader}>⬇️ Socials Snap 📲</Text>
        <Text>Save social's video/picture to your phone 🤩</Text>
        <TextInput
          value={inputData}
          onChangeText={inputDataHandler}
          placeholder="Input socials post link here!"
          style={styles.textInput}
        />
        <Button title="Snap 📲" onPress={btnClickHandler} />
        {renderPostUrl()}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    borderColor: 'green',
    borderWidth: 1,
    width: '99%',
    height: 30,
    margin: 20,
    padding: 5,
  },
});
