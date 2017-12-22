import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { Router, Scene } from "react-native-router-flux";
import ReduxThunk from "redux-thunk";
import Map from "./components/Map";
import reducers from "./reducers";
import MapDetail from "./components/MapDetail";
import BottomTopics from "./components/BottomTopics";
import CarRental from "./components/common/Embed/CarRental";
import Forum from "./components/common/Embed/Forum";
import Home from "./components/Home";
import FooterTabsExample from "./components/common/Footer";

const store = applyMiddleware(ReduxThunk)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={store(reducers)}>
        <Router>
          <Scene key="root">
            <Scene key="home" component={Home} title="全美导游通" initial />
            <Scene key="mapIndex" component={Map} title="地图" />
            <Scene key="mapDetail" component={MapDetail} title="景点详情" />
            <Scene key="topics" component={BottomTopics} title="测试" />
            <Scene key="carRental" component={CarRental} title="租车" />
            <Scene key="Forum" component={Forum} title="论坛" />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

export default App;
