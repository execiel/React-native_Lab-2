import { Text, View, Button, SafeAreaView, ScrollView } from "react-native";
import { styles } from "../styles";
import React, { useState } from "react";

/* TODO: DEFINE THE CART ITEM COMPONENT HERE */
const CartItem = function ({ name, changeTotal }) {
  const [amount, setAmount] = useState(0);

  const changeAmount = (amt) => {
    if (amt < 0 && amount <= 0) return;
    changeTotal(amt);
    setAmount(amount + amt);
  };

  return (
    <View
      style={{
        margin: 15,
        flex: 1,
        alignItems: "center",
        backgroundColor: "#efca6a",
        padding: 15,
      }}
    >
      <Text style={{ margin: 2, fontWeight: "bold" }}>{name}</Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Button title="-" onPress={() => changeAmount(-1)} />
        <Text style={{ margin: 10 }}>{amount}</Text>
        <Button title="+" onPress={() => changeAmount(1)} />
      </View>
    </View>
  );
};

/* Set labPart variable to 5, to view this part of the lab */
export default function CreatingCustomComponents() {
  const itemNames = ["Milk", "Bread", "Eggs"];

  const [total, setTotal] = useState(0);
  const changeTotal = (amt) => setTotal(total + amt);

  return (
    <SafeAreaView style={styles.content}>
      <ScrollView>
        <Text style={styles.headerText}>Creating Custom Components</Text>
        <View
          style={{
            ...styles.section,
            backgroundColor: "#ffeb7a",
            flex: 1,
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
            Shopping Cart ({total} items)
          </Text>
          {itemNames.map((name, key) => {
            return <CartItem name={name} key={key} changeTotal={changeTotal} />;
          })}
        </View>
        <View style={styles.section}>
          <Text style={styles.bodyText}>
            <Text style={{ fontWeight: "bold" }}>Your Task: </Text>
            {"\n\n"}
            1. Create a custom component called CartItem. It should have a text
            that displays the item name, and the amount of items with a button
            to increase and decrease the amount.
            {"\n\n"}
            2. Create three cart item components, one for Milk, bread and eggs
            with initial values of 0. Take a look at the 'shopping cart items'
            image in the assets folder to see what it should look like in the
            end.
            {"\n\n"}
            <Text style={{ fontWeight: "bold" }}>Bonus: </Text>Display the total
            number of items in the cart. Think about how you could use a
            dictionary state variable to do this.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
