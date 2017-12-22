import React, { Component } from "react";
import {
  Text,
  ScrollView,
  View,
  Linking,
  TouchableHighlight,
  Image
} from "react-native";
import { Card, CardSection, Button, Spinner } from "./common/index";

class AppDetail extends Component {
  render() {
    const { name, addr, ph_no, addr_coord, descr, rate } = this.props.attr;
    return (
      <View style={{flex:1}}>
      <ScrollView>
        <Card>
          <CardSection>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>{name}</Text>
          </CardSection>
          <CardSection>
            <Image
              style={{
                flex: 1,
                alignSelf: "stretch",
                width: 0,
                height: 200
              }}
              source={require("../static/assets/deli_table.jpeg")}
            />
          </CardSection>
          <CardSection>
            <Text>{addr_coord}</Text>
          </CardSection>
          <CardSection>
            <TouchableHighlight
              onPress={() => {
                Linking.openURL(`http://tel:${ph_no}`);
              }}
            >
              <Text>{ph_no}</Text>
            </TouchableHighlight>
          </CardSection>
          <CardSection>
            <Text>{rate}</Text>
          </CardSection>
          <CardSection>
            <Text>{descr}</Text>
          </CardSection>
          <CardSection style={{ marginTop: 5 }}>
            <Button
              onPress={() => {
                Linking.openURL(`https://www.google.com/maps/dir/${addr}`);
              }}
            >
              导航前往
            </Button>
          </CardSection>
        </Card>
      </ScrollView>
      </View>
    );
  }
}

export default AppDetail;
