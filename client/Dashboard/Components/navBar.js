import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const NavBar = ({OpenNav}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={OpenNav}>
        <FontAwesome name="list" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    paddingLeft:10,
  },
});

export default NavBar;