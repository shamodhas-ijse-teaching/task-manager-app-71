import { getAuth } from 'firebase/auth'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where
} from 'firebase/firestore'
import { db } from './firebase'

const auth = getAuth()
const tasksCollection = collection(db, 'tasks')

export const addTask = async (
  title: string,
  description: string,
  isComplete: boolean = false
) => {
  const user = auth.currentUser
  if (!user) throw new Error('User not authenticated.')

  await addDoc(tasksCollection, {
    title,
    description,
    isComplete,
    userId: user.uid,
    createdAt: new Date().toISOString()
  })
}

export const getAllTask = async () => {
  const user = auth.currentUser
  if (!user) throw new Error('User not authenticated.')

  const q = query(
    tasksCollection,
    where('userId', '==', user.uid),
    orderBy('createdAt', 'desc')
  )
  // Firestore composite index needed (self-study):
  // Collection: 'tasks', Fields: userId ASC, createdAt DESC

  const snapshot = await getDocs(q)
  return snapshot.docs.map(dataSet => {
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

// ---------------------------------------------------------

export const getTaskById = async (id: string) => {
  const user = auth.currentUser
  if (!user) throw new Error('User not authenticated.')

  const ref = doc(db, 'tasks', id)
  const taskDoc = await getDoc(ref)

  if (!taskDoc.exists()) throw new Error('Task not found')

  const data = taskDoc.data()
  if (data.userId !== user.uid) throw new Error('Unauthorized')

  return {
    id: taskDoc.id,
    title: data.title || '',
    description: data.description || '',
    isComplete: data.isComplete || false,
    createdAt: data.createdAt || ''
  }
}

export const updateTask = async (
  id: string,
  title: string,
  description: string,
  isComplete?: boolean
) => {
  const user = auth.currentUser
  if (!user) throw new Error('User not authenticated.')

  const ref = doc(db, 'tasks', id)
  const snap = await getDoc(ref)

  if (!snap.exists()) throw new Error('Task not found')

  const data = snap.data()
  if (data.userId !== user.uid) throw new Error('Unauthorized')

  await updateDoc(ref, {
    title,
    description,
    isComplete: isComplete ?? data.isComplete
  })
}

export const deleteTask = async (id: string) => {
  const user = auth.currentUser
  if (!user) throw new Error('User not authenticated.')

  const ref = doc(db, 'tasks', id)
  const snap = await getDoc(ref)

  if (!snap.exists()) throw new Error('Task not found')
  if (snap.data().userId !== user.uid) throw new Error('Unauthorized')

  await deleteDoc(ref)
}

export const completeTask = async (id: string, isComplete: boolean = true) => {
  const user = auth.currentUser
  if (!user) throw new Error('User not authenticated.')

  const ref = doc(db, 'tasks', id)
  const snap = await getDoc(ref)

  if (!snap.exists()) throw new Error('Task not found')
  if (snap.data().userId !== user.uid) throw new Error('Unauthorized')

  await updateDoc(ref, { isComplete })
}

export const getTaskCounts = async () => {
  const tasks = await getAllTask()
  const completedCount = tasks.filter(task => task.isComplete).length
  const pendingCount = tasks.filter(task => !task.isComplete).length
  return { completedCount, pendingCount }
}

export const getAllTaskByStatus = async (isComplete: boolean) => {
  const user = auth.currentUser
  if (!user) throw new Error('User not authenticated.')

  const q = query(
    tasksCollection,
    where('userId', '==', user.uid),
    where('isComplete', '==', isComplete),
    orderBy('createdAt', 'desc')
  )

  const snapshot = await getDocs(q)
  return snapshot.docs.map(docSnap => {
    const data = docSnap.data()
    return {
      id: docSnap.id,
      title: data.title as string,
      description: data.description as string,
      isComplete: (data.isComplete as boolean) || false,
      createdAt: data.createdAt as string
    }
  })
}
