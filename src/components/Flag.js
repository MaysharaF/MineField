import React from 'react';
import {View, StyleSheet} from 'react-native';

export default props => {
  return (
    <View style={styles.container}>
      <View styles={styles.flagpole} />
      <View styles={styles.flag} />
      <View styles={styles.base1} />
      <View styles={styles.base2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
  },
  flagpole: {
    position: 'absolute',
    height: 14,
    width: 2,
    backgroundColor: '#222',
    marginLeft: 9,
  },
  flag: {
    position: 'absolute',
    height: 5,
    width: 6,
    backgroundColor: '#F22',
    marginLeft: 3,
  },
  base1: {
    position: 'absolute',
    height: 2,
    width: 6,
    backgroundColor: '#222',
    marginLeft: 7,
    marginTop: 10,
  },
});
