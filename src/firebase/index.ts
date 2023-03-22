// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCsqaFzepZSZztpSQoYgs7QjopTIY9dQzY',
  authDomain: 'hobbybunkeraxm.firebaseapp.com',
  projectId: 'hobbybunkeraxm',
  storageBucket: 'hobbybunkeraxm.appspot.com',
  messagingSenderId: '546105405192',
  appId: '1:546105405192:web:7f8a7cfe10e864b77f86bd'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const firebaseDB = getFirestore(app)

export default firebaseDB
