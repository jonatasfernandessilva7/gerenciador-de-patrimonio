import { 
  StatusBar, 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,  
  TouchableOpacity,
  Dimensions 
} from "react-native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get("window")

import { AntDesign } from '@expo/vector-icons';

import { Card } from "../../components/cardPatrimonio"

export function Patrimonios({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles.icon} onPress={ () => navigation.navigate('menuPrincipal') }>
            <AntDesign name="close" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Meus Patrimônios</Text>

          <View style={styles.main}>
            <Card nomePatrimonio={"Casa Própria"} valor={"60.000"} route={ () => navigation.navigate('editPatrimonio') }/>
            <Card nomePatrimonio={"Apartamento"} valor={"60.000"}/>
            <Card nomePatrimonio={"Apartamento"} valor={"60.000"}/>
            <Card nomePatrimonio={"Loja"} valor={"40.000"}/>
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
    fontSize: hp(3.8),
    fontWeight: "700",
    color: "#003B52",
    marginTop: hp(12),
    marginBottom: hp(5)
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