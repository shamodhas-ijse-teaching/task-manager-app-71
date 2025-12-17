import { View, Text } from "react-native"
import React from "react"
import { Tabs } from "expo-router"
import { MaterialIcons, Ionicons } from "@expo/vector-icons"

const tabs = [
  { name: "home", icon: "home", title: "Home" },
  { name: "tasks", icon: "list", title: "Tasks" },
  { name: "news", icon: "article", title: "News" },
  { name: "profile", icon: "person", title: "Profile" }
] as const
// DRY - Don't Repeat Yourself
const DashboardLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false
      }}
      // tabBar={(props) => <></>}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          name={tab.name}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name={tab.icon} color={color} size={size} />
            )
          }}
        />
      ))}
      {/* <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          )
        }}
      /> */}
      {/* home.tsx */}
      {/* <Tabs.Screen name="tasks" /> tasks.tsx */}
      {/* <Tabs.Screen name="news" /> news.tsx */}
      {/* <Tabs.Screen name="profile" /> profile.tsx */}
    </Tabs>
  )
}

export default DashboardLayout
