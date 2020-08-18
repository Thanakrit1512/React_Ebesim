import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {height: 200, marginBottom: 5},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>ลด15%</Text>
          <Image source={require('../asset/image/fast-food.png')} />
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>รับน้ำ 1แก้วเมื่อสั่งผ่าน eBeSim</Text>
          <Image source={require('../asset/image/coffee.png')} />
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>ซื้อ 1 แถม 1</Text>
          <Image source={require('../asset/image/apple.png')} />
        </View>
      </Swiper>
    );
  }
}
export default SwiperComponent;
