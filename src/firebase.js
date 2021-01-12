import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCBYd9mDcg7XJhAF2OmlwC7fqFke-OfLbk",
  authDomain: "expense-63e04.firebaseapp.com",
  databaseURL: "https://expense-63e04-default-rtdb.firebaseio.com",
  projectId: "expense-63e04",
  storageBucket: "expense-63e04.appspot.com",
  messagingSenderId: "750245883115",
  appId: "1:750245883115:web:8d92203872b9e8bba7e2ae",
  measurementId: "G-JSEVP0GKRC"
}

const fire = firebase.initializeApp(config)
export const auth = firebase.auth()

export default fire
