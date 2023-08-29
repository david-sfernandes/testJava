import React, { PropsWithChildren } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";
import { colors, dimensions, fonts, spacing } from "../styles/base";
import BackgroundImage from "./BackgroundGradient";
import NavBar from "./NavBar";
import Header from "./Header";

type BaseViewProps = PropsWithChildren & {
  activeNav?: boolean;
  activeHeader?: boolean;
  img: any;
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
        <BackgroundImage img={img} />
        {activeHeader ? <Header /> : null}
        {children}
      </ScrollView>
      {activeNav ? <NavBar /> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: dimensions.fullHeight + 2 * (StatusBar.currentHeight || 0),
    // height: "100%",
    position: "relative",
    backgroundColor: colors.black,
    marginTop: StatusBar.currentHeight ? -StatusBar.currentHeight : 0,
  },
});
