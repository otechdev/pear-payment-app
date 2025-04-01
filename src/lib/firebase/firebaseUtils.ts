import { auth, db, storage } from "./firebase";
import {
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  Auth,
} from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  Firestore,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, FirebaseStorage } from "firebase/storage";

// Auth functions
export const logoutUser = () => {
  if (!auth) throw new Error("Auth not initialized");
  return signOut(auth);
};

export const signInWithGoogle = async () => {
  if (!auth) throw new Error("Auth not initialized");
  
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google", error);
    throw error;
  }
};

// Firestore functions
export const addDocument = (collectionName: string, data: any) => {
  if (!db) throw new Error("Firestore not initialized");
  return addDoc(collection(db, collectionName), data);
};

export const getDocuments = async (collectionName: string) => {
  if (!db) throw new Error("Firestore not initialized");
  
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const updateDocument = (collectionName: string, id: string, data: any) => {
  if (!db) throw new Error("Firestore not initialized");
  return updateDoc(doc(db, collectionName, id), data);
};

export const deleteDocument = (collectionName: string, id: string) => {
  if (!db) throw new Error("Firestore not initialized");
  return deleteDoc(doc(db, collectionName, id));
};

// Storage functions
export const uploadFile = async (file: File, path: string) => {
  if (!storage) throw new Error("Storage not initialized");
  
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
};
