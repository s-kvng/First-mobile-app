import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Game(){
  return (
    
    <View style={styles.container}>
        <Text>Game</Text>
    </View>

  )
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: '#fff',
        justifyContent : 'center',
        alignItems : 'center'
    }
})
