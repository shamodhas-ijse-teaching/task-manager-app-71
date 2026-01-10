import { View, Text, TouchableOpacity, Alert, ScrollView } from "react-native"
import React, { useCallback, useEffect, useState } from "react"
import { MaterialIcons } from "@expo/vector-icons"
import { useRouter, useFocusEffect } from "expo-router"
import { useLoader } from "@/hooks/useLoader"
import { getAllTask, completeTask } from "@/services/taskService"
import { Task } from "@/types/task"

const Tasks = () => {
  const router = useRouter()
  const { showLoader, hideLoader } = useLoader()

  const [tasks, setTasks] = useState<Task[]>([])

  const fetchTasks = async () => {
    showLoader()
    try {
      const data = await getAllTask()
      setTasks(data)
    } catch (err: any) {
      Alert.alert("Error", "Error fetching tasks", err.message || "")
    } finally {
      hideLoader()
    }
  }

  useEffect(() => {
    fetchTasks()

   
  }, [])

  const handleComplete = async (id: string, currentStatus: boolean) => {
    showLoader()
    try {
      await completeTask(id, !currentStatus)
      await fetchTasks()
    } catch (error: any) {
      Alert.alert("Error", "Could not update task")
    } finally {
      hideLoader()
    }
  }

  return (
    <View className="flex-1 bg-gray-50">
      <TouchableOpacity
        className="bg-blue-600/80 rounded-full shadow-lg absolute bottom-0 right-0 m-6 p-2 z-50"
        onPress={() => router.push("/tasks/form")}
      >
        <MaterialIcons name="add" size={40} color="#fff" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 24 }}>
        {tasks.length === 0 ? (
          <Text className="text-gray-600 text-center mt-10">
            No tasks found.
          </Text>
        ) : (
          tasks.map((task) => (
            <TouchableOpacity
              key={task.id}
              className="bg-white p-4 rounded-2xl mb-4 border border-gray-300 shadow-md flex-row justify-between items-center"
              onPress={() =>
                router.push({
                  pathname: "/tasks/[id]",
                  params: { id: task.id }
                })
              }
            >
              <View className="flex-1 mr-2">
                <Text className="text-gray-800 text-lg font-semibold mb-1">
                  {task.title}
                </Text>
                <Text className="text-gray-600 mb-2">
                  {task.description.length > 30
                    ? `${task.description.substring(0, 30)}...`
                    : task.description}
                </Text>
                <Text
                  className={`font-medium ${
                    task.isComplete ? "text-green-600" : "text-yellow-600"
                  }`}
                >
                  {task.isComplete ? "Completed" : "Pending"}
                </Text>
              </View>
              <TouchableOpacity
                onPress={(e) => {
                  e.stopPropagation() // Prevents opening the detail page when clicking the checkbox
                  handleComplete(task.id, task.isComplete)
                }}
                className={`p-2 rounded-full ${
                  task.isComplete ? "bg-green-100" : "bg-gray-100"
                }`}
              >
                <MaterialIcons
                  name={
                    task.isComplete ? "check-circle" : "radio-button-unchecked"
                  }
                  size={28}
                  color={task.isComplete ? "green" : "gray"}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </View>
  )
}

export default Tasks
