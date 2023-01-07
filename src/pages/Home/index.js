import {
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {React, useState, useCallback, useEffect} from 'react';
import {
  black,
  primary,
  secondary,
  secondary300,
  white,
  secondary500,
  grey100
} from '../../utils/constant';
import {SearchBar} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {CloudCross, Sun1, Moon, Book1} from 'iconsax-react-native';
import axios from 'axios';
const STYLES = ['default', 'dark-content', 'light-content'];

const Item = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.version}>{item.version}</Text>
      <Text style={styles.arabic_title}>{item.title_arabic}</Text>
    </View>
  </TouchableOpacity>
);

const Home = () => {
  const navigation = useNavigation();
  const [keyword, setkeyword] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [noData, setNoData] = useState(false);
  const [asc, setAsc] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    getDataQasidah();
  }, []);

  const getDataQasidah = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/qasidahs`);
      setData(res.data);
      setFilteredData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  function wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  const searchFilter = text => {
    const newData = data.filter(item => {
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      itemData.indexOf(textData) == -1 ? setNoData(true) : setNoData(false);
      return itemData.indexOf(textData) > -1;
    });
    if (text) {
      setFilteredData(newData);
      setkeyword(text);
    } else {
      setFilteredData(data);
      setkeyword(text);
    }
  };
  const FlatListQasidah = item => {
    const renderItem = ({item, navigation}) => {
      return (
        <Item
          item={item}
          onPress={() =>
            navigation.navigate('DetailQasidah', {
              Id_Qasidah: item._id,
            })
          }
        />
      );
    };
    return (
      <View style={{marginBottom: 5}}>
        <FlatList
          data={
            asc
              ? filteredData.sort((a, b) => a.title.localeCompare(b.title))
              : filteredData
                  .sort((a, b) => a.title.localeCompare(b.title))
                  .reverse()
          }
          keyExtractor={item => item._id}
          renderItem={item => renderItem({...item, navigation})}
          showsVerticalScrollIndicator={false}
          vertical
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              title="Sedang Memuat"
              titleColor={primary}
              tintColor={primary}
            />
          }
        />
      </View>
    );
  };
  const NotFound = () => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <CloudCross size={140} variant="Bold" color={primary} />
        <Text
          style={{
            color: black,
            fontFamily: 'Poppins-SemiBold',
            fontSize: 20,
            marginVertical: 5,
          }}>
          Qasidah
        </Text>
        <Text
          style={{color: black, fontFamily: 'Poppins-Regular', fontSize: 14}}>
          Tidak Ditemukan
        </Text>
      </View>
    );
  };

  return (
    <>
      <StatusBar animated={true} barStyle={STYLES[1]} />
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Moon size={24} variant="Bold" color={primary} />
            <Text style={styles.header}>MyQasidah</Text>
            <Book1 size={24} variant="Linear" color={primary} />
          </View>
          <SearchBar
            value={keyword}
            onChangeText={text => searchFilter(text)}
            asc={asc}
            onPress={() => setAsc(!asc)}
          />
        </SafeAreaView>
        <View style={{flex: 1}}>
          {noData ? <NotFound /> : <FlatListQasidah />}
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
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
    backgroundColor: grey100,
    borderRadius: 10,
    marginVertical: 7.5,
    padding: 12,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
    // elevation: 2,
  },
  title: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: black,
  },
  arabic_title: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    alignSelf: 'flex-end',
    color: black,
  },
  version: {
    fontSize: 10,
    color: secondary300,
    fontFamily: 'Poppins-Medium',
  },
});
