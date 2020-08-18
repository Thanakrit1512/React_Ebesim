import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { SearchBar, Header } from "react-native-elements";
import HomeCart from "../Cart/homecart";
import SwiperComponent from "../Component/Swiper";

class HomeScreen extends React.Component {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
      <View>
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{
            text: "หน้าหลัก",
            style: {
              textAlign: "center",
              color: "#fff",
              fontSize: 18,
              fontWeight: "bold",
            },
          }}
          // eslint-disable-next-line no-dupe-keys
          rightComponent={{ icon: "search", color: "#fff" }}
          containerStyle={{
            backgroundColor: "#F5B041",
            //justifyContent: "space-around",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        />
        <SearchBar
          round
          lightTheme
          cancelIcon
          placeholder="Search"
          onChangeText={this.updateSearch}
          value={search}
          backgroundColor="#FFF"
        />
        <HomeCart></HomeCart>
      </View>
    );
  }
}

export default HomeScreen;
