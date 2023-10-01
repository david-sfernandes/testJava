import React from "react";
import { StyleSheet, Text } from "react-native";
import { Snackbar } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import { dimensions, fonts } from "../styles/base";

export default function NavBar({ text, icon, visible, setVisible }) {
  const onDismissSnackBar = () => setVisible(false);

  return (
    <Snackbar
      style={styles.snackbar}
      visible={visible}
      onDismiss={onDismissSnackBar}
      action={{
        label: "Ok",
      }}
      elevation={5}
    >
      <Text style={styles.text}>
        {icon && <Icon name={icon} solid size={14} color="white" />}{" "}
        {" " + text}
      </Text>
    </Snackbar>
  );
}

const styles = StyleSheet.create({
  text: {
    ...fonts.default,
    marginVertical: "auto",
    marginBottom: -5,
  },
  snackbar: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    width: dimensions.fullWidth - 40,
    marginHorizontal: 20,
  },
});
