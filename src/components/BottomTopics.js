import React, { Component } from "react";
import { Button, Card, CardSection } from "./common";
import { View, Text, TouchableOpacity, Modal } from "react-native";

// const OverlayTopics = ({ onTopicSelect }) => (
//     <Overlay styleName="fill-parent">
//         <Heading style={{marginBottom: 15}}>What do you feel like?</Heading>
//         {TOPICS.map(topic => (
//             <Button onPress={() => onTopicSelect(topic)} key={topic} style={{marginBottom: 10}}>
//                 <Text>{topic}</Text>
//             </Button>
//         ))}
//     </Overlay>
// );

const BottomTopics = () => {
  const { containerStyle, textStyle, cardSectionStyle } = styles;
  return (
    <View style={containerStyle}>
      <CardSection style={cardSectionStyle}>
        <Button
          onPress={() => {
            console.log("yes");
          }}
        >
          带团景点
        </Button>
      </CardSection>
      <CardSection style={cardSectionStyle}>
        <Button
          onPress={() => {
            console.log("no");
          }}
        >
          团餐餐厅
        </Button>
      </CardSection>
    </View>
  );
};

const styles = {
  cardSectionStyle: {
    flex: 1,
    justifyContent: "flex-start"
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    position: "relative",
    justifyContent: "flex-end",
    flexDirection: "row"
  }
};

export default BottomTopics;
