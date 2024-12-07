import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const StyledButton = ({ title }: { title: string }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => alert('Done!')}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};



const styles = StyleSheet.create({
    button: {
        display: 'flex',
        backgroundColor: '#fdc632',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        width: '100%',
        marginBlock: 40,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 600,
    },
});
export default StyledButton;
