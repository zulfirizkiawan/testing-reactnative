import {StyleSheet, Text, View, Animated} from 'react-native';
import React from 'react';

const Detail = ({route}) => {
  const {item} = route.params;

  console.log('item', item);

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>User Id : {item.userId}</Text>
      <Text style={styles.textTitle}>title : {item.title}</Text>
      <Text style={styles.textBody}>Body : {item.body}</Text>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 17,
    backgroundColor: '#fff',
  },
  textTitle: {
    fontSize: 16,
    color: 'black',
  },
  textBody: {
    fontSize: 14,
    marginTop: 10,
  },
});
