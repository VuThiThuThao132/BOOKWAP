
import React from "react";
import { StyleSheet, View, Text } from 'react-native';

const ReusableText = ({ text, family, size, color, marginTop }) => {
    return (
        <Text style={styles.textStyle(family, size, color, marginTop)}>{text}</Text>
    );
}

export default ReusableText;

const styles = StyleSheet.create({
    textStyle: (family, size, color, marginTop) => ({
        fontFamily: family,
        fontSize: size,
        color: color,
        marginTop: marginTop
    })
})