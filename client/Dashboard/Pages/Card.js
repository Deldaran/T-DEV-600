import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import ButtonCard from "../Components/ButtonCard";

const Card = ({ titleCard }) => {
  const [title, setTitle] = useState(() => {
    if (titleCard.length > 15) {
      return titleCard.slice(0, 15) + '...';
    } else {
      return titleCard;
    }
  });

  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(!pressed);
    if (!pressed) {
      setTitle(titleCard);
    } else {
      setTitle(titleCard.length > 15 ? titleCard.slice(0, 15) + '...' : titleCard);
    }
  };

  return (
    <View style={styles.CardBody}>
      <Pressable onPress={handlePress}>
        <Text style={componentStyle.text}>{title}</Text>
        {pressed ? <ButtonCard /> : ""}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  CardBody: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 7,
    marginBottom: 10,
    padding: 4,
  },
});

const componentStyle = StyleSheet.create({
  text: {
    color: 'black',
    maxWidth: 120
  },
  button: {
    color: 'black',
    position: 'relative',
    bottom: 4,
  },
  ListCard: {

  }
});

export default Card;
