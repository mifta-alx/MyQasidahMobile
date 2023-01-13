import { StyleSheet} from 'react-native'
import React from 'react'
import {
    black,
    primary,
    secondary,
    secondary300,
    white,
    grey800,
    grey500,
    darkgrey
  } from '../utils/constant';
const darkDetail = StyleSheet.create({
    container: {
        backgroundColor: black,
        flex: 1,
      },
      content: {
        paddingVertical: 15,
        alignItems: 'center',
        paddingHorizontal: 10,
        flex: 1,
      },
      bar: {
        backgroundColor: white,
        width: 40,
        height: 4,
        borderRadius: 5,
      },
      title_arabic: {
        fontSize: 24,
        fontFamily: 'Poppins-SemiBold',
        paddingTop: 30,
        color: white,
      },
      title: {
        fontSize: 12,
        fontFamily: 'Poppins-SemiBold',
        paddingTop: 5,
        paddingBottom: 10,
        color: white,
      },
      reffview: {
        // flexDirection: 'row',
        flexWrap: 'wrap-reverse',
        justifyContent: 'center',
      },
      reff: {
        color: white,
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
      },
      line: {
        backgroundColor: grey500,
        height: 0.5,
        width: '80%',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
      },
      lirikview: {
        // flexDirection: 'row',
        flexWrap: 'wrap-reverse',
        justifyContent: 'center',
      },
      lirik: {
        color: black,
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
      },
})
export default darkDetail