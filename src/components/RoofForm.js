import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Picker, Button, TouchableOpacity } from 'react-native';

export default function RoofForm(props) {
    const [selectedRoofValue, setSelectedRoofValue] = useState();

    const onValueChange1 = (value) => {
        setSelectedRoofValue(value);
        props.onChange(value);
      }

    return (
        <View style={styles.container}>
            <Text style={styles.pickerTitle}>Select the Roof color</Text>
            <Picker style={styles.field}
                  itemStyle={{height:100}}
                  selectedValue={selectedRoofValue}
                  onValueChange={(itemValue, itemIndex) =>
                      setSelectedRoofValue(itemValue),
                      onValueChange1.bind(this)
                  }>
                  <Picker.Item label="Red" value="red" />
                  <Picker.Item label="Brown" value="brown" />
                  <Picker.Item label="Yellow" value="yellow" />
              </Picker>
            {/* <Text>{selectedRoofValue}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        backgroundColor: '#DEF6FF'
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