
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Explore, Home, Post, PostingManagement, UserProfile } from "../screens";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: -40,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
        }}
        onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 40,
        }}>
            {children}
        </View>
    </TouchableOpacity>
);

const BottomTap = () => {
    return (
        <Tab.Navigator
{/*             screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: [{
                    position: 'absolute',
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    width: 100,
                    height: 80,
                    ...styles.shadow
                }, null]
            }} */}
     screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    height: 100, // Adjust the height as needed
                    ...styles.shadow
                }
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                            <Image
                                source={require("../assets/images/Home.png")}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? 'black' : 'black',
                                    marginBottom: 5
                                }}
                            />
                            <Text style={{ color: focused ? 'black' : '#black', fontSize: 12 }}>Trang chủ</Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Explore"
                component={Explore}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                            <Image
                                source={require("../assets/images/Explore.png")}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#000000' : '#000000',
                                    marginBottom: 5
                                }}
                            />
                            <Text style={{ color: focused ? '#000000' : '#000000', fontSize: 12 }}>Khám phá</Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen name="Post"
                component={Post}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                            <Image
                                source={require("../assets/images/Post.png")}
                                resizeMode='contain'
                                style={{
                                    width: 70,
                                    height: 70,
                                    marginBottom: 5
                                }}
                            />
                            <Text style={{ color: focused ? '#000000' : '#000000', fontSize: 12 }}>Đăng tin</Text>
                        </View>
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    )
                }}
            />

            <Tab.Screen name="PostingManagement"
                component={PostingManagement}
                options={{
                    tabBarIcon: (focused) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                            <Image
                                source={require("../assets/images/Post-manage.png")}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#000000' : '#000000',
                                    marginBottom: 5
                                }}
                            />
                            <Text style={{ color: focused ? '#000000' : '#000000', fontSize: 12 }}>Quản lí tin</Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen name="ProfileUser"
                component={UserProfile}
                options={{
                    tabBarIcon: (focused) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                            <Image
                                source={require("../assets/images/profile-user.png")}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#000000' : '#000000',
                                    marginBottom: 5
                                }}
                            />
                            <Text style={{ color: focused ? '#000000' : '#000000', fontSize: 12 }}>Hồ sơ</Text>
                        </View>
                    ),
                }}
            />


        </Tab.Navigator>
    );
}

export default BottomTap;

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
});
