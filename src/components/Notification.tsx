import React from "react";
import { Text } from "react-native";
import { Snackbar } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import { dimensions, fonts } from "../styles/base";

export default function NavBar({ text, icon, visible, setVisible }) {
  const onDismissSnackBar = () => setVisible(false);

  return (
    <Snackbar
      style={{
        position: "absolute",
        bottom: 20,
        left: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        width: dimensions.fullWidth - 40,
        marginHorizontal: 20,
      }}
      visible={visible}
      onDismiss={onDismissSnackBar}
      // duration={5000}
      action={{
        label: "Ok",
      }}
      elevation={5}
    >
      <Text style={[fonts.default, {
        marginVertical: "auto",
        marginBottom: -5,
      }]}>
        {icon && <Icon name={icon} solid size={14} color="white" />} {" " + text}
      </Text>
    </Snackbar>
  );
}
