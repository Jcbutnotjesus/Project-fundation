import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text
} from 'react-native';
import { Item } from '../components/Card';
import { useStarships } from '../hooks/useStarship';



const FeedScreen = () => {
  const { isLoading, isError, data } = useStarships();

  if (isLoading) {
    return <Text>Loading</Text>
  }
  if (isError) {
    return <Text>Error</Text>;
  }
  
  
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
        data={data.results}
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
