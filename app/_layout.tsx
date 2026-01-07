import { View, Text } from "react-native"
import React from "react"
import { Slot } from "expo-router"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import { LoaderProvider } from "@/context/LoaderContext"
import { AuthProvider } from "@/context/AuthContext"

// App.tsx ->
const RootLayout = () => {
  const insets = useSafeAreaInsets()

  console.log(insets)

  return (
    // <SafeAreaView className="flex-1">
    <LoaderProvider>
      <AuthProvider>
        <View style={{ marginTop: insets.top, flex: 1 }}>
          <Slot />
        </View>
      </AuthProvider>
    </LoaderProvider>
    // </SafeAreaView>
  )
}

export default RootLayout
