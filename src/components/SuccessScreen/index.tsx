import React, { PropsWithChildren } from 'react';
import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import StyledButton from '../Button';

type SuccessScreenProps = PropsWithChildren<{
    message: string;
    description: string
}>;

export const SuccessScreen = ({ message, description }: SuccessScreenProps): React.JSX.Element => {
    const { height: screenHeight } = useWindowDimensions();
    return (
        <View style={[styles.container, { height: screenHeight }]}>
            <View style={styles.content}>
                <Image source={require('./img/done.gif')} style={styles.gif} />
                <Text style={styles.message}>{message}</Text>
                <Text style={styles.description} >{description}</Text>
                <StyledButton title="Next" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    gif: {
        width: 400,
        height: 400,
    },
    message: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '600',
    },
    description: {
        textAlign: 'center',
        fontWeight: '300',
        marginBlock: 2,
    },
});
