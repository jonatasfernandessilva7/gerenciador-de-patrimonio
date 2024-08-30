import { 
  StatusBar, 
  StyleSheet, 
  Text, 
  View, 
  Dimensions 
} from "react-native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get("window")

import { Input } from "../../components/Form/input/Input"
import { InputNumeric } from "../../components/Form/input/InputNumeric"
import { Button } from "../../components/Form/button/Button"
import { ButtonClear } from "../../components/Form/button/ButtonClear";

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
                minValue= {20}
                maxValue={50}
                placeholder={"email@gmail.com"}
                keyboardtype={'email-address'}
              />
            </View>

            <View style={styles.boxInput}>
              <Text style={styles.label}>Senha</Text>
              <InputNumeric
                minValue= {8}
                maxValue={8}
                placeholder={"*******"}
              />
            </View>
          </View>


          <View style={styles.contentButton}>
            <Button TextButton={'Avançar'} onpress={ () => navigation.navigate('menuPrincipal') }/>
            <ButtonClear TextButton={'Cadastre-se'} onpress={ () => navigation.navigate('cadastroNome') }/>
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
  }
});