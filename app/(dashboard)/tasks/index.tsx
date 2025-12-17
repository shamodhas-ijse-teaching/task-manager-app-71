import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { MaterialIcons } from "@expo/vector-icons"
import { useRouter } from "expo-router"

const Tasks = () => {
  const router = useRouter()
  return (
    <View className="flex-1 bg-gray-50">
      <TouchableOpacity
        className="bg-blue-600/80 rounded-full shadow-lg absolute bottom-0 right-0 m-6 p-2"
        onPress={() => router.push("/tasks/form")}
        // /tasks/form
      >
        <MaterialIcons name="add" size={40} color="#fff" />
      </TouchableOpacity>
      <View>
        <Text>Task List</Text>
      </View>
    </View>
  )
}

export default Tasks
