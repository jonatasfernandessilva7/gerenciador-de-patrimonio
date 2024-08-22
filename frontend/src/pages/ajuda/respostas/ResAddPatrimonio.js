import { 
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text, 
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get("window")

import { AntDesign } from '@expo/vector-icons';

export function ResAddPatrimonio({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
      <TouchableOpacity style={styles.icon} onPress={ () => navigation.navigate('menu') }>
        <AntDesign name="arrowleft" size={30} color="black" />
      </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.main}>
            <Text style={styles.title}>Como Adicionar um Patrimônio?</Text>

            <Text style={styles.text}>Para adicionar um Patrimônio é necessário seguir alguns passos. Siga as instruções e tenha a melhor experiência em nosso App!</Text>

            <Text style={styles.subtitle}>Passo 1:</Text>
            <Text style={styles.text}></Text>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        height: hp(100),
        justifyContent: "center",
        minWidth: "100%",
        paddingHorizontal: wp(5),
        marginHorizontal: "auto",
        backgroundColor: "#fff"
    },
    main: {
        width: wp(90),
        marginBottom: hp(10)
    },
    title: {
        width: "100%",
        textAlign: "center",
        fontSize: hp(3.5),
        fontWeight: "700",
        color: "#003B52",
        marginTop: hp(8),
        marginBottom: hp(4)
    },
    text: {
        width: "100%",
        textAlign: "justify",
        fontSize: hp(2.5),
        lineHeight: 35,
        color: "#333",
        marginBottom: 30
    },
    subtitle: {
      width: "100%",
      textAlign: "justify",
      fontWeight: "600",
      fontSize: hp(3),
      lineHeight: 35,
      color: "#003B52",
      marginBottom: hp(6)
    },
    icon: {
      top: hp(4.5)
    }
})