import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { dimensions, spacing } from "../styles/base";

const CARD_WIDTH = dimensions.fullWidth - 2 * spacing.md;

export default function NoteCard({ annotation }: { annotation: Annotation }) {
  const [aspectRatio, setAspectRatio] = useState(0);
  Image.getSize(annotation.annotationUrl, (width, height) =>
    setAspectRatio(width / height)
  );

  return (
    <Image
      source={{ uri: annotation.annotationUrl }}
      resizeMode="contain"
      width={CARD_WIDTH}
      style={[styles.container, {aspectRatio: aspectRatio}]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.sm,
    backgroundColor: "#fff",
    marginHorizontal: spacing.md,
  }
});
