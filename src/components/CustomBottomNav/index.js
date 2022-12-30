import { StyleSheet, View } from 'react-native'
import React from 'react'
import TabItem from '../TabItem';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const CustomBottomNav = ({ state, descriptors, navigation }) => {
    return (
        <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
    
            const isFocused = state.index === index;
    
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
    
              if (!isFocused && !event.defaultPrevented) {
                // The `merge: true` option makes sure that the params inside the tab screen are preserved
                navigation.navigate({ name: route.name, merge: true });
              }
            };
    
            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
    
            return (
            <TabItem
            key={index}
            label={label}
            isFocused={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
          />
            );
          })}
        </SafeAreaView>
      );
}

export default CustomBottomNav

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        paddingHorizontal: 45,
        paddingTop: 20,
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 3,
        //   },
        // shadowOpacity: 0.27,
        // shadowRadius: 4.65,
        // elevation: 6,
        
      },
})