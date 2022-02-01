import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import { dataSpace } from "../data";



const Item = ({ name, model, manufact, length, cost, img}) => (
 <Card style={styles.card}>
    <Card.Content>
      <Title>{name}</Title>
      <Paragraph>{model}</Paragraph>
      <Paragraph>{manufact}</Paragraph>
      <Paragraph>{length}</Paragraph>
      <Paragraph>{cost}</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: img }} />
  </Card>
);

const FeedScreen = () => {
  const renderItem = ({ item }) => (
    <Item
      name={item.name}
      model={item.model}
      manufact={item.crew}
      length={item.hyperdrive_rating}
      cost={item.cost_in_credits}
     img='https://picsum.photos/200'
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataSpace.results}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 32,
  },
  card:{
    margin:10,
  }
});

export default FeedScreen;
