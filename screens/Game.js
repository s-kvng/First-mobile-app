import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert , TouchableHighlight} from "react-native";

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
      <Text style={styles.baseNumber}>Starting : {baseNumber}</Text>

       <TouchableHighlight onPress={() => setchoice("higher")} style={[styles.button, styles.buttonGreen]}>
            <Text style={styles.buttonText}>Higher</Text>
       </TouchableHighlight>

       <TouchableHighlight onPress={() => setchoice("lower")} style={[styles.button, styles.buttonRed]}>
            <Text style={styles.buttonText} >Lower</Text>
       </TouchableHighlight>

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
  baseNumber : {
    fontSize : 42,
    marginBottom: 30,
  },
  button : {
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'space-around',
    borderRadius : 15,
    padding : 20,
    marginVertical : 15,
  },
  buttonText : {
    color : 'white',
    fontSize : 24,
  },
  buttonGreen : {
    backgroundColor : 'green',
  },
  buttonRed : {
    backgroundColor : 'red', 
  }



});
