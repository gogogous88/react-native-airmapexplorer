import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  ImageBackground
} from "react-native";
import { Card, CardSection, Input } from "../components/common/index";
import { Container, Content, Button, H1, H3, Tabs } from "native-base";
import { Actions } from "react-native-router-flux";
import FooterTabsIconTextExample from "./common/Footer";
import SearchRentalBar from "./carRental/SearchRentalBar";
import HomeNaviCard from "./navigation/HomeNaviCard";

class Home extends Component {
  render() {
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <ImageBackground
            style={groundStyles.backgroundImage}
            source={require("../static/assets/bridge.jpg")}
          >
            <View
              style={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                alignItems: "center",
                marginTop: 155
              }}
            >
              <H1
                style={{
                  color: "#fff",
                  fontFamily: "Cochin",
                  fontWeight: "800"
                }}
              >
                Cheapeast Van Rental
              </H1>
            </View>
            <View style={{ marginTop: 25 }}>
              <SearchRentalBar />
            </View>
            <View style={{ marginTop: 100 }} />
            <View style={{ backgroundColor: "#fff" }}>
              <HomeNaviCard
                thumbSource={require("../static/assets/thumbNailNavi.jpg")}
                title="导游助手：全美团餐及景点导航"
                titleNote="全美导游信息，全美家庭旅馆"
                source={require("../static/assets/usa_places.jpeg")}
                iconText1="团餐餐厅"
                iconText2="带团景点"
                iconText3="全美导游"
                onPress={() => {
                  Actions.mapIndex();
                }}
              />
              <HomeNaviCard
                thumbSource={require("../static/assets/thumbNailNavi.jpg")}
                title="导游论坛：拼房、顺风车、接活"
                titleNote="信息公布与查询"
                source={require("../static/assets/shun_feng_che.jpg")}
                iconText1="拼房搭车"
                iconText2="招聘应聘"
                iconText3="发团接活"
                onPress={() => {
                  Actions.Forum();
                }}
              />
            </View>
          </ImageBackground>
          {/* <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
            <FooterTabsIconTextExample />
          </View> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 1
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 2
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
};

const groundStyles = StyleSheet.create({
  backgroundImage: {
    flex: 1
  }
});
export default Home;
