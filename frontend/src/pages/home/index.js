import { useState } from "react"

import { 
  StatusBar, 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TouchableOpacity, 
  ScrollView, 
  Animated, 
  Dimensions
} from "react-native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get("window")

//import { Card } from "../../components/cardPatrimonio"

import { AntDesign } from '@expo/vector-icons';
import Setting from '@expo/vector-icons/AntDesign';

import FontAwesome from '@expo/vector-icons/FontAwesome';

export function Home({ navigation }) {

  const [largura, setLargura] = useState(new Animated.Value(0));
  const [altura, setAltura] = useState(new Animated.Value(30));

  Animated.sequence([
    Animated.timing(
      largura,
      {
        useNativeDriver: false,
        toValue: wp(100),
        duration: 1000,
        
      }
    ),
    Animated.timing(
      altura,
      {
        useNativeDriver: false,
        toValue: hp(100),
        duration: 1000
      }
    ),
  ]).start()

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{ width: largura, height: altura}}>
      <StatusBar backgroundColor={"#005A7D"}/>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={styles.figure}>
              <Image style={styles.imagem} source={require('../../assets/img/icon_secundario.png')}/>
              
              <TouchableOpacity style={styles.setting}>
                <Setting name="setting" size={hp(4.3)} color="#FFF" />
              </TouchableOpacity>
            </View>

            <Text style={styles.subtitle}>Seja bem vindo(a)</Text>
            <Text style={styles.person}>Francisco Gabriel</Text>
          </View>

          <View style={styles.main}>
            <View style={styles.contentValue}>
              <Text style={styles.subtitlevalueTotal}>Valor Total</Text>
              <Text style={styles.valueTotal}>R$ 520.000,00</Text>
            </View>

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
                    <FontAwesome name="dollar" size={24} color="#FFF" paddingHorizontal={5}/>
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
                  <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('sobre') }>
                    <AntDesign name="profile" size={24} color="#FFF" />
                  </TouchableOpacity>
                    <Text style={styles.labelButton}>Sobre</Text>
                </View>

                <View style={styles.contentButton}>
                  <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Ajuda') }>
                    <FontAwesome name="question" size={24} color="#FFF" style={{paddingHorizontal: wp(1.2)}}/>
                  </TouchableOpacity>
                    <Text style={styles.labelButton}>Ajuda</Text>
                </View>
              </ScrollView>
            </View>

            <View style={styles.listPatrimonios}>
              <Text style={styles.title}>Últimos lançamentos</Text>

              {/* <View style={styles.list}>
                <Card nomePatrimonio={"Casa Própria"} valor={"40.000"} route={ () => navigation.navigate("editPatrimonio")}/>
                <Card nomePatrimonio={"Apartamento"} valor={"130.000"} />
                <Card nomePatrimonio={"Automóvel"} valor={"60.000"} />
              </View> */}

              <Text style={styles.vazio}>Nenhum item adicionado</Text>
            </View>
          </View>
      </ScrollView>
      </Animated.View>
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
    flexDirection: "column",
    width: wp(100),
    justifyContent: "space-between",
    backgroundColor: "#005A7D",
    paddingTop: hp(1),
    paddingBottom: hp(2)
  },
  figure: {
    flexDirection: "row",
    width: wp(100),
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: hp(2),
    marginLeft: hp(0.3)
  },
  setting: {
    alignItems: "flex-end",
    marginRight: hp(3.3)
  },
  imagem: {
    width: wp(17),
    height: hp(12.5),
    borderRadius: 99,
    alignItems: "flex-start"
  },
  subtitle: {
    color: "#dcdcdc",
    fontSize: hp(2.3),
    fontWeight: "500",
    marginBottom: hp(2),
    paddingLeft: hp(2)
  },
  person: {
    color: "#FFFFFF",
    fontSize: hp(3),
    fontWeight: "bold",
    marginBottom: hp(1),
    paddingLeft: hp(2)
  },
  main: {
    width: wp(100),
    marginBottom: hp(8)
  },
  contentValue: {
    paddingLeft: wp(4),
    paddingVertical: hp(3),
    borderBottomWidth: 1,
    borderBottomColor: "#d3d3d3"
  },
  subtitlevalueTotal: {
    color: "#606060",
    fontSize: hp(2.2),
    fontWeight: "500",
    marginBottom: hp(2.5)
  },
  valueTotal: {
    color: "#005A7D",
    fontSize: hp(2.5),
    fontWeight: "700",
    marginLeft: wp(3),
    marginBottom: hp(1)
  },
  boxButton: {
    flexDirection: "row",
    width: wp(100),
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: hp(7),
    marginBottom: hp(8)
  },
  contentButton: {
    alignItems: "center",
    marginHorizontal: wp(4)
  },
  labelButton: {
    color: "#606060",
    fontSize: hp(2),
    fontWeight: "500",
    marginTop: hp(1.3)
  },
  button: {
    paddingHorizontal: wp(6),
    paddingVertical: hp(3),
    backgroundColor: "#005A7D",
    borderRadius: 100,
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
  vazio: {
    color: "#606060",
    fontSize: hp(2.6),
    fontWeight: "500",
    marginHorizontal: "auto",
    marginVertical: hp(9)
  },
  list: {
    marginHorizontal: "auto",
    marginTop: hp(4),
    alignItems: "center"
  }
});