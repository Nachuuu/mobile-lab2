import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Button,
  TextInput,
  FlatList,
} from "react-native";

const ContactButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contacts, setContacts] = useState([]);

  const addContact = () => {
    setContacts([...contacts, { key: `Name: ${name} | Email: ${email}` }]);
    setName("");
    setEmail("");
    setModalVisible(false);
  };

  const clearInput = () => {
    setName("");
    setEmail("");
    setModalVisible(false);
  };

  const deleteContact = (key) => {
    setContacts(contacts.filter(contact => contact.key !== key));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => deleteContact(item.key)}>
            <Text style={styles.item}>{item.key}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />
      <Button title="ADD NEW CONTACT" onPress={() => setModalVisible(true)} />
      <Modal
        style={styles.modalContainer}
        transparent={true}
        visible={modalVisible}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>NEW USER</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            onChangeText={(newName) => setName(newName)}
            value={name}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            onChangeText={(newEmail) => setEmail(newEmail)}
            value={email}
            keyboardType="email-address"
          />
          <View style={styles.buttonContainer}>
            <Button title="Clear" onPress={clearInput} style={styles.buttons} />
            <Button title="Add" onPress={addContact} style={styles.buttons} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  button: { padding: 20, backgroundColor: "blue", color: "white" },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(38, 38, 38, 1)",
  },
  modalText: { marginBottom: 20, color: "white" },
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "rgba(140, 140, 140, 1)",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "40%",
  },
  buttons: {
    marginHorizontal: 10,
  },
  item: { padding: 20, borderBottomWidth: 1, borderColor: "#ccc" },
});

export default ContactButton;
