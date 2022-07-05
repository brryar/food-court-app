import React, { useRef, useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Dimensions, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";

const ENTRIES1 = [
  {
    title: "Beautiful and dramatic Antelope Canyon",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/pk6QSaX.jpeg",
  },
  {
    title: "Earlier this morning, NYC",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/TWPx9BA.jpeg",
  },
  {
    title: "White Pocket Sunset",
    subtitle: "Lorem ipsum dolor sit amet et nuncat ",
    illustration: "https://i.imgur.com/pk6QSaX.jpeg",
  },
  {
    title: "Acrocorinth, Greece",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/XXop0xl.jpeg",
  },
  {
    title: "The lone tree, majestic landscape of New Zealand",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/P3QkA8P.jpeg",
  },
];
const { width: screenWidth } = Dimensions.get("window");

export default function Home(props) {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage source={{ uri: item.illustration }} containerStyle={styles.imageContainer} style={styles.image} parallaxFactor={0.4} {...parallaxProps} />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Carousel ref={carouselRef} sliderWidth={screenWidth} sliderHeight={screenWidth} itemWidth={screenWidth - 60} data={entries} renderItem={renderItem} hasParallaxImages={true} />
        <View style={styles.containerbanner}>
          <Image style={styles.banner} source={require("../../assets/img/fc-banner.png")} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerbanner: {
    marginTop: "5%",
    marginHorizontal: 10,
    alignItems: "center",
  },
  banner: {
    width: "100%",
    height: "50%",
  },
  restaurants: {
    marginHorizontal: 10,
    backgroundColor: "red",
  },
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
});
