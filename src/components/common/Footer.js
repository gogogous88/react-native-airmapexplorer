import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from "native-base";
import { Actions } from "react-native-router-flux";
export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical active>
              <Icon name="home" />
              <Text>首页</Text>
            </Button>
            <Button vertical>
              <Icon active name="navigate" />
              <Text>导航</Text>
            </Button>
            <Button vertical>
              <Icon name="car" />
              <Text>租车</Text>
            </Button>
            <Button vertical>
              <Icon name="apps" />
              <Text>论坛</Text>
            </Button>

            <Button vertical>
              <Icon name="person" />
              <Text>账户</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
