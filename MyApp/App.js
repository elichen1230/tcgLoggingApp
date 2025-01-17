import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Button, Text, View } from "react-native";

import { Camera } from "./Camera";

export default function App() {
  const [showCamera, setShowCamera] = useState(false);

  if (showCamera) {
    return <Camera onClose={() => setShowCamera(false)} />;
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Open Camera" onPress={() => setShowCamera(true)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

// Default Screen (app.js)

// View 1 -> Camera view (Camera.js)
