import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Picker, Button, TouchableOpacity } from 'react-native';
import {useCollectionData} from 'react-firebase-hooks/firestore';

export default function DoorForm(props) {
    const [selectedDoorValue, setSelectedDoorValue] = useState();

    const onValueChange1 = (value) => {
        setSelectedDoorValue(value);
        props.onChange(value);
      }

    return (
        <View style={styles.container}>
            <Text style={styles.pickerTitle}>Select the Door color</Text>
           <Picker style={styles.field}
                itemStyle={{height:100}}
                selectedValue={selectedDoorValue}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedDoorValue(itemValue),
                    onValueChange1.bind(this)
                }>
                <Picker.Item label="Black" value="black" />
                <Picker.Item label="Purple" value="purple" />
                <Picker.Item label="White" value="white" />
            </Picker>
            {/* <Text>{selectedDoorValue}</Text> */}
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
        backgroundColor: '#80CDE9'
    },
    pickerTitle: {
      fontSize: 20,
      marginBottom: -10,
      fontWeight: "bold",
      color: '#0C5671',
    },
    field: {
        width: 200,
    },
})