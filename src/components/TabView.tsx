import * as React from "react";
import { View, useWindowDimensions, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { fonts } from "../styles/base";

let desc = "";

const FirstRoute = () => (
  <View style={{ flex: 1, height: 1000 }}>
    <Text style={fonts.default}>
      {desc}
    </Text>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, height: 1000 }}>
    <Text>Teste</Text>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "white" }}
    style={{ backgroundColor: "transparent" }}
  />
);

export default function TabViewExample({description}: {description: string | undefined}) {
  const layout = useWindowDimensions();

  desc = "Descrição não está disponível";
  if (description) {
    console.log("- ", description);
    desc = description;
  }

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Descrição" },
    { key: "second", title: "Anotações" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
      style={{ height: "100%", display: "flex", flex: 1, minHeight: 500 }}
    />
  );
}
