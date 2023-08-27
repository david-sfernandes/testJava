import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet } from "react-native";

export default function Book({ book }: { book: BookProps }) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        // @ts-ignore: suppress param type
        navigation.navigate("Book", { book });
      }}
      style={styles.bookContainer}
    >
      <Image
        source={{
          uri: `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`,
        }}
        style={styles.image}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bookContainer: {
    width: 100,
    height: 150,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
});

// Book data example:
// {
//   book: {
//     author_key: ["OL586693A"],
//     author_name: ["Lisa Banim"],
//     availability: {
//       __src__: "core.models.lending.get_availability",
//       available_to_borrow: true,
//       available_to_browse: true,
//       available_to_waitlist: false,
//       identifier: "caseatcampgetmeo00bani",
//       is_browseable: true,
//       is_lendable: true,
//       is_previewable: true,
//       is_printdisabled: true,
//       is_readable: false,
//       is_restricted: true,
//       isbn: "0786846216",
//       last_loan_date: null,
//       last_waitlist_date: null,
//       num_waitlist: "0",
//       oclc: null,
//       openlibrary_edition: "OL24863379M",
//       openlibrary_work: "OL15957352W",
//       status: "borrow_available",
//     },
//     cover_edition_key: "OL24863379M",
//     cover_i: 6860836,
//     edition_count: 1,
//     first_publish_year: 2004,
//     has_fulltext: true,
//     ia: ["caseatcampgetmeo00bani"],
//     ia_collection_s:
//       "china;cnusd-ol;inlibrary;internetarchivebooks;printdisabled",
//     key: "/works/OL15957352W",
//     language: ["eng"],
//     lending_edition_s: "OL24863379M",
//     lending_identifier_s: "caseatcampgetmeo00bani",
//     public_scan_b: false,
//     title: "Case at Camp Get-Me-Outie (Lizzie McGuire Mysteries #2)",
//   },
// };
