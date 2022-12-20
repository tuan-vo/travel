
import { initializeApp } from "firebase/app";
import { getDatabase ,ref } from "firebase/database";
import { getStorage } from "firebase/storage";
// import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyAjBiaBBQ3K4oz2OiOaIYII7BHwpmmoOsA",
  authDomain: "travel-2022-686cf.firebaseapp.com",
  databaseURL: "https://travel-2022-686cf-default-rtdb.firebaseio.com",
  projectId: "travel-2022-686cf",
  storageBucket: "travel-2022-686cf.appspot.com",
  messagingSenderId: "361435468846",
  appId: "1:361435468846:web:6065e6a5a884fb641dfbbf",
  measurementId: "G-8K3LENPHC8"
};
  
  // Initialize Firebase
export  const connect = initializeApp(firebaseConfig);
const db = getDatabase();
const databaseTour = ref(db, 'Tour/');
const databaseHotel = ref(db, 'Hotel/');
const databaseBookingHotel = ref(db, 'BookingHotel/');
const databaseBookingTour = ref(db, 'BookingTour/');
const databasePlaneTickets = ref(db, 'PlaneTickets/');
const databaseRentcars = ref(db, 'Rentcars/');
const databaseNews = ref(db, 'News/');
export const dataTour = databaseTour;
export const dataHotel = databaseHotel;
export const BookingdataHotel = databaseBookingHotel;
export const dataPlaneTickets= databasePlaneTickets;
export const dataBookingTour= databaseBookingTour;
export const dataRentcars= databaseRentcars;
export const dataNews= databaseNews;

//
 export const storage = getStorage(connect);