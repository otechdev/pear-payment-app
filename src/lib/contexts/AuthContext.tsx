"use client";

import React, { createContext, useEffect, useState } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut as firebaseSignOut, User, Auth } from "firebase/auth";
import { auth as firebaseAuth } from "../firebase/firebase";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signInWithGoogle: async () => {},
  signOut: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const auth: Auth | null = typeof window !== 'undefined' ? (firebaseAuth as Auth) : null;

  useEffect(() => {
    // Only run on client side and when auth is initialized
    if (typeof window !== 'undefined' && auth) {
      const unsubscribe = auth.onAuthStateChanged((authUser: User | null) => {
        setUser(authUser);
        setLoading(false);
      }, (error: Error) => {
        console.error("Auth state change error:", error);
        setLoading(false);
      });

      return () => unsubscribe();
    } else {
      // If we're server-side or auth isn't initialized, just set loading to false
      setLoading(false);
    }
  }, [auth]);

  const signInWithGoogle = async () => {
    if (!auth) {
      console.error("Auth is not initialized");
      return;
    }

    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const signOutUser = async () => {
    if (!auth) {
      console.error("Auth is not initialized");
      return;
    }

    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, signOut: signOutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
