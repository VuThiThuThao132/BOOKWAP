import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import PostManageScreen from '../screens/PostManageScreen';
import PostScreen from '../screens/PostScreen';
import ProfileUserScreen from '../screens/ProfileUserScreen';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

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

const Navigations = () => {
    return (
        <Tab.Navigator
            // tabBarOptions={{
            //     showLabel: false,
            //     tabBarStyle: {
            //         position: 'absolute',
            //         bottom: 25,
            //         left: 20,
            //         right: 20,
            //         elevation: 0,
            //         backgroundColor: '#ffffff',
            //         borderRadius: 15,
            //         heigh: 90,
            //         ...styles.shadow
            //     }
            // }}
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: [{
                    position: 'absolute',
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    with: 100,
                    height: 80,
                    ...styles.shadow
                }, null]
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                            <Image
                                source={require("../assets/images/Home.png")}
                                resizeMode='contain'
                                style={{
                                    with: 25,
                                    height: 25,
                                    tintColor: focused ? '#000000' : '#000000',
                                    marginBottom: 5
                                }}
                            />
                            <Text style={{ color: focused ? '#000000' : '#000000', fontSize: 12 }}>Trang chủ</Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                            <Image
                                source={require("../assets/images/Explore.png")}
                                resizeMode='contain'
                                style={{
                                    with: 25,
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
                component={PostScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        // <Image
                        //     source={require("../assets/Post.png")}
                        //     resizeMode='contain'
                        //     style={{
                        //         with: 70,
                        //         height: 70,
                        //     }}
                        // />
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                            <Image
                                source={require("../assets/images/Post.png")}
                                resizeMode='contain'
                                style={{
                                    with: 70,
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

            <Tab.Screen name="PostManage"
                component={PostManageScreen}
                options={{
                    tabBarIcon: (focused) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                            <Image
                                source={require("../assets/images/Post-manage.png")}
                                resizeMode='contain'
                                style={{
                                    with: 25,
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
                component={ProfileUserScreen}
                options={{
                    tabBarIcon: (focused) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                            <Image
                                source={require("../assets/images/profile-user.png")}
                                resizeMode='contain'
                                style={{
                                    with: 25,
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
const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            with: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
});
export default Navigations;