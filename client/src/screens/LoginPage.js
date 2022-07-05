import React from "react";
import { TextInput, StyleSheet, Text, View, Button, Alert, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginPage({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNWp7pKJPY8TsQWJ14S1iB4TfLz8Nmkffw_oLeTxY0HE126J-ZGD48Zkf10UkI8FZBmM&usqp=CAU" }} style={{ width: 100, height: 100, borderRadius: 200 / 2 }} />
        <TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder="username/phonenumber" />
        <TextInput style={styles.input} onChangeText={onChangePassword} value={password} secureTextEntry={true} placeholder="password" />
        <Button title="Login" onPress={() => Alert.alert("Login Success")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
  container: {
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
});
