import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

//
import { useNavigation } from "@react-navigation/native";

export default function Game() {
  const baseNumber = Math.floor(Math.random() * 100);
  const score = Math.floor(Math.random() * 100);

  const [choice, setchoice] = useState("");

  //
  const navigation = useNavigation();

  useEffect(() => {
    if (choice) {
      const winner =
        (choice === "higher" && score > baseNumber) ||
        (choice === "lower" && baseNumber > score);

        Alert.alert(`You've ${winner ? 'won' : 'lost' }`, `You scored ${score}`)
        navigation.goBack();
        
    }
  }, [baseNumber, score , choice ]);

  return (
    <View style={styles.container}>
      <Text>Starting : {baseNumber}</Text>
      <Button onPress={() => setchoice("higher")} title="Higher" />
      <Button onPress={() => setchoice("lower")} title="Lower" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
