import {Button, StyleSheet, TextInput, Text} from 'react-native';
import {useState} from 'react';
import {isUrl} from './url-input.service';

interface IUrlInputComponentProps {
  onSnapBtnClick: (inputUrl: string) => void;
}

export default function UrlInputComponent(props: IUrlInputComponentProps) {
  const [inputData, setInputData] = useState<string>('');
  const [err, setErr] = useState<string | null>(null);

  const inputDataHandler = (text: string) => {
    setInputData(text || '');
  };

  const btnClickHandler = () => {
    const VALID_URL = isUrl(inputData);
    if (VALID_URL) {
      setErr(null);
      props.onSnapBtnClick(inputData);
      setInputData(''); // reset input after click
    } else {
      setErr('Invalid URL');
    }
  };

  return (
    <>
      <TextInput
        value={inputData}
        onChangeText={inputDataHandler}
        placeholder="Input socials post link here!"
        style={styles.textInput}
      />
      {err && <Text style={styles.errorText}>{err}</Text>}
      <Button title="📲 Snap" onPress={btnClickHandler} />
    </>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'green',
    borderWidth: 1,
    width: '99%',
    height: 30,
    margin: 20,
    padding: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    margin: 5,
  },
});
