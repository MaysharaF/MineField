import React from 'react';
import {View, StyleSheet} from 'react-native';

export default props => {
  return (
    <View styles={styles.container}>
      <View style={styles.coreMine} />
      <View style={styles.line} />
    </View>
  );
};
