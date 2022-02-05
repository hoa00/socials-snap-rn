import {StatusBar} from 'expo-status-bar';
import HomeView from './src/views/home/home.view';

export default function App() {
  return (
    <>
      <HomeView />
      <StatusBar style="auto" />
    </>
  );
}
