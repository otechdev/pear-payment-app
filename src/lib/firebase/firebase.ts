import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For better error handling, provide the actual values or defaults
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
};

// For debugging purposes, log what we have
if (typeof window !== 'undefined') {
  console.log("Firebase Config:", {
    apiKeyExists: !!firebaseConfig.apiKey,
    authDomainExists: !!firebaseConfig.authDomain,
    projectIdExists: !!firebaseConfig.projectId,
    storageBucketExists: !!firebaseConfig.storageBucket,
    messagingSenderIdExists: !!firebaseConfig.messagingSenderId,
    appIdExists: !!firebaseConfig.appId,
  });
}

// Initialize Firebase only on client side
let app: FirebaseApp | undefined;
let auth: Auth | null = null;
let db: Firestore | null = null;
let storage: FirebaseStorage | null = null;

// Only initialize Firebase if we're in the browser and have necessary config
if (typeof window !== 'undefined' && firebaseConfig.apiKey) {
  try {
    app = getApps().length ? getApp() : initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
    console.log("Firebase initialized successfully");
  } catch (error) {
    console.error("Error initializing Firebase:", error);
  }
} else {
  console.log("Firebase not initialized: Either running on server or missing API key");
}

export { app, auth, db, storage };
