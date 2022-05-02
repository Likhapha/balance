import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function Item({ give, Price, name, Amount, setAmount, image }) {
  const [money, setMoney] = useState(0);

  function increase() {
    setAmount(Amount + Price)
    setMoney(money + Price);
  }
  function decrease() {
    setAmount(Amount - Price)

    setMoney(money + Price);












  }

  return (

    <View style={styles.Item}>
      <View style={styles.details}>
        <Image style={styles.image}
          source={{ uri: image }} />
        <View> <Text style={styles.name}>{name}</Text>
          <Text>{give}</Text>
          <TouchableOpacity>
            <View style={styles.touchMe}>
              <Button title={<AntDesign name="pluscircleo" size={24} color="black" />}
                onPress={increase} />
              <Button title={<AntDesign name="minuscircleo" size={24} color="black" />} onPress={decrease} />
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </View>


  )
}

const styles = StyleSheet.create({
  Item: {
    width: 350,
    margin: 20,
    padding: 10,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 10,
    justifyContent: 'space-between'
  },
  details: {
    // marginLeft: 20,
    flexDirection: 'row',
    //justifyContent: 'space-between'
  },
  image: {
    height: 100,
    width: 100,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    flexDirection: 'row'
  },

  touchMe: {
    color: '#999',
    flexDirection: 'row',
    padding: '20',
  }

});