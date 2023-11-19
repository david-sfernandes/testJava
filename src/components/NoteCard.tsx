import React, { useState } from "react";
import { Image, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import { dimensions, spacing } from "../styles/base";

const CARD_WIDTH = dimensions.fullWidth - 2 * spacing.md;

type NoteCardProps = {
  annotation: Annotation;
  setAnnotation: React.Dispatch<React.SetStateAction<Annotation | undefined>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NoteCard({
  annotation,
  setAnnotation,
  setOpen,
}: NoteCardProps) {
  const [aspectRatio, setAspectRatio] = useState(0);
  Image.getSize(annotation.annotationUrl, (width, height) =>
    setAspectRatio(width / height)
  );

  return (
    <TouchableOpacity
      onPress={() => {
        setAnnotation(annotation);
        setOpen(true);
      }}
    >
      <Image
        source={{ uri: annotation.annotationUrl }}
        resizeMode="contain"
        width={CARD_WIDTH}
        style={[styles.container, { aspectRatio: aspectRatio }]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.sm,
    backgroundColor: "#fff",
    marginHorizontal: spacing.md,
  },
});
