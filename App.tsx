import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Dogis from './Components/Api/Api';


function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Dogis/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;