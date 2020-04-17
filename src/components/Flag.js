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
