import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Flag from './Flag';

export default props => {
  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        <TouchableOpacity onPress={props.onFlagPress} style={styles.flagButton}>
          <Flag bigger />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
        <Text style={styles.buttonLabel}>Novo Jogo</Text>
      </TouchableOpacity>
    </View>
  );
};
