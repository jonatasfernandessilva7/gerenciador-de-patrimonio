import { StatusBar, StyleSheet, Text, View, TextInput ,TouchableOpacity, Dimensions } from "react-native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Input } from "../../components/Form/Input";

const {height, width} = Dimensions.get("window")

export function AddPatrimonio({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
      {/* <TouchableOpacity style={styles.icon}>
        <AntDesign name="arrowleft" size={30} color="black" />
      </TouchableOpacity> */}
        <View style={styles.main}>
          <View style={styles.contentTitle}>
            <Text style={styles.title}>Adicionar patrimônio</Text>
          </View>

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


          <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('menu') }>
            <Text style={styles.textButton}>Adicionar</Text>
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
    marginTop: hp(5)
  },
  title: {
    color: "#003B52",
    fontSize: hp(3.8),
    fontWeight: "bold",
    textAlign: "center"
  },
  contentInput: {
    width: wp(90),
    marginTop: hp(8),
    marginBottom: hp(30)
  },
  boxInput: {
    width: "100%",
    marginBottom: 30
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