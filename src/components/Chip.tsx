import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors, fonts, sizing, spacing } from '../styles/base'

export default function Chip({text}: {text: string}) {
  return (
    <View style={styles.chip}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  chip: {
    backgroundColor: colors.darkGray,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 6,
  },
  text: {
    color: "white",
    fontSize: sizing.sm,
  },
})
