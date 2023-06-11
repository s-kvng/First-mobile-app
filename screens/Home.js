import react from 'react';
import { StyleSheet, Button , View , TouchableHighlight , Text} from 'react-native';

//useNavigation hook
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
           
            <TouchableHighlight onPress={()=> navigation.navigate('Game')} style={styles.button} activeOpacity={0.9} underlayColor='#000'>
                <Text style={styles.buttonText}>Start Game!</Text>
            </TouchableHighlight>
        </View>
    )
}




const styles = StyleSheet.create({
    container : {
        flex :1 ,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems :'center',
    },
    button : {
        width : 300,
        height : 300,
        backgroundColor: 'purple',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems : 'center',
        borderRadius : 1000,
        elevation : 105,
        
        
    
      },
    buttonText : {
        color : '#fff',
        fontSize : 48,

    }   
})