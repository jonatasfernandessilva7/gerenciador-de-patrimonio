import { StatusBar, StyleSheet, Text, View, TextInput ,TouchableOpacity, Dimensions } from "react-native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Input } from "../../components/Form/Input";

import { AntDesign } from '@expo/vector-icons';

const {height, width} = Dimensions.get("window")

export function EditPatrimonio({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
        <TouchableOpacity style={styles.icon} onPress={ () => navigation.navigate('Patrimonios') }>
          <AntDesign name="close" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.main}>
          <Text style={styles.title}>Patrimônio</Text>

          <View style={styles.contentInput}>
            <View style={styles.boxInput}>
              <Text style={styles.label}>Tipo de Patrimônio</Text>
              <TextInput
                  style={styles.input}
                  minHeight= {20}
                  maxLength={40}
                  //onChangeText={onChangeNumber}
                  placeholder="Casa"
              />
            </View>

            <View style={styles.boxInput}>
              <Text style={styles.label}>Valor do Imóvel</Text>
              <Input
                minValue= {1}
                maxValue={10}
                placeholder={"R$ 0,00"}
              />
            </View>

          </View>

          <View style={styles.boxButtton}>
            <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('menu') }>
              <Text style={styles.textButton}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDelete} onPress={ () => navigation.navigate('menu') }>
              <Text style={styles.textButtonDelete}>Excluir</Text>
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
    paddingHorizontal: wp(5),
    marginHorizontal: "auto",
    marginVertical: "auto",
    backgroundColor: "#fff"
  },
  main: {
    width: wp(90)
  },
  title: {
    marginTop: hp(5),
    color: "#003B52",
    fontSize: hp(3.8),
    fontWeight: "bold",
    textAlign: "center",
  },
  contentInput: {
    width: wp(90),
    marginTop: hp(4),
  },
  boxInput: {
    width: wp(90),
    marginBottom: hp(4)
  },
  label: {
    width: wp(90),
    color: "#005A7D",
    fontSize: hp(3),
    marginLeft: 7,
    marginBottom: 10,
    textAlign: "justify"
  },
  input: {
    width: wp(90),
    fontSize: hp(2.5),
    height: hp(10),
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1, // Largura da borda
    borderColor: '#BFBFBF', // Cor da borda
    borderRadius: 10, // Arredondar cantos da borda
  },
  boxButtton: {
    flexDirection: "column",
    marginTop: hp(10)
  },
  button: {
    width: wp(90),
    backgroundColor: "#005A7D",
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginHorizontal: "auto",
    borderRadius: 10,

  },
  buttonDelete: {
    width: wp(90),
    backgroundColor: "#E3E3E3",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: hp(2),
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
  textButtonDelete: {
    color: "red",
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