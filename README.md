# react-native-otp-timer

### A React-Native Component that will start a countdown on pressing Resend OTP"

### install like this 
```sh
npm i react-native-otp-timer
```




https://user-images.githubusercontent.com/75023861/176608314-235d203b-69c3-4b2d-884e-6bc79783673d.mp4


| props | details |
| ------ | ------ |
|  minute | give the minutes you want for countdown (must given prop if nothing to give then just give 0 )|
| second| give the seconds you want for countdown (must given prop if nothing to give then just give 0 ) |
| textcolor | it will change the color of  time |
| fontsize | it will change the font size of time |
| fontfamily |it will change the font family of time |
| labeltext | it will change the text of label by default it was **"ResendOTP"**|
| labelfontsize, | it will chnage the font size of label |
| labelfontfamily, | it will change the font family of label |
|  labelcolor | it will change the color of label |

### simple usage with all props
```sh
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
```


## License

MIT

### Contact

Email: saurabhsatapathy0@gmail.com<br>
LinkedIn: https://www.linkedin.com/in/saurabh-satapathy-692a6a1b9/<br>
GitHub: https://github.com/saurabh190802 <br>
Twitter: https://mobile.twitter.com/SaurabhSatapat1

 
