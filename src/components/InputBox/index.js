import { StyleSheet, Text, View, TextInput } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
const InputBox = () => {
  const [newMessage, setNewMessage] = useState("");
  const onSend = () => {
    console.warn("Send a new message", newMessage);
    setNewMessage("");
  };
  return (
    <View style={styles.container}>
      {/* Icon */}
      <AntDesign name="plus" size={24} color="royalblue" />
      {/* textInput */}
      <TextInput
        value={newMessage}
        onChangeText={setNewMessage}
        style={styles.input}
        placeholder="type Your Message..."
      />
      {/* Icon */}
      <MaterialIcons
        onPress={onSend}
        style={styles.send}
        name="send"
        size={22}
        color="white"
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 5,
    alignItems: "center",
  },
  input: {
    fontSize: 18,

    flex: 1,
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,

    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
  },
  send: {
    backgroundColor: "royalblue",
    padding: 7,
    borderRadius: 15,
    overflow: "hidden",
  },
});
