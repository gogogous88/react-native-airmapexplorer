import React, { Component, PropTypes } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Linking,
  TouchableOpacity
} from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import _ from "lodash";
import MapView from "react-native-maps";
import styles from "../styles";
import * as actions from "../actions";
import { Spinner, Card, CardSection, Button } from "./common";
import BottomTopics from "./BottomTopics";
import Markers from "./Markers";

class Map extends Component {
  state = {
    mapRegion: null,
    gpsAccuracy: null
  };
  watchID = null;

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition(position => {
      const region = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.00922 * 10000,
        longitudeDelta: 0.00421 * 10000
      };

      this.onRegionChange(region, position.coords.accuracy);
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  onRegionChange(region, gpsAccuracy) {
    this.setState({
      mapRegion: region,
      gpsAccuracy: gpsAccuracy || this.state.gpsAccuracy
    });
  }

  renderMarkers() {
    return _.map(this.props.attr, eachAttr => {
      return <Markers key={eachAttr.id} eachAttr={eachAttr} />;
    });
  }

  onRelocate() {
    navigator.geolocation.getCurrentPosition(position => {
      const region = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.00922 * 4000,
        longitudeDelta: 0.00421 * 4000
      };

      this.onRegionChange(region, position.coords.accuracy);
    });
  }

  renderAttr() {
    this.props.fetchAttr();
  }

  renderDeli() {
    this.props.fetchMapData();
  }

  render() {
    console.log(this.props);
    const { mapRegion } = this.state;

    if (mapRegion) {
      const hitSlop = {
        top: 5,
        bottom: 5,
        left: 5,
        right: 5
      };
      return (
        <View style={styles.container}>
          <MapView
            showsMyLocationButton={true}
            showsUserLocation={true}
            showsCompass={true}
            style={styles.map}
            region={mapRegion}
          >
            {this.renderMarkers()}
          </MapView>
          <View style={styleName.containerStyle}>
            <TouchableOpacity
              hitSlop={hitSlop}
              activeOpacity={0.7}
              style={styles.mapButton}
              onPress={this.onRelocate.bind(this)}
            >
              <Text>我的位置</Text>
            </TouchableOpacity>
            <TouchableOpacity
              hitSlop={hitSlop}
              activeOpacity={0.7}
              style={styles.mapButton}
              onPress={this.renderAttr.bind(this)}
            >
              <Text>景点</Text>
            </TouchableOpacity>
            <TouchableOpacity
              hitSlop={hitSlop}
              activeOpacity={0.7}
              style={styles.mapButton}
              onPress={this.renderDeli.bind(this)}
            >
              <Text>团餐</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return <Spinner />;
  }
}

const styleName = {
  containerStyle: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    position: "relative",
    justifyContent: "flex-end",
    flexDirection: "row"
  }
};

function mapStateToProps({ attr }) {
  return { attr };
}

export default connect(mapStateToProps, actions)(Map);
