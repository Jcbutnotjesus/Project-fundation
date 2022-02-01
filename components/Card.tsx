import React from 'react';
import {
    StyleSheet
  } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export const Item = ({ name, model, manufact, length, cost, img}) => (
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