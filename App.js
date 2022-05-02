import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { useState } from 'react';
import { AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import Item from './Wings';

export default function App() {
  const [Amount, setAmount] = useState(0);


  return (

    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>WINGS CAFE</Text>

        <View style={styles.likeThis}>
          <AntDesign name="home" size={30} color="black" />
          <FontAwesome5 name="shopping-cart" size={30} color="black" />
          <FontAwesome5 name="search" size={30} color="black" />
          <MaterialCommunityIcons name="view-grid-plus-outline" size={30} color="black" />
          <MaterialCommunityIcons name="dots-vertical" size={30} color="black" />
          <View style={styles.Photo}
            source={{ uri: 'https://z-p3-scontent.fmsu3-1.fna.fbcdn.net/v/t1.6435-1/103969142_110041830749315_6299988091001718000_n.jpg?stp=c186.0.693.693a_dst-jpg&_nc_cat=102&ccb=1-5&_nc_sid=1eb0c7&_nc_ohc=zYSYuY2ecZ8AX_tMWCg&_nc_pt=5&_nc_ht=z-p3-scontent.fmsu3-1.fna&oh=00_AT_PmyccbT-JQEYRnJVqpPKa6BsybYQl1GqdZRm3UywHNA&oe=62934068' }} />
        </View>
      </View>
      <ScrollView style={{ paddingBottom: 60 }}>
        <View style={styles.Port}>
          <Text style={{ fontSize: 24 }}>The total Amount is {Amount}</Text>
          <Item name="Reboost" give='M10.00' Price={10} image={'https://cdn-d03d5231-5b2e278c.mysagestore.com//52b4847e965496ec89e8fd0fcab5e850/contents/04350045/04350045_.png'} Amount={Amount} setAmount={setAmount} />
          <Item name="Twizza" give='M12.00' Price={12} image={'https://petco.co.za/wp-content/uploads/2019/06/DV7CQJRXcAA_dGZ.jpg'} Amount={Amount} setAmount={setAmount} />
          <Item name="Simbas" give='M1.00' Price={1} image={'https://lh3.googleusercontent.com/lnhzOTq4kxyl5-mr7jCcJsH2ojOI7Al6MN3tbziS2Mf9vASZM8kYnK4HTCJ-Fl2qsEIC1XeMX2-YXBSaA3sofXr7lqLr2NpNKB35=s1200'} Amount={Amount} setAmount={setAmount} />
          <Item name="Pizza" give='M40.00' Price={40} image={'https://www.pngkey.com/png/full/2-23987_cheese-and-bacon-pizza.png'} Amount={Amount} setAmount={setAmount} />
          <Item name="Coca Cola" give='M15.00' Price={15} image={'https://cdn.mos.cms.futurecdn.net/8GT8RYRB78EnXADytMVaR9-1024-80.jpg.webp'} Amount={Amount} setAmount={setAmount} />
          <Item name="Potato ChiPs" give='M16.00' Price={16} image={'https://thumbs.dreamstime.com/b/plate-golden-french-fries-pommes-frites-potato-chips-served-little-bowls-tomato-sauce-mayonnaise-close-up-view-138447085.jpg'} Amount={Amount} setAmount={setAmount} />
          <Item name="Rice & chicken" give='M25.00' Price={25} image={'https://www.simplyrecipes.com/thmb/sXLckcdDxcqxC5tQeFUqIRvX6go=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2014__06__Chicken-Rice-Casserole-LEAD-1-f29094097b5e4927bee29a6f76680dff.jpg'} Amount={Amount} setAmount={setAmount} />
        </View>
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 5,
    borderColor: 'red',
    borderRadius: 10,

  },

  content: {
    borderWidth: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%',

  },

  likeThis: {
    paddingTop: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    width: '100%'


  },

  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black'

  }

});
