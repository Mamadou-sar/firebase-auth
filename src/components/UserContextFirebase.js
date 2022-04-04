import React, { createContext, useState, useEffect } from 'react';
import { auth } from './Firebase';
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   onAuthStateChanged,
} from 'firebase/auth';

export const userContextAuth = createContext();

export function UserContextProvider({ children }) {
   const [user, setUser] = useState('');

   function signup(email, password) {
      return createUserWithEmailAndPassword(auth, email, password);
   }

   function login(email, password) {
      return signInWithEmailAndPassword(auth, email, password);
   }

   function logout() {
      return signOut(auth);
   }

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) =>
         setUser(currentUser)
      );

      return () => {
         unSubscribe();
      };
   }, []);

   return (
      <userContextAuth.Provider value={{ user, signup, login, logout }}>
         {children}
      </userContextAuth.Provider>
   );
}
