import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack>
    <Stack.Screen name="index" options={{title: "Home"}}/>
    <Stack.Screen name="details" options={{title: "Details", 
      headerBackButtonDisplayMode: "minimal",
      presentation: "formSheet",
      sheetGrabberVisible: true,
      sheetAllowedDetents: [0.3 , 0.7, 1],
      headerShown: true
      }}/>
  </Stack>
  );
}
