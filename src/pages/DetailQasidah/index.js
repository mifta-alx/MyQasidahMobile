import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import {React, useState, useEffect} from 'react';
import {listQasidah} from '../Home/data';
import {black, dark_grey, white} from '../../utils/constant';
import axios from 'axios';
const DetailQasidah = ({route}) => {
  const {Id_Qasidah} = route.params;
  const [title, setTitle] = useState('');
  const [title_arabic, setTitleArabic] = useState('');
  const [version, setVersion] = useState('');
  const [reff, setReff] = useState([]);
  const [lirik, setLirik] = useState([]);
  const getQasidahById = async () => {
    const res = await axios.get(
      `http://192.168.0.103:3001/qasidahs/${Id_Qasidah}`,
    );
    setTitle(res.data.title);
    setTitleArabic(res.data.title_arabic);
    setVersion(res.data.version);
    setReff(res.data.textreff.reverse());
    setLirik(res.data.textlirik);
  };
  useEffect(() => {
    getQasidahById();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.bar} />
        <Text style={styles.title_arabic}>{title_arabic}</Text>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.reffview}>
          {reff.map((data, index) => {
            return (
              <View
                style={{alignItems: 'center', marginVertical: 5}}
                key={index}>
                <Text style={styles.reff}>{data.reff}</Text>
              </View>
            );
          })}
        </View>
        <View style={styles.line} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.lirikview}>
            {lirik.reverse().map((data, index) => {
              return (
                <View
                  style={{alignItems: 'center', marginVertical: 5}}
                  key={index}>
                  <Text style={styles.lirik}>{data.lirik}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DetailQasidah;

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    flex: 1,
  },
  content: {
    paddingVertical: 15,
    alignItems: 'center',
    paddingHorizontal: 10,
    flex: 1,
  },
  bar: {
    backgroundColor: black,
    width: 40,
    height: 4,
    borderRadius: 5,
  },
  title_arabic: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    paddingTop: 30,
    color: black,
  },
  title: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    paddingTop: 5,
    paddingBottom: 10,
    color: black,
  },
  reffview: {
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    justifyContent: 'center',
  },
  reff: {
    color: black,
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
  line: {
    backgroundColor: dark_grey,
    height: 0.5,
    width: '80%',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  lirikview: {
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    justifyContent: 'center',
  },
  lirik: {
    color: black,
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
});
