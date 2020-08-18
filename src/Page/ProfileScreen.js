import React from "react";
import { View, Text } from "react-native";
import {
  Avatar,
  Accessory,
  ListItem,
  Image,
  Card,
} from "react-native-elements";

const list = [
  {
    title: "แก้ไขโปรไฟล์",
    icon: "settings",
  },
  {
    title: "ร้านค้าใกล้เคียง",
    icon: "explore",
  },
  {
    title: "การช่วยเหลือ",
    icon: "help",
  },
  {
    title: "ร้านโปรด",
    icon: "favorite",
  },
  {
    title: "ภาษา",
    icon: "language",
  },
  {
    title: "นโยบายส่วนบุคคล",
    icon: "loyalty",
  },
  {
    title: "กฏ",
    icon: "loyalty",
  },
  {
    title: "สิทธิพิเศษสำหรับคุณ",
    icon: "loyalty",
  },
];

class ProfileScreen extends React.Component {
  render() {
    return (
      <View>
        <Avatar
          containerStyle={{ marginTop: 30, margin: 10 }}
          onPress={() => console.log("Thanakrit!")}
          size={70}
          rounded
          source={require("../asset/image/ohm.jpg")}
        >
          <Accessory />
        </Avatar>
        {list.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            leftIcon={{ name: item.icon }}
            bottomDivider
            chevron
          />
        ))}
      </View>
    );
  }
}

export default ProfileScreen;
