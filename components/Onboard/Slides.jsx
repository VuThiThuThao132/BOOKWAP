// import React from "react";
// import { View, Text, Image } from 'react-native';
// import styles from "./Slides.Style";

// const Slides = ({ item }) => {
//     return (
//         <View >
//             <Image source={item.Image} style={styles.image} />
//         </View>
//     );
// }


// export default Slides;
// Slides.js
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import ReusableText from '../Reusable/Reusable';
import ReusableBtn from '../Reusable/ReusableBtn';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Slides = ({ item }) => {

    const navigation = useNavigation();

    const handleButtonPress = () => {
        // console.log('Button pressed');
        navigation.navigate('Bottom');
    };

    return (
        <View style={styles.slide}>
            <View styles={styles.stack}>
                <ReusableText
                    text={item.title}
                    family={'medium'}
                    size={50}
                    color={"#000000"}
                    marginTop={70}
                />
            </View>
            <Image source={item.image} style={styles.image} resizeMode="cover" />

            <ReusableBtn
                onPress={handleButtonPress}
                btnText={"Bắt đầu"}
                width={120}
                height={50}
                backgroundColor={'#4CBB17'}
                borderColor={'#000000'}
                borderWidth={0}
                textColor={'#000000'}
                borderRadius={10}
                marginBottom={10}
            />

        </View>
    );
};

export default Slides;

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        width: width,  // Take full width
        height: height,  // Take full height
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    image: {
        width: '95%',
        height: '70%',
    },
});