import React from 'react';
import { StyleSheet, Text, View,ScrollView,StatusBar } from 'react-native';
import Content from './src/components/Content';
import Footer from './src/components/Footer';
import Header from './src/components/Header';
import { styles } from './style/style';

export default function App() {
  return (
    <View>
    
      <Header /> 
      <Content />  
      
      <Footer />

      <StatusBar style='auto' />
      </View>
  );
}


