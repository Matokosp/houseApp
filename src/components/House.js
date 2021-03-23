import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, Switch } from 'react-native';
import firebase from "firebase";


export default function House (props) {
    const [isEnabled, setIsEnabled] = useState(props.house.rented);

    const rentHouse =  (id) => {
  
        const itemtoupdate = firebase
          .firestore()
          .collection("houses")
          .doc(id);
      
        return itemtoupdate.update({
          rented: !isEnabled,
        });
      };

    console.log(isEnabled)
    const toggleSwitch = () => {
        rentHouse(props.house.id).then(() =>{
            setIsEnabled(!isEnabled)
        })
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 50,
        },
        wall: {
            position: 'relative',
            backgroundColor: props.house.wall,
            height: 100,
            width: 200,
        },
        frontDoor: {
            position: 'absolute',
            left: 90,
            bottom: 0,
            height: 30,
            width: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: props.house.door,
        },
        roof: {
            width: 0,
            height: 0,
            backgroundColor: "transparent",
            borderStyle: "solid",
            borderLeftWidth: 100,
            borderRightWidth: 100,
            borderBottomWidth: 110,
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            borderBottomColor: props.house.roof,
          },
          buttonsContainer: {
              flex: 1,
              flexDirection: 'row',
              paddingTop: 20,
              justifyContent: 'space-between',
              width: 200
          },
          pressableText: {
              color: '#fff',
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 10,
              paddingRight: 10,
              backgroundColor: '#FF5900',
          }
    })

    return (
        <View style={styles.container}>
            <View style={styles.roof}></View>
            <View style={styles.wall}>
                <View style={styles.frontDoor}></View>
            </View>
            <View style={styles.buttonsContainer}>
                <Pressable onPress={() => props.delHouse(props.house.id) } id={props.house.id}>
                    <Text style={styles.pressableText}>HOUSE</Text>
                </Pressable>
                <View>
                    <Text>Rented</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#A6EA73" }}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
        </View>
    )

}

