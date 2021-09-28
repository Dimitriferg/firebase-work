import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDck2AcLA4V4nOKQHi7sq2jEd6Hy989gnQ",
  authDomain: "df-firestore.firebaseapp.com",
  projectId: "df-firestore",
});

let db = getFirestore();
//getDocs(collection(db, "cafes")).then((querySnapshot) => {
//querySnapshot.forEach((doc) => {
//console.log(`${doc.id} => ${JSON.stringify(doc.data(), null, 4)}`);
//});
//});

//const docRef = doc(db, "cafes", "9A8Dz5AM0dRQvsM0w3CZ"); // db reference, collection name, id

// Add a new document in collection "cities"
//await setDoc(docRef, {
//address: "123 main st.",
//});

const querySnapshot = await getDocs(collection(db, "cafes"));

const listTag = document.getElementById("myList");

querySnapshot.forEach((doc) => {
  const storeName = document.createElement("li"); // stores an empty <li></li>

  const cityNameItem = document.createTextNode(doc.data().store); // created a text for the city name "San Francisco"

  const addressName = document.createTextNode(doc.data().address);

  storeName.appendChild(cityNameItem); // store text into list item <li> San Francisco </li>

  listTag.appendChild(storeName); // store the li into the list <ul> <li> San Francisco </li> <ul>

  let myData = {
    address: "123 main st.",
    city: "Marioland",
    county: "mocha",
  };

  let myDataString = myData.address + " " + myData.city + " " + myData.county;

  let newListItemRef = document.createElement("li");

  let textElementRef = document.createTextNode(myDataString);

  newListItemRef.appendChild(textElementRef);

  listTag.appendChild(newListItemRef);
});

//let db = getFirestore();
getDocs(collection(db, "cafes")).then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data(), null, 4)}`);
  });
});

const docRef = doc(db, "cafes", "9A8Dz5AM0dRQvsM0w3CZ"); // db reference, collection name, id

// Add a new document in collection "cities"
await setDoc(docRef, {
  address: "123 main st.",
  store: "Mario Cafe",
  city: "Marioland",
});

await updateDoc(docRef, {
  county: "mocha",
});
