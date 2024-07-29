import { StatusBar, StyleSheet, Text, View, TextInput ,TouchableOpacity, Dimensions, ScrollView } from "react-native";

import { Input } from "../../components/Form/Input";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get("window")

export function Perfil() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
        <View style={styles.main}>
          <View>
            <Text style={styles.title}>Minha conta</Text>
          </View>

          <View style={styles.contentInput}>
            <View style={styles.boxInput}>
              <Text style={styles.label}>Nome Completo</Text>
              <Input
                minValue= {30}
                maxValue={50}
                placeholder={"Usuário123"}
              />
            </View>

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
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Alterar dados</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    justifyContent: "center",
    minWidth: "100%",
    minHeight: "100%",
    paddingHorizontal: wp(5),
    marginHorizontal: "auto",
    backgroundColor: "#fff"
  },
  main: {
    width: wp(90)
  },
  title: {
    color: "#003B52",
    fontSize: hp(3.8),
    marginTop: hp(2),
    marginBottom: hp(4),
    fontWeight: "bold",
    textAlign: "center"
  },
  contentInput: {
    width: wp(90)
  },
  boxInput: {
    width: wp(90),
    marginBottom: hp(2)
  },
  label: {
    width: "100%",
    color: "#005A7D",
    fontSize: hp(3),
    marginLeft: 7,
    marginBottom: 10,
    textAlign: "justify"
  },
  contentButton: {
    width: "100%",
    flexDirection: 'column',
    marginVertical: hp(10),
    marginHorizontal: "auto"
  },
  button: {
    width: wp(90),
    backgroundColor: "#005A7D",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginHorizontal: "auto"
  },
  textButton: {
    color: "#fff",
    fontSize: hp(3),
    padding: 0,
    fontWeight: "bold",
    textAlign: "center",
  }
});