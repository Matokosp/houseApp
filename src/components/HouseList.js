import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import House from './House';
import { StyleSheet } from 'react-native';

const HouseList = ({ houseList, delHouse }) => {


    return houseList.map((house) => {
      
      // console.log(house)
      
      return(
    
        <House
          key={house.id}
          house={house}
          delHouse={delHouse}
          // rentHouse={rentHouse}
        />
      )});
    };

const styles = StyleSheet.create({
   
})

export default HouseList;