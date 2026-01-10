import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Pressable,
  Alert
} from "react-native"
import React, { useEffect, useState } from "react"
import { MaterialIcons } from "@expo/vector-icons"
import { useLoader } from "@/hooks/useLoader"
import { useLocalSearchParams, useRouter } from "expo-router"
import { addTask, getTaskById, updateTask } from "@/services/taskService"
import { Task } from "@/types/task"

const TaskForm = () => {
  const router = useRouter()
  const { taskId } = useLocalSearchParams()
  const { showLoader, hideLoader, isLoading } = useLoader()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    if (taskId) {
      showLoader()
      getTaskById(taskId as string)
        .then((task: Task) => {
          setTitle(task.title)
          setDescription(task.description || "")
        })
        .catch(() => Alert.alert("Error", "Failed to load task"))
        .finally(() => hideLoader())
    }
  }, [taskId])

  const handleSubmit = async () => {
    if (isLoading) return
    if (!title.trim() || !description.trim()) {
      Alert.alert("Error", "Please fill all fields")
      return
    }

    showLoader()
    try {
      if (taskId) {
        await updateTask(taskId as string, title, description)
        Alert.alert("Success", "Task updated successfully")
      } else {
        await addTask(title, description)
        Alert.alert("Success", "Task added successfully")
      }
      router.back()
    } catch (err: any) {
      Alert.alert("Error", err.message || "Something went wrong")
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
          className={`px-6 py-3 rounded-2xl ${
            taskId ? "bg-blue-600/80" : "bg-green-600/80"
          }`}
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
