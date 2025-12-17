import { View, Text } from "react-native"
import React from "react"
import { Slot } from "expo-router"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"

// App.tsx ->
const RootLayout = () => {
  const insets = useSafeAreaInsets()

  console.log(insets)

  return (
    // <SafeAreaView className="flex-1">
    <View style={{ marginTop: insets.top, flex: 1 }}>
      <Slot />
    </View>
    // </SafeAreaView>
  )
}

export default RootLayout
