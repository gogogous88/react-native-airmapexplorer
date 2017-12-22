import React, { Component } from "react";
import { View, Text, WebView } from "react-native";
import { Actions } from "react-native-router-flux";

class CarRental extends Component {
  render() {
    const DEFAULT_URL = "http://yale.demo5.cn/rental/search";
    return (
      <View style={{ flex: 1 }}>
        <WebView
          // ref={WEBVIEW_REF}
          automaticallyAdjustContentInsets={false}
          source={{ uri: DEFAULT_URL }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={true}
          // scalesPageToFit={this.state.scalesPageToFit}
        />
      </View>
    );
  }
}

export default CarRental;
