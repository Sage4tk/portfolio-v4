import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./config";

// firestore
import "firebase/compat/firestore";

// firebase variables
export const app = firebase.initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);


export const _db = firebase.firestore();