import React from "react";
import BaseView from "../components/BaseView";
import BookSlider from "../components/BookSlider";
import MainBanner from "../components/MainBanner";
import books from "../data/books";
import mock from "../data/mock";

export default function HomeScreen() {
  return (
    <BaseView activeHeader activeNav>
      <MainBanner />
      <BookSlider listUrl={books.recomendations} title="Recomendações" mockBooks={mock.recomendations}/>
      <BookSlider listUrl={books.scifi} title="Sci-Fi" mockBooks={mock.scifi}/>
      <BookSlider listUrl={books.classics} title="Clássicos" mockBooks={mock.classics}/>
      <BookSlider listUrl={books.youngAdult} title="Clássicos" mockBooks={mock.youngAdult}/>
    </BaseView>
  );
}
