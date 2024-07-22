import { StatusBar, StyleSheet, Text, View, TextInput ,TouchableOpacity } from "react-native";

export function CadastroNome({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
        <View style={styles.main}>
          <View style={styles.contentTitle}>
            <Text style={styles.title}>Qual o seu nome?</Text>
            <Text style={styles.subtitle}>Precisamos do seu nome para uma melhor identificação.</Text>
          </View>

          <View style={styles.contentInput}>
            <TextInput
                style={styles.input}
                minHeight= {20}
                maxLength={50}
                //onChangeText={onChangeNumber}
                placeholder="Nome Completo"
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
    flex: 1,
    justifyContent: "center",
    minWidth: "100%",
    marginHorizontal: "auto",
    marginVertical: "auto",
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
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "justify"
  },
  subtitle: {
    color: "#005A7D",
    fontSize: 24,
    marginTop: 10,
    textAlign: "justify"
  },
  contentInput: {
    width: "100%",
    marginTop: 90,
    marginBottom: 100
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
    color: "#000",
    backgroundColor: "#005A7D",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: "60%",
    marginTop: 150,
    marginHorizontal: "auto"
  },
  textButton: {
    color: "#fff",
    fontSize: 25,
    padding: 0,
    fontWeight: "bold",
    textAlign: "center",
  }
});