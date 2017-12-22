import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { Icon } from "native-base";
import { Actions } from "react-native-router-flux";

const SearchRentalBar = () => {
  return (
    <View
      style={{
        marginLeft: 20,
        marginRight: 20,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "red",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowOpacity: 0.4,
        shadowColor: "red"
      }}
    >
      <Icon
        name="search"
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingLeft: 4,
          paddingTop: 4,
          paddingBottom: 4
        }}
      />

      <TextInput
        onFocus={() => {
          Actions.carRental();
        }}
        style={style.TextInputStyle}
        placeholder="请选择取车地点(高顶奔驰160/天起)"
      />
    </View>
  );
};

const style = {
  TextInputStyle: {
    backgroundColor: "#fff",
    color: "#333",
    lineHeight: 40,
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    flex: 10
  }
};

export default SearchRentalBar;
