import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {React, useState, useEffect} from 'react';
import {black, grey500, white} from '../../utils/constant';
import darkDetail from '../../styles/darkMode_DetailQasidah';
import axios from 'axios';
const DetailQasidah = ({route}) => {
  const {Id_Qasidah, theme} = route.params;
  const [title, setTitle] = useState('');
  const [title_arabic, setTitleArabic] = useState('');
  const [reff, setReff] = useState([]);
  const [lirik, setLirik] = useState([]);
  const getQasidahById = async () => {
    const res = await axios.get(`http://myqasidah.up.railway.app/qasidahs/${Id_Qasidah}`);
    setTitle(res.data.title);
    setTitleArabic(res.data.title_arabic);
    setReff(res.data.textreff);
    setLirik(res.data.textlirik);
  };

  useEffect(() => {
    getQasidahById();
  }, []);

  return (
    <SafeAreaView style={theme == 'light' ? styles.container : darkDetail.container}>
      <View style={styles.content}>
        <View style={theme == 'light' ? styles.bar : darkDetail.bar} />
        <Text style={theme == 'light' ? styles.title_arabic : darkDetail.title_arabic}>{title_arabic}</Text>
        <Text style={theme == 'light' ? styles.title : darkDetail.title}>{title}</Text>
        <View style={styles.reffview}>
          {reff.map((data, index) => {
            return (
              <View
                key={index}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  width: '100%',
                }}>
                {data.reff
                  .slice(0)
                  .reverse()
                  .map((subr, indexsub) => {
                    const widthReff = subr.subreff == '۰۞۰' ? '10%' : '45%';
                    const align =
                      indexsub == 0
                        ? 'flex-end'
                        : indexsub == 2
                        ? 'flex-start'
                        : 'center';
                    if (data.reff.length > 1) {
                      return (
                        <View
                          style={{
                            alignItems: 'center',
                            marginVertical: 5,
                            width: widthReff,
                          }}
                          key={indexsub}>
                          <Text style={theme == 'light' ? styles.reff : darkDetail.reff}>{subr.subreff}</Text>
                        </View>
                      );
                    } else {
                      return (
                        <View
                          style={{alignItems: 'center', marginVertical: 5}}
                          key={index}>
                          <Text style={styles.reff}>{subr.subreff}</Text>
                        </View>
                      );
                    }
                  })}
              </View>
            );
          })}
        </View>
        <View style={styles.line} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.lirikview}>
            {lirik.map((data, index) => {
              return (
                <View
                  key={index}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  {data.lirik
                    .slice(0)
                    .reverse()
                    .map((subl, indexsub) => {
                      const widthLirik = subl.sublirik == '۰۞۰' ? '10%' : '45%';
                      const align =
                        indexsub == 0
                          ? 'flex-end'
                          : indexsub == 2
                          ? 'flex-start'
                          : 'center';
                      if (data.lirik.length > 1) {
                        return (
                          <View
                            style={{
                              alignItems: 'center',
                              marginVertical: 5,
                              width: widthLirik,
                            }}
                            key={indexsub}>
                            <Text style={theme == 'light' ? styles.reff : darkDetail.reff}>{subl.sublirik}</Text>
                          </View>
                        );
                      } else {
                        return (
                          <View
                            style={{alignItems: 'center', marginVertical: 5}}
                            key={index}>
                            <Text style={theme == 'light' ? styles.reff : darkDetail.reff}>{subl.sublirik}</Text>
                          </View>
                        );
                      }
                    })}
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
    // flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    justifyContent: 'center',
  },
  reff: {
    color: black,
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
});
