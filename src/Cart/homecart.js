/* eslint-disable no-undef */
import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-cards';
import {Rating, AirbnbRating} from 'react-native-ratings';
import SwiperComponent from '../Component/Swiper';
import {Icon} from 'react-native-elements';
import CartScreen from '../Page/CartScreen';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class HomeCart extends React.Component {
  ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }

  render() {
    const WATER_IMAGE = require('../asset/image/coffee.png');
    return (
      <View>
        <ScrollView>
          <SwiperComponent />
          <View>
            <Card style={card.container}>
              <CardImage
                style={card.container}
                source={require('../asset/image/noodle.jpg')}
                title="ก๋วยเตี๋ยว"
              />
              <CardContent text="ร้าน ก๋วยเตี๋ยว" />
              <CardContent text="ที่อยู่ สี่แยกโลตัส" />
              <CardAction
                style={card.card}
                color="#FEB557"
                paddingHorizontal={10}>
                <Icon name="star" size={24} color="#F4CF47" />
                <Text> 5.6</Text>
                <Icon name="schedule" size={24} color="#7C7B78" />
                <Text> 30 min</Text>
                <Icon name="stars" size={24} color="#7C7B78" />
                <Text> 100 แต้ม</Text>
              </CardAction>
              <CardAction separator={true} inColumn={false}>
                <CardButton
                  onPress={() => {
                    this.props.navigation.navigate('FoodCart');
                  }}
                  title="ซื้อสินค้า"
                />
                <CardButton onPress={() => {}} title="แชร์" />
              </CardAction>
            </Card>
            <Card style={card.container}>
              <CardImage
                style={card.container}
                source={require('../asset/image/juice.jpg')}
                title="น้ำปั่น"
              />
              <CardContent style={card.text} text="ร้าน น้ำปั่น" />
              <CardContent text="ที่อยู่ สี่แยกโลตัส" />
              <CardAction
                style={card.card}
                color="#FEB557"
                paddingHorizontal={10}>
                <Icon name="star" size={24} color="#F4CF47" />
                <Text> 5.6</Text>
                <Icon name="schedule" size={24} color="#7C7B78" />
                <Text> 30 min</Text>
                <Icon name="stars" size={24} color="#7C7B78" />
                <Text> 100 แต้ม</Text>
              </CardAction>
              <CardAction
                style={{background: '#FFF'}}
                separator={true}
                inColumn={false}>
                <CardButton
                  onPress={() => {}}
                  title="ซื้อสินค้า"
                  color="#FEB557"
                />
                <CardButton onPress={() => {}} title="แชร์" color="#FEB557" />
              </CardAction>
            </Card>
            <Card style={card.container}>
              <CardImage
                style={card.container}
                source={require('../asset/image/rice-curry.jpg')}
                title="อาหารตามสั่ง"
              />
              <CardTitle subtitle="ร้าน อาหารตามสั่ง" />
              <CardContent text="ที่อยู่ ซอยพี่หลวง" />
              <CardAction
                style={card.card}
                color="#FEB557"
                paddingHorizontal={10}>
                <Icon name="star" size={24} color="#F4CF47" />
                <Text> 5.6</Text>
                <Icon name="schedule" size={24} color="#7C7B78" />
                <Text> 30 min</Text>
                <Icon name="stars" size={24} color="#7C7B78" />
                <Text> 100 แต้ม</Text>
              </CardAction>
              <CardAction separator={true} inColumn={false}>
                <CardButton
                  onPress={() => {}}
                  title="ซื้อสินค้า"
                  color="#FEB557"
                />
                <CardButton onPress={() => {}} title="แชร์" color="#FEB557" />
              </CardAction>
            </Card>
            <Card style={card.container}>
              <CardImage
                style={card.container}
                source={require('../asset/image/pizza.jpeg')}
                title="อาหารกินเล่น"
              />
              <CardTitle subtitle="ร้าน อาหารกินเล่น" />
              <CardContent text="ที่อยู่ ร้านตลาดสด" />
              <CardAction
                style={card.card}
                color="#FEB557"
                paddingHorizontal={10}>
                <Icon name="star" size={24} color="#F4CF47" />
                <Text> 5.6</Text>
                <Icon name="schedule" size={24} color="#7C7B78" />
                <Text> 30 min</Text>
                <Icon name="stars" size={24} color="#7C7B78" />
                <Text> 100 แต้ม</Text>
              </CardAction>
              <CardAction separator={true} inColumn={false}>
                <CardButton
                  onPress={() => {}}
                  title="ซื้อสินค้า"
                  color="#FEB557"
                />
                <CardButton onPress={() => {}} title="แชร์" color="#FEB557" />
              </CardAction>
            </Card>
            <Card style={card.container}>
              <CardImage
                style={card.container}
                source={require('../asset/image/bacon.jpg')}
                title="ผลไม้"
              />
              <CardTitle subtitle="ร้าน ผลไม้" />
              <CardContent text="ที่อยู่ ซอยยาแดง" />
              <CardAction
                style={card.card}
                color="#FEB557"
                paddingHorizontal={10}>
                <Icon name="star" size={24} color="#F4CF47" />
                <Text> 5.6</Text>
                <Icon name="schedule" size={24} color="#7C7B78" />
                <Text> 30 min</Text>
                <Icon name="stars" size={24} color="#7C7B78" />
                <Text> 100 แต้ม</Text>
              </CardAction>
              <CardAction separator={true} inColumn={false}>
                <CardButton
                  iconName="home"
                  onPress={() => {}}
                  title="ซื้อสินค้า"
                  color="#FEB557"
                />
                <CardButton
                  onPress={() => {}}
                  title="แชร์"
                  color="#FEB557"
                  margin={10}
                />
              </CardAction>
            </Card>
            <Card style={card.container}>
              <CardImage
                style={card.container}
                source={require('../asset/image/beer.jpeg')}
                title="ขนมหวาน"
              />
              <CardTitle subtitle="ร้าน ขนมหวาน" />
              <CardContent text="สี่แยกโลตัส" />
              <CardAction color="#FEB557" paddingHorizontal={10}>
                <Icon name="star" size={24} color="#F4CF47" />
                <Text> 5.6</Text>
                <Icon name="schedule" size={24} color="#7C7B78" />
                <Text> 30 min</Text>
                <Icon name="stars" size={24} color="#7C7B78" />
                <Text> 100 แต้ม</Text>
              </CardAction>
              <CardAction separator={true} inColumn={false}>
                <CardButton
                  onPress={() => {}}
                  title="ซื้อสินค้า"
                  color="#FEB557"
                />
                <CardButton onPress={() => {}} title="แชร์" color="#FEB557" />
              </CardAction>
            </Card>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const card = StyleSheet.create({
  container: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  text: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    margin: 5,
  },
});

export default HomeCart;
