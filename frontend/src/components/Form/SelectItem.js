import React, { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get("window")

const data = [
  { label: 'Casa', value: '1' },
  { label: 'Apartamento', value: '2' },
  { label: 'Automóvel', value: '3' },
  { label: 'Aluguel', value: '4' }
];

export const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Selecionar Item' : '...'}
        searchPlaceholder="Pesquisar..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    backgroundColor: 'white',
    marginHorizontal: 'auto'
  },
  dropdown: {
    width: wp(90),
    height: 50,
    borderColor: '#BFBFBF',
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 10,
  },
  placeholderStyle: {
    fontSize: hp(2.5),
  },
  selectedTextStyle: {
    fontSize: hp(2.5),
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: hp(2.5),
  },
});