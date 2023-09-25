import React, { PropsWithChildren } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { colors, dimensions } from "../styles/base";
import BackgroundImage from "./BackgroundGradient";
import Header from "./Header";
import NavBar from "./NavBar";

type BaseViewProps = PropsWithChildren & {
  activeNav?: boolean;
  activeHeader?: boolean;
  img?: any;
};

export default function BaseView({
  activeNav = false,
  activeHeader = false,
  children,
  img,
}: BaseViewProps) {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar animated={true} backgroundColor="#ffffff00" translucent />
      <ScrollView>
        {img && <BackgroundImage img={img} />}
        <View style={styles.statusBarSpacer} />
        {activeHeader ? <Header /> : null}
        {children}
      </ScrollView>
      {activeNav ? <NavBar /> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    position: "relative",
    backgroundColor: colors.black,
    height: dimensions.fullHeight + 2 * (StatusBar.currentHeight || 0),
    marginTop: StatusBar.currentHeight ? -1 * StatusBar.currentHeight : 0,
  },
  statusBarSpacer: {
    paddingBottom: 2 * (StatusBar.currentHeight || 0),
  },
});
