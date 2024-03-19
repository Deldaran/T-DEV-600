import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Modal, Text, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { fetchMembers } from '../../Utils/utils';

const NavBar = ({ OpenNav, isNavOpen, boardSelected }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [users, setUsers] = useState([]);
  
  const openProfile = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const setUser = (user) => {
    setUsers(prevUsers => [...prevUsers, user]);
  };
  useEffect(() => {
    setUsers([]);
    if (boardSelected.memberships) {
      boardSelected.memberships.map(member => {
        fetchMembers(member.idMember, setUser);
      });
      
    } else {
      setUsers([]);
    }
    console.log(users.map(user => user.avatarUrl))
  }, [boardSelected]);
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={OpenNav}>
          <FontAwesome name="list" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.rightContainer}>
        {users && users.length > 0 ? (
          users.map(user => (
            <TouchableOpacity key={user.id} onPress={openProfile}>
              <Image
                source={{ uri: user.avatarUrl }}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          ))
        ) : (
          <TouchableOpacity onPress={openProfile}>
            <Image
              source={require('../../assets/user.png')}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        )}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={[styles.modalContainer, styles.modalContent]}>
          <Text>This is a modal.</Text>
          <Button title="Close" onPress={closeModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 100
  },
  leftContainer: {
    justifyContent: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 40,
    borderColor: '#fff',
    borderWidth: 1,
    
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 20,
  },
  modalContent: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

export default NavBar;
