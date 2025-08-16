import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("black");

  const handleLogin = () => {
    if (username.trim() === "" || password.trim() === "") {
      setMessage("❌ Please enter both username and password.");
      setMessageColor("red");
    } else if (username === "OMPHULUSA" && password === "123456789") {
      setMessage("✅ Login successful!");
      setMessageColor("green");
    } else {
      setMessage("❌ Invalid credentials. Try again.");
      setMessageColor("red");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME, PLEASE LOG IN</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#666"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#666"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Button title="Login" onPress={handleLogin} color="green" />

      {message !== "" && (
        <Text style={[styles.message, { color: messageColor }]}>{message}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "grey",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "white",
  },
  message: {
    marginTop: 15,
    fontSize: 16,
    textAlign: "center",
  },
});
