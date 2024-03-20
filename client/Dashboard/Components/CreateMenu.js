import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CreateMenu = ({ newProjectName, setNewProjectName, isEditing, setIsEditing, handleCreateProject }) => {
  return (
    <View style={styles.container}>
      {isEditing ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="project name"
            value={newProjectName}
            onChangeText={setNewProjectName}
          />
          <TouchableOpacity style={styles.okButton} onPress={handleCreateProject}>
            <Text style={styles.okButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.addButton} onPress={() => setIsEditing(true)}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 5,
    marginRight: 10,
  },
  okButton: {
    backgroundColor: '#0086D4',
    borderRadius: 5,
    padding: 5,
  },
  okButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#0086D4',
    borderRadius: 5,
    padding: 10,
  },
  addButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default CreateMenu;
