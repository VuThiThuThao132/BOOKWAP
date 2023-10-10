import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const PostScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Đăng tin</Text>
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


export default PostScreen;