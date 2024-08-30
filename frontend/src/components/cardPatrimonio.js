import { SafeAreaView , StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { AntDesign } from '@expo/vector-icons';

const {height, width} = Dimensions.get("window")

export function Card({ route, nomePatrimonio, valor }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={route}>
        <View style={styles.descrition}>
          <Text style={styles.subtitle}>+ R$ {valor}</Text>
          <Text style={styles.title}>{nomePatrimonio}</Text>
        </View>

        <View style={styles.buttons}>
          <AntDesign name="right" size={24} color="#003B52" />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp(90),
  },
  item: {
    width: wp(90),
    flexDirection: "row",
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#909090",
    backgroundColor: "#fff",
    marginBottom: 20
  },
  descrition: {
    flexDirection: "column",
    borderRadius: 10,
  },
  subtitle: {
    color: "#148E00",
    fontSize: hp(2.6),
    marginLeft: 15,
    marginTop: hp(1),
    marginBottom: hp(0.5)
  },
  title: {
    color: "#005A7D",
    fontSize: hp(3.5),
    fontWeight: "bold",
    marginLeft: 25,
    marginBottom: hp(2)
  },
  buttons: {
    marginVertical: "auto",
    alignItems: "center",
    marginRight: wp(5),
  },
  icon: {
    alignItems: "center"
  }
});