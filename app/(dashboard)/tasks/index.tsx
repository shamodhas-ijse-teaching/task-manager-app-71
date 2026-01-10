import { View, Text, TouchableOpacity, Alert, ScrollView } from "react-native"
import React, { useCallback, useState } from "react"
import { MaterialIcons } from "@expo/vector-icons"
import { useFocusEffect, useRouter } from "expo-router"
import { useLoader } from "@/hooks/useLoader"
import { getAllTask, completeTask, deleteTask } from "@/services/taskService"
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
      Alert.alert("Error", "Error fetching tasks")
    } finally {
      hideLoader()
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchTasks()
    }, [])
  )

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

  const handleDelete = async (id: string) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this task?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            showLoader()
            try {
              await deleteTask(id)
              await fetchTasks()
            } catch (error: any) {
              Alert.alert("Error", "Could not delete task")
            } finally {
              hideLoader()
            }
          }
        }
      ]
    )
  }

  const handleEdit = (id: string) => {
    router.push({
      pathname: "/tasks/form",
      params: { taskId: id }
    })
  }

  const formatDate = (dateStr: string | number | Date) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })
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
            <View
              key={task.id}
              className="bg-white p-4 rounded-2xl mb-4 border border-gray-300 shadow-md"
            >
              <TouchableOpacity
                onPress={() =>
                  router.push({
                    pathname: "/tasks/[id]",
                    params: { id: task.id }
                  })
                }
                className="flex-row justify-between items-center mb-2"
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
                    e.stopPropagation()
                    handleComplete(task.id, task.isComplete)
                  }}
                  className={`p-2 rounded-full ${
                    task.isComplete ? "bg-green-100" : "bg-gray-100"
                  }`}
                >
                  <MaterialIcons
                    name={
                      task.isComplete
                        ? "check-circle"
                        : "radio-button-unchecked"
                    }
                    size={28}
                    color={task.isComplete ? "#16A34A" : "#6B7280"}
                  />
                </TouchableOpacity>
              </TouchableOpacity>
              <View className="flex-row justify-between items-end">
                <Text className="text-gray-500 text-sm mb-1">
                  Created: {task.createdAt ? formatDate(task.createdAt) : "-"}
                </Text>
                <View className="flex-row justify-end mt-2 space-x-3">
                  <TouchableOpacity
                    onPress={() => handleEdit(task.id)}
                    className="p-2 rounded-full bg-blue-500"
                  >
                    <MaterialIcons name="edit" size={28} color="#ffffff" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleDelete(task.id)}
                    className="p-2 ms-2 rounded-full bg-red-500"
                  >
                    <MaterialIcons name="delete" size={28} color="#ffffff" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  )
}

export default Tasks
