import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-cards';

class FoodCart extends React.Component {
  render() {
    return (
      <View>
        <ScrollView>
          <Card>
            <CardImage
              source={require('../asset/image/chicken-rice.jpg')}
              title="ข้าวมันไก่"
              color="#5E5C5D"
            />
            <CardTitle subtitle="Number 6" />
            <CardContent text="Clifton, Western Cape" />
            <CardAction separator={true} inColumn={false}>
              <CardButton onPress={() => {}} title="ถูกใจ " color="#FEB557" />
              <CardButton
                onPress={() => {}}
                title="แสดงความคิดเห็น"
                color="#FEB557"
              />
              <CardButton onPress={() => {}} title="แชร์" color="#FEB557" />
            </CardAction>
          </Card>
          <Card>
            <CardImage
              source={require('../asset/image/noodle.jpg')}
              title="ก๋วยเตี๋ยว"
            />
            <CardTitle subtitle="Number 6" />
            <CardContent
              text="Clifton, Western Cape"
              //avatarSource="require('../asset/image/ebesim.png')"
            />
            <CardAction separator={true} inColumn={false} color="#FEB557">
              <CardButton onPress={() => {}} title="ถูกใจ" color="#FEB557" />
              <CardButton
                onPress={() => {}}
                title="แสดงความคิดเห็น"
                color="#FEB557"
              />
              <CardButton onPress={() => {}} title="แชร์" color="#FEB557" />
            </CardAction>
          </Card>
          <Card>
            <CardImage
              source={require('../asset/image/juice.jpg')}
              title="น้ำปั่น"
            />
            <CardTitle subtitle="Number 6" />
            <CardContent text="Clifton, Western Cape" />
            <CardAction separator={true} inColumn={false}>
              <CardButton onPress={() => {}} title="ถูกใจ" color="#FEB557" />
              <CardButton
                onPress={() => {}}
                title="แสดงความคิดเห็น"
                color="#FEB557"
              />
              <CardButton onPress={() => {}} title="แชร์" color="#FEB557" />
            </CardAction>
          </Card>
          <Card>
            <CardImage
              source={require('../asset/image/rice-curry.jpg')}
              title="อาหารตามสั่ง"
            />
            <CardTitle subtitle="Number 6" />
            <CardContent text="Clifton, Western Cape" />
            <CardAction separator={true} inColumn={false}>
              <CardButton onPress={() => {}} title="ถูกใจ" color="#FEB557" />
              <CardButton
                onPress={() => {}}
                title="แสดงความคิดเห็น"
                color="#FEB557"
              />
              <CardButton onPress={() => {}} title="แชร์" color="#FEB557" />
            </CardAction>
          </Card>
          <Card>
            <CardImage
              source={require('../asset/image/pizza.jpeg')}
              title="อาหารกินเล่น"
            />
            <CardTitle subtitle="Number 6" />
            <CardContent text="Clifton, Western Cape" />
            <CardAction separator={true} inColumn={false}>
              <CardButton onPress={() => {}} title="ถูกใจ" color="#FEB557" />
              <CardButton
                onPress={() => {}}
                title="แสดงความคิดเห็น"
                color="#FEB557"
              />
              <CardButton onPress={() => {}} title="แชร์" color="#FEB557" />
            </CardAction>
          </Card>
          <Card>
            <CardImage
              source={require('../asset/image/bacon.jpg')}
              title="ผลไม้"
            />
            <CardTitle subtitle="Number 6" />
            <CardContent text="Clifton, Western Cape" />
            <CardAction separator={true} inColumn={false}>
              <CardButton onPress={() => {}} title="ถูกใจ" color="#FEB557" />
              <CardButton
                onPress={() => {}}
                title="แสดงความคิดเห็น"
                color="#FEB557"
              />
              <CardButton onPress={() => {}} title="แชร์" color="#FEB557" />
            </CardAction>
          </Card>
          <Card>
            <CardImage
              source={require('../asset/image/beer.jpeg')}
              title="ขนมหวาน"
            />
            <CardTitle subtitle="Number 6" />
            <CardContent text="Clifton, Western Cape" />
            <CardAction separator={true} inColumn={false}>
              <CardButton onPress={() => {}} title="ถูกใจ" color="#FEB557" />
              <CardButton
                onPress={() => {}}
                title="แสดงความคิดเห็น"
                color="#FEB557"
              />
              <CardButton onPress={() => {}} title="แชร์" color="#FEB557" />
            </CardAction>
          </Card>
        </ScrollView>
      </View>
    );
  }
}

export default FoodCart;
