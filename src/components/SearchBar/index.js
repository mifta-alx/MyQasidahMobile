import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  black,
  grey500,
  primary,
  secondary,
  secondary300,
  grey300,
  white,
  grey600,
} from '../../utils/constant';
import {SearchNormal, Sort} from 'iconsax-react-native';
import darkMode from '../../styles/darkMode';

const SearchBar = ({onChangeText, value, asc, onPress, theme}) => {
  const IconSorting = () => {
    return asc == true ? (
      <Sort size={24} variant="Linear" color={primary} style={{marginStart: 10}} />
    ) : (
      <Sort
        size={24}
        variant="Linear"
        color={primary}
        style={{transform: [{rotate: '180deg'}], marginStart: 10}}
      />
    );
  };
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={theme == 'light' ? styles.search_bar : darkMode.search_bar}>
        <SearchNormal color={theme == 'light' ? grey500 : grey600} variant="Linear" size={12} />
        <TextInput
          placeholder="Cari Qasidah"
          placeholderTextColor={theme == 'light' ? grey500 : grey600}
          style={theme == 'light' ? styles.textsearch : darkMode.textsearch}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      <TouchableOpacity onPress={onPress}>
        <IconSorting />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  search_bar: {
    backgroundColor: grey300,
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
    color: black
  },
});
