import { initializeApp } from 'firebase/app';
import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    query,
    where,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAhzB-HxXpxOnqWs2jeEo7tCQfNpzlXXp0",
  authDomain: "curso-react---cart-shop.firebaseapp.com",
  projectId: "curso-react---cart-shop",
  storageBucket: "curso-react---cart-shop.appspot.com",
  messagingSenderId: "614548965292",
  appId: "1:614548965292:web:6c2b43388a5688aa385c09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Funcion que trae el detalle de un producto

export const getDetailItem = (id) => {
    const docRef = doc(db, 'Products', id);
    return getDoc(docRef);
  };
  
  // Funcion que trae todos los productos
  
  export const getItems = () => {
      const colRef = collection(db, 'Products');
      const q = query(colRef);
      return getDocs(q);
    };
  
    // Funcion que trae los productos filtrados por categoria
  
  export const getItemsFiltered = (category) => {
      const colRef = query(collection(db, 'Products')) 
      const q = query(colRef, where("category", "==", category));
      return getDocs(q);
    };



