import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCnQvqRkCEFuIBr6ti_6ouwjewY-y_8knE",
  authDomain: "login-autentificacion.firebaseapp.com",
  projectId: "login-autentificacion",
  storageBucket: "login-autentificacion.appspot.com",
  messagingSenderId: "939620148787",
  appId: "1:939620148787:web:fd7a08771a061bcbd772546"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
