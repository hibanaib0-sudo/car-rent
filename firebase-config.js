// 1. Import Firebase core and Firestore database using web links (CDNs)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 2. Your exact web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7g7VKQs0r9hxW1lnUJxMPdI7JEhxPqAg",
  authDomain: "car-rental-site-28fd2.firebaseapp.com",
  projectId: "car-rental-site-28fd2",
  storageBucket: "car-rental-site-28fd2.firebasestorage.app",
  messagingSenderId: "43976613134",
  appId: "1:43976613134:web:3c4bbccea761ee278dcb5f"
};

// 3. Initialize Firebase and export the Database connection
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);