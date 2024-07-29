import { StatusBar, StyleSheet, Text, View, TextInput ,TouchableOpacity, Dimensions } from "react-native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { AntDesign } from '@expo/vector-icons';

const {height, width} = Dimensions.get("window")

export function CadastroSenha({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
      <TouchableOpacity style={styles.icon} onPress={ () => navigation.navigate('cadastroEmail') }>
        <AntDesign name="arrowleft" size={30} color="black" />
      </TouchableOpacity>
        <View style={styles.main}>
          <View style={styles.contentTitle}>
            <Text style={styles.title}>Defina uma senha</Text>
          </View>

          <View style={styles.boxInput}>
            <View style={styles.contentInput}>
            <Text style={styles.label}>Senha</Text>
            <Input
                minValue= {4}
                maxValue={8}
                placeholder={"*******"}
              />
            </View>
            
            <View style={styles.contentInput}>
              <Text style={styles.label}>Confirmar Senha</Text>
              <Input
                minValue= {4}
                maxValue={8}
                placeholder={"*******"}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('addPatrimonio') }>
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
    minWidth: "100%",
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
  boxInput: {
    marginTop: hp(5),
    marginBottom: hp(30)
  },
  contentInput: {
    width: wp(90),
    marginBottom: hp(4)
  },
  label: {
    width: wp(90),
    color: "#005A7D",
    fontSize: hp(2.9),
    marginLeft: 7,
    marginBottom: 10,
    textAlign: "justify"
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