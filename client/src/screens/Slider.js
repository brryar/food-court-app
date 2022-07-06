import React from "react";
import { View, Image, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");
const { height } = width * 0.6;
const images = ["https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/2591594/pexels-photo-2591594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"];

export default function Slider() {
  return (
    <SafeAreaView>
      <View style={{ width, height }}>
        <ScrollView horizontal style={{ width, height }}>
          {images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={{ width, height, resizeMode: "contain" }} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
