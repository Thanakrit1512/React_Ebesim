"use strict";

import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";

import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";
import Icon from "react-native-vector-icons/FontAwesome";

class ScanScreen extends Component {
  onSuccess = (e) => {
    Linking.openURL(e.data).catch((err) =>
      console.error("An error occured", err)
    );
  };

  render() {
    return (
      <QRCodeScanner
        buttonPositive
        onRead={this.onSuccess}
        showMarker={true}
        markerStyle={{
          borderColor: "#fff",
          borderRadius: 20,
        }}
        flashMode={RNCamera.Constants.FlashMode.auto}
        // topContent={
        //   <Text style={styles.centerText}>
        //     Go to{" "}
        //     <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
        //     your computer and scan the QR code.
        //   </Text>
        // }
        reactivate={true}
        reactivateTimeout={10}
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <View>
              <Text style={styles.buttonText}>ค้นหา</Text>
            </View>
          </TouchableOpacity>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 14,
    padding: 30,
    color: "#777",
  },
  textBold: {
    fontWeight: "500",
    color: "#000",
  },
  buttonText: {
    fontSize: 21,
    color: "rgb(200, 115, 14)",
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default ScanScreen;
