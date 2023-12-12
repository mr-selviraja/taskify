// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAa6zXIHF1GA4tz8sQ496yfTjExY7c-MzE',
  authDomain: 'taskify-89c33.firebaseapp.com',
  projectId: 'taskify-89c33',
  storageBucket: 'taskify-89c33.appspot.com',
  messagingSenderId: '453043571085',
  appId: '1:453043571085:web:6e7b1b466f428e1c5215c4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db, collection, getDocs, addDoc, doc, updateDoc, deleteDoc, getDoc };
