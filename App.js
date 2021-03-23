import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { Button } from 'react-native-elements';
import RoofForm from './src/components/RoofForm';
import WallForm from './src/components/WallForm';
import DoorForm from './src/components/DoorForm';
import HeroBanner from './src/HeroBanner';
import HouseList from './src/components/HouseList'
import firebase from "firebase";
import db from './firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export default function App() {

  const [houseList, setHouseList] = useState ([]);


  const firestore = firebase.firestore();
  const messageRef = firestore.collection("houses");
  const query = messageRef;
  const [messages] = useCollectionData(query, {idField:"id"});

  useEffect(() => {
    renderHouses()
  }, []);
  
  const renderHouses = (house) => {
    setHouseList([]);
    return firebase
      .firestore()
      .collection("houses")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          let newData = doc.data();

          if (houseList.indexOf(newData.id) === -1) {
            setHouseList((arr) => {
              return [...arr, newData];
            });
          } else {
            console.log("this is a duplicate");
          }
          console.log("here are all of the todos", houseList);
        });
      })
      .catch((e) => console.log(e));
  };
  
  const [doorColor, setDoorColor] = useState ('red');
  const [wallColor, setWallColor] = useState ('blue');
  const [roofColor, setRoofColor] = useState ('black');





  // Add House
  const addHouse = () => {
    const datas = {
      id: firebase
        .firestore()
        .collection("houses")
        .doc().id,
    };
    const db = firebase.firestore();
    db.collection("houses")
      .doc(datas.id)
      .set({ door: doorColor, roof: roofColor, wall: wallColor, rented: false, id: datas.id })
      .then(() => {
        renderHouses();
      });
  };

  // Delete House
  const delHouse = (id) => {
    const db = firebase.firestore();
    db.collection("houses")
      .doc(id)
      .delete()
      .then(() => {
        // console.log("Document successfully deleted!", id);
      })
      .catch((error) => {
        console.error(id, "Error removing document: ", error);
      })
      .then((res) => setHouseList([...houseList.filter((house) => house.id !== id)]));
    // console.log(id, "here is an id", id);
  };


  
 const changeDoor = (door) => {
   setDoorColor(door)
 }
 const changeWall = (wall) => {
    setWallColor(wall)
  }
  const changeRoof = (roof) => {
    setRoofColor(roof)
  }


  return (
    <ScrollView style={styles.container}>
      <HeroBanner></HeroBanner>
      <RoofForm onChange={e => { changeRoof(e) }}></RoofForm>
      <WallForm onChange={e => { changeWall(e) }}></WallForm>
      <DoorForm onChange={e => { changeDoor(e) }}></DoorForm>
      <View style={styles.buttonContainer}>
        <Button onPress={addHouse}       
              title="Add house listing"
              type="solid"
              buttonStyle= {{backgroundColor: '#FFAE00'}}
        />
      </View>
      {/* <Pressable onPress={addHouse} style={styles.addListingPressable}>
        <Text style={styles.addListing}>Add house to listing</Text>
      </Pressable> */}
      <Text style={styles.housesTitle}>Houses</Text>
      <HouseList
        houseList={houseList}
        style={styles.houseListContainer}
        delHouse={delHouse}
        // rentHouse={rentHouse}
      />
      
      {/* <House></House> */}
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  housesTitle: {
    alignSelf: 'stretch',
    textAlign: 'center',
    backgroundColor: '#FF5733',
    color: 'white',
    paddingTop: 30,
    paddingBottom: 30,
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 70,
    marginTop: 50,
  },
  buttonContainer: {
    marginTop: 30,
    width: 200,
    alignSelf: 'center'
  },
  houseListContainer: {
    marginTop: 50,
  }
});
