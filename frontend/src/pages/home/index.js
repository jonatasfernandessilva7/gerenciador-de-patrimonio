import { StatusBar, SafeAreaView , StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from "react-native";

import { Card } from "../../components/cardPatrimonio"

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { AntDesign } from '@expo/vector-icons';

const {height, width} = Dimensions.get("window")

export function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.person}>Robert Michael</Text>
            <Text style={styles.valueTotal}>R$ 520,000</Text>
          </View>

          <View style={styles.main}>
            <View style={styles.boxButton}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.contentButton}>
                  <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('addPatrimonio') }>
                    <AntDesign name="plus" size={24} color="#FFF" />
                  </TouchableOpacity>
                    <Text style={styles.labelButton}>Adicionar</Text>
                </View>

                <View style={styles.contentButton}>
                  <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Patrimonios') }>
                    <AntDesign name="areachart" size={24} color="#FFF" />
                  </TouchableOpacity>
                    <Text style={styles.labelButton}>Patrimônios</Text>
                </View>

                <View style={styles.contentButton}>
                  <TouchableOpacity style={styles.button}>
                    <AntDesign name="areachart" size={24} color="#FFF" />
                  </TouchableOpacity>
                    <Text style={styles.labelButton}>Simulações</Text>
                </View>

                <View style={styles.contentButton}>
                  <TouchableOpacity style={styles.button}>
                    <AntDesign name="profile" size={24} color="#FFF" />
                  </TouchableOpacity>
                    <Text style={styles.labelButton}>Sobre</Text>
                </View>
              </ScrollView>
            </View>

            <View style={styles.listPatrimonios}>
              <Text style={styles.title}>Últimos lançamentos</Text>

              <View style={styles.list}>
                <Card nomePatrimonio={"Casa Própria"} valor={"40.000"} route={ () => navigation.navigate("editPatrimonio")}/>
                <Card nomePatrimonio={"Apartamento"} valor={"130.000"} />
                <Card nomePatrimonio={"Automóvel"} valor={"60.000"} />
              </View>
            </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    height: hp(100),
    justifyContent: "center",
    minWidth: "100%",
    minHeight: "100%",
    marginHorizontal: "auto",
    backgroundColor: "#F3F3F3"
  },
  header: {
    flexDirection: "row",
    width: wp(100),
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#005A7D",
    paddingTop: hp(15),
    paddingBottom: hp(2),
    paddingHorizontal: wp(4)
  },
  person: {
    color: "#FFF",
    fontSize: hp(2.8),
    fontWeight: "bold",
  },
  valueTotal: {
    color: "#005A7D",
    fontSize: hp(2.3),
    fontWeight: "500",
    backgroundColor: "#fff",
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    borderRadius: 15
  },
  main: {
    width: wp(100),
    marginBottom: hp(8)
  },
  boxButton: {
    flexDirection: "row",
    width: wp(100),
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: hp(7)
  },
  contentButton: {
    alignItems: "center",
    marginHorizontal: wp(3.1)
  },
  labelButton: {
    color: "#333",
    fontSize: hp(2),
    fontWeight: "500",
    marginTop: hp(1)
  },
  button: {
    paddingHorizontal: wp(6),
    paddingVertical: hp(3),
    backgroundColor: "#005A7D",
    borderRadius: 50,
    boxButton: 2,
    borderWidth: 1,
    borderColor: "#005A7D"
  },
  listPatrimonios: {
    width: wp(100)
  },
  title: {
    color: "#003B52",
    fontSize: hp(3),
    marginLeft: wp(4),
    fontWeight: "700"
  },
  list: {
    marginHorizontal: "auto",
    marginTop: hp(4),
    alignItems: "center"
  }
});