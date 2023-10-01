import React from "react";
import BaseView from "../components/BaseView";
import BookSlider from "../components/BookSlider";
import MainBanner from "../components/MainBanner";
import api from "../data/api";

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
