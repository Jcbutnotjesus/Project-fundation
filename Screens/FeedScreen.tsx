import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList
} from 'react-native';
import { Item } from '../components/Card';

import { useStarships } from '../hooks/useStarship';


const dataSpace = useStarships();


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
        data={dataSpace.data}
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
