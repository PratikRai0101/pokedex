import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  
  useEffect(() => {
      //fetch pokemon from api
      fecthpokemons();
  }, [])
  
  async function fecthpokemons(){
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );
      const data = await response.json();

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Pokedex</Text>
    </View>
  );
}
