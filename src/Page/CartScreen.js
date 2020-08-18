import React from "react";
import { View } from "react-native";
import FoodCart from "../Cart/Foodcart";

class CartScreen extends React.Component {
  render() {
    return (
      <View>
        <FoodCart></FoodCart>
      </View>
    );
  }
}

export default CartScreen;
