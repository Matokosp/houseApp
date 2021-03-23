import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HeroBanner() {

    return (
    <View style={styles.heroTitle}>
        <Text style={styles.heroTitleText}>Let's build a house!!</Text>
      </View> 
    )
}

const styles = StyleSheet.create({
    heroTitle: {
      backgroundColor: '#FFCD13',
      alignSelf: 'stretch',
      paddingTop: 100,
      paddingBottom: 60,
    },
    heroTitleText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: '900',
      fontSize: 28,
    }
  });