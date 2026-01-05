import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {Image, ScrollView, Text, View, StyleSheet} from "react-native";

export default function Details() {
    const params = useLocalSearchParams();

    console.log(params);
  return (
    <ScrollView
      contentContainerStyle={{ 
        gap: 16,
        padding: 16, 
      }}
      >

    </ScrollView>
  );
}

const styles = StyleSheet.create({

});