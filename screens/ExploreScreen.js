import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const ExploreScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Khám phá</Text>
            <Button
                title="click Here"
                onPress={() => alert('Button Clicked!')}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
})


export default ExploreScreen;