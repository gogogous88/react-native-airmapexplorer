import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import { Card, CardSection, Header } from "../common";
import {
  Container,
  Content,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
export default class HomeNaviCard extends Component {
  render() {
    const {
      thumbSource,
      title,
      titleNote,
      source,
      iconText1,
      iconText2,
      iconText3,
      onPress
    } = this.props;
    return (
      <Card style={{ backgroundColor: "#fff" }}>
        <Content>
          <Card>
            <TouchableOpacity onPress={onPress}>
              <CardItem>
                <Left>
                  <Thumbnail source={thumbSource} />
                  <Body>
                    <Text>{title}</Text>
                    <Text style={{ paddingTop: 9 }} note>
                      {titleNote}
                    </Text>
                  </Body>
                </Left>
              </CardItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
              <CardItem cardBody>
                <Image
                  source={source}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              </CardItem>
            </TouchableOpacity>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="restaurant" />
                  <Text style={{ fontSize: 14 }}>{iconText1}</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="pin" />
                  <Text style={{ fontSize: 14 }}>{iconText2}</Text>
                </Button>
              </Body>
              <Body>
                <Button transparent>
                  <Icon active name="people" />
                  <Text style={{ fontSize: 14 }}>{iconText3}</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Card>
    );
  }
}
