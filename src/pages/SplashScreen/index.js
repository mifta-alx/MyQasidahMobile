import { StyleSheet, StatusBar, SafeAreaView, Image, Dimensions } from 'react-native'
import {React, useEffect} from 'react'
import { primary } from '../../utils/constant'
import {Logo} from '../../assets/index'


const STYLES = ['default', 'dark-content', 'light-content'];
const SplashScreen = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.replace('Home');
    }, 2000);
  }, [navigation])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={STYLES[1]}/>
      <Image source={Logo} style={styles.logosplash}/>
    </SafeAreaView>
  )
}
const windowWidth = Dimensions.get('window').width
export default SplashScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:primary,
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  },
  logosplash:{
    paddingHorizontal: 20,
    maxWidth:200,
    resizeMode:'contain'
  }
})