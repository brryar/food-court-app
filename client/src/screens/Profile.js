import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={{ uri: "https://i.imgur.com/Qu88pd6.jpeg" }} style={{ width: 100, height: 100, borderRadius: 200 / 2 }} />
        <Text style={styles.nameText}>Joko Widodo</Text>
        <Text>087757260044</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
