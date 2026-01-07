import { getAuth } from "firebase/auth"
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  orderBy,
  query,
  where
} from "firebase/firestore"
import { db } from "./firebase"

const auth = getAuth()
const tastsCollection = collection(db, "tasks")

export const addTask = async (
  title: string,
  description: string,
  isComplete: boolean = false
) => {
  const user = auth.currentUser
  if (!user) return

  await addDoc(tastsCollection, {
    title,
    description,
    isComplete,
    userId: user.uid,
    createdAt: new Date().toISOString()
  })
}

export const getAllTask = async () => {
  const user = auth.currentUser
  if (!user) return

  const q = query(
    tastsCollection,
    where("userId", "==", user.uid),
    orderBy("createdAt", "desc")
  )

  const snapshot = await getDocs(q)
  snapshot.docs.map((dataSet) => {
    const data = dataSet.data()
    return {
      id: dataSet.id,
      title: data.title as string,
      description: data.description as string,
      isComplete: (data.isComplete as boolean) || false,
      createdAt: data.createdAt as string
    }
  })
}
