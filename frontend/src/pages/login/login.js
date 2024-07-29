import { StatusBar, StyleSheet, Text, View, TextInput ,TouchableOpacity, Dimensions } from "react-native";

import { Input } from "../../components/Form/Input"

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get("window")

export function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
        <View style={styles.main}>
          <View>
            <Text style={styles.title}>Seja bem vindo</Text>
          </View>

          <View style={styles.contentInput}>
            <View style={styles.boxInput}>
              <Text style={styles.label}>Email</Text>
              <Input
                minValue= {30}
                maxValue={50}
                placeholder={"email@gmail.com"}
              />
            </View>

            <View style={styles.boxInput}>
              <Text style={styles.label}>Senha</Text>
              <Input
                minValue= {4}
                maxValue={8}
                placeholder={"*******"}
              />
            </View>
          </View>


          <View style={styles.contentButton}>
            <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('menu') }>
              <Text style={styles.textButton}>Avançar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonClean} onPress={ () => navigation.navigate('cadastroNome') }>
              <Text style={styles.textButtonClean}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    minWidth: "100%",
    justifyContent: "center",
    paddingHorizontal: wp(5),
    marginHorizontal: "auto",
    marginVertical: "auto",
    backgroundColor: "#fff"
  },
  main: {
    width: wp(90)
  },
  title: {
    width: wp(90),
    color: "#003B52",
    fontSize: hp(4),
    fontWeight: "bold",
    textAlign: "center"
  },
  contentInput: {
    marginVertical: hp(8)
  },
  boxInput: {
    width: wp(90),
    marginBottom: 20
  },
  label: {
    width: wp(90),
    color: "#005A7D",
    fontSize: hp(3),
    marginLeft: 7,
    marginBottom: 10,
    textAlign: "justify"
  },
  contentButton: {
    width: wp(90),
    flexDirection: "column",
    alignItems: "center",
    marginTop: hp(7),
    marginHorizontal: "auto"
  },
  button: {
    width: wp(90),
    backgroundColor: "#005A7D",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: "auto"
  },
  buttonClean: {
    width: wp(90),
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginHorizontal: "auto",
    borderWidth: 1, // Largura da borda
    borderColor: '#BFBFBF', // Cor da borda
    borderRadius: 10, // Arredondar cantos da borda
  },
  textButton: {
    color: "#fff",
    fontSize: hp(3),
    padding: 0,
    fontWeight: "bold",
    textAlign: "center",
  },
  textButtonClean: {
    color: "#005A7D",
    fontSize: hp(3),
    padding: 0,
    fontWeight: "bold",
    textAlign: "center",
  }
});