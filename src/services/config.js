import { initializeApp } from "firebase/app"; // Inicia la conexion con firebase
import {getFirestore} from "firebase/firestore" //Obtiene la instacia de Firestore

// Un objeto con toda la información de la cuenta. Incluyeno la API Key del proyecto
// lograno acceder a la base de datos
const firebaseConfig = {
  apiKey: "AIzaSyAXPVMUDtCXg-jvJtzQSdZX78--ZSj5oM8",
  authDomain: "makalu-app.firebaseapp.com",
  projectId: "makalu-app",
  storageBucket: "makalu-app.appspot.com",
  messagingSenderId: "377032556624",
  appId: "1:377032556624:web:3e68c9270ecae5a0ea5155"
};

// Initialize Firebase y enviamos el objeto con la configuración como argumento
// devolviendo una instancia.
const app = initializeApp(firebaseConfig);

// Exportamos la referencia para disponibilidad de SPA
export const db = getFirestore(app);