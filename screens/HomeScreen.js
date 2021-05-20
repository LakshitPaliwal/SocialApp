import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { logout } from '../components/Firebase/firebase';
import AuthUserProvider, { AuthUserContext } from '../navigation/AuthUserProvider';
import { useContext } from 'react';


const HomeScreen = () => {
 
  return (
    <View style={styles.container}>
     <Text>Home Screen</Text>
    </View>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  }
});
