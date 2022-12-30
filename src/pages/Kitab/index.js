import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, TouchableOpacity, Dimensions, TouchableHighlight } from 'react-native'
import React, { useState, useEffect } from 'react'
import { white, primary, secondary, black, secondary500 } from '../../utils/constant'
import { useNavigation } from '@react-navigation/native'
import { dataKitab, listQasidah } from '../Home/data'

const ItemKitab = ({item, onPress}) => (
  <TouchableHighlight style={styles.kitabcard} onPress={onPress} activeOpacity={0.6} underlayColor={secondary500}>
  <View >
    <Image source={{uri : item.image_url}} style={styles.imageKitab}/>
    <Text style={styles.namakitab}>{item.nama_kitab}</Text>
  </View>
  </TouchableHighlight>
)


const Kitab = () => {
  const [Scroll, setScroll] = useState("vertical")
  const FlatListKitab = item => {
    const navigation = useNavigation();
    const [Kitabdata, setdataKitab] = useState(dataKitab);
    const renderItem = ({item, navigation}) => {
      return(
        <ItemKitab
        item = {item} 
        onPress={()=>navigation.navigate('')}
        />
      );
    };
    return(
      <FlatList
      data={Kitabdata}
      keyExtractor = {item => item.id_kitab}
      renderItem={item => renderItem({...item, navigation})}
      horizontal
      showsHorizontalScrollIndicator={false}/>
    )
  }
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.content}>
        <Text style={styles.h2}>Kumpulan Kitab</Text>
        <Text style={styles.h4}>Baru saja dibuka</Text>
      </View>
      <View style={{position:"absolute", top : 150}}>
        <FlatListKitab/>
        <View style={{paddingHorizontal: 20, marginTop: 18}}>
          <Text style={[styles.h4, {color:primary}]}>Semua Kitab</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default Kitab

const styles = StyleSheet.create({
  container:{
    // backgroundColor: primary
  },
  content:{
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 125,
    backgroundColor: primary
  },
  h2:{
    color: white,
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold'
  },
  h4:{
    color: white,
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 5
  },
  kitabcard:{
    backgroundColor:white,
    padding : 10,
    borderRadius: 15,
    alignItems:'center',
    marginHorizontal: 10
  },
  namakitab:{
    color:black,
    fontFamily:'Poppins-SemiBold',
    fontSize: 12,
    marginTop:10
  },
  imageKitab:{
    height: windowHeight*0.144,
    width: windowWidth*0.30,
    borderRadius: 10,
  }
})