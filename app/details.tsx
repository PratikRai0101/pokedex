import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {Image, ScrollView, Text, View, StyleSheet} from "react-native";
import { StackScreen } from "react-native-screens";

export default function Details() {
    const params = useLocalSearchParams();

    console.log(params);

    useEffect(() => {
        //fetch pokemon details from api
        fetchPokemonDetailsByName(params.name as string);
    }, []);

    async function fetchPokemonDetailsByName(name: string) {
        try {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${name}`
            );
            const data = await response.json();
        } catch (e) {
            console.log(e);
        }
    }

  return (
    <>
    <Stack.Screen options={{ title: params.name as string}}/>
    <ScrollView
      contentContainerStyle={{ 
        gap: 16,
        padding: 16, 
      }}
      >

    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({

});