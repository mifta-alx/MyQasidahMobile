import { StyleSheet, Text, SafeAreaView, View, TextInput, TouchableHighlight, StatusBar,Image, Dimensions, TouchableOpacity } from 'react-native'
import {React} from 'react'
import { black, primary, secondary500, white } from '../../utils/constant'
import { Logo } from '../../assets';
import {ArrowRight2} from 'iconsax-react-native'

const STYLES = ['default', 'dark-content', 'light-content'];
const LandingPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
        animated={true}
        barStyle={STYLES[1]}/>
        <View style={{paddingHorizontal: 37, flexGrow: 1, height: '100%'}}>
            <View style={styles.imgcontainer}>
                <Image source={Logo} style={styles.img}/>
            </View>
            <View style={{marginTop: 20}}>
            <Text style={styles.info}>Set your username</Text>
            <TextInput placeholder='Username' placeholderTextColor={secondary500} style={styles.textinput}/>
            <TouchableHighlight 
            activeOpacity={0.6}
            underlayColor={primary}
            onPress={() => navigation.navigate('MainApp')}
            style={styles.btn}>
                <Text style={styles.textbtn}>Start Now</Text>
            </TouchableHighlight>
            </View>
            <TouchableOpacity style={{position: 'absolute', bottom: 20, right: 20}} onPress={()=>{navigation.navigate('MainApp')}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textskip}>Skip </Text>
                    <ArrowRight2 variant='Linear' color={primary} size={24}/>
                </View>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default LandingPage

const styles = StyleSheet.create({
    container:{
        // paddingHorizontal: 37,
        backgroundColor: white,
        // flex: 1
    },
    info:{
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: primary
    },
    textinput: {
        borderWidth: 2,
        borderColor: secondary500,
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 15
    },
    btn:{
        backgroundColor: primary,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textbtn:{
        color: white,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16
    },
    imgcontainer:{
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    img:{
        maxWidth: windowWidth*0.30,
        maxHeight: windowHeight*0.08
    },
    textskip:{
        color: primary,
        fontSize: 16,
        fontFamily: 'Poppins-Medium'
    }
})