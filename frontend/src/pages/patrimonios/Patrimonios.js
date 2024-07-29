import { StatusBar, SafeAreaView , StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { Card } from "../../components/cardPatrimonio"

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { AntDesign } from '@expo/vector-icons';

const {height, width} = Dimensions.get("window")

export function Patrimonios({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles.icon} onPress={ () => navigation.navigate('menu') }>
            <AntDesign name="close" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Meus Patrimônios</Text>

          <View style={styles.main}>
            <Card nomePatrimonio={"Casa Própria"} valor={"60.000"}/>
            <Card nomePatrimonio={"Apartamento"} valor={"60.000"}/>
            <Card nomePatrimonio={"Apartamento"} valor={"60.000"}/>
            <Card nomePatrimonio={"Loja"} valor={"60.000"}/>
            <Card nomePatrimonio={"Automóvel"} valor={"60.000"}/>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    justifyContent: "center",
    minWidth: "100%",
    paddingHorizontal: wp(5),
    marginHorizontal: "auto",
    backgroundColor: "#fff"
  },
  title: {
    width: wp(90),
    textAlign: "center",
    fontSize: hp(3.5),
    fontWeight: "700",
    color: "#003B52",
    marginTop: hp(12),
    marginBottom: hp(7)
  },
  main: {
    width: wp(100),
    marginBottom: hp(4)
  },
  icon: {
    position: "absolute",
    top: hp(4.5)
  }
});