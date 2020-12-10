import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const GameOverScreent = props => {
    return (
        <View style={styles.screen}>
            <Text>The Game Is Over!</Text>
            <Text>Number of Rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title="New Game" onPress={props.onRestart}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GameOverScreent