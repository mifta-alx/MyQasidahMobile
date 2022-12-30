import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { black, primary, secondary, white } from '../../utils/constant'
import { dataUser } from '../Home/data'
import {Edit2} from 'iconsax-react-native'

const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.h2}>Informasi</Text>
        <View style={{flexDirection: 'row', alignItems:'center',justifyContent:'space-between'}}>
        <View style={{flexDirection: 'row', alignItems:'center', marginVertical: 10}}>
          <Image source={{uri: dataUser[0].profile_url}} style={{width: 60, height: 60, borderRadius: 50, borderWidth: 3, borderColor: primary}}/>
          <View style={{marginLeft: 20}}>
            <Text style={styles.username}>{dataUser[0].username}</Text>
            <Text style={styles.fullname}>{dataUser[0].fullname}</Text>
          </View>
          </View>
          <TouchableOpacity>
            <Edit2 size={24} color={primary} variant="Linear"/>
          </TouchableOpacity>
        </View>
        <Text style={styles.h4}>Tentang Aplikasi</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: 10}}>
          <Text style={styles.info}>Versi Aplikasi</Text>
          <Text style={styles.info}>v 0.0.1</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default About

const styles = StyleSheet.create({
  container:{
    backgroundColor: white,
    flex: 1
  },
  content:{
    paddingHorizontal: 20,
    paddingTop: 35
  },
  h2:{
    color: primary,
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold'
  },
  h4:{
    color: primary,
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold'
  },
  info:{
    color: secondary,
    fontSize: 12,
    fontFamily: 'Poppins-Regular'
  },
  username: {
    fontSize: 18,
    color: black,
    fontFamily: 'Poppins-Medium', 
    color: black,
    lineHeight: 27
  },
  fullname:{
    fontSize: 12,
    color: black,
    fontFamily: 'Poppins-Regular',
    color:secondary,
    lineHeight: 27
  }
})