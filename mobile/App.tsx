import React from 'react';
import { 
  useFonts, 
  Nunito_600SemiBold,
  Nunito_700Bold, 
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito';

import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Routes />
  );
}