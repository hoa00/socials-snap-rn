import {useState} from 'react';
import AppLoading from 'expo-app-loading';
import {StatusBar} from 'expo-status-bar';
import AppNavigator from './navigations/AppNavigator';

export default function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const loadResourcesAsync = () => {
    // fake Promise
    return Promise.resolve();
  };

  const handleFinishLoading = () => {
    setLoadingComplete(true);
  };

  const handleLoadingError = (error: Error) => {
    console.warn(error);
  };

  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={handleFinishLoading}
      />
    );
  } else {
    return (
      <>
        <StatusBar style="auto" />
        <AppNavigator />
      </>
    );
  }
}
