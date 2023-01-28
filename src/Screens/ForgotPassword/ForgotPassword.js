import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react';
import styles from "../styles";

const ForgotPassword = () => {
    return (
        <View>
            <Text style={styles.text}>Enter your email to reset your password</Text>
            <Text style={styles.txtt} >Email</Text>
            <View style={styles.views}>


                <TextInput style={styles.TextInput} placeholder="Email" />
            </View>
            <TouchableOpacity style={styles.button4} >
                <Text style={styles.ft2}>SEND PASSWORD RESET LINK</Text>
            </TouchableOpacity>

        </View>
    )
}

export default ForgotPassword

// const styles = StyleSheet.create({

// })