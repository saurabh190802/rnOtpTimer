import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RnOtpTimer from './components/RnOtpTimer';

const App = () => {
  return (
    <View style={{flex:1,justifyContent:'center',flexDirection:'column',alignSelf:'center'}}>
      <RnOtpTimer />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
