import React from "react";
import { StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native';
import ReusableText from "../../components/Reusable/Reusable";
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>

                <View style={styles.hiUser}>
                    <ReusableText
                        text={'Hi User!'}
                        family={'regular'}
                        size={25}
                        color={"#000000"}
                        marginTop={10}
                    />
                </View>
                <View style={styles.leftIcons}>
                    <Icon name="bell" size={24} color="#000" style={styles.icon} />
                    <Icon name="comment" size={24} color="#000" style={styles.icon} />
                </View>
            </View>
            <View style={styles.searchContainer}>
                <TouchableOpacity style={styles.searchBox} onPress={() => navigation.navigate('Search')}>
                    <Icon name="search" size={20} color="#000" marginRight={240} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    },
    header: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 20
    },
    leftIcons: {
        flexDirection: "row",
        marginRight: 10
    },
    icon: {
        marginRight: 10
    },
    hiUser: {
        marginRight: "auto" // Push "Hi User" to the front
    },
    searchContainer: {
        alignItems: "center",
    },
    searchBox: {
        backgroundColor: "#DFDFDF",
        width: 350,
        height: 40,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    }
});

