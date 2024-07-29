import { StatusBar, StyleSheet, Text, View, TextInput ,TouchableOpacity, Dimensions } from "react-native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Input } from "../../components/Form/Input";

import { AntDesign } from '@expo/vector-icons';

const {height, width} = Dimensions.get("window")

export function CadastroNome({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
      <TouchableOpacity style={styles.icon} onPress={ () => navigation.navigate('login') }>
        <AntDesign name="arrowleft" size={30} color="black" />
      </TouchableOpacity>
        <View style={styles.main}>
          <View style={styles.contentTitle}>
            <Text style={styles.title}>Qual o seu nome?</Text>
            <Text style={styles.subtitle}>Precisamos do seu nome para uma melhor identificação.</Text>
          </View>

          <View style={styles.contentInput}>
            <Input
                minValue= {30}
                maxValue={50}
                placeholder={"Usuário123"}
              />
          </View>


          <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('cadastroEmail') }>
            <Text style={styles.textButton}>Avançar</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    justifyContent: "center",
    paddingHorizontal: wp(5),
    marginHorizontal: "auto",
    marginVertical: "auto",
    backgroundColor: "#fff"
  },
  main: {
    width: wp(90)
  },
  contentTitle: {
    alignItems: "flex-start",
    marginTop: hp(5)
  },
  title: {
    color: "#003B52",
    fontSize: hp(4),
    fontWeight: "bold",
    textAlign: "justify"
  },
  subtitle: {
    color: "#005A7D",
    fontSize: hp(3),
    marginTop: 10,
    textAlign: "justify"
  },
  contentInput: {
    width: wp(90),
    marginTop: hp(10),
    marginBottom: hp(40)
  },
  button: {
    position: "absolute",
    bottom: hp(0),
    backgroundColor: "#005A7D",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: wp(90),
    marginHorizontal: "auto"
  },
  textButton: {
    color: "#fff",
    fontSize: hp(3),
    padding: 0,
    fontWeight: "bold",
    textAlign: "center",
  },
  icon: {
    position: "absolute",
    marginLeft: wp(5),
    top: hp(4.5)
  }
});