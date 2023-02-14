import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./config";

// firestore
import "firebase/compat/firestore";
import "firebase/compat/auth"

// firebase variables
export const app = firebase.initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);

// firestore configs
export const _db = firebase.firestore();