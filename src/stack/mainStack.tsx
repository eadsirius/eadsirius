import * as React from 'react';

import { ActivityIndicator, SafeAreaView, View } from "react-native";

import { WebView } from "react-native-webview";

function MainStack()
{

  const webviewRef = React.useRef(null);


  return (
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
      <WebView
        source={{ uri: "http://nongsa.iiumns.com/" }}
        startInLoadingState={true}
        ref={webviewRef}
      />
    </SafeAreaView >
  );
}

export default MainStack;