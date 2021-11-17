import React from 'react';
import { View,Text } from 'react-native';
import {styles} from '../../style/style';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text>developed by Rodrigo Santos</Text>
            <Text>Apoio: Soul Code Academy</Text>
        </View>
    )
}