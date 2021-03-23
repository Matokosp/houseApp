import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Picker, Button, TouchableOpacity } from 'react-native';

export default function WallForm(props) {
    const [selectedWallValue, setSelectedWallValue] = useState();

    const onValueChange1 = (value) => {
        setSelectedWallValue(value);
        props.onChange(value);
      }


    return (
        <View style={styles.container}>
            <Text style={styles.pickerTitle}>Select the Wall color</Text>
           <Picker style={styles.field}
                itemStyle={{height:100}}
                selectedValue={selectedWallValue}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedWallValue(itemValue),
                    onValueChange1.bind(this)
                }>
                <Picker.Item label="Blue" value="blue" />
                <Picker.Item label="Teal" value="teal" />
                <Picker.Item label="Gray" value="gray" />
            </Picker>
            {/* <Text>{selectedWallValue}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: '#A6E7FF'
    },
    pickerTitle: {
      fontSize: 20,
      marginBottom: -10,
      fontWeight: "bold",
      color: '#11607E',
    },
    field: {
        width: 200,
    },
})