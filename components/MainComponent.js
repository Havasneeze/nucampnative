import React, { Component } from "react";
import Directory from "./DirectoryComponents";
import { CAMPSITES } from "../shared/campsites";
import { View, Platform } from "react-native";
import { createStackNavigator } from "react-navigation";

const DirectoryNavigator = createStackNavigator(
  //function that requires the arguments Directory and campsiteinfo
  {
    Directory: { screen: Directory }, //these components are available for the stack
    CampsiteInfo: { screen: CampsiteInfo },
  },
  {
    initialRouteName: "Directory", //second argument. Defaults to showing this component
    navigationOptions: {
      // styles for nav header. additional info in docs.
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop:
            Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
        }}
      >
        <DirectoryNavigator />
      </View>
    );
  }
}

export default Main;
