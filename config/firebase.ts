import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./config";

// firestore
import "firebase/firestore";

// firebase variables
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);


export const _db = ""