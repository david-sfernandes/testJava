import React from 'react'
import { Text } from 'react-native'
import BottomSheet from '../components/BottomSheet'
import { fonts } from '../styles/base'

export default function ImgForm({ isOpen, setOpen }) {
  return (
    <BottomSheet isOpen={isOpen} setOpen={setOpen}>
      <Text style={fonts.default}>Image form</Text>
    </BottomSheet>
  )
}
