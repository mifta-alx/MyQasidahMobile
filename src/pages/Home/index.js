import {
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl,
  StatusBar,
  TouchableOpacity,
  Image,
  Appearance,
} from 'react-native';
import {React, useState, useCallback, useEffect} from 'react';
import {
  black,
  primary,
  secondary300,
  white,
  grey100,
} from '../../utils/constant';
import {SearchBar} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Sun1, Moon, Book1} from 'iconsax-react-native';
import axios from 'axios';
import {Binarycode, Error, Nodata} from '../../assets/images';
import darkMode from '../../styles/darkMode';
const STYLES = ['default', 'dark-content', 'light-content'];

const Home = () => {
  const navigation = useNavigation();
  const [keyword, setkeyword] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [noData, setNoData] = useState(false);
  const [asc, setAsc] = useState(true);
  const [theme, setTheme] = useState(Appearance.getColorScheme);
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  const Item = ({item, onPress}) => (
    <TouchableOpacity onPress={onPress}>
      <View style={theme == 'light' ? styles.item : darkMode.item}>
        <Text style={theme == 'light' ? styles.title : darkMode.title}>{item.title}</Text>
        <Text style={styles.version}>{item.version}</Text>
        <Text style={theme == 'light' ? styles.arabic_title : darkMode.arabic_title}>{item.title_arabic}</Text>
      </View>
    </TouchableOpacity>
  );

  useEffect(() => {
    getDataQasidah();
  }, []);

  const getDataQasidah = async () => {
    try {
      const res = await axios.get(`https://myqasidah.up.railway.app/qasidahs`);
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
    if (text) {
      const newData = data.filter(item => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setNoData(newData.length === 0);
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
              theme
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
        <Image source={Nodata} style={{maxWidth: 240, maxHeight: 240}} />
        <Text
          style={{
            color: primary,
            fontFamily: 'Poppins-SemiBold',
            fontSize: 20,
            marginVertical: 5,
          }}>
          Qasidah
        </Text>
        <Text style={theme == 'light' ? styles.notfound : darkMode.notfound}>Tidak Ditemukan</Text>
      </View>
    );
  };
  const SwitchTheme = () => {
    return theme == 'dark' ? (
      <TouchableOpacity onPress={()=>setTheme('light')}>
        <Sun1 size={24} variant="Bold" color={primary} />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity onPress={()=>setTheme('dark')}>
        <Moon size={24} variant="Bold" color={primary} />
      </TouchableOpacity>
    );
  };
  return (
    <>
      <StatusBar animated={true} barStyle={theme == 'light' ? STYLES[1] : STYLES[2]} />
      <View style={ theme == 'light' ? styles.body : darkMode.body}>
        <SafeAreaView style={theme == 'light' ? styles.container : darkMode.container} edges={['top', 'left', 'right']}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <SwitchTheme />
            <Text style={styles.header}>MyQasidah</Text>
            <Book1 size={24} variant="Linear" color={primary} />
          </View>
          <SearchBar
            value={keyword}
            onChangeText={text => searchFilter(text)}
            asc={asc}
            onPress={() => setAsc(!asc)}
            theme = {theme}
          />
        </SafeAreaView>
        <View style={{flex: 1, marginBottom: 20}}>
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
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  notfound: {
    color: black,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
});
