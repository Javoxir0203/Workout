import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth"
const firebaseConfig = {
	apiKey: 'AIzaSyA4iGTh6Vx7aCR0NunSaEz6O9ls1WigU4E',
	authDomain: 'gym-d6a7d.firebaseapp.com',
	projectId: 'gym-d6a7d',
	storageBucket: 'gym-d6a7d.appspot.com',
	messagingSenderId: '392845238127',
	appId: '1:392845238127:web:b47479c239d5ce045b929a',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {auth}

