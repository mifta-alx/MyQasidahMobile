import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Kitab, About, SplashScreen, LandingPage, DetailQasidah} from '../pages'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomBottomNav } from '../components/';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return(
        <Tab.Navigator tabBar={props => <CustomBottomNav {...props} /> } tabBarHideOnKeyboard={true}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false}}/>
            <Tab.Screen name="Kitab" component={Kitab} options={{ headerShown: false}}/>
            <Tab.Screen name="About" component={About} options={{ headerShown: false}}/>
        </Tab.Navigator>
    );
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='SplashScreen' >
        {/* <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false}}/> */}
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false}}/>
        <Stack.Screen name="DetailQasidah" component={DetailQasidah} options={{ headerShown: false,
          animationEnabled: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
          // gestureResponseDistance: windowHeight,
          // gestureDirection : 'vertical',
          //  cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          ...TransitionPresets.ModalPresentationIOS,
          // presentation: 'card',
          // cardOverlayEnabled: false,
        }}/>
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})