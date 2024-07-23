import { StatusBar, StyleSheet, Text, View, TextInput ,TouchableOpacity } from "react-native";

import { AntDesign } from '@expo/vector-icons';

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
            <Text style={styles.subtitle}>Precisamos que digite um Pin para proteger seus dados.</Text>
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
              <TextInput
                  style={styles.input}
                  minHeight= {1}
                  maxLength={6}
                  //onChangeText={onChangeNumber}
                  placeholder="R$ 0,00"
              />
            </View>
          </View>


          <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('menu') }>
            <Text style={styles.textButton}>Salvar dados</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    minWidth: "100%",
    marginHorizontal: "auto",
    backgroundColor: "#fff"
  },
  main: {
    paddingHorizontal: 20
  },
  contentTitle: {
    alignItems: "flex-start"
  },
  title: {
    color: "#003B52",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 30,
    textAlign: "justify"
  },
  subtitle: {
    color: "#005A7D",
    fontSize: 24,
    marginTop: 10,
    textAlign: "justify"
  },
  contentInput: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 40
  },
  boxInput: {
    width: "100%",
    marginBottom: 30
  },
  label: {
    width: "100%",
    color: "#005A7D",
    fontSize: 23,
    marginLeft: 7,
    marginBottom: 10,
    textAlign: "justify"
  },
  input: {
    width: "100%",
    fontSize: 23,
    height: 60,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1, // Largura da borda
    borderColor: '#BFBFBF', // Cor da borda
    borderRadius: 10, // Arredondar cantos da borda
  },
  button: {
    width: "80%",
    backgroundColor: "#005A7D",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 60,
    marginBottom: 60,
    marginHorizontal: "auto"
  },
  textButton: {
    color: "#fff",
    fontSize: 25,
    padding: 0,
    fontWeight: "bold",
    textAlign: "center",
  },
  icon: {
    marginLeft: 20
  }
});