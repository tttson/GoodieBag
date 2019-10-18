import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  // ImageBackground,
} from 'react-native';

import { PacificoText } from '../components/StyledText';
import BackgroundImage from '../components/BackgroundImage';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <BackgroundImage />
        <View style={styles.homePageContainer}>
          <Image
            source={require('../assets/images/icon.png')}
            style={styles.welcomeImage} />
        </View>

        <View style={styles.goodieBagContainer}>
          <PacificoText><Text style={styles.goodieBagText}>Goodie Bag</Text></PacificoText>
          {/* <PacificoText><Text style={styles.loginText}>login</Text></PacificoText>
          <PacificoText><Text style={styles.loginText}>play game for up to 10% off</Text></PacificoText> */}
        </View>
        {/* this will be a good example for clicking on a link to open up a link on the browser ie chrome/ safari <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>
              Help, it didn’t automatically reload!
            </Text>
          </TouchableOpacity>
        </View> */}
      {/* this will be good example for transparent background <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          This is a tab bar. You can edit it in:
        </Text>
        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <PacificoText style={styles.codeHighlightText}>
            navigation/MainTabNavigator.js
          </PacificoText>
        </View>
      </View> */}

      <BackgroundImage />
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

// function DevelopmentModeNotice() {
//   if (__DEV__) {
//     const learnMoreButton = (
//       <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
//         Learn more
//       </Text>
//     );

//     return (
//       <Text style={styles.developmentModeText}>
//         Development mode is enabled: your app will be slower but you can use
//         useful development tools. {learnMoreButton}
//       </Text>
//     );
//   } else {
//     return (
//       <Text style={styles.developmentModeText}>
//         You are not in development mode: your app will run at full speed.
//       </Text>
//     );
//   }
// }


function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homePageContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  welcomeImage: {
    width: 100,
    height: 85,
    resizeMode: 'contain',
    marginTop: 5,
    marginLeft: -10,
  },
  goodieBagContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginBottom: 15,
  },
  goodieBagText: {
    fontSize: 30,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 40,
    textAlign: 'center',
  },
  loginText: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 30,
    textAlign: 'center',
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  navigationFilename: {
    marginTop: 5,
  },
    // developmentModeText: {
  //   marginBottom: 20,
  //   color: 'rgba(0,0,0,0.4)',
  //   fontSize: 14,
  //   lineHeight: 19,
  //   textAlign: 'center',
  // },
  // contentContainer: {
  //   paddingTop: 30,
  // },
  // codeHighlightText: {
  //   color: 'rgba(96,100,109, 0.8)',
  // },
  // codeHighlightContainer: {
  //   backgroundColor: 'transparent',
  //   borderRadius: 3,
  //   paddingHorizontal: 4,
  // },
  // tabBarInfoContainer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: 'black',
  //       shadowOffset: { width: 0, height: -3 },
  //       shadowOpacity: 0.1,
  //       shadowRadius: 3,
  //     },
  //     android: {
  //       elevation: 20,
  //     },
  //   }),
  //   alignItems: 'center',
  //   backgroundColor: 'transparent',
  //   paddingVertical: 20,
  // },
  // tabBarInfoText: {
  //   fontSize: 24,
  //   color: 'rgba(96,100,109, 1)',
  //   textAlign: 'center',
  // },
  // helpContainer: {
  //   marginTop: 15,
  //   alignItems: 'center',
  // },
  // helpLink: {
  //   paddingVertical: 15,
  // },
  // helpLinkText: {
  //   fontSize: 14,
  //   color: '#2e78b7',
  // },
});
