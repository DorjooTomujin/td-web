import { Injectable, NestMiddleware } from "@nestjs/common";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUP7FD_gghRPX3e-qJaQzfTe4KvyhPXZQ",
  authDomain: "td-web-df721.firebaseapp.com",
  projectId: "td-web-df721",
  storageBucket: "td-web-df721.appspot.com",
  messagingSenderId: "867267807272",
  appId: "1:867267807272:web:ef10724c874e58d3f3cd1d",
  measurementId: "G-TWDH6JW1C8"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {app, db, firebaseConfig}