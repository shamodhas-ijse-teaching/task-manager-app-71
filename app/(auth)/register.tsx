import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native"
import React from "react"
import { useRouter } from "expo-router"

const Register = () => {
  const router = useRouter() // import { useRouter } from "expo-router"
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="flex-1 justify-center items-center bg-gray-50 p-6">
        <View className="w-full bg-white/50 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <Text className="text-3xl font-bold mb-6 text-center text-gray-900">
            Register
          </Text>
          <TextInput
            placeholder="name"
            placeholderTextColor="#6B7280"
            className="border bg-gray-300 p-3 mb-4 rounded-xl"
          />
          <TextInput
            placeholder="email"
            placeholderTextColor="#6B7280"
            className="border bg-gray-300 p-3 mb-4 rounded-xl"
          />
          <TextInput
            placeholder="password"
            placeholderTextColor="#6B7280"
            className="border bg-gray-300 p-3 mb-4 rounded-xl"
          />
          <TextInput
            placeholder="confirm password"
            placeholderTextColor="#6B7280"
            className="border bg-gray-300 p-3 mb-4 rounded-xl"
          />
          <Pressable className="bg-blue-600/80 px-6 py-3 rounded-2xl">
            <Text className="text-white text-lg text-center">Register</Text>
          </Pressable>
          <View className="flex-row justify-center mt-2">
            <Text className="text-gray-700">Alrady have an account? </Text>
            <TouchableOpacity
              onPress={() => {
                // router.push("/login")
                router.back()
                // router.replace("/login")
              }}
            >
              <Text className="text-blue-600 font-semibold">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Register
