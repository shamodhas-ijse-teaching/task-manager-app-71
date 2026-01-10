import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Pressable,
  Alert
} from "react-native"
import React, { useState } from "react"
import { MaterialIcons } from "@expo/vector-icons"
import { useLoader } from "@/hooks/useLoader"
import { useLocalSearchParams, useRouter } from "expo-router"
import { addTask, updateTask } from "@/services/taskService"

const TaskForm = () => {
  const router = useRouter()

  const { taskId } = useLocalSearchParams()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const { showLoader, hideLoader, isLoading } = useLoader()

  const handleSubmit = async () => {
    if (isLoading) return

    if (!title || !description) {
      Alert.alert("error", "Please fill all fields")
      return
    }

    showLoader()
    try {
      if (taskId) {
        // await updateTask(taskId, title, description)
      } else {
        await addTask(title, description)
      }
      Alert.alert("success", taskId ? "Task updated" : "Task added")
      router.back()
    } catch (err: any) {
      Alert.alert("error", err.message || "Something went wrong")
    } finally {
      hideLoader()
    }
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 24 }}>
      <TouchableOpacity
        className="flex-row items-center mb-6"
        onPress={() => router.back()}
      >
        <MaterialIcons name="arrow-back-ios" size={24} color="#333" />
        <Text className="text-gray-800 font-medium ml-1">Back</Text>
      </TouchableOpacity>

      <View className="p-6 rounded-2xl bg-white border border-gray-300 shadow-md">
        <Text className="text-gray-800 text-lg font-semibold mb-2">
          Task Title
        </Text>
        <TextInput
          placeholder="Enter task title"
          placeholderTextColor="#999"
          value={title}
          onChangeText={setTitle}
          className="mb-5 p-4 rounded-xl bg-gray-100 text-gray-800 border border-gray-300 text-base font-medium"
        />
        <Text className="text-gray-800 text-lg font-semibold mb-2">
          Description
        </Text>
        <TextInput
          placeholder="Enter description"
          placeholderTextColor="#999"
          value={description}
          onChangeText={setDescription}
          multiline
          className="mb-6 p-4 rounded-xl bg-gray-100 text-gray-800 border border-gray-300 text-base font-medium h-32"
        />
        <Pressable
          className={`${taskId ? "bg-blue-600/80" : "bg-green-600/80"} px-6 py-3 rounded-2xl`}
          onPress={handleSubmit}
        >
          <Text className="text-white text-lg text-center">
            {isLoading ? "Please wait..." : taskId ? "Update Task" : "Add Task"}
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default TaskForm
