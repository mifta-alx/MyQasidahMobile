import { StyleSheet} from 'react-native'
import React from 'react'
import {
    black,
    primary,
    secondary,
    secondary300,
    white,
    grey800,
    grey300,
    darkgrey
  } from '../utils/constant';
const darkMode = StyleSheet.create({
    container: {
        backgroundColor: black,
        paddingBottom: 10,
        paddingTop: 35,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
      },
      header: {
        fontSize: 18,
        color: primary,
        fontFamily: 'Poppins-SemiBold',
        marginBottom: 23,
      },
      item: {
        marginHorizontal: 20,
        backgroundColor: grey800,
        borderRadius: 10,
        marginVertical: 7.5,
        padding: 12,
      },
      title: {
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        color: white,
      },
      arabic_title: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        alignSelf: 'flex-end',
        color: white,
      },
      version: {
        fontSize: 10,
        color: secondary300,
        fontFamily: 'Poppins-Medium',
      },
      body:{
        flex: 1, 
        backgroundColor: 'black'
      },
      notfound:{
        color: white, fontFamily: 'Poppins-Regular', fontSize: 14
      },
      search_bar: {
        backgroundColor: darkgrey,
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
      },
      textsearch: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        flex: 1,
        marginLeft: 17,
        padding: 0,
        color: white
      },
});
export default darkMode