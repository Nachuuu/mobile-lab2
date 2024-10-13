import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ContactButton from './components/ContactButton'


const App = () => {
  return (
    <View style={styles.container}>
      <ContactButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 40, marginBottom: 20 },
});

export default App;