import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const ReusableBtn = ({
    onPress,
    btnText,
    textColor,
    width,
    height,
    marginBottom,
    backgroundColor,
    borderWidth,
    borderColor,
    borderRadius,

}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.btnStyle(width, height, marginBottom, backgroundColor, borderWidth, borderColor, borderRadius)}
        >
            <Text style={styles.btnText(textColor)}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export default ReusableBtn;

const styles = StyleSheet.create({
    btnText: (textColor) => ({
        fontFamily: "medium",
        fontSize: 20,
        color: textColor
    }),
    btnStyle: (width, height, marginBottom, backgroundColor, borderWidth, borderColor, borderRadius) => ({
        width: width,
        height: height,
        marginBottom: marginBottom,
        backgroundColor: backgroundColor,
        alignItems: "center",
        justifyContent: "center",
        borderColor: borderColor,
        borderWidth: borderWidth,
        borderRadius: borderRadius

    })
});
