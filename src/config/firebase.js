import * as firebase from "firebase";

import { FirebaseConfig } from "./key.js";
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("teman");
export const jumlah = databaseRef.child("infoData");
export const todosRefJumlah = jumlah.child("jumlah");