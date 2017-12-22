import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import MapView from "react-native-maps";
import styles from "../styles";
import { Spinner, Card, CardSection, Button } from "./common";

const Markers = ({ eachAttr }) => {
  return (
    <MapView.Marker
      coordinate={{
        latitude: Number.parseFloat(eachAttr.lat),
        longitude: Number.parseFloat(eachAttr.lng)
      }}
      toolbarEnabled={true}
    >
      <MapView.Callout>
        <Card>
          <CardSection>
            <TouchableOpacity
              onPress={() => Actions.mapDetail({ attr: eachAttr })}
            >
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                {eachAttr.name}
              </Text>
              <CardSection style={{ borderTopWidth: 1, marginTop: 4 }}>
                <Text style={{ fontSize: 14, fontWeight: "400" }}>
                  类型：{eachAttr.category}
                </Text>
              </CardSection>
              <CardSection>
                <Text style={{ fontSize: 14, fontWeight: "400" }}>
                  近：{eachAttr.location}
                </Text>
              </CardSection>
            </TouchableOpacity>
          </CardSection>

          <CardSection>
            <CardSection>
              <TouchableOpacity
                style={styles.mapButton}
                onPress={() => {
                  Linking.openURL(
                    `https://www.google.com/maps/dir/${eachAttr.addr}`
                  );
                }}
              >
                <Text>导航</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.mapButton}
                onPress={() => {
                  Linking.openURL(
                    `https://www.google.com/maps/dir/${eachAttr.ph_no}`
                  );
                }}
              >
                <Text>致电</Text>
              </TouchableOpacity>
            </CardSection>
          </CardSection>
        </Card>
      </MapView.Callout>
    </MapView.Marker>
  );
};

export default Markers;
