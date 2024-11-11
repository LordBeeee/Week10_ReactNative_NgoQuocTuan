import React from 'react';
import { View, Text, FlatList, StyleSheet ,Image} from 'react-native';
import { useSelector } from 'react-redux';

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.item_img}/>
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemText}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  item: { 
    padding: 10, 
    borderBottomWidth: 1, 
    borderColor: '#ccc' 
    },
  itemText: { 
    fontSize: 18
  },
  item_img:{
    width:135,
    height:127,
    margin:7
  },
});
