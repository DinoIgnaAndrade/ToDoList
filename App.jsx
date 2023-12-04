import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';

import InputItem from './components/InputItem';
import { useState } from 'react';

export default function App() {

  const [visibleModalInput, setVisibleModalInput] = useState(false);
  console.log(visibleModalInput)

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./images/Background.jpg')}
        style={styles.background}
      />
      <InputItem
        visibleModalInput={visibleModalInput}
        setVisibleModalInput={setVisibleModalInput}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    ...StyleSheet.absoluteFillObject,
  }
});
