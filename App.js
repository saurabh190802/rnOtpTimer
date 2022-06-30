import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RnOtpTimer from './components/RnOtpTimer';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignSelf: 'center',
      }}>
      <RnOtpTimer
        minute={1}
        second={30}
        fontsize={20}
        fontfamily={'Poppins-Regular'}
        textcolor={'blue'}
        labelfontsize={20}
        labelfontfamily={'Poppins-Regular'}
        labelcolor={'blue'}
        labeltext="want otp again"
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
