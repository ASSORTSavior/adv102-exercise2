import { View, Text, StyleSheet, Button, Pressable } from "react-native"
import { Link } from "expo-router"

export default function Home() {

    return (
        <View style={styles.container}>
            <Text style={[styles.text, { marginTop: 30 }]}>Jomel John S.</Text>
            <Text style={styles.text}>Oracion</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 20,
        backgroundColor: 'skyblue',
    },
    text: {
        marginLeft: 25,
        color: '#262626',
        fontSize: 50,
    }
})