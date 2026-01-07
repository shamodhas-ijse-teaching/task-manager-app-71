import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import AsyncStorage from "@react-native-async-storage/async-storage"
// @ts-ignore
import { initializeAuth, getReactNativePersistence } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA6FhUDDpkXpNwo4-9X25XCbZoI98oTrW8",
  authDomain: "task-manager-app-b07c3.firebaseapp.com",
  projectId: "task-manager-app-b07c3",
  storageBucket: "task-manager-app-b07c3.firebasestorage.app",
  messagingSenderId: "835261795708",
  appId: "1:835261795708:web:5c7e0222575f41438728f9"
}

const app = initializeApp(firebaseConfig)

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

export const db = getFirestore(app)
