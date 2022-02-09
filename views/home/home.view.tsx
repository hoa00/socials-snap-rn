import {Button, StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import PostingUrlView from '../posting-url/posting-url.view';
import UrlInputComponent from '../../components/url-input/url-input.component';

export default function HomeView(props: {
  navigation: {navigate: (arg0: string) => void};
}) {
  const [postUrl, setPostUrl] = useState<string | null>(null);
  const [showPostingUrl, setShowPostingUrl] = useState<boolean>(false);

  const btnClickHandler = (inputUrl: string) => {
    setPostUrl(inputUrl || '');
    setShowPostingUrl(!!inputUrl);
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
        {/*<Text style={styles.textHeader}>⬇️ Socials Snap 📲</Text>*/}
        <Text>Save social's video/picture to your phone 🤩</Text>
        <UrlInputComponent onSnapBtnClick={btnClickHandler} />
        <PostingUrlView
          visible={showPostingUrl}
          setChangeShow={setShowPostingUrl}
        />
        {renderPostUrl()}
        {/*<Button*/}
        {/*  title="Go to Library"*/}
        {/*  onPress={() => props.navigation.navigate('Library')}*/}
        {/*/>*/}
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
});
