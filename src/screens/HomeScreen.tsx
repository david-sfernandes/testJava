import React from "react";
import { StyleSheet } from "react-native";
import BaseView from "../components/BaseView";
import BookSlider from "../components/BookSlider";
import MainBanner from "../components/MainBanner";
import api from "../data/api";
import { spacing } from "../styles/base";

export default function HomeScreen() {
  return (
    <BaseView activeHeader activeNav>
      <MainBanner />
      <BookSlider listUrl={api.recomendations} title="Recomendações" />
      <BookSlider listUrl={api.scifi} title="Sci-Fi" />
      <BookSlider listUrl={api.recomendations} title="Clássicos" />
    </BaseView>
  );
}

const styles = StyleSheet.create({
  sectionText: {
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
    paddingHorizontal: spacing.md,
  },
});
