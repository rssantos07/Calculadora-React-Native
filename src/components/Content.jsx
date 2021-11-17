import React, { useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity,TextInput } from 'react-native';
import { styles } from '../../style/style';




export default function Content() {
    const [calculadora, setCalculadora] = useState({
        x: '',
        y: '',
        resultado: 'Resultado',

    })
    const handleInputChange = (name, valor) => {
        setCalculadora({
            ...calculadora, [name]: valor
        })

    }
    const calculaSoma = () => {
        setCalculadora({
            ...calculadora, resultado: (calculadora.x + calculadora.y)
        })
    }

    const calculaMenos = () => {
        setCalculadora({
            ...calculadora, resultado: (calculadora.x - calculadora.y)
        })
    }
    const calculaMult = () => {
        setCalculadora({
            ...calculadora, resultado: (calculadora.x * calculadora.y)
        })
    }
    const calculaDiv = () => {
        setCalculadora({
            ...calculadora, resultado: (calculadora.x / calculadora.y)
        })
    }
    const calculaResto = () => {
        setCalculadora({
            ...calculadora, resultado: (calculadora.x % calculadora.y)
        })
    }
    const calculaQuadx = () => {
        setCalculadora({
            ...calculadora, resultado: (calculadora.x * calculadora.x)
        })
    }
    const calculaQuady = () => {
        setCalculadora({
            ...calculadora, resultado: (calculadora.y * calculadora.y)
        })
    }
    const calculaElevado = () => {
        setCalculadora({
            ...calculadora, resultado: (calculadora.x ** calculadora.y)
        })
    }
    console.log(calculadora)
    return (
        <View style={styles.content}>
            
            <View style={styles.content1}>
                <TextInput style={styles.entrada}
                placeholder='Valor X'
                onChangeText={
                    (valor) => handleInputChange('x', Number(valor))}
                    keyboardType="numeric"/> 
                 
                 <TextInput style={styles.entrada}
                placeholder='Valor Y'
                onChangeText={
                    (valor) => handleInputChange('y', Number(valor))}
                    keyboardType="numeric"/> 
                 
            </View>
            <View >
                <Text style={styles.result}>{calculadora.resultado}</Text>
            </View>

            <View style={styles.content2}>
                <TouchableOpacity>
                    <View style={styles.button} >
                        <Text style={styles.buttonText} onPress={calculaSoma}>+</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.button} >
                        <Text style={styles.buttonText} onPress={calculaMenos}>-</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.button} >
                        <Text style={styles.buttonText} onPress={calculaMult}>x</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.button} >
                        <Text style={styles.buttonText} onPress={calculaDiv}>÷</Text>
                    </View>
                </TouchableOpacity>

            </View>
            <View style={styles.content2}>
                <TouchableOpacity>
                    <View style={styles.button} >
                        <Text style={styles.buttonText} onPress={calculaResto}>%</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.button} >
                        <Text style={styles.buttonText} onPress={calculaQuadx}>x²</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.button} >
                        <Text style={styles.buttonText} onPress={calculaQuady}>y²</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.button} >
                        <Text style={styles.buttonText} onPress={calculaElevado}>x^y</Text>
                    </View>
                </TouchableOpacity>

            </View>


        </View>
    )
}