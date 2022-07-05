import React from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Order() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.header}>ORDER SUMMARY</Text>
        <View style={styles.orderBox}>
          <View style={styles.itemNameBox}>
            <Text>Paket Ayam Goreng</Text>
          </View>
          <View style={styles.itemQtyBox}>
            <Pressable style={styles.buttonQty}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
            <Text>2</Text>
            <Pressable style={styles.buttonQty}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
          </View>
          <View style={styles.itemPriceBox}>
            <Text>60000</Text>
          </View>
        </View>
        <View style={styles.orderBox}>
          <View style={styles.itemNameBox}>
            <Text>Tempe Goreng</Text>
          </View>
          <View style={styles.itemQtyBox}>
            <Pressable style={styles.buttonQty}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
            <Text>2</Text>
            <Pressable style={styles.buttonQty}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
          </View>
          <View style={styles.itemPriceBox}>
            <Text>10000</Text>
          </View>
        </View>
        <View style={styles.orderBox}>
          <View style={styles.itemNameBox}>
            <Text>Telur Goreng</Text>
          </View>
          <View style={styles.itemQtyBox}>
            <Pressable style={styles.buttonQty}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
            <Text>1</Text>
            <Pressable style={styles.buttonQty}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
          </View>
          <View style={styles.itemPriceBox}>
            <Text>8000</Text>
          </View>
        </View>
        <View style={styles.orderBox}>
          <View style={styles.itemNameBox}>
            <Text>Es Teh</Text>
          </View>
          <View style={styles.itemQtyBox}>
            <Pressable style={styles.buttonQty}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
            <Text>2</Text>
            <Pressable style={styles.buttonQty}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
          </View>
          <View style={styles.itemPriceBox}>
            <Text>10000</Text>
          </View>
        </View>
        <View style={styles.totalContainer}>
          <View style={styles.totalBox}>
            <Text style={styles.total}>TOTAL</Text>
          </View>
          <View style={styles.itemQtyBox}>
            <Text style={styles.total}>7</Text>
          </View>
          <View style={styles.itemPriceBox}>
            <Text style={styles.total}>88000</Text>
          </View>
        </View>
        <View>
          <Button title="Order Now" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: "5%",
    marginRight: "5%",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: "3%",
  },
  orderBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  itemNameBox: {
    width: "50%",
    justifyContent: "center",
  },
  itemQtyBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "30%",
    alignItems: "center",
  },
  itemPriceBox: {
    width: "20%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  totalContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    borderTopColor: "black",
    borderTopWidth: 1,
    marginTop: "5%",
    marginBottom: "5%",
  },
  totalBox: {
    width: "50%",
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonQty: {
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "orange",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
