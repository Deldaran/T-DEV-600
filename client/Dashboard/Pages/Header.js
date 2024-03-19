import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavBar from '../Components/navBar';

const Header = ({ OpenNav }) => {
  return (
    <View style={style.container}>
      <NavBar OpenNav={OpenNav} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: '#0086D4',
    height: '10%',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20
  },
})

export default Header;