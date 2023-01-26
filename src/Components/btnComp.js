import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../Home/styles";

const btnComp = (props) => {
  const { name, onPress } = props;
  return (
    <TouchableOpacity style={styles.btnComp} onPress={onPress}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default btnComp;
