import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {Home, Book, InfoCircle} from 'iconsax-react-native'
import { primary, secondary, white } from '../../utils/constant'

const TabItem = ({label, isFocused, onPress, onLongPress}) => {
    const Icon = () => {
        if(label == "Home") return isFocused ? <Home variant='Bold' color={primary} size={24}/> : <Home variant='Linear' color={secondary} size={24}/> 
        if(label == "Kitab") return isFocused ? <Book variant='Bold' color={primary} size={24}/> : <Book variant='Linear' color={secondary} size={24}/> 
        if(label == "About") return isFocused ? <InfoCircle variant='Bold' color={primary} size={24}/> : <InfoCircle variant='Linear' color={secondary} size={24}/> 
        return <Home/>;
    }
    const Dot = () =>{
        return (
          <View style={{
              width: 30,
              height: 3,
              backgroundColor: isFocused ? primary : white,
              borderTopLeftRadius: 25,
              borderTopRightRadius : 25,
              marginTop: 20
            }}
            />
      )
      }
  
  return (
    <TouchableOpacity
    onPress={onPress}
    onLongPress={onLongPress}
    style={styles.container}>
        <Icon/>
        <Dot/>
    </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems: 'center',
    },
})