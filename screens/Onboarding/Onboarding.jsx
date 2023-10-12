import React from "react";
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { Slides } from "../../components";


const Onboarding = () => {

    const slides = [
        {
            id: 1,
            image: require('../../assets/images/BSW.png'),
            title: "BOOKSWAP"
        }
    ]

    return (
        <FlatList
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            data={slides}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Slides item={item} />}
        />
    );
}
export default Onboarding; 