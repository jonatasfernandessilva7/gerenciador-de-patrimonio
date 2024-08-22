import { 
  StatusBar, 
  StyleSheet, 
  Text, 
  View, 
  Dimensions 
} from "react-native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get("window")

import { DropdownComponent } from '../../components/Form/SelectItem'
import { InputNumeric } from "../../components/Form/input/InputNumeric";
import { Button } from "../../components/Form/button/Button"

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
              <DropdownComponent />
            </View>

            <View style={styles.boxInput}>
              <Text style={styles.label}>Valor do Imóvel</Text>
              <InputNumeric
                minValue={1}
                maxValue={10}
                placeholder={'R$ 0,00'}
              />
            </View>
          </View>

          <View style={styles.button}>
            <Button TextButton={'Adicionar'} onpress={ () => navigation.navigate('menuPrincipal') }/>
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
  button: {
    position: "absolute",
    bottom: hp(0),
    width: wp(90),
    marginHorizontal: "auto"
  },
  icon: {
    position: "absolute",
    marginLeft: wp(5),
    top: hp(4.5)
  }
});